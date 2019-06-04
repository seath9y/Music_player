<template>
    <div class="music-footer">
        <div class="blur"></div>
        <div class="mus">
            <img id='img-1' src="img/play70.png" alt="">
            <img id='img-2' src="img/pause65.png" alt="">
            <img id='img-3' src="img/next65.png" alt="">
            <img id='img-4' src="img/previous65.png" alt="">
            <span id='footer-title'></span>
            <span id='currentTime'></span>
            <span id='duration'></span>
            <input id='range-time' type="range" value="0.1">
        </div>
    </div>
</template>

<script>

export default {
  name: 'MusicFooter'

}
</script>

<style lang="scss">
.music-footer {
    display: block;
    width: 850px;
    height: 70px;
    background-color: rgba(255, 255, 255, 0.5);
    position: fixed;
    bottom: 13px;
    z-index: 99px;
    box-shadow: 0 0 0 1px hsla(0, 0%, 100%, .3) inset, 0 .5em 1em rgba(0, 0, 0, 0.6);
}

.blur {
    width: 850px;
    height: 70px;
    position: relative;
    margin: 0 auto;
    /* padding:1em;
    max-width:23em; */
    background: hsla(0, 0%, 100%, .25) border-box;
    overflow: hidden;
    border-radius: .3em;
    box-shadow: 0 0 0 1px hsla(0, 0%, 100%, .3) inset, 0 .5em 1em rgba(0, 0, 0, 0.6);
    text-shadow: 0 1px 1px hsla(0, 0%, 100%, .3);
}

.blur::before {
    content: '';
    position: absolute;
    width: 850px;
    height: 70px;
    bottom: 0;
    margin: -30px;
    z-index: -1;
    -webkit-filter: blur(20px);
    filter: blur(20px);
}
.mus {
    position: absolute;
    bottom: 8px;
    width: 850px;
    height: 50px;
    z-index: 200;
    opacity: 1;
}

.mus img {
    position: absolute;
    width: 30px;
    height: 30px;
    opacity: 0.4;
    z-index: 200;
    bottom: 10px;
}

#img-1 {
    left: 154px;
}

#img-2 {
    left: 206px;
}

#img-3 {
    left: 259px;
}

#img-4 {
    left: 100px;
}

#footer-title {
    position: absolute;
    height: 24px;
    bottom: 23px;
    z-index: 200;
    color: rgb(100, 100, 100);
    text-align: center;
    left: 437px;
    width: 300px;
    font-size: small;
}


#range-time {
  z-index: 200;
  position: absolute;
  bottom: 5px;
  right: 69px;
  -webkit-appearance: none;
  /*清除系统默认样式*/
}

input#range-time:focus {
  border: none;
  outline: none;
}

/*横条样式*/
input[type=range] {
  -webkit-appearance: none;
  /*清除系统默认样式*/
  width: 46%;
  background: -webkit-linear-gradient(#61bd12, #61bd12) no-repeat, #9f9f9f;
  /*设置左边颜色为#61bd12，右边颜色为#ddd*/
  background-size: 0% 100%;
  /*设置左右宽度比例*/
  height: 3px;
  /*横条的高度*/
}

/*拖动块的样式*/
input[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none;
  /*清除系统默认样式*/
  height: 10px;
  /*拖动块高度*/
  width: 10px;
  /*拖动块宽度*/
  background: #fff;
  /*拖动块背景*/
  border-radius: 50%;
  /*外观设置为圆形*/
  border: solid 1px #ddd;
  /*设置边框*/
}


#currentTime {
  left: 352px;
  position: absolute;
  bottom: 2px;
  font-size: small;
  color: #aaaaaa;
}

#duration {
  right: 31px;
  position: absolute;
  bottom: 2px;
  font-size: small;
  color: #aaaaaa;
}
</style>
