<template>
  <section
    v-if="showQuit"
    class="quit"
  >
    <div class="quit__inner container">
      <h2 class="title-small quit__title">
        Are you sure
        <br>
        You want to quit scanning?
      </h2>
      <div class="quit__btn-wrap">
        <a
          href="/log-in"
          class="btn btn_blue"
          @click.prevent="onBtnYesClick"
        >
          Yes
        </a>
        <a
          href="/"
          class="btn btn_white quit__btn-cancel"
          @click.prevent="onBtnCancelClick"
        >
          No
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import {
  SHOW_QUIT_CHANGE,
} from '@/store/mutation-types';

export default {
  name: 'Quit',
  computed: {
    ...mapGetters([
      'showQuit',
    ]),
  },
  methods: {
    onBtnYesClick() {
      this.$store.commit(SHOW_QUIT_CHANGE, false);
      this.$router.push({ name: 'find-qr-code' });
    },
    onBtnCancelClick() {
      this.$store.commit(SHOW_QUIT_CHANGE, false);
    },
  },
};
</script>

<style lang="scss" scoped>
  .quit {
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
    &__btn-wrap {
      display: flex;
      .btn {
        width: 137px;
        &:first-child {
          margin-right: 5px;
        }
      }

    }
    &__btn-cancel {
      color: #343333;
      border: solid 2px #3aa0b3;
    }
  }
</style>
