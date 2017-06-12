<template>
  <div>
    <div class="header">
      <div class="title">
        <h4>LIVE</h4>
      </div>
      <div class="classify_menu" @click="showClassify">分类</div>
      <div class="title_span">
        <router-link to="/login">
          <div class="logined">
            <i></i>
            <span>{{title}}</span>
          </div>
        </router-link>
      </div>
    </div>
    <div class="header_mask"></div>
  </div>
</template>

<script>
  import {bus} from '../../utils/bus'
  export default {
    props: {
      title: ''
    },
    data() {
      return {
        show: true,
        flag:0,
      }
    },
    methods: {
      showClassify () {
//        const self = this;
//        if (self.flag === 0) {
          bus.$emit('showClassify', true);
//          self.flag = 1;
//        }else{
//          bus.$emit('hideClassify', false);
//          self.flag = 0;
//        }
      }
    },
    mounted(){

    }
  }
</script>

<style>
  .header {
    display: flex;
    width: 100%;
    height: 3rem;
    line-height: 3rem;
    z-index: 1000;
    background-color: #eee;
    position: fixed;
    left: 0;
    top: 0;
  }

  .header_mask {
    width: 100%;
    height: 3rem;
  }

  .classify_menu {
    width: 55px;
    height: 100%;
    display: inline-block;
    color: #999;
    font-size: 1.1rem;
  }

  .classify_menu:before {
    content: '';
    display: inline-block;
    width: 15px;
    height: 15px;
    margin-top: 1rem;
    background: url("../../assets/Home/icon-v2.png") no-repeat -23px -3px;
  }

  .title {
    flex: 2;
    color: #999;
    text-align: left;
    padding-left: 1rem;
  }

  .title_span {
    width: 70px;
    height: 3rem;
    line-height: 3rem;
    color: #999;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .title_span a {
    width: 100%;
    height: 100%;
    display: inline-block;
    text-align: center;
  }

  .logined {
    height: 100%;
  }

  .logined i {
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-top: 0.7rem;
    background: url("../../assets/Home/icon-v2.png") no-repeat -3px -1px;
  }
</style>
