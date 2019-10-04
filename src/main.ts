import Vue, { CreateElement } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './install'
import './api'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h: CreateElement) => h(App)
}).$mount('#app')
