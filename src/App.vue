<template>
  <div id="app">
    <head_nav :title="title"></head_nav>
    <silder :class="{'showSilser':show}"></silder>
    <router-view></router-view>
  </div>
</template>

<script>
  import {bus} from './utils/bus'
  import head_nav from './components/other/HeadNav'
  import silder from './components/other/Silder'
  export default {
    data() {
      return {
        show: false,
        title: ''
      }
    },
    components: {
      head_nav,
      silder,
    },
    mounted() {
      bus.$on('showNav', (msg) => {
        this.show = msg;
      });
      bus.$on('hideNav', (msg) => {
        this.show = msg;
      });
    },
    methods: {},
    watch: {
      '$route' (to) {
        if (to.path === '/home' ||to.path === '/' ) {
          this.title = '--精彩直播';

        }
      }
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

  .showSilser{
    transform:translate(0,0) !important;
    -weblit-transform:translate(0,0) !important;
  }
</style>
