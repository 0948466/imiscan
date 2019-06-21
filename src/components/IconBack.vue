<template>
  <a
    href="/"
    class="icon-back"
    @click="onIconBackClick"
  />
</template>

<script>
export default {
  name: 'IconBack',
  methods: {
    onIconBackClick(e) {
      e.preventDefault();
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss" scoped>
  .icon-back {
    position: absolute;
    top: 27px;
    left: 27px;
    display: block;
    padding: 10px;
    width: 12px;
    height: 20px;
    background: url("../assets/img/icon/icon-back.png") no-repeat center;
    background-size: 12px 20px;
  }
</style>
