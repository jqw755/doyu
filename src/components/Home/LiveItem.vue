<template>
  <div class="">
    <hot_item v-for="room in rooms" :room="room"></hot_item>
  </div>
</template>

<script>
  import hot_item from './HotItem'

  export default {
    props: {
        rooms:{}
    },
    data() {
      return {}
    },
    components: {
      hot_item,
    },
  }
</script>

<style>


</style>
