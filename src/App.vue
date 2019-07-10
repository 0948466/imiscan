<template>
  <div id="app">
    <div class="app__inner">
      <router-view />
      <Notify />
      <Quit />
      <Loading v-if="isLoading" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import {
  SHOW_QUIT_CHANGE,
  QR_CODE_DELETE,
} from '@/store/mutation-types';
import Notify from '@/components/Notify.vue';
import Quit from '@/components/Quit.vue';
import Loading from '@/components/Loading.vue';

export default {
  name: 'App',
  components: { Loading, Quit, Notify },
  computed: {
    ...mapGetters([
      'qrCode',
      'isLoading',
    ]),
  },
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
        this.$store.commit(QR_CODE_DELETE);
      }
    };
  },
};
</script>

<style lang="scss">
  @import "./scss/init";
  @import "~nprogress/nprogress.css";

  #app {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;
    min-height: calc(var(--vh, 1vh) * 100);
    background-color: $bg-pages;
    font-family: 'Roboto Condensed', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .app__inner {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 95vh;
    min-height: calc(var(--vh, 1vh) * 95);
  }

</style>

<style>
  .checkbox:checked + label::after {
    background-image: url("~@/assets/img/icon/icon-select.png");
  }

  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  ::-webkit-scrollbar-button {
    width: 0px;
    height: 0px;
  }

  ::-webkit-scrollbar-thumb {
    background: #2A65B0;
    border: 0px none #2A65B0;
    border-radius: 50px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #4c88e8;
  }

  ::-webkit-scrollbar-thumb:active {
    background: #4a7ccc;
  }

  ::-webkit-scrollbar-track {
    background: #132A54;
    border: 0px none #132A54;
    border-radius: 0px;
  }

  ::-webkit-scrollbar-track:hover {
    background: #132A54;
  }

  ::-webkit-scrollbar-track:active {
    background: #060F1D;
  }

  ::-webkit-scrollbar-corner {
    background: transparent;
  }
</style>
