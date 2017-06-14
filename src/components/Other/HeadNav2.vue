<template>
  <div class="header2 clear_fix">
    <div class="title1">
      <img src="../../assets/Home/logo.png" class="logo">
    </div>
    <div class="title2">
      <router-link to="/home" class="home">回到首页</router-link>
      <div class="download_app" @click="dApp()">下载app</div>
    </div>
  </div>
</template>

<script>
  import {bus} from '../../utils/bus'
  export default {
    data() {
      return {
        show: true,
        flag: 0,
      }
    },
    methods:{
      dApp(){
          alert('此功能暂未开放')
      },
    },
  }
</script>

<style>
  .header2 {
    width: 100%;
    height: 3rem;
    z-index: 1000;
    background-color: #eee;
  }

  .header2 .title1 {
    display: inline-block;
    float: left;
    margin-left: 3%;
  }

  .header2 .title1 .logo {
    width: 70%;
    margin-top: 6%;
  }

  .header2 .title2 {
    display: inline-block;
    float: right;
    width: 52%;
    text-align: center;
    margin-top: 1%;
  }

  .title2 .home, .title2 .download_app {
    display: inline-block;
    width: 40%;
    height:2.2rem;
    line-height:2.2rem;
    color: #ff7700;
    font-size: 0.8rem;
    text-align: center;
    border: 1px solid #ff7700;
    -webkit-border-radius:15px;
    border-radius: 15px;
  }

  .title2 .home {
    background: #ff7700;
    color: #fff;
  }
</style>
