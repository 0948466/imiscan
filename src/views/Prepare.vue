<template>
  <section class="prepare wrapper">
    <div class="container">
      <icon-back />
      <h1 class="prepare__title">
        Prepare for scanning
      </h1>
      <form
        action="#"
        class="prepare__form"
        @submit.prevent="onFormPrepareSubmit"
      >
        <div
          v-for="(item, index) in checkbox"
          :key="index"
          class="checkbox"
        >
          <p class="prepare__checkbox__text">
            {{ item }}
          </p>
        </div>


        <img
          src="../assets/img/scanner/prepare.png"
          alt="Prepare for scanning"
        >
        <button
          type="submit"
          class="btn btn_blue prepare__btn"
        >
          Start scanning
        </button>
      </form>
    </div>
  </section>
</template>

<script>
import IconBack from '@/components/IconBack.vue';

export default {
  name: 'Prepare',
  components: { IconBack },
  data: () => ({
    checkbox: ['Take off your shoes', 'Roll up your pants', 'Stand on the green markers', 'Pull up socks to avoid folds'],
  }),
  methods: {
    onFormPrepareSubmit() {
      this.$router.push({ name: 'find-qr-code' });
    },
  },
};
</script>

<style lang="scss" scoped>
  .prepare {
    background-color: $bg-pages;
    &__title {
      margin-bottom: 30px;
      font-size: 24px;
      font-weight: bold;
      font-style: normal;
      font-stretch: condensed;
      line-height: 1.25;
      letter-spacing: 0.55px;
      color: $color-text;
    }

    &__checkbox__text {
      font-size: 20px;
      font-weight: normal;
      font-style: normal;
      font-stretch: condensed;
      line-height: 1.43;
      letter-spacing: 0.46px;
      color: $color-text;
    }
    &__btn {
      margin-top: 30px;
    }
  }

</style>
