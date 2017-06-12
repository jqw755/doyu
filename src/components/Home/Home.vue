<template>
  <div class="container">
    <head_nav :title="title"></head_nav>
    <classify :class="{showClassify:show}"></classify>
    <banner></banner>
    <live_item></live_item>
    <face_score></face_score>
    <king_glory></king_glory>
    <star_show></star_show>
    <science></science>
    <copy></copy>
  </div>
</template>

<script>
  import {bus} from '../../utils/bus'
  import head_nav from '../Other/HeadNav'
  import banner from './Banner/Banner'
  import live_item from './Now/LiveItem'
  import classify from '../Classify/Game'
  import face_score from './FaceScore/FaceItem'
  import king_glory from './KingGlory/KingGlory'
  import star_show from './StarShow/StarShow'
  import science from './Science/Science'
  import copy from '../Other/copyright'

  export default {
    data() {
      return {
        title: '',
        show: false,
        scrollTop: ''
      }
    },
    methods: {
      afterOpen(){
        this.scrollTop = document.scrollingElement.scrollTop;
        document.body.classList.add('modal-open');
        document.body.style.top = -(this.scrollTop) + 'px';
      },
      beforeClose(){
        document.body.classList.remove('modal-open');
        // scrollTop lost after set position:fixed, restore it back.
        document.scrollingElement.scrollTop = this.scrollTop;
      }
    },
    mounted(){
      const userName = sessionStorage.getItem('account');
      if (userName !== '') {
        this.title = userName;
      }

      bus.$on('showClassify', (msg) => {
        this.show = msg;
        this.afterOpen();
//        console.log(1)
      });
      bus.$on('hideClassify', (msg) => {
        this.beforeClose();
        this.show = msg;
//        console.log(0)
      });
    },
    components: {
      head_nav,
      classify,
      banner,
      live_item,
      face_score,
      king_glory,
      star_show,
      science,
      copy
    },
  }
</script>

<style>
  .showClassify {
    display: block !important;
  }
</style>
