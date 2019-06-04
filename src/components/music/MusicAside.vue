<template>
  <div class="music-aside">
    <ul id='id-ul'>
        <li v-for="item of musicList" :key='item.title1' @click="asideMusicClick(item.id)"><span>&nbsp;&nbsp;{{item.title1}}</span></li>
        <li v-for="item of musicList" :key='item.title2' @click="asideMusicClick(item.id)"><span>&nbsp;&nbsp;{{item.title1}}</span></li>
        <li v-for="item of musicList" :key='item.title3' @click="asideMusicClick(item.id)"><span>&nbsp;&nbsp;{{item.title1}}</span></li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'MusicAside',
  props: {
    musicList: Array
  },
  methods: {
    asideMusicClick (index) {
      this.$emit('asideMusicClick', index)
    }
  }

}
</script>

<style lang="scss">
.music-aside {
    // overflow: auto;
    flex: 1;
    background-color: rgba(224, 230, 235);
    border: 2px solid rgba(214, 218, 223);
}
#id-search {
    position: absolute;
    top: 15px;
    left: 26px;
    width: 144px;
    // background-image: url(img/search.png);
    background-repeat: no-repeat;
    background-position: center right;
}

#id-ul {
    list-style-type: none;
    position: absolute;
    top: 132px;
    cursor: pointer;
}

ul {
  text-align: left;
}

li {
  font-family: 'KaiTi_GB2312';
  padding: 9px 0px;
  margin: 0px;
  width: 210px;
  position: relative;
  left: -40px;
}
li:hover {
  background-color: #f4f5f7;
}
li span {
  color: rgb(144, 153, 158);
  position: relative;
  left: 19px;
}

li img {
  position: relative;
  border-radius: 50%;
  opacity: 0.5;
  bottom: -5px;
  cursor: pointer;
  opacity: 0.3;
}
</style>
