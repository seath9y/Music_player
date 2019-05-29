<template>
  <div class="music">
    <MusicHeader/>
    <MusicAside/>
    <MusicContent/>
    <audio v-for="item of musicList" :id="'id-audio-' + item.id" :key="item.id">
        <source :src="item.url">
    </audio>
  </div>
</template>

<script>
// @ is an alias to /src
import MusicHeader from '@/components/music/MusicHeader.vue'
import MusicAside from '@/components/music/MusicAside.vue'
import MusicContent from '@/components/music/MusicContent.vue'
import axios from 'axios'

export default {
  name: 'Music',
  components: {
    MusicHeader,
    MusicAside,
    MusicContent
  },
  data () {
    return {
      musicList: [{
        id: 1,
        url: 'music/1.mp3'
      }, {
        id: 2,
        url: 'music/2.mp3'
      }, {
        id: 3,
        url: 'music/3.mp3'
      }, {
        id: 4,
        url: 'music/4.mp3'
      }]
    }
  },
  methods: {
    getHomeInfo () {
      axios.get('1.json').then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      console.log(res)
    }
  },
  mounted () {
    this.getHomeInfo()
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
