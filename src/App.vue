<template>
  <keep-alive :include="$store.state.cachedViews">
    <div id="app">
      <!-- <nav-bar></nav-bar> -->
      <router-view />
      <!-- <tab-bar></tab-bar> -->
    </div>
  </keep-alive>
</template>

<script>
import NavBar from './layout/NavBar'
import TabBar from './layout/TabBar'

import axios from 'axios'

export default {
  name: 'App',
  data() {
    return {}
  },

  components: {
    NavBar,
    TabBar
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
