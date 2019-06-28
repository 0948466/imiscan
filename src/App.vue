<template>
  <div id="app">
    <router-view />
    <notify />
  </div>
</template>

<script>
import Notify from '@/components/Notify.vue';

export default {
  name: 'App',
  components: { Notify },
  beforeCreate() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    window.addEventListener('resize', () => {
      vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
  },
};
</script>

<style lang="scss">
  @import "./scss/init";

  #app {
    display: flex;
    flex-direction: column;
    height: 100vh;
    height: calc(var(--vh, 1vh) * 100);
    background-color: $bg-pages;
    font-family: 'Roboto Condensed', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

</style>

<style>
  .checkbox:checked+label::after {
    background-image: url("~@/assets/img/icon/icon-select.png");
  }
</style>
