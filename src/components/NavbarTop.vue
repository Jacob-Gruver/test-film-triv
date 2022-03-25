<template>
    <nav class="navbar navbar-expand-lg">
      <div>
        <button type="button" class="btn btn-secondary m-2 p-2">
          <router-link to="/">Home</router-link>
        </button>
        <button type="button" class="btn btn-secondary m-2 p-2">
          <router-link to="/aboutpage">About</router-link>
        </button>
      </div>
  </nav>
</template>
<script>
export default {
    name: 'NavbarTop'
    
}
</script>
<style scoped>
nav {
    background-color: aqua;

}
/* .dropdown-menu {
  user-select: none;
  display: block;
  transform: scale(0);
  transition: all 0.15s linear;
}
.dropdown-menu.show {
  transform: scale(1);
}
.hoverable {
  cursor: pointer;
}
a:hover {
  text-decoration: none;
}
.nav-link{
  text-transform: uppercase;
}
.nav-item .nav-link.router-link-exact-active{
  color: var(--primary);
} */
</style>