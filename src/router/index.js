import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home/Home.vue'
import Room from '../components/Room/Room.vue'

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
      path: '/',
      component: Home
    },

  ]
})
