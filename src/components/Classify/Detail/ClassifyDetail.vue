<template>
  <div>
    <headNav2></headNav2>
    <div class="detail_item">
      <p class="classify_name">{{name}}</p>
      <hot_item v-for="room in data" :room="room" :key="room.id"></hot_item>
      <load_more></load_more>
      <copyright></copyright>
    </div>
  </div>
</template>

<script>
  import {bus} from '../../../utils/bus'
  import headNav2 from '../../Other/HeadNav2'
  import hot_item from '../../Home/Now/HotItem'
  import load_more from '../../Other/LoadMore'
  import copyright from '../../Other/copyright'
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
        self.limit = self.limit + 10;
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
//    从HOME进入前清除body上的model-open
      document.body.classList.remove('modal-open');
      document.scrollingElement.scrollTop = 0;

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
      load_more,
      headNav2,
      copyright
    },
  }
</script>

<style>
  .detail_item .classify_name {
    display: flex;
    width: 100%;
    padding: 10px 4px 7px 4px;

  }
  .detail_item .classify_name:before{
    content: '';
    display: inline-block;
    width: 15px;
    height: 15px;
    background: url("../../../assets/Room/icon_play.png") no-repeat;
    background-size: 100% 100%;
    margin-right:0.3rem;
  }
</style>
