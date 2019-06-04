<template>
  <div class="music">
    <Music-header/>
    <Music-aside :musicList='musicList' @asideMusicClick='asideMusicClick'/>
    <Music-content :musicList='musicList' @contentMusicClick='contentMusicClick'/>
    <audio class="audio" v-for="item of musicList" :id="'id-audio-' + item.id" :key="item.id">
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
      musicList: [],
      curId: false
    }
  },
  methods: {
    getMusicInfo () {
      axios.get('index.json').then(this.getMusicInfoSucc)
    },
    getMusicInfoSucc (res) {
      res = res.data
      this.musicList = res.musicList
    },
    play (id) {
      this.curId = id
      let audio = document.getElementById(`id-audio-${id}`)
      audio.play()
      this.$store.dispatch('changeCurrentId', id)
    },
    pause (id) {
      let audio = document.getElementById(`id-audio-${id}`)
      audio.currentTime = 0
      audio.pause()
    },
    asideMusicClick (id) {
      if (this.curId === false) {
        this.play(id)
      } else {
        this.pause(this.curId)
        this.play(id)
      }
    },
    contentMusicClick (id) {
      this.asideMusicClick(id)
    }
  },
  mounted () {
    this.getMusicInfo()
  }
}
</script>
<style lang="scss" scoped>
.music {
    display: flex;
    width: 850px;
    justify-content: center;
    height: 640px;
    margin: 0 auto;
}
</style>
