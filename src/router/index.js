import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home/Home.vue'
import Room from '../components/Room/Room.vue'
import Recommoned from '../components/other/Recoommend.vue'
import Login from '../components/R&L/Login.vue'

Vue.use(Router)

export default new Router({
  // mode:'history',
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
      path: '/room/:id',
      component: Room
    },
    {
      path: '/recommoned',
      component: Recommoned
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/',
      component: Home
    },

  ]
})
