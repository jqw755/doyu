<template>
  <div class="container">
    <div class="live_item">
      <live_item :rooms="data.data"></live_item>
    </div>

  </div>
</template>

<script>
  import live_item from './LiveItem'
  import img_item from './ImgItem'

  export default {
    data() {
      return {
        data: {},
        limit: 0,
      }
    },
    components: {
      live_item,
      img_item
    },
    methods: {
      getIndexLive(){
        const self = this;
        self.limit = self.limit + 20;
//        if (self.limit > 100) {
//          return false
//        }
        let successCallback = (res) => {
          if (res.data.error === 0) {
            self.data = res.data;
          }
        }
        let errorCallback = (res) => {
          console.log(res)
        }
        self.$http.get('/api/live?limit=' + self.limit).then(successCallback, errorCallback)
      },
    },
    mounted(){
      this.getIndexLive();
    },
  }
</script>

<style>
.container{
  width: 100%;
  height: 100%;
  margin-bottom:2rem;
  margin-top: 3rem;
}

</style>
