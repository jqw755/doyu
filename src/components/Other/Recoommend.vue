<template>
  <div class="che">
    <p>{{data.one}}</p>
    <p>{{data.two}}</p>
  </div>
</template>

<script>
  export default{
    data(){
      return {
        data: {
          one: '这里什么都没有~',
          two: '你想让我给你推荐什么  ->_->`'
        }
      }
    }
  }
</script>

<style>
  .che {
    margin-top:3rem;
    text-align: center;
  }
</style>
