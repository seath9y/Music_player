<template>
  <div class="music">
    <MusicHeader/>
    <MusicAside/>
    <MusicContent/>
    <!-- <audio id='id-audio-1'>
        <source src="music/1.mp3">
    </audio>
    <audio id='id-audio-2'>
        <source src="music/2.mp3">
    </audio>
    <audio id='id-audio-3'>
        <source src="music/3.mp3">
    </audio>
    <audio id='id-audio-4'>
        <source src="music/4.mp3">
    </audio> -->
  </div>
</template>

<script>
// @ is an alias to /src
import MusicHeader from '@/components/music/MusicHeader.vue'
import MusicAside from '@/components/music/MusicAside.vue'
import MusicContent from '@/components/music/MusicContent.vue'

export default {
  name: 'Music',
  components: {
    MusicHeader,
    MusicAside,
    MusicContent
  }
}
</script>
<style lang="scss">
.music {
    display: flex;
    width: 850px;
    justify-content: center;
    height: 640px;
    margin: 0 auto;
}
</style>
