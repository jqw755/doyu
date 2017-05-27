<template>
  <div class="item">
    <div >
      <img_item :src="room.room_src"></img_item>
    </div>
  </div>
</template>

<script>
  import img_item from './ImgItem'
  export default {
    props: {
      room: {}
    },
    data() {
      return {}
    },
    components: {
      img_item,
    }
  }
</script>

<style>


</style>
