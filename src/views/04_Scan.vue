<template>
  <section class="scan wrapper">
    <div class="scan__container container ">
      <icon-back />
      <img
        src="../assets/img/feet/04-start.png"
        alt="Feet"
      >
      <p class="scan__text text text_up">
        Don't move
      </p>
      <router-link
        class="btn btn_blue btn_bottom"
        :to="{name: 'completed'}"
      >
        Scan
      </router-link>
    </div>
  </section>
</template>

<script>
import IconBack from '@/components/IconBack.vue';

export default {
  name: 'Scan',
  components: { IconBack },
};
</script>

<style lang="scss" scoped>
  .scan {
    background-color: $bg-pages;
    &__container {
      padding-top: 118px;
    }
    &__text {
      margin-top: 40px;
    }
  }

</style>
