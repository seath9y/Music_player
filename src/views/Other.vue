<template>
  <div class="other">
    <other-swiper></other-swiper>
    <div class="container">
          <div class="index__hd">
          <h2 class="index__tit"><i class="icon_txt">歌单推荐</i></h2>
      </div>
      <div class="row">
        <img src="img/g1.png" class="col-md-1 hidd">
        <img src="img/g1.png" class="col-md-3">
        <img src="img/g2.png" class="col-md-1 hidd">
        <img src="img/g2.png" class="col-md-3">
        <img src="img/g3.png" class="col-md-1 hidd">
        <img src="img/g3.png" class="col-md-3">
      </div>
    </div>
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
.row {
  text-align: center
}
.container {
    width: 840px;
    height: 640px;
}
@media screen and (max-width: 400px) {
.other {
    width: 370px;
  }
  .container {
    width: 370px;
}
.hidd {
  display: none;
}
}
</style>
