<template>
  <section class="sing-up wrapper">
    <div class="sing-up__container container">
      <icon-back />
      <form
        action="#"
        class="log-in__form"
        @submit.prevent="onFormSingUpSubmit"
      >
        <input
          class="input"
          type="text"
          placeholder="First name"
          required
        >
        <input
          class="input"
          type="text"
          placeholder="Last name"
          required
        >
        <input
          class="input"
          type="email"
          placeholder="Email"
          required
        >
        <input
          class="input"
          type="tel"
          placeholder="Phone number"
          required
        >
        <input
          class="input"
          type="password"
          placeholder="Password"
          autocomplete="new-password"
          required
        >
        <input
          class="input"
          type="password"
          placeholder="Confirm password"
          autocomplete="new-password"
          required
        >
        <button
          type="submit"
          class="btn btn_blue log-in__btn"
        >
          Sign up
        </button>
      </form>
    </div>
  </section>
</template>

<script>
import IconBack from '@/components/IconBack.vue';

export default {
  name: 'SingUpVue',
  components: { IconBack },
  methods: {
    onFormSingUpSubmit() {
      this.$screenfullInit();
      this.$router.push({ name: 'prepare' });
    },
  },
};
</script>

<style lang="scss" scoped>
  .sing-up {
    &__container {
      padding-top: 123px;
    }

    &__form {
      display: flex;
      flex-direction: column;
      max-width: 252px;
      width: 100%;
    }

    .input {
      margin-bottom: 17px;

      &:not(:last-of-type) {
        margin-bottom: 23px;
      }
    }

    &__btn {
      margin-top: 50px;
    }
  }

</style>
