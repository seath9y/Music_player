<template>
    <div class="music-content">
        <!-- <table id='id-table'>
            <tr>
                <th>
                    <img id='id-musicth-1' src="img/t1.png">
                    <div class="title1 t1">歳月-雲流れ</div>
                    <div class="title2 t-1">Foxtail-Grass Studio</div>
                    <div class="title3">なつかぜメモリア</div>
                </th>
                <th>
                    <img id='id-musicth-2' src="img/t2.png">
                    <div class="title1 t2">My First Homage</div>
                    <div class="title2 t-2">Gavin Bryars</div>
                    <div class="title3">Hommages</div>
                </th>
                <th>
                    <img id='id-musicth-3' src="img/t3.png">
                    <div class="title1 t3">梦幻曲</div>
                    <div class="title2 t-3">李云迪</div>
                    <div class="title3">Portrait</div>
                </th>
                <th>
                    <img id='id-musicth-4' src="img/t4.png">
                    <div class="title1 t4">废狱摇篮曲</div>
                    <div class="title2 t-4">東京アクティブNEETs</div>
                    <div class="title3">東方爆音ジャズ9</div>
                </th>
            </tr>
            <tr>
                <th>
                    <img id='id-musicth-1' src="img/t1.png">
                    <div class="title1">歳月-雲流れ</div>
                    <div class="title2">Foxtail-Grass Studio</div>
                    <div class="title3">なつかぜメモリア</div>
                </th>
                <th>
                    <img id='id-musicth-2' src="img/t2.png">
                    <div class="title1">My First Homage</div>
                    <div class="title2">Gavin Bryars</div>
                    <div class="title3">Hommages</div>
                </th>
                <th>
                    <img id='id-musicth-3' src="img/t3.png">
                    <div class="title1">梦幻曲</div>
                    <div class="title2">李云迪</div>
                    <div class="title3">Portrait</div>
                </th>
                <th>
                    <img id='id-musicth-4' src="img/t4.png">
                    <div class="title1">废狱摇篮曲</div>
                    <div class="title2">東京アクティブNEETs</div>
                    <div class="title3">東方爆音ジャズ9</div>
                </th>
            </tr>
            <tr>
                <th>
                    <img id='id-musicth-1' src="img/t1.png">
                    <div class="title1">歳月-雲流れ</div>
                    <div class="title2">Foxtail-Grass Studio</div>
                    <div class="title3">なつかぜメモリア</div>
                </th>
                <th>
                    <img id='id-musicth-2' src="img/t2.png">
                    <div class="title1">My First Homage</div>
                    <div class="title2">Gavin Bryars</div>
                    <div class="title3">Hommages</div>
                </th>
                <th>
                    <img id='id-musicth-3' src="img/t3.png">
                    <div class="title1">梦幻曲</div>
                    <div class="title2">李云迪</div>
                    <div class="title3">Portrait</div>
                </th>
                <th>
                    <img id='id-musicth-4' src="img/t4.png">
                    <div class="title1">废狱摇篮曲</div>
                    <div class="title2">東京アクティブNEETs</div>
                    <div class="title3">東方爆音ジャズ9</div>
                </th>
            </tr>
            <tr>
                <th>
                    <img id='id-musicth-1' src="img/t1.png">
                    <div class="title1">歳月-雲流れ</div>
                    <div class="title2">Foxtail-Grass Studio</div>
                    <div class="title3">なつかぜメモリア</div>
                </th>
                <th>
                    <img id='id-musicth-2' src="img/t2.png">
                    <div class="title1">My First Homage</div>
                    <div class="title2">Gavin Bryars</div>
                    <div class="title3">Hommages</div>
                </th>
                <th>
                    <img id='id-musicth-3' src="img/t3.png">
                    <div class="title1">梦幻曲</div>
                    <div class="title2">李云迪</div>
                    <div class="title3">Portrait</div>
                </th>
                <th>
                    <img id='id-musicth-4' src="img/t4.png">
                    <div class="title1">废狱摇篮曲</div>
                    <div class="title2">東京アクティブNEETs</div>
                    <div class="title3">東方爆音ジャズ9</div>
                </th>
            </tr>
        </table> -->
    </div>
</template>

<script>

export default {
  name: 'MusicContent'

}
</script>

<style lang="scss">
.music-content {
    border-right: 2px solid #d6dadf;
    background: #fff;
    overflow: auto;
    flex: 3;
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

</style>
