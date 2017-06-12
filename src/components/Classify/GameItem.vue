<template>
  <div class="classify">
    <div class="classify_title">
      <span class="item active">全部</span>
      <span class="item">颜值</span>
      <span class="item">王者荣耀</span>
      <span class="item">星秀</span>
      <span class="item">穿越火线</span>
      <span class="item">英雄联盟</span>
    </div>
    <div class="classify_placeholder"></div>
    <div class="classify_item">
      <router-link :to="'/classifyDetail?flag='+game.short_name" v-for="game in games" :key="game.id">
        <div class="classify_item">
          <img :src="game.game_icon" class="game_icon"/>
          <p class="game_name">{{game.game_name}}</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      games: {},
    },
    data() {
      return {
        data: {}
      }
    },
  }
</script>

<style>
  .classify {
    width: 100%;
    height: 24rem;
    background: #f4f4f4;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    z-index:99;
    position: absolute;
    left: 0;
    top: 0;
  }

  .classify_title {
    width: 100%;
    height: 3rem;
    line-height: 3rem;
    position: fixed;
    left: 0;
    top: 2.9rem;
    white-space: nowrap;
    background: #fff;
    overflow-x: auto;
    overflow-y: hidden;
  }

  .classify_title::-webkit-scrollbar {
    display: none;
  }

  .classify_placeholder{
    height:3rem;
  }

  .classify_title .item {
    width: 4.5rem;
    height: 2.8rem;
    text-align: center;
    color: #676767;
    font-weight: 700;
    font-size: 1rem;
  }

  .classify_title .item.active {
    color: #fa7122;
    border-bottom: 0.1rem solid #fa7122;
  }

  .classify a {
    display: inline-block;
    width: 33.05%;
    height: 7rem;
    text-align: center;
    border-right: 1px dashed #ddd;
    border-bottom: 1px dashed #ddd;
  }

  .game_icon {
    width: 3.3rem;
    height: 3.3rem;
    border-radius: 50%;
    vertical-align: middle;
    margin-top: 1rem;
  }

  .game_name {
    margin-top: 0.5rem;
    color: #3e3e3e;
    font-size: 0.85rem;
  }
</style>
