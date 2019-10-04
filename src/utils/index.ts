import _ from 'lodash'
// tslint:disable-next-line:no-var-requires
const path = require('path')
// import { RequireContext } from 'webpack-env'

const ROOT_DIR = 'views'
const DEFAULT_TITLE = 'h5_wrapper'

/**
 * @function 获取每个页面对应的配置文件
 * @param {String[]} views 所有的页面路径
 * @return {RouteMap} routes 所有路由的数据
 */
export function importViewsConfig(views: string[]) {
  const routes: RouteMap[] = []
  views.forEach((view: string) => {
    const pathSplitArray = view.split('/')
    if (!pathSplitArray.includes(ROOT_DIR)) {
      throw new Error('this page is not exist in the directory of `views`')
    }
    const viewsIndex = pathSplitArray.findIndex((item: string) => item === ROOT_DIR)
    const length = pathSplitArray.length
    const pagePath = pathSplitArray.slice(viewsIndex + 1, length).join('/')

    // 获取json文件位置
    const configJson: RouteMeta = require(`@/views/${pagePath.replace(/vue$/, 'json')}`)
    const viewRoute: RouteMap = {
      path: '/' + pathSplitArray[length - 2].toLowerCase(),
      name: pathSplitArray[length - 2],
      component: () => import(`@/views/${pagePath}`),
      meta: {
        title: DEFAULT_TITLE,
        ...configJson
      }
    }
    routes.push(viewRoute)
  })
  return routes
}
/**
 * @function 导入指定内容数据
 * @param {RequireContext} r require.context上下文
 * @return Function 如果注入类型得到不同类型数据
 */

export function importAll(r: any) {
  const map: any = {}
  r.keys().forEach((key: string) => {
    const extname = path.extname(key)
    const filename = path.basename(key, extname)
    map[filename] = r(key)
  })
  return (type: string) => {
    if (type === 'mixin') {
      return Object.keys(map).map((filename: string) => map[filename].default)
    } else if (type === 'component') {
      return Object.keys(map).map((filename: string) => [filename, map[filename].default])
    }
  }
}
