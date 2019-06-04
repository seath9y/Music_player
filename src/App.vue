<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Music</router-link> |
      <router-link to="/todo">Todo</router-link> |
      <router-link to="/other">Other</router-link>
    </div>
    <div class="session">
      <router-view/>
    </div>
    <div class="footer">
      <Footer/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    Footer
  }
}
</script>

<style lang="scss" scoped>
body {
    background-color: rgb(242, 242, 242);
    height: 670px;
}

.footer {
  // display: flex;
  width: 850px;
  justify-content: center;
  margin: 0 auto;
}
@media screen and (max-width: 1025px) {
    .footer {
          width: 100%;
    }
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 23px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

</style>
