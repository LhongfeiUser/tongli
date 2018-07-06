import Vue from 'vue'
import Router from 'vue-router'
import Page from '@/pages/page'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Page',
      component: Page,
      mate: { keepAlive: true },
    },
  ]
})
