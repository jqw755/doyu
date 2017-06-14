<template>
  <div id="app">
    <loading v-show="loading"></loading>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
  import loading from './components/Loading/Loading'
  export default {
    data() {
      return {
        user: '',
        show: false,
        loading: false,
      }
    },
    components: {
      loading,
    },
    beforeCreate(){
      this.loading = true;
    },
    mounted() {},
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
    width: 100%;
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
</style>
