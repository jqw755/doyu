<template>
  <p>123</p>
</template>

<script>
  export default{
    data(){
      return {
        data: {},
      }
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
//            self.data = res.data;
            console.log(res)
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
