<template>
  <section class="log-in wrapper">
    <div class="log-in__container container">
      <icon-back />
      <form
        action="#"
        class="log-in__form"
        @submit.prevent="onFormSubmit"
      >
        <input
          class="input"
          type="text"
          placeholder="Login"
          required
        >
        <input
          class="input"
          type="password"
          placeholder="Password"
          required
        >
        <router-link
          class="link-small"
          :to="{name: 'restore'}"
        >
          Forgot your password?
        </router-link>
        <button
          type="submit"
          class="btn btn_blue log-in__btn"
        >
          Log in
        </button>
      </form>
    </div>
  </section>
</template>

<script>
import IconBack from '@/components/IconBack.vue';

export default {
  name: 'LogInVue',
  components: { IconBack },
  methods: {
    onFormSubmit() {
      console.log(123);
      this.$router.push({ name: 'get-connected' });
    },
  },
};
</script>

<style lang="scss" scoped>
  .log-in {
    background-color: $bg-pages;
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
        margin-bottom: 23 px;
      }
    }
    &__btn {
      margin-top: 50px;
    }
  }

</style>
