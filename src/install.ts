import Vue, { VueConstructor } from 'vue'
import Vant from 'vant'
import { importAll } from './utils'

import 'vant/lib/index.css'
import 'mescroll.js/mescroll.min.css'

Vue.use(Vant)

const mixins: any = importAll(require.context('@/mixins', true, /\.ts$/))('mixin')
const components: any = importAll(require.context('@/components', true, /\.vue$/))('component')

mixins.forEach((mixin: any) => {
  Vue.mixin(mixin)
})
components.forEach((component: any) => {
  Vue.component(component[0], component[1])
})
