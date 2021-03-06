import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Login from '@/views/Login'

Vue.use(Router)

export default new Router({
  routes: [{
      path: "/",
      redirect: "/login"
    },
    {
      path: '/login',
      meta: {
        auth: false
      },
      name: 'Login',
      component: () => import('@/views/Login')
    }
  ]
})
