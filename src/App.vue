<template>
  <header>
    <navbar-top />
  </header>
  <main id="router-view-slot">
    <router-view />
  </main>
  <footer class="footer">
    <h4 class="text-danger text-center bg-dark p-4">
      <span class="mx-2 text-warning"><img src="./assets/img/tfword.gif"></span>
      <!-- <span>
        Insert smart remark here!
      </span> -->
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
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  scroll-behavior: smooth;
}

main#router-view-slot{
  background: green;
  flex-grow: 1;
}

footer {
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60px;
}
/* #app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: $body-bg;
  overflow-x: hidden;
  scroll-behavior: smooth;
}
  */
</style>
