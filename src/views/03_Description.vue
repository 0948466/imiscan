<template>
  <section class="description wrapper">
    <div class="description__container container ">
      <icon-back />
      <img
        src="../assets/img/feet/03-desc.png"
        alt="Feet"
      >
      <p class="description__text text text_up">
        Don't move
      </p>
      <router-link
        class="btn btn_blue btn_bottom"
        :to="{name: 'scan'}"
      >
        Next
      </router-link>
    </div>
  </section>
</template>

<script>
import IconBack from '@/components/IconBack.vue';

export default {
  name: 'Description',
  components: { IconBack },
};
</script>

<style lang="scss" scoped>
  .description {
    background-color: $bg-pages;
    &__container {
      padding-top: 118px;
    }
    &__text {
      margin-top: 40px;
    }
  }

</style>
