<template>
  <div>
    <headNav2></headNav2>
    <roomDetail :roomInfo="data"></roomDetail>
  </div>
</template>

<script>
  import roomDetail from './RoomDetail'
  import headNav2 from '../Other/HeadNav2'
  export default{
    data(){
      return {
        data: {},
      }
    },
    components:{
      roomDetail,
      headNav2,
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
//    从HOME进入前清除body上的model-open
      document.body.classList.remove('modal-open');
      document.scrollingElement.scrollTop = 0;

      this.getRoomDetail();
    }
  }
</script>
