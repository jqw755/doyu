<template>
  <div class="silder_wrapper">   <!---->
    <div class="make" @click="hideNav"></div>
    <div class="nav">
      <ul>
        <li v-for="m in menu">
          <router-link :to=m.url>
            <span>{{m.title}}</span><i class="icon-arrow_right"></i>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {bus} from '../../utils/bus'

  export default {
    data() {
      return {
        menu: [
          {
            title: '首页',
            url: ''
          },
          {
            title: '分类',
            url: ''
          },
          {
            title: '推荐',
            url: ''
          },
          {
            title: '个人中心',
            url: ''
          },
        ],
        show: false,
      }
    },
    methods: {
      hideNav(){
        this.show = false;
        bus.$emit('hideNav', this.show);

      }
    }
  }
</script>

<style>
  .silder_wrapper, .make {
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    z-index: 100;
    transition: all ease .4s;
    -webkit-transition: all ease .4s;
  }

  .make {
    margin-top: 50px;
    z-index: 99;
    background: rgba(0, 0, 0, 0.6);
  }

  .nav {
    border-top: 1px solid #222;
    box-shadow: 0 1px 1px #363636 inset;
    background: #282828;
    position: absolute;
    display: block;
    top: 50px;
    right: 110px;
    bottom: 0;
    left: 0;
    transition: right .4s ease;
    -webkit-transition: right .4s ease;
    z-index: 101;
  }

  .nav li {

  }

  .nav li a {
    color: #9a9a9a;
    font-size: 14px;
    font-weight: 600;
    display: flex;
    border-bottom: 1px dotted #333;
    /*text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.8);*/
  }

  .nav li span {
    flex: 1;
    text-align: left;
    padding: 15px 18px;
  }

  .nav li i {
    flex: 1;
    text-align: right;
    padding: 15px 18px;
  }

  .nav li i:before {
    content: '>';
  }

</style>
