<template>
  <div id="app">
    <head_nav :title="title"></head_nav>
    <silder :class="{'showSilser':show}"></silder>
    <router-view></router-view>
    <loading v-show="loading"></loading>
  </div>
</template>

<script>
  import {bus} from './utils/bus'
  import head_nav from './components/Other/HeadNav'
  import silder from './components/Other/Silder'
  import loading from './components/Loading/Loading'
  export default {
    data() {
      return {
        user: '',
        show: false,
        title: '',
        loading: false,
      }
    },
    components: {
      head_nav,
      silder,
      loading,
    },
    beforeCreate(){
      this.loading = true;
    },
    mounted() {
      const userName = sessionStorage.getItem('account');
      if (userName !== '') {
        this.title = userName;
      }
      bus.$on('showNav', (msg) => {
        this.show = msg;
      });
      bus.$on('hideNav', (msg) => {
        this.show = msg;
      });
    },
    created(){
      this.loading = false;
    },
    watch: {
//      '$route' (to) {
//        if (to.path === '/home') {
//          this.title = '--精彩直播';
//        }
//      }
    },
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: #fff;

  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    /*font-family: Verdana, Geneva, sans-serif;*/
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ul li {
    list-style: none;
    width: 100%;
    display: inline-block;
  }

  .showSilser {
    transform: translate(0, 0) !important;
    -webkit-transform: translate(0, 0) !important;
  }
</style>
