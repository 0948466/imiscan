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
};
</script>

<style lang="scss">
  @import "./scss/init";

  #app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    font-family: 'Roboto Condensed', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

</style>
