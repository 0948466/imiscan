<template>
  <section class="log-in wrapper">
    <div class="container">
      <icon-back />
      <router-link
        class="btn btn_blue"
        :to="{name: 'log-in'}"
      >
        Log in
      </router-link>
    </div>
  </section>
</template>

<script>
import IconBack from '@/components/IconBack.vue';

export default {
  name: 'LogInVue',
  components: { IconBack },
};
</script>

<style scoped>

</style>
