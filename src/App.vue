<template>
  <div>
    <navbar-top />
  </div>
  <router-view></router-view>
</template>

<script>
import NavbarTop from './components/NavbarTop.vue'

export default {
  name: 'App',
  components: {
    NavbarTop
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
