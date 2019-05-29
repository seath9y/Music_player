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
        id: '0',
        url: '/static/swiper/0.jpg'
      }, {
        id: '1',
        url: '/static/swiper/1.jpg'
      }, {
        id: '2',
        url: '/static/swiper/2.jpg'
      }]
    }
  },
  components: {

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
  width:50%;
  height:250px
}
.swiper-pagination-bullet-active {
  background:white;
}
</style>
