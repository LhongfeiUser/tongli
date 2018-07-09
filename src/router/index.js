import Vue from 'vue'
import Router from 'vue-router'
import Page from '@/pages/page'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Page',
      component: Page,
      mate: { keepAlive: true },
    },
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
