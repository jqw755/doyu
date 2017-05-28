<template>
  <div class="item_container">
    <p>精彩直播</p>
    <hot_item v-for="room in rooms" :room="room"></hot_item>
  </div>
</template>

<script>
  import hot_item from './HotItem'

  export default {
    props: {
      rooms: {}
    },
    data() {
      return {}
    },
    components: {
      hot_item,
    },
    mounted() {

    }
  }
</script>

<style>
.item_container{
  width: 100%;
}

</style>
