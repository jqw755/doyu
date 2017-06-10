<template>
  <div class="banner_conainer">
    <swipe class="my-swipe">
      <swipe-item class="slide" v-for="banner in limitByBanner" :key="banner.id">
        <router-link :to="`/room/id=` + banner.room_id">
          <img :src="banner.room_src" alt="">
          <p class="banner_info">{{banner.room_name}}</p>
        </router-link>
      </swipe-item>
    </swipe>
  </div>
</template>

<script>
  require('vue-swipe/dist/vue-swipe.css');
  import {Swipe, SwipeItem} from 'vue-swipe';
  export default{
    data(){
      return {
        banners: [],
        limit: 40,
      }
    },
    components: {
      Swipe,
      SwipeItem
    },
    methods: {
      getIndexLive(){
        const self = this;
        let success = (res) => {
          if (res.data.error === 0) {
            self.banners = res.body.data;
          }
        };
        let error = (res) => {
          console.log(res);
        };
        self.$http.get('/api/live?limit=' + self.limit).then(success, error);
      },
    },
    computed: {
      limitByBanner(){
        return this.banners.splice(34);
      }
    },
    mounted(){
      this.getIndexLive();
    },
  }
</script>
<style>
  .banner_conainer {
    margin-top: 3rem;
  }

  .slide img {
    width: 100%;
    height: 100%;
  }

  .banner_info {
    width: 100%;
    padding: 0.5rem;
    background: rgba(0, 0, 0, 0.3);
    position: absolute;
    left: 0;
    top: 0;
    color: #ffffff;
    font-size: 1rem;
  }

  .banner_conainer .item {
    width: 100%;
  }

  .banner_conainer .room_src {
    height: 100%;
  }

  .my-swipe {
    height: 180px;
  }

  .mint-swipe-indicator {
    background: #3e3e3e;
    opacity: 1;
  }
</style>
