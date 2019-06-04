<template>
  <div class="music-header">
    <div id='music-blur'></div>
    <div>
      <!-- <input type="text" id='id-search'> -->
    </div>
  </div>
</template>

<script>

export default {
  name: 'MusicHeader'

}
</script>

<style lang="scss">
.music-header {
    display: block;
    width: 850px;
    height: 50px;
    background-color: rgba(255, 255, 255, 0.5);
    opacity: 0.5;
    position: absolute;
    top: 67px;
    z-index: 99px;
    box-shadow: 0 0 0 1px hsla(0, 0%, 100%, .3) inset, 0 0.01em 1em rgba(0, 0, 0, 0.6);
    margin: 0 auto;
}
#music-blur {
    width: 850px;
    height: 50px;
    position: relative;
    margin: 0 auto;
    background: hsla(0, 0%, 100%, .25) border-box;
    overflow: hidden;
    border-radius: .3em;
    /* box-shadow:0 0 0 1px hsla(0,0%,100%,.3) inset,0 .5em 1em rgba(0,0,0,0.6); */
    /* text-shadow:0 1px 1px hsla(0,0%,100%,.3); */
}

#music-blur::before {
    content: '';
    position: absolute;
    width: 850px;
    height: 50px;
    bottom: 30px;
    margin: -30px;
    z-index: -1;
    filter: blur(20px);
}
#id-search {
    position: absolute;
    top: 15px;
    left: 26px;
    width: 144px;
    background-image: url(/img/search.png);
    background-repeat: no-repeat;
    background-position: center right;
}

</style>
