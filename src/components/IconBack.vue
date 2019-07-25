<template>
  <a
    href="/"
    class="icon-back"
    @click="onIconBackClick"
  />
</template>

<script>
import {
  SHOW_QUIT_CHANGE,
  QR_CODE_DELETE,
} from '@/store/mutation-types';

export default {
  name: 'IconBack',
  methods: {
    onIconBackClick(e) {
      e.preventDefault();
      switch (this.$router.currentRoute.name) {
        case 'log-in':
          this.$router.push({ name: 'get-connected' });
          return;
        case 'sing-up':
          this.$router.push({ name: 'log-in' });
          return;
        case 'prepare':
          this.$router.push({ name: 'log-in' });
          return;
        case 'find-qr-code':
          this.$router.push({ name: 'prepare' });
          return;
        case 'scan-qr-code':
          this.$router.push({ name: 'find-qr-code' });
          return;
        default:
          this.$store.commit(SHOW_QUIT_CHANGE, true);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
  .icon-back {
    position: absolute;
    top: 15px;
    left: 15px;
    display: block;
    padding: 10px;
    width: 12px;
    height: 20px;
    background: url("../assets/img/icon/icon-back.png") no-repeat center;
    background-size: 12px 20px;
    outline: none;
  }
</style>
