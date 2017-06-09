<template>
  <div class="loading">
    <p class="circle"></p>
    <p class="line"></p>
    <p class="dou">你猜我能跳多久~</p>
  </div>
</template>

<script>
  export default {
    data(){
      return {}
    }
  }
</script>

<style>
  /*loading*/
  .loading {
    width: 70%;
    height: 26%;
    position: fixed;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -60%);
    transform: translate(-50%, -60%);
    z-index: 10000;
    background: rgba(0, 0, 0, 0.3);
  }

  .circle {
    width: 1.5rem;
    height: 1.5rem;
    border: 1px solid #9a9a9a;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, 0);
    transform: translate(-50%, 0);
    animation: loadingCircle 0.5s ease-out infinite alternate;
  }

  .dou {
    font-size: 12px;
    color: #fff;
  }

  .line {
    width: 60%;
    height: 2px;
    background: #3e3e3e;
    position: absolute;
    left: 20%;
    top: 65%;
  }

  @keyframes loadingCircle {
    0% {
      -webkit-transform: translate(-50%, 0);
      transform: translate(-50%, 0);
    }
    100% {
      -webkit-transform: translate(-50%, -180%);
      transform: translate(-50%, -180%);
    }
  }

  @-webkit-keyframes loadingCircle {
    0% {
      -webkit-transform: translate(-50%, 0);
      transform: translate(-50%, 0);
    }
    100% {
      -webkit-transform: translate(-50%, -180%);
      transform: translate(-50%, -180%);
    }
  }
</style>
