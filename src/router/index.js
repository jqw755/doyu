import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home/Home.vue'
import All from '../components/Home/Now/All.vue'
import Room from '../components/Room/Room.vue'
import Recommoned from '../components/Other/Recoommend.vue'
import Login from '../components/R&L/Login.vue'
import Game from '../components/Classify/Game.vue'
import ClassifyDetail from '../components/Classify/Detail/ClassifyDetail.vue'

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
      path: '/game',
      component: Game
    },
    {
      path: '/classifyDetail',
      component: ClassifyDetail
    },
    {
      path: '/all',
      component: All
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
      path: '*',
      component: Home
    },

  ]
})
