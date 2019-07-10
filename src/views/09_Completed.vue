<template>
  <section class="completed wrapper">
    <div class="completed__container container ">
      <icon-back />
      <div class="img-container">
        <img
          src="../assets/img/feet/09-completed.png"
          alt="Feet"
        >
      </div>
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
      margin-bottom: 20px;
      text-align: center;
    }
  }

</style>
