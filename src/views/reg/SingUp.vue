<template>
  <section class="sing-up wrapper">
    <div class="sing-up__container container">
      <icon-back />
      <form
        action="#"
        class="sing-up__form"
        @submit.prevent="onFormSingUpSubmit"
      >
        <input
          v-model="name"
          class="input"
          type="text"
          placeholder="First name"
          required
        >
        <input
          v-model="surname"
          class="input"
          type="text"
          placeholder="Last name"
          required
        >
        <input
          v-model="email"
          class="input"
          type="email"
          placeholder="Email"
          required
        >
        <input
          class="input"
          type="tel"
          placeholder="Phone number"
        >
        <input
          v-model="password1"
          class="input"
          type="password"
          placeholder="Password"
          autocomplete="new-password"
          required
        >
        <input
          v-model="password2"
          class="input"
          type="password"
          placeholder="Confirm password"
          autocomplete="new-password"
          required
        >
        <div class="sing-up__sex-wrap">
          <input
            id="sex1"
            v-model="sex"
            class="hidden"
            type="radio"
            name="sex"
            value="1"
            hidden
          >
          <label
            class="sing-up__label-sex"
            :class="{ 'sing-up__label-sex_active': sex === '1' }"
            for="sex1"
          >MALE</label>
          <input
            id="sex2"
            v-model="sex"
            class="hidden"
            type="radio"
            name="sex"
            value="2"
            hidden
          >
          <label
            class="sing-up__label-sex"
            :class="{ 'sing-up__label-sex_active': sex === '2' }"
            for="sex2"
          >FEMALE</label>
        </div>

        <select
          v-model="age"
          class="select sing-up__select"
          required
        >
          <option
            disabled
            value=""
          >
            Select one of the options
          </option>
          <option value="1">
            11-16
          </option>
          <option value="2">
            16-25
          </option>
          <option value="3">
            25-35
          </option>
          <option value="4">
            35-45
          </option>
          <option value="5">
            45+
          </option>
        </select>

        <div class="sing-up__accept">
          <p class="sing-up__accept__text">
            I have read and accepted <a href="#">Privacy Statement</a>
          </p>
          <div class="checkbox-wrap sing-up__checkbox-wrap">
            <input
              id="accept"
              v-model="accept"
              class="checkbox"
              type="checkbox"
            >
            <label for="accept" />
          </div>
        </div>
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
import { mapGetters, mapActions } from 'vuex';
import IconBack from '@/components/IconBack.vue';
import {
  AUTH_REGISTER,
  WARNING_CHANGE,
  USER_GET,
} from '@/store/mutation-types';

export default {
  name: 'SingUpVue',
  components: { IconBack },
  data: () => ({
    email: '',
    name: '',
    surname: '',
    password1: '',
    password2: '',
    sex: null,
    age: null,
    accept: true,
  }),
  computed: {
    ...mapGetters(['user']),
  },
  mounted() {
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
    ...mapActions([
      AUTH_REGISTER,
      USER_GET,
    ]),
    async onFormSingUpSubmit() {
      if (!this.password1 || (this.password1 !== this.password2)) {
        this.$store.commit(WARNING_CHANGE, 'You need to enter the same passwords');
        return;
      }
      if (!this.sex) {
        this.$store.commit(WARNING_CHANGE, 'Please select your gender');
        return;
      }
      if (!this.accept) {
        this.$store.commit(WARNING_CHANGE, 'You must adopt Privacy Statement');
        return;
      }

      const params = {
        email: this.email.trim(),
        password: this.password1.trim(),
        surname: this.surname.trim(),
        sex: this.sex,
        age: this.age,
      };

      const resultRegister = await this[AUTH_REGISTER](params);
      if (!resultRegister) {
        return;
      }
      await this[USER_GET]();

      if (this.user) {
        this.$screenfullInit();
        this.$router.push({ name: 'prepare' });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
  .sing-up {
    &__container {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &__form {
      display: flex;
      flex-direction: column;
      max-width: 252px;
      width: 100%;
    }

    .input {
      margin-bottom: 23px;
    }
    &__sex-wrap {
      display: flex;
      margin-bottom: 23px;
      border-radius: 3px;
      border: solid 1px #898989;
      background-color: #f1f1f1;
    }

    &__label-sex {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-grow: 1;
      width: 49%;
      height: 31px;
      font-size: 14px;
      font-weight: normal;
      font-style: normal;
      font-stretch: condensed;
      line-height: 1.82;
      letter-spacing: 0.32px;
      text-align: center;
      color: #a4a4a4;
      cursor: pointer;

      &:first-of-type {
        border-right: solid 1px #898989;
      }
      &_active {
        background-color: #4b9fb5;
        color: #ffffff;
      }
    }

    &__accept {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 22px;
    }

    &__accept__text {
      margin-right: 11px;
      font-size: 11.5px;
      font-weight: normal;
      font-style: normal;
      font-stretch: condensed;
      line-height: 1.83;
      letter-spacing: 0.26px;
      text-align: center;
      color: #515151;
      a {
        color: inherit;
        text-decoration: underline;
      }
    }
    &__checkbox-wrap {
      width: 20px;
      label::after,
      label::before {
        margin-right: 0;
      }
    }

    &__select {
      margin-bottom: 23px;
    }

    &__btn {
      margin-top: 50px;
    }
  }

</style>
