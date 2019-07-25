<template>
  <section class="get-connected wrapper">
    <div class="get-connected__container container ">
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
      <a
        href="/start"
        class="btn btn_blue btn_bottom"
        @click.prevent="onGetConnectBtnClick"
      >
        Get Connected
      </a>
    </div>
  </section>
</template>

<script>
import LinkForMobile from '@/components/LinkForMobile.vue';

export default {
  name: 'GetConnected',
  components: { LinkForMobile },
  methods: {
    onGetConnectBtnClick() {
      this.$screenfullInit();
      if (this.$store.getters.user) {
        this.$router.push({ name: 'prepare' });
      } else {
        this.$router.push({ name: 'log-in' });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
 .get-connected {
   background-color: $bg-pages;
   &__title {
     margin-bottom: 5vh;
     text-align: justify;
   }
   &__img {
     padding: 20px 0;
     margin-top: auto;
   }
 }
</style>
