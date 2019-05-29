<template>
  <div class="other">
  111
  <other-swiper></other-swiper>
  </div>
</template>

<script>
// @ is an alias to /src
import OtherSwiper from '@/components/other/OtherSwiper.vue'
export default {
  name: 'Other',
  components: {
    OtherSwiper
  }
}
</script>
<style lang="scss">
.other {
  // width: 850px;
  // justify-content: center;
  // height: 640px;
  // margin: 0 auto;
  // background: #fff;
  // border-left: 2px solid rgba(214, 218, 223);
  // border-right: 2px solid rgba(214, 218, 223);
    height: 650px;
    position: flex;
    flex-direction: column;
    border-width: 3px;
    border-top-width: 0px;
    border-color: rgb(220, 220, 220);
    border-style: solid;
    display: block;
    margin: 0 auto;
    width: 850px;
    background-color: white;
    overflow: auto;
}
</style>
