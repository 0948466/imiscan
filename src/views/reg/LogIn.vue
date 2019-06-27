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
        <a
          href="#"
          class="link-small log-in__link-restore"
          @click.prevent="onRestoreLinkClick"
        >
          Forgot your password?
        </a>
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
import {
  USER_EXIT,
  USER_RESTORE,
  AUTH_SING_IN,
  WARNING_CHANGE
} from '@/store/mutation-types';

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
    this[USER_EXIT]();
  },
  methods: {
    ...mapMutations([USER_EXIT, WARNING_CHANGE]),
    ...mapActions([
      'AUTH_SING_IN',
      'USER_RESTORE',
    ]),
    async onFormSubmit() {
      this.$screenfullInit();
      const params = {
        email: this.email.trim(),
        password: this.password.trim(),
      };

      await this[AUTH_SING_IN](params);

      if (this.user) {
        this.$router.push({ name: 'prepare' });
      }
    },
    async onRestoreLinkClick() {
      // TODO валидация email
      if (this.email) {
        const params = {
          email: this.email.trim(),
        };
        await this[USER_RESTORE](params);
      } else {
        this.$store.commit(WARNING_CHANGE, 'You must specify your mail');
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

    &__link-restore {
      padding-left: 10px;
      text-align: left;
    }

    &__btn {
      margin-top: 50px;
    }
  }

</style>
