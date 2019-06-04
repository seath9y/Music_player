<template>
  <div class="todo">
    <div class="todo-header">
      <div class="h1">待办清单</div>
      <input class="todo-input" type="text/" v-model="inputValue" placeholder="请输入内容">
      <button class="button" id="button-add" type="button" name="button" @click="addClick"></button>
      <hr>
    </div>
    <div class="todo-list">
      <div id="todo">
        <div class="container" v-for="(item,index) of todoList" :key="item.id">
          <div class="todotitle">
            <img class="line" src="img/1.png" alt>
            <button class="button-delete" type="button" name="button" @click="deleteClick(index)"></button>
          </div>
          <section>{{item.value}}</section>
        </div>
        <!-- <div class="container">
          <div class="todotitle">
            <img class="line" src="img/1.png" alt>
            <button class="button-delete" type="button" name="button"></button>
          </div>
          <section>222</section>
        </div>-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Todo',
  data () {
    return {
      todoList: [],
      inputValue: '',
      newid: 0
    }
  },
  methods: {
    save () {
      localStorage.todoList = JSON.stringify(this.todoList)
    },
    load () {
      this.todoList = JSON.parse(localStorage.todoList)
    },
    addClick () {
      if (this.todoList.length === 0) {
        this.newid = 1
      } else {
        this.newid = this.todoList[this.todoList.length - 1].id + 1
      }
      this.todoList.push({
        id: this.newid,
        value: this.inputValue
      })
      this.save()
    },
    deleteClick (index) {
      this.todoList.splice(index, 1)
      this.save()
    }
  },
  mounted () {
    if (localStorage.todoList == null) {
      this.todoList = []
    } else {
      this.load()
    }
  }
}
</script>

<style lang="scss" scoped>
.todo {
  height: 650px;
  position: flex;
  flex-direction: column;
  border-width: 3px;
  border-top-width: 3px;
  border-color: rgb(220, 220, 220);
  border-style: solid;
  display: block;
  margin: 0 auto;
  width: 850px;
  background-color: white;
  overflow: auto;
  display: flex;
  width: 850px;
  height: 640px;
  margin: 0 auto;
}
.todo-header {
  text-align: left;
}
.h1 {
  left: 70px;
  line-height: 10px;
  display: inline-block;
  position: relative;
  font-size: 1.8em;
  top: 6px;
  font-weight: normal;
}

hr {
  border: 0;
  height: 2px;
  size: 3px;
  background-color: rgb(175, 175, 175);
  width: 720px;
  opacity: 0.6;
}

#id-img-todo {
  position: absolute;
  top: 62px;
  left: 498px;
  width: 50px;
  margin: 10px;
}

#button-add {
  display: inline-block;
  position: relative;
  right: -386px;
  top: 13px;
  width: 33px;
  height: 33px;
  background: url("/img/plus.png");
  border-width: 0px;
}
.title {
  padding-left: 50px;
}

section {
  background-color: rgb(250, 250, 250);
  height: 86px;
  padding: 20px 30px;
  overflow: auto;
}

#id-img-todo {
  display: inline-block;
  /* width: 9%; */
  width: 50px;
  margin: 15px;
}

.container {
  position: static;
  display: block;
  margin: 20px;
  width: 98%;
}
#todo {
  text-align: left;
  display: block;
  /* outline: auto; */
  height: 500px;
  margin: 20px 50px;
}
.button-delete {
  border-width: 0px;
  position: relative;
  right: -663px;
  width: 30px;
  height: 30px;
  background: url("/img/del.png");
  bottom: 1px;
}

.todotitle {
  background-color: rgb(246, 252, 252);
  height: 32px;
}

.line {
  display: inline-block;
  position: relative;
  height: 32px;
  bottom: 9px;
  width: 4px;
}

.todo-input {
  border: 1px solid #ccc;
  border-radius: 2px;
  color: #000;
  font-family: "Opan Sans", sans-serif;
  font-size: 1em;
  height: 25px;
  padding: 0 16px;
  transition: background 0.3s ease-in-out;
  width: 30%;
  left: 374px;
  position: relative;
  top: 3px;
}
.todo-input:focus {
  outline: none;
  border-color: #9ecaed;
  box-shadow: 0 0 10px #9ecaed;
}
.button {
  height: 50px;
  width: 292px;
  background: #009dff;
  border: none;
  border-radius: 2px;
  color: #fff;
  cursor: pointer;
  font-family: "Open Sans", sans-serif;
  font-size: 1.2em;
  letter-spacing: 0.1em;
  text-align: center;
  transition: background 0.3s ease-in-out;
}
.button:hover {
  background: #00c8ff;
}

.todo::-webkit-scrollbar {
    /*滚动条整体样式*/
    width: 10px;
    /*高宽分别对应横竖滚动条的尺寸*/
    height: 1px;
}

.todo::-webkit-scrollbar-thumb {
    /*滚动条里面小方块*/
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    background: #aaaaaa;
}

.todo::-webkit-scrollbar-track {
    /*滚动条里面轨道*/
    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    background: #EDEDED;
}
</style>
