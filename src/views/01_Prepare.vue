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
          class="checkbox-wrap prepare__checkbox-wrap"
        >
          <input
            :id="`prepare${index}`"
            v-model="item.value"
            class="checkbox"
            type="checkbox"
          >
          <label :for="`prepare${index}`">
            {{ item.text }}
          </label>
        </div>
        <img
          class="prepare__img"
          src="../assets/img/scanner/prepare.png"
          alt="Prepare for scanning"
        >
        <button
          type="submit"
          class="btn btn_blue btn_bottom prepare__btn "
        >
          Start scanning
        </button>
      </form>
    </div>
  </section>
</template>

<script>
import IconBack from '@/components/IconBack.vue';
import { WARNING_CHANGE } from '../store/mutation-types';

export default {
  name: 'Prepare',
  components: { IconBack },
  data: () => ({
    checkbox: [
      {
        text: 'Take off your shoes',
        value: false,
      },
      {
        text: 'Roll up your pants',
        value: false,
      },
      {
        text: 'Stand on the green markers',
        value: false,
      },
      {
        text: 'Pull up socks to avoid folds',
        value: false,
      },
    ],
  }),
  methods: {
    onFormPrepareSubmit() {
      if (this.checkbox.find(item => !item.value)) {
        this.$store.commit(WARNING_CHANGE, 'You must select all checkbox');
      } else {
        this.$router.push({ name: 'find-qr-code' });
      }
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

    &__form {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
    }

    &__img {
      margin-top: auto;
      margin-bottom: 20px;
    }
    &__checkbox-wrap {
      margin-left: 25px;
    }

    &__btn {
    }
  }

</style>
<style>
  .checkbox:checked+label::after {
    background-image: url("../assets/img/icon/icon-select.png");
  }
</style>
