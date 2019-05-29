<template>
    <div class="todo-header">
      <img id='id-img-todo' src="/src/assets/img/todo.png" alt="">
      <div class="h1">待办清单</div>
      <button id="button-add" type="button" name="button"></button>
      <hr>
    </div>
</template>

<script>

export default {
  name: 'TodoHeader'

}
</script>

<style lang="scss">
.h1 {
    display: inline-block;
    position: relative;
    font-size: 1.8em;
    top: 0px;
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
    display: inline-block;
    /* width: 9%; */
    width: 50px;
    margin: 15px;
}

#button-add {
    display: inline-block;
    position: relative;
    right: -544px;
    top: -8px;
    width: 33px;
    height: 33px;
    background: url('/src/assets/img/plus.png');
    border-width: 0px;
}
</style>
