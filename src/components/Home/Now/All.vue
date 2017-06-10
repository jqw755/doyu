<template>
  <div class="all_container">
    <hot_item v-for="room in rooms" :room="room" :key="room.id"></hot_item>
  </div>
</template>

<script>
  import hot_item from './HotItem'

  export default {
    data() {
      return {
        rooms: [],
        limit: 0,
      }
    },
    components: {
      hot_item,
    },
    methods: {
      getIndexLive(){
        const self = this;
        self.limit = self.limit + 30;
        let successCallback = (res) => {
          if (res.data.error === 0) {
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
  .all_container {
    margin-top:3rem;
  }

</style>
