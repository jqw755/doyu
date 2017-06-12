<template>
  <div class="load_more">
    <span @click="loadMoreChild">加载更多...</span>
  </div>
</template>

<script>
  import {bus} from '../../utils/bus'
  export default {
    data() {
      return {}
    },
    methods: {
      loadMoreChild(){
        bus.$emit('loadMore', true);
      },
    },
  }
</script>

<style>
  .load_more {
    width: 100%;
    margin-bottom: 1.5rem;
  }

  .load_more span {
    display: block;
    width: 96%;
    height: 2.3rem;
    line-height: 2.3rem;
    margin-left: 2%;
    background: #ffffff;
    border: 1px solid #ddd;
    font-size: .9rem;
    color: #7A7A7A;
    text-align: center;
    border-radius: 5px;
  }

</style>
