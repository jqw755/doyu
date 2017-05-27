<template>
  <div class="header">
    <div class="title_bar" @click="showNav">
      <div class="menu_icon"></div>
    </div>
    <div class="title"><h4>LIVE</h4></div>
  </div>
</template>

<script>
  import {bus} from '../../utils/bus'
  export default {
    data() {
      return {
        show: true,
      }
    },
    methods: {
      showNav () {
        bus.$emit('showNav', this.show);
      }
    }
  }
</script>

<style>
  .header {
    display: flex;
    width: 100%;
    height: 50px;
    position: fixed;
    top: 0;
    left: 0;
    background: #282828;
  }

  .title_bar .menu_icon {
    width: 50px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-size: 20px;
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
    line-height: 50px;
    text-overflow: ellipsis;
    white-space: nowrap;
  }


</style>
