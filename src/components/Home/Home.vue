<template>
  <div class="container">
    <live_item></live_item>
    <face_score></face_score>
    <king_glory></king_glory>
    <star_show></star_show>
    <science></science>
    <copy></copy>
  </div>
</template>

<script>
  import live_item from './Now/LiveItem'
  import face_score from './FaceScore/FaceItem'
  import king_glory from './KingGlory/KingGlory'
  import star_show from './StarShow/StarShow'
  import science from './Science/Science'
  import copy from '../Other/copyright'

  export default {
    data() {
      return {}
    },
    components: {
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
  .container {
    width: 100%;
    height: 100%;
    margin-top: 3rem;
  }

</style>
