<template>
  <div class="container">
    <div class="live_item" v-for="item in data">
      <live_item :rooms="rooms"></live_item>
    </div>
  </div>
</template>

<script>
  import live_item from './LiveItem'

  export default {
    data() {
      return {
        data: {},
        limit: 0,
      }
    },
    components: {
      live_item,
    },
    methods: {
      getIndexLive(){
        const self = this;
        self.limit += 20;
        if (self.limit > 100) {
          return false;
        }
        let successCall = (data) => {
          console.log(data)

          self.data = data.body.data;


        }
        let errorCall = (data) => {
          console.log(data)
        }


        self.$http.get('/api/live?limit=' + self.limit).then(successCall, errorCall)
      }
    },
    mounted(){
      this.getIndexLive()
    },
  }
</script>

<style>


</style>
