<template>
  <roomDetail :roomInfo="data"></roomDetail>
</template>

<script>
  import roomDetail from './RoomDetail'
  export default{
    data(){
      return {
        data: {},
      }
    },
    components:{
      roomDetail,
    },
    methods: {
      getId(params){
          let ids = params;
          let id = ids.split('=');
          return id[1];
      },
      getRoomDetail(){
        const self = this;
        let succeClaaB = (res) => {
          if (res.data.error === 0) {
            self.data = res.body.data;
          }
        };
        let errorCallB = (res) => {
          console.log(res)
        };
        self.$http.get('/api/room/' + this.getId(this.$route.params.id)).then(succeClaaB, errorCallB);
      }
    },
    mounted() {
      this.getRoomDetail();
    }
  }
</script>

<style>

</style>
