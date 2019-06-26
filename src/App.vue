<template>
  <div id="app">
    <router-view />
    <notifications group="foo" />
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'App',
  computed: mapState(['error', 'user']),
  watch: {
    error(newValue) {
      if (newValue) {
        this.showNotify('error', 'Error', this.error);

        this.errorChange(false);
      }
    },
    user(newValue) {
      if (newValue) {
        this.showNotify('success', 'Success', 'login successful');
      }
    },
  },

  methods: {
    ...mapMutations(['errorChange']),
    showNotify(type, title, text) {
      this.$notify({
        group: 'foo',
        type,
        duration: 2000,
        title,
        text,
      });
    },
  },

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

  .notification-title {
    margin-bottom: 5px;
    font-size: 18px;
  }

  .notification-content {
    font-size: 16px;
  }
</style>
