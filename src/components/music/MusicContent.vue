<template>
    <div class="music-content">
        <table id='id-table'>
            <tr>
                <th v-for="item of musicList" :key='item.title1' >
                    <img id='id-musicth-1' :src="item.img" @click='contentMusicClick(item.id)'>
                    <div class="title1 t1">{{item.title1}}</div>
                    <div class="title2 t-1">{{item.title2}}</div>
                    <div class="title3">{{item.title3}}</div>
                </th>
            </tr>
            <tr>
                <th v-for="item of musicList" :key='item.title2' >
                    <img id='id-musicth-1' :src="item.img" @click='contentMusicClick(item.id)'>
                    <div class="title1 t1">{{item.title1}}</div>
                    <div class="title2 t-1">{{item.title2}}</div>
                    <div class="title3">{{item.title3}}</div>
                </th>
            </tr>
            <tr>
                <th v-for="item of musicList" :key='item.title3' >
                    <img id='id-musicth-1' :src="item.img" @click='contentMusicClick(item.id)'>
                    <div class="title1 t1">{{item.title1}}</div>
                    <div class="title2 t-1">{{item.title2}}</div>
                    <div class="title3">{{item.title3}}</div>
                </th>
            </tr>
            <tr>
                <th v-for="item of musicList" :key='item.url' >
                    <img id='id-musicth-1' :src="item.img" @click='contentMusicClick(item.id)'>
                    <div class="title1 t1">{{item.title1}}</div>
                    <div class="title2 t-1">{{item.title2}}</div>
                    <div class="title3">{{item.title3}}</div>
                </th>
            </tr>

        </table>
    </div>
</template>

<script>

export default {
  name: 'MusicContent',
  props: {
    musicList: Array
  },
  methods: {
    contentMusicClick (index) {
      this.$emit('contentMusicClick', index)
    }
  }
}
</script>

<style lang="scss" scoped>
.music-content {
    border-right: 2px solid #d6dadf;
    background: #fff;
    overflow: auto;
    flex: 3;
}

.music-content::-webkit-scrollbar {
    /*滚动条整体样式*/
    width: 10px;
    /*高宽分别对应横竖滚动条的尺寸*/
    height: 1px;
}

.music-content::-webkit-scrollbar-thumb {
    /*滚动条里面小方块*/
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    background: #aaaaaa;
}

.music-content::-webkit-scrollbar-track {
    /*滚动条里面轨道*/
    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    background: #EDEDED;
}

table {
    font-size: small;
    margin: auto;
}

th {
    padding: 13px 7px;
}

table img {
    border-radius: 5px;
    cursor: pointer;
}

.title1 {
    color: rgb(144, 153, 158);
}

.title2 {
    color: rgb(198, 202, 205);
    font-size: 70%;
    font-weight: normal;
}

.title3 {
    color: rgb(198, 202, 205);
    font-size: 70%;
    font-weight: normal;
}

</style>
