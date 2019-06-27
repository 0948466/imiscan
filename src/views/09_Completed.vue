<template>
  <section class="completed wrapper">
    <div class="completed__container container ">
      <icon-back />
      <img
        src="../assets/img/feet/09-completed.png"
        alt="Feet"
      >
      <p class="completed__text text text_up">
        Congratulations
        <br>
        Scanning completed
      </p>
      <a
        class="btn btn_blue btn_bottom"
        href="/"
      >
        Choose best fit
      </a>
    </div>
  </section>
</template>

<script>
import IconBack from '@/components/IconBack.vue';

export default {
  name: 'Completed',
  components: { IconBack },
};
</script>

<style lang="scss" scoped>
  .completed {
    &__container {
      padding-top: 118px;
    }
    &__text {
      margin-top: 40px;
    }
  }

</style>
