<template>
  <section class="start wrapper">
    <div class="container start__container">
      <h1 class="start__title">
        imiscan
      </h1>
      <p class="start__text">
        Mobile Foot Scanner
      </p>
      <div class="start__btn-wrap">
        <router-link
          class="btn btn_white"
          :to="{name: 'sing-in'}"
        >
          Sing Up
        </router-link>
        <router-link
          class="btn btn_blue"
          :to="{name: 'log-in'}"
        >
          Log in
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'StartVue',
};
</script>

<style lang="scss" scoped>
  .start {
    background-color: $color-main;
    &__container {
      background: url("../assets/img/bg/start-bg.png") no-repeat bottom;
      background-size: 75%;
    }
    &__title {
      margin-bottom: 15px;
      font-family: FiraSans;
      font-size: 50px;
      font-weight: bold;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.29;
      letter-spacing: 1.2px;
      color: #fff;
    }
    &__text {
      margin-bottom: 20px;
      font-size: 19.5px;
      font-weight: bold;
      font-style: normal;
      font-stretch: condensed;
      line-height: 1.31;
      letter-spacing: 0.4px;
      text-align: center;
      color: #ffffff;
    }
    &__btn-wrap {
      display: flex;
      margin-top: auto;
      .btn {
        width: 137px;
        &:first-child {
          margin-right: 5px;
        }
      }

    }
  }

</style>
