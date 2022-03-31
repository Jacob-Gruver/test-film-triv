<template>
  <header>
    <navbar-top />
  </header>
  <main id="router-view-slot">
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

<style lang>

/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
}

main#router-view-slot{
  background: green;
  flex-grow: 1;
} */
</style>
