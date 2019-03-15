import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import { routes } from './router/routes'
import store from './store/store'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes
})

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
