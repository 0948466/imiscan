<template>
  <section class="find-qr-code wrapper">
    <div class="find-qr-code__container container ">
      <icon-back />
      <img
        src="../assets/img/scanner/find-qr-code.png"
        alt="Prepare for scanning"
      >
      <p class="find-qr-code__text text text_up">
        Scan QR Code
      </p>
      <router-link
        class="btn btn_blue btn_bottom"
        :to="{name: 'scan-qr-code'}"
      >
        Next
      </router-link>
    </div>
  </section>
</template>

<script>
import IconBack from '@/components/IconBack.vue';

export default {
  name: 'FindQrCode',
  components: { IconBack },
};
</script>

<style lang="scss" scoped>
  .find-qr-code {
    &__container {
      padding-top: 118px;
    }
    &__text {
      margin-top: 40px;
    }
  }

</style>
