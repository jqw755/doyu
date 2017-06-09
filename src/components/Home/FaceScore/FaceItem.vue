<template>
  <div class="face_container">
    <column_title :info='info'></column_title>
    <hot_item v-for="room in rooms" :room="room" :key="room.id"></hot_item>
  </div>
</template>

<script>
  import hot_item from '../Now/HotItem'
  import column_title from '../ColumnTitle/column_title'
  import yz from '../../../assets/Home/yz.png'
  import more from '../../../assets/Home/more.png'

  export default {
    data() {
      return {
        rooms: [],
        limit: 0,
        info: {
          src1: yz,
          name: '颜值',
          more: '更多',
          src2: more,
          link:'yz'
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
        self.limit = self.limit + 6;
        let success = (res) => {
          if (res.data.error === 0) {
            self.rooms = res.body.data;
          }
        };
        let error = (res) => {
          console.log(res);
        };
        self.$http.get('/api/live/yz?limit=' + self.limit).then(success, error);
      },
    },
    mounted(){
      this.getIndexLive();
    },
  }
</script>

<style>
 .face_container .room_src{
   height:7rem;
 }
</style>
