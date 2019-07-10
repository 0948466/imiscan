<template>
  <section class="log-in wrapper">
    <div class="log-in__container container">
      <icon-back />

      <form
        action="#"
        class="log-in__form"
        @submit.prevent="onFormSubmit"
      >
        <h1 class="log-in__title title">
          If you already have an account with &nbsp; &nbsp; The &nbsp; &nbsp; Online
          &nbsp; &nbsp; &nbsp; Store,
          <br>
          please log in
        </h1>
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

      <div class="log-in__for-sing-up">
        <p class="text log-in__text">
          If you are a new customer please sign up
        </p>
        <router-link
          :to="{ name: 'sing-up' }"
          class="btn btn_white log-in__link-sing-up"
        >
          Sing up
        </router-link>
      </div>
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
  WARNING_CHANGE,
  QR_CODE_CHANGE,
  SCAN_COUNT_CHANGE,
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
  created() {
    if (localStorage.getItem('user')) {
      this.$store.dispatch(USER_EXIT);
    }
  },
  mounted() {
    this[QR_CODE_CHANGE](null);
    this[SCAN_COUNT_CHANGE](0);
    const inputs = document.querySelectorAll('input');
    const appInner = document.querySelector('.app__inner');
    setTimeout(() => {
      inputs.forEach((input) => {
        input.addEventListener('focus', () => {
          setTimeout(() => {
            const inputTop = input.getBoundingClientRect().top;
            const appInnerTop = appInner.getBoundingClientRect().top;
            appInner.style.transform = `translateY(-${inputTop - appInnerTop - 100}px)`;
          }, 0);
        });
        input.addEventListener('blur', () => {
          appInner.style.transform = 'translateY(0)';
        });
      });
    }, 500);
  },
  methods: {
    ...mapMutations([USER_EXIT, WARNING_CHANGE, QR_CODE_CHANGE, SCAN_COUNT_CHANGE]),
    ...mapActions([
      AUTH_SING_IN,
      USER_RESTORE,
      USER_EXIT,
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
      if (this.email) {
        const params = {
          email: this.email.trim(),
        };
        await this[USER_RESTORE](params);
      } else {
        this.$store.commit(WARNING_CHANGE, 'You need to enter email');
      }
    },
  },
};
</script>

<style lang="scss" scoped>
  .log-in {

    &__container {
      padding-top: 15vh;
    }

    &__form {
      display: flex;
      flex-direction: column;
      margin-bottom: 40px;
      max-width: 252px;
      width: 100%;
    }

    &__title {
      margin-bottom: 30px;
      text-align: justify;
      letter-spacing: .02em;

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
    &__for-sing-up {
      margin-top: auto;
    }
    &__text {
      margin-bottom: 25px;
      letter-spacing: 0.32px;
      color: #515151;
    }
    &__link-sing-up {
      border: solid 1px #959595;
    }
  }

</style>
