<template>
  <div
    class="
      home
      flex-grow-1
      d-flex
      flex-column
      align-items-center
      justify-content-center
    "
  >
    <img class="my-5" src="../assets/img/autobot.png" />
    <img class="my-5" src="../assets/img/decepticon.png" />
  </div>
</template>
<script>
export default {
  name: "HomePage",
};
</script>
<style scoped>
div.home {
  text-align: center;
  user-select: none;

  /* position: fixed; */
  width: 100%;



  display: flex;
  overflow-x: hidden;
  display: flex;
  height: 900.2px;
  flex-grow: 1;
  background-image: url(../assets/img/homebg.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
img {
  height: 200px;
  width: 200px;
}
 img:hover{
  transition: transform 2s;
  transform: rotateY(180deg);
}
</style>