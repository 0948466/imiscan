<template>
  <div id="app">
    <router-view />
    <Notify />
    <Quit />
  </div>
</template>

<script>
import {
  SHOW_QUIT_CHANGE,
} from '@/store/mutation-types';
import Notify from '@/components/Notify.vue';
import Quit from '@/components/Quit.vue';

export default {
  name: 'App',
  components: { Quit, Notify },
  beforeCreate() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    window.addEventListener('resize', () => {
      vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    });

    window.onpopstate = (event) => {
      if (this.$store.getters.qrCode) {
        this.$router.go(1);
        event.preventDefault();
        this.$store.commit(SHOW_QUIT_CHANGE, true);
      }
    };
  },
};
</script>

<style lang="scss">
  @import "./scss/init";

  #app {
    position: relative;
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
