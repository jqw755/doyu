<template>
  <div class="game">
    <div class="game_mask" @click="hideClassify"></div>
    <gameItem :games="data"></gameItem>
  </div>
</template>

<script>
  import {bus} from '../../utils/bus'
  import gameItem from './GameItem'
  export default {
    data() {
      return {
        data: [],
        loading: false,
        show:false,
      }
    },
    methods: {
      getAllClassify(){
        const self = this;
        let successCall = (res) => {
          if (res.body.error === 0) {
            self.data = res.body.data;
          }
        };
        let failCall = (res) => {
          console.log(res)
        };
        self.$http.get('/api/game/').then(successCall, failCall);
      },
      hideClassify(){
        this.show = false;
        bus.$emit('hideClassify', this.show);
//        console.log(this.show)
      }
    },
    mounted(){
      this.loading = false;
      this.getAllClassify();
    },
    components: {
      gameItem,
    },
  }
</script>

<style>
  .game {
    display: none;
    width: 100%;
    position: fixed;
    top: 3rem;
    left: 0;
    z-index: 100;
  }

  .game_mask {
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 90;
  }

</style>
