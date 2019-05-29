<template>
    <div class="todo-list">
      <div id="todo">

      </div>
    </div>
</template>

<script>

export default {
  name: 'TodoList'

}
</script>

<style lang="scss">
#todo {
    display: block;
    /* outline: auto; */
    height: 500px;
    margin: 20px 50px;
}

.button-edit {
    border-width: 0px;
    position: relative;
    right: -610px;
    width: 30px;
    height: 30px;
    // background: url('img/ed.png');
    bottom: 1px;
}

.button-confirm {
    border-width: 0px;
    position: relative;
    right: -610px;
    width: 30px;
    height: 30px;
    // background: url('img/com.png');
    bottom: 1px;
}

.button-delete {
    border-width: 0px;
    position: relative;
    right: -636px;
    width: 30px;
    height: 30px;
    // background: url('img/del.png');
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
    bottom: 1px;
    width: 4px;
}

</style>
