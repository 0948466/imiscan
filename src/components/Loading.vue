<template>
  <section
    class="loading"
  >
    <div class="loading__inner container">
      <h2 class="title-small loading__title">
        Scanning in progress ...
      </h2>
      <p class="loading__text">
        {{ seconds }}
      </p>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import {
  LOADING,
} from '@/store/mutation-types';

export default {
  name: 'Loading',
  data: () => ({
    seconds: 3,
  }),
  computed: {
    ...mapGetters([
      'isLoading',
    ]),
  },
  mounted() {
    this.loading();
  },
  methods: {
    loading() {
      if (!this.seconds) {
        this.$store.commit(LOADING, false);
        return;
      }

      setTimeout(() => {
        this.seconds = this.seconds - 1;
        this.loading();
      }, 1000);
    },
  },
};
</script>

<style lang="scss" scoped>
  .loading {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, .61);

    &__inner {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 50%;
      left: 50%;
      height: 301px;
      transform: translate(-50%, -50%);
      box-shadow: 0 7px 22.3px 1.7px rgba(0, 0, 0, 0.35);
      background-color: #fff;
    }

    &__title {
      margin-bottom: 50px;
      text-align: center;
    }

    &__text {
      font-size: 45px;
      font-weight: normal;
      font-style: normal;
      font-stretch: condensed;
      line-height: 1.3;
      letter-spacing: 0.023em;
      color: $color-text;
    }
  }
</style>
