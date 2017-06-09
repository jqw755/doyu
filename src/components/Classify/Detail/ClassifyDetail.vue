<template>
  <div class="detail_item">
    <p>{{name}}</p>
    <hot_item v-for="room in data" :room="room" :key="room.id"></hot_item>
  </div>
</template>

<script>
  import hot_item from '../../Home/Now/HotItem'
  export default {
    data() {
      return {
        data: [],
        limit: 0,
        name: ''
      }
    },
    methods: {
      getClassifyDetail(){
        const self = this;
        self.limit = self.limit + 30;
        let successCall = (res) => {
          if (res.body.error === 0) {
            self.data = res.body.data;
            self.name = self.data[0].game_name;
          }
        };
        let failCall = (res) => {
          console.log(res)
        };
        self.$http.get('/api/live/' + this.$route.query.flag + '?limit=' + self.limit).then(successCall, failCall);
      },
    },
    mounted(){
      if (this.$route.query.flag === 'All')
        this.$router.push('/all');
      else
        this.getClassifyDetail();
    },
    components: {
      hot_item
    },
  }
</script>

<style>
  .detail_item {
    margin-top: 3rem;
  }
</style>
