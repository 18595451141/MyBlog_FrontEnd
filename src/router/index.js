import Vue from 'vue'
import Router from 'vue-router'
import UserLogin from '@/components/UserLogin'
import test2 from '@/components/test2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'UserLogin',
      component: UserLogin
    },
    {
      path: '/test2',
      name: 'test2',
      component: test2
    }
  ]
})
