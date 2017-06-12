<template>
  <div class="detail_item">
    <p>{{name}}</p>
    <hot_item v-for="room in data" :room="room" :key="room.id"></hot_item>
    <load_more ></load_more>
  </div>
</template>

<script>
  import {bus} from '../../../utils/bus'
  import hot_item from '../../Home/Now/HotItem'
  import load_more from '../../Other/LoadMore'
  export default {
    data() {
      return {
        data: [],
        limit: 0,
        name: '',
      }
    },
    methods: {
      getClassifyDetail(){
        const self = this;
        self.limit = self.limit + 20;
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
//      loadMoreParent(){
//        this.getClassifyDetail();
//      },
    },
    mounted(){
      this.getClassifyDetail();
//      if (this.$route.query.flag === 'All')
//        this.$router.push('/all');
//      else
//        this.getClassifyDetail();
      bus.$on('loadMore', (msg) => {
        this.getClassifyDetail();
      });
    },
    components: {
      hot_item,
      load_more
    },
  }
</script>

<style>

</style>
