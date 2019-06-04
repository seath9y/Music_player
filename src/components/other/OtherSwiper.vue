<template>
  <div class="wrapper">
    <swiper :options="swiperOption">

      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.url" alt="1">
      </swiper-slide>
      <!-- <swiper-slide>
        <img class="swiper-img" src="/static/swiper/1.jpg" alt="1">
      </swiper-slide> -->
      <div class="swiper-pagination"  slot="pagination"></div>
      <!-- <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
      <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
    </swiper>
  </div>
</template>

<script>

export default {
  name: 'OtherSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination'
      },
      swiperList: [{
        id: 1,
        url: 'https://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1343818.jpg?max_age=2592000'
      }, {
        id: 2,
        url: 'https://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1348778.jpg?max_age=2592000'
      }, {
        id: 3,
        url: 'https://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1348233.jpg?max_age=2592000'
      }]
    }
  }
}
</script>
<style lang="scss">
// .wrapper {
//   width:50%;
//   height:0;
//   overflow: hidden;
// }

.swiper-img {
  width:70%;
  height:250px
}

.swiper-pagination-bullet-active {
  background:white;
}

@media screen and (max-width: 1025px) {
.swiper-img {
  width:99%;
  height:200px
}
}
</style>
