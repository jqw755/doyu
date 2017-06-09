<template>
  <div class="game">
    <gameItem :games="data"></gameItem>
  </div>
</template>

<script>
  import gameItem from './GameItem'
  export default {
    data() {
      return {
        data: [],
        loading:false,
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


</style>
