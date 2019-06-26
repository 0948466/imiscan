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
  computed: mapState(['error']),
  watch: {
    error(newValue, oldValue) {
      console.log(newValue);
      console.log(oldValue);

      if (newValue) {
        this.$notify({
          group: 'foo',
          type: 'error',
          duration: 2000,
          title: '<h3 class="notification__title">Error</h3>',
          text: `<p class="notification__text">${this.error}</p>`,
        });

        this.errorChange(false);
      }
    },
  },
  methods: mapMutations(['errorChange']),
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

  .notification {
    &__title {
      margin-bottom: 5px;
      font-size: 18px;
    }
    &__text {
      font-size: 16px;
    }
  }
</style>
