<template>
  <div class="room_detail">
    <section class="head">
      <div class="owner">
        <img :src="roomInfo.avatar" class="owner_img"/>
        <div class="owner_info">
          <p class="owner_name">主播:{{roomInfo.owner_name}}</p>
          <p class="fans_num">关注:{{roomInfo.fans_num | formateNum}}</p>
        </div>
      </div>
      <div class="status">
        <small v-show="roomInfo.room_status == 1 ? true : false">最近开播时间:{{roomInfo.start_time}}</small>
        <p v-show="roomInfo.room_status == 2 ? true : false">不在线呢,去看看其他主播吧~</p>
      </div>
    </section>

    <section class="video_info">
      <div class="video">
        <div class="video_pic">
          <img :src="roomInfo.room_thumb" v-show="roomInfo.room_status == 1 ? true : false"/>
          <p class="play_icon"></p>
          <p v-show="roomInfo.room_status == 2 ? true : false">空空如也~</p>
        </div>
        <div class="share">
          <div class="online watch"><span>{{roomInfo.online | formateNum}}人</span></div>
          <div class="online care" @click="focus"><span>关注</span></div>
          <div class="online sare"><span>分享</span></div>
        </div>
      </div>
      <div :class="[{tip_tran:show_tip},'tip']" v-show="show_tip">{{v_info}}</div>
    </section>

    <section class="foot">
      <img src="../../assets/Room/develop.jpg" class="developing">
      <p v-show="false">雪梨baby呀</p>
      <p>嘤嘤嘤~待开发...</p>
    </section>
  </div>
</template>

<script>
  import Utils from '../../utils/Utils'
  export default{
    props: {
      roomInfo: {}
    },
    data() {
      return {
        v_info: '',
        show_tip: false,
      }
    },
    methods: {
      focus(){
        const self = this;
        self.v_info = '关注成功';
        if (self.show_tip === false) {
          self.show_tip = true;
          setTimeout(function () {
            self.show_tip = false;
          }, 2500);
        }

      },
    },
    filters: {
      formateNum(n){
        return Utils.formatWatch(n);
      }
    }
  }
</script>

<style>
  .room_detail {
    padding: 0 2% 0 2%;
  }

  .head {
    width: 100%;
  }

  .owner {
    width: 100%;
    height: 4rem;
    background: #fff;
    overflow: hidden;
  }

  .owner_img {
    width: 3rem;
    height: 3rem;
    margin: 0.5rem 0 0.5rem 0;
    border-radius: 1.5rem;
    vertical-align: top;
  }

  .owner_info {
    display: inline-block;
    margin: 0.75rem 0 0 0.3rem;
    font-size: 0.9rem;
  }

  .owner_name, .online {
    display: inline-block;
  }

  .video_info {
    padding-top: 2%;
    position: relative;
  }

  .video_pic {
    width: 100%;
    min-height: 2rem;
    text-align: center;
    border: 1px dotted #eee;
    margin-bottom: 1rem;
    position: relative;
  }

  .video_pic img {
    width: 100%;
  }

  .play_icon {
    z-index: 50;
    width: 2.5rem;
    height: 2.5rem;
    line-height: 2.5rem;
    border-radius: 50%;
    border: 3px solid #fff;
    position: absolute;
    left: 50%;
    top: 35%;
    -webkit-transform: translate(-50%, 0);
    transform: translate(-50%, 0);
  }

  .play_icon:after {
    display: inline-block;
    content: ' ˙△˙ ';
    color: #fff;
    position: absolute;
    left: 50%;
    -webkit-transform: translate(-50%, 0);
    transform: translate(-50%, 0);
  }

  .share {
    display: flex;
    height: 2.5rem;
    line-height: 2.5rem;
    font-size: 0.95rem;
    border: 1px solid #eee;
  }

  .online {
    flex: 1;
    position: relative;
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    border-right: 1px dotted #eee;
  }

  .online:last-child {
    border-right: 0;
  }

  .online span {
    padding-left: 2.5rem;
  }

  .watch:before, .care:before, .sare:before {
    display: inline-block;
    content: '';
    width: 25px;
    height: 20px;
    background: url("../../assets/Room/hd-send.png") no-repeat;
    background-size: 25px 20px;
    position: absolute;
    left: 1.5rem;
    top: 0.5rem;
  }

  .care:before {
    background: url("../../assets/Room/hd-focus.png") no-repeat;
    background-size: 25px 20px;
  }

  .sare:before {
    background: url("../../assets/Room/hd-share.png") no-repeat;
    background-size: 25px 20px;
  }

  .tip {
    width: 40%;
    height: 2rem;
    line-height: 2rem;
    border-radius: 7px;
    color: #fff;
    text-align: center;
    background: #FA7122;
    position: absolute;
    left: 50%;
    bottom: 0;
    opacity: 0;
    -webkit-transition: all 0.5s ease;
    transition: all 0.5s ease;
  }

  .tip_tran {
    -webkit-animation: tip_ani 0.6s;
    animation: tip_ani 0.6s;
    animation-fill-mode: forwards;
    -webkit-animation-fill-mode: forwards;
  }

  @keyframes tip_ani {
    from {
      opacity: 0;
      transform: translate(-50%, 0);
      -webkit-transform: translate(-50%, 0);
    }
    to {
      opacity: 1;
      transform: translate(-50%, -3.5rem);
      -webkit-transform: translate(-50%, -3.5rem);
    }
  }

  @-webkit-keyframes tip_ani {
    from {
      opacity: 0;
      transform: translate(-50%, 0);
      -webkit-transform: translate(-50%, 0);
    }
    to {
      opacity: 1;
      transform: translate(-50%, -3.5rem);
      -webkit-transform: translate(-50%, -3.5rem);
    }
  }

  .foot {
    text-align: center;
    font-size: 0.8rem;
  }

  .developing {
    width: 50%;
    margin: 10% 25% 2% 25%;
  }
</style>
