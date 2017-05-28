<template>
  <div class="header">
    <div class="title_bar" @click="showNav">
      <div class="menu_icon"></div>
    </div>
    <div class="title">
      <h4>LIVE<span>{{title}}</span></h4>
    </div>
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
      }
    },
    methods: {
      showNav () {
        bus.$emit('showNav', true);
      }
    },
    mounted(){
      console.log(this.title)
    }
  }
</script>

<style>
  .header {
    display: flex;
    width: 100%;
    height: 3rem;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    background: #282828;
  }

  .title_bar .menu_icon {
    width: 3rem;
    height: 3rem;
    line-height: 3rem;
    text-align: center;
    font-size: 1.2rem;
  }

  .menu_icon:before {
    content: '≡';
    display: inline-block;
    color: #fff;
  }

  .title {
    flex: 2;
    color: #fff;
    text-align: left;
    line-height: 3rem;
    text-overflow: ellipsis;
    white-space: nowrap;
  }


</style>
