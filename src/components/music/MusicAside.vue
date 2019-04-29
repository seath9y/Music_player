<template>
    <div class="music-aside">
      <ul id='id-ul'>
          <li>111</li>
          <li>111</li>
          <li>111</li>
          <li>111</li>
          <!-- <li><span><img id='id-musicli-1' src="img/play33.png">&nbsp;&nbsp;歳月-雲流れ</span></li>
          <li><span><img id='id-musicli-2' src="img/play33.png">&nbsp;&nbsp;My First Homage</span></li>
          <li><span><img id='id-musicli-3' src="img/play33.png">&nbsp;&nbsp;梦幻曲</span></li>
          <li><span><img id='id-musicli-4' src="img/play33.png">&nbsp;&nbsp;废狱摇篮曲</span></li>
          <li><span><img id='id-musicli-1' src="img/play33.png">&nbsp;&nbsp;歳月-雲流れ</span></li>
          <li><span><img id='id-musicli-2' src="img/play33.png">&nbsp;&nbsp;My First Homage</span></li>
          <li><span><img id='id-musicli-3' src="img/play33.png">&nbsp;&nbsp;梦幻曲</span></li>
          <li><span><img id='id-musicli-4' src="img/play33.png">&nbsp;&nbsp;废狱摇篮曲</span></li> -->

      </ul>
    </div>
</template>

<script>

export default {
  name: 'MusicAside'

}
</script>

<style lang="scss">
.music-aside {
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
}

li {
    padding: 9px;
}
</style>
