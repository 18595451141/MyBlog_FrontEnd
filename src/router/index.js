import Vue from 'vue'
import Router from 'vue-router'
import UserLogin from '@/components/UserLogin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'UserLogin',
      component: UserLogin
    }
  ]
})
