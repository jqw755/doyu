import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home/Home.vue'
import All from '../components/Home/Now/All.vue'
import Room from '../components/Room/Room.vue'
import Login from '../components/R&L/Login.vue'
import Game from '../components/Classify/Game.vue'
import ClassifyDetail from '../components/Classify/Detail/ClassifyDetail.vue'

Vue.use(Router)

export default new Router({
  // mode:'history',
  routes: [
    {
      path: '/home',
      component: Home,
      meta: {
        // 需要被缓存   http://www.jianshu.com/p/0b0222954483  解决数据缓存问题
        keepAlive: true,

      }
    },
    {
      path: '/room/:id',
      component: Room
    },
    {
      path: '/game',
      component: Game,
      meta: {
        // 需要被缓存
        keepAlive: true,
      }
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
      path: '/login',
      component: Login
    },
    {
      path: '*',
      component: Home
    },

  ]
})
