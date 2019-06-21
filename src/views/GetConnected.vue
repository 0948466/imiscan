<template>
  <section class="get-connected wrapper">
    <div class="fget-connected__container container ">
      <icon-back />
      <div class="text-wrap">
        <h1 class="get-connected__title title">
          If you are in a store equipped
          with a 3D Foot Scanner,
          create your 3D profile by
          simply controlling the scanner
          with your smartphone
        </h1>
        <link-for-mobile />
      </div>

      <img
        class="get-connected__img"
        src="../assets/img/scanner/get-connected.png"
        alt="Prepare for scanning"
      >
      <router-link
        class="btn btn_blue btn_bottom"
        :to="{name: 'prepare'}"
      >
        Get Connected
      </router-link>
    </div>
  </section>
</template>

<script>
import IconBack from '@/components/IconBack.vue';
import LinkForMobile from '@/components/LinkForMobile.vue';

export default {
  name: 'GetConnected', components: { LinkForMobile, IconBack },
};
</script>

<style lang="scss" scoped>
 .get-connected {
   background-color: $bg-pages;
   &__title {
     margin-bottom: 35px;
   }
   &__img {
     margin-top: auto;
     margin-bottom: 29px;
   }
 }
</style>
