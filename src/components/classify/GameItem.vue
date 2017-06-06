<template>
  <div class="classify">
    <router-link :to="'/'+game.short_name" v-for="game in games" :key="game.id">
      <div class="classify_item">
        <img :src="game.game_icon" class="game_icon"/>
        <!--<img :src="game.game_src" :alt="game.short_name" class="game_src"/>-->
        <p class="game_name">{{game.game_name}}</p>
      </div>
    </router-link>
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
    methods: {},
    mounted(){
    },
  }
</script>

<style>
  .classify {
    width: 100%;
    background: #eee;
    margin-top: 3rem;
    text-align: center;
  }

  .classify_item {
    width: 7.67rem;
    height: 7rem;
    display: inline-block;
    border: 1px dotted #dedede;

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
