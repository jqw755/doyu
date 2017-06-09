<template>
  <div class="">

  </div>
</template>

<script>
  export default {
    data() {
      return {
        data: {},
        limit: 0,
      }
    },
    methods: {
      getClassifyDetail(){
        const self = this;
        self.limit = self.limit + 30;
        let successCall = (res) => {
          if (res.body.error === 0) {
            console.log(res);
            self.data = res.body.data;
          }
        };
        let failCall = (res) => {
          console.log(res)
        };
        self.$http.get('/api/live/' + this.$route.query.flag + '?limit=' + self.limit).then(successCall, failCall);
      },
    },
    mounted(){
      this.getClassifyDetail();
    },
    components: {},
  }
</script>

<style>


</style>
