<template>
  <div class="column_title clear_fix">
    <i class="i1">
      <img :src="info.src1" alt="">
    </i>
    <p class="name">{{info.name}}</p>
    <router-link :to="'/classifyDetail?flag='+info.link" class="more_a">
      <span class="more">{{info.more}}</span>
      <i class="i2">
        <img :src="info.src2" alt="">
      </i>
    </router-link>
  </div>
</template>

<script>
  export default {
    props: {
      info: {}
    },
    data() {
      return {}
    },
  }
</script>

<style>
  .column_title {
    height: 1.5rem;
    padding: 0.3rem 0.3rem;
    font-size: 0.8rem;
  }

  .i1,.i2{
    width:1.25rem;
    height: 100%;
    display: inline-block;
  }
  .i2{
    width:1rem;
  }
  .i1 img,.i2 img{
    width: 100%;
    vertical-align: middle;
  }

  .column_title .name {
    display: inline-block;
  }

  .column_title .more_a {
    color: #000;
    float: right;
  }



</style>
