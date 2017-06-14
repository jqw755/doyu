<template>
  <div class="item">
    <router-link :to="`/room/id=` + room.room_id">
      <div class="room_src">
        <img_item :src="room.room_src"></img_item>
        <div class="room_info">
          <p class="room-nickname">{{room.nickname}}</p>
          <p class="room-online">
            <span class="online-span">{{room.online | formatWacth}}</span>
          </p>
        </div>
      </div>
    </router-link>
    <div class="room-name">{{room.room_name}}</div>
  </div>
</template>

<script>
  import img_item from './ImgItem'
  import Utils from '../../../utils/Utils'
  export default {
    props: {
      room: {}
    },
    data() {
      return {}
    },
    components: {
      img_item
    },
    filters: {
      formatWacth(w){
        return Utils.formatWatch(w);
      }
    },
    mounted() {

    }
  }
</script>

<style>
  .item {
    width: 49%;
    display: inline-block;
    font-size: 0.73rem;
    overflow: hidden;
    position: relative;
    margin-left: .15rem;
    margin-bottom: 1rem;
  }

  .room_src {
    width: 100%;
    height: 7rem;
    -webkit-border-radius: 0.3rem;
    border-radius: 0.3rem;
    position: relative;
    overflow: hidden;
  }

  .room_src img {
    width: 100%;
  }

  .room_info {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .room-nickname {
    position: absolute;
    left: 0;
    bottom: 0rem;
    width: 100%;
    height: 1.4rem;
    line-height: 1.4rem;
    background: -webkit-linear-gradient(to top, rgba(0, 0, 0, .7), rgba(0, 0, 0, .1));
    background: linear-gradient(to top, rgba(0, 0, 0, .7), rgba(0, 0, 0, .1));
    color: #fff;
    padding-left: 12%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .room-nickname:before {
    width: .71rem;
    height: .76rem;
    display: inline-block;
    content: '';
    background-image: url("../../../assets/Home/room-uer.png");
    background-size: 100% 100%;
    position: absolute;
    left: 0.5rem;
    top: 19.5%;
  }

  .room-online {
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    display: flex;
    position: absolute;
    left: 0%;
    top: 0%;
    color: #fff;
    background: rgba(0, 0, 0, 0.2)
  }

  .online-span{
    position: absolute;
    right:3%;
  }

  .online-span:before{
    display: inline-block;
    width: .8rem;
    height: .75rem;
    content: '';
    background-image: url("../../../assets/Home/watch.png");
    background-size: 100% 100%;
    margin:auto 0;
    position: absolute;
    left: -1rem;
    top: .1rem;
  }

  .room-name {
    width: 100%;
    font-size: 0.75rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

  }
</style>
