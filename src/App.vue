<template>
  <header>
    <navbar-top />
  </header>
  <main>
    <router-view />
  </main>
  <footer class="footer">
    <h4 class="text-secondary text center p-4">
      <span>
        Insert smart remark here!
      </span>
    </h4>
  </footer>
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
