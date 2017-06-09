<template>
  <div class="now_container">
    <column_title :info='info'></column_title>
    <hot_item v-for="room in rooms" :room="room" :key="room.id"></hot_item>
  </div>
</template>

<script>
  import hot_item from './HotItem'
  import column_title from '../ColumnTitle/column_title'
  import now from '../../../assets/Home/now.png'
  import more from '../../../assets/Home/more.png'

  export default {
    data() {
      return {
        rooms: [],
        limit: 0,
        info: {
          src1: now,
          name: '正在直播',
          more: '全部',
          src2: more,
          link:'All'
        }
      }
    },
    components: {
      hot_item,
      column_title,
    },
    methods: {
      getIndexLive(){
        const self = this;
        self.limit = self.limit + 4;
//        if (self.limit > 100) {
//          return false
//        }
        let successCallback = (res) => {
          if (res.data.error === 0) {
//              console.log(res)
            self.rooms = res.body.data;
          }
        };
        let errorCallback = (res) => {
          console.log(res);
        };
        self.$http.get('/api/live?limit=' + self.limit).then(successCallback, errorCallback);
      },
    },
    mounted(){
      this.getIndexLive();
    },
  }
</script>

<style>
  .now_container {
    width: 100%;
  }

</style>
