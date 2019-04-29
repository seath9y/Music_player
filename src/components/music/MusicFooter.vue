<template>
    <div class="music-footer">
        <div class="blur"></div>
        <div class="mus">
            <!-- <img id='img-1' src="img/play70.png" alt="">
            <img id='img-2' src="img/pause65.png" alt="">
            <img id='img-3' src="img/next65.png" alt="">
            <img id='img-4' src="img/previous65.png" alt=""> -->
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
</style>
