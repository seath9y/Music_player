<template>
  <div class="other">
  <other-swiper></other-swiper>
  <!-- <div class="container">
  <div class="row">
    <div class="col-md-6">
      <button class="btn btn-primary">测试按钮</button>
    </div>
  </div>
</div> -->
  </div>
</template>

<script>
// @ is an alias to /src
import OtherSwiper from '@/components/other/OtherSwiper.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

export default {
  name: 'Other',
  components: {
    OtherSwiper
  }
}
</script>
<style lang="scss" scoped>
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
    border-top-width: 3px;
    border-color: rgb(220, 220, 220);
    border-style: solid;
    // display: block;
    background-color: white;
    overflow: auto;
    display: flex;
    width: 850px;
    height: 640px;
    margin: 0 auto;
}
</style>
