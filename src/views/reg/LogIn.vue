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
          v-model="email"
          class="input"
          type="email"
          placeholder="Email"
          required
        >
        <input
          v-model="password"
          class="input"
          type="password"
          placeholder="Password"
          autocomplete="current-password"
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
import { mapActions, mapGetters, mapMutations } from 'vuex';
import IconBack from '@/components/IconBack.vue';

export default {
  name: 'LogInVue',
  components: { IconBack },
  data: () => ({
    email: null,
    password: null,
  }),
  computed: {
    ...mapGetters(['user']),
  },
  mounted() {
    this.userExit();
  },
  methods: {
    ...mapMutations(['userExit']),
    ...mapActions([
      'AUTH_SING_IN',

    ]),
    async onFormSubmit() {
      this.$screenfullInit();
      const params = {
        email: this.email,
        password: this.password,
      };

      await this.AUTH_SING_IN(params);

      if (this.user) {
        this.$router.push({ name: 'prepare' });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
  .log-in {

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
