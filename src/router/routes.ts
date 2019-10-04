import { importViewsConfig } from '../utils'

const pages = ['@/views/Home/index.vue', '@/views/About/index.vue']

const routes = importViewsConfig(pages)

const index: RouteMap = {
  path: '/',
  redirect: '/home'
}
routes.unshift(index)
export default routes
