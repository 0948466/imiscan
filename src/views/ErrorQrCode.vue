<template>
  <section class="error-qr-code wrapper">
    <div class="error-qr-code__container container ">
      <icon-back />
      <div class="text-wrap">
        <h2 class="error-qr-code__title-small title-small">
          Error
        </h2>
        <h1 class="error-qr-code__title title">
          QR Code is not valid
        </h1>
        <link-for-mobile />
      </div>

      <router-link
        class="btn btn_blue btn_bottom"
        :to="{name: 'scan-qr-code'}"
      >
        Back
      </router-link>
    </div>
  </section>
</template>

<script>
import IconBack from '@/components/IconBack.vue';
import LinkForMobile from '@/components/LinkForMobile.vue';

export default {
  name: 'ErrorQrCode', components: { LinkForMobile, IconBack },
};
</script>

<style lang="scss" scoped>
  .error-qr-code {
    &__container {
      padding-top: 112px;
    }
    &__title-small {
      margin-bottom: 10px;
    }
    &__title {
      margin-bottom: 70px;
    }
  }
</style>
