<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
  @import "./scss/init";

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  font-family: 'Roboto Condensed', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
