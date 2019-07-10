<template>
  <notifications
    group="foo"
    width="100%"
    position="top center"
  />
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import {
  ERROR_CHANGE,
  WARNING_CHANGE,
  SUCCESS_CHANGE,
} from '@/store/mutation-types';

export default {
  name: 'Notify',
  computed: mapState(['error', 'user', 'warning', 'success']),
  watch: {
    error(newValue) {
      if (newValue) {
        this.showNotify('error', '', this.error);
        this[ERROR_CHANGE](false);
      }
    },
    warning(newValue) {
      if (newValue) {
        this.showNotify('warn', '', this.warning);
        this[WARNING_CHANGE](false);
      }
    },
    success(newValue) {
      if (newValue) {
        this.showNotify('success', '', this.success);
        this[SUCCESS_CHANGE](false);
      }
    },
    user(newValue) {
      if (newValue) {
        this.showNotify('success', '', 'Login successful');
      }
    },
  },
  methods: {
    ...mapMutations([ERROR_CHANGE, WARNING_CHANGE]),
    showNotify(type, title, text) {
      this.$notify({
        group: 'foo',
        type,
        duration: 1500,
        title,
        text,
      });
    },
  },
};
</script>

<style lang="scss">
  .notifications {
    max-width: 500px;
    left: 50% !important;
    transform: translateX(-50%) !important;
  }

  .notification-title {
    margin-bottom: 5px;
    font-size: 18px;
  }

  .notification-content {
    font-size: 16px;
  }
</style>
