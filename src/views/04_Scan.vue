<template>
  <section class="scan wrapper">
    <div class="scan__container container ">
      <icon-back />
      <div class="img-container">
        <img
          :src="getImgSrc"
          alt="Feet"
        >
      </div>
      <p class="scan__text text text_up">
        Don't move
      </p>
      <button
        class="btn btn_blue btn_bottom"
        @click.prevent="onBtnScanClick"
      >
        Scan
      </button>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

import feetStart from '../assets/img/feet/04-start.png';
import feet11 from '../assets/img/feet/feet-1-1.png';
import feet12 from '../assets/img/feet/feet-1-2.png';
import feet21 from '../assets/img/feet/feet-2-1.png';
import feet22 from '../assets/img/feet/feet-2-2.png';
import feet31 from '../assets/img/feet/feet-3-1.png';
import feet32 from '../assets/img/feet/feet-3-2.png';
import feet41 from '../assets/img/feet/feet-4-1.png';
import feet42 from '../assets/img/feet/feet-4-2.png';
import feet51 from '../assets/img/feet/feet-5-1.png';
import feet52 from '../assets/img/feet/feet-5-2.png';

import IconBack from '@/components/IconBack.vue';
import {
  SCAN,
  SCAN_FINISH,
} from '@/store/mutation-types';

export default {
  name: 'Scan',
  components: { IconBack },
  computed: {
    ...mapGetters(['scanCount', 'random']),
    getImgSrc() {
      let feet1;
      let feet2;
      switch (+this.random) {
        case 1:
          feet1 = feet11;
          feet2 = feet12;
          break;
        case 2:
          feet1 = feet21;
          feet2 = feet22;
          break;
        case 3:
          feet1 = feet31;
          feet2 = feet32;
          break;
        case 4:
          feet1 = feet41;
          feet2 = feet42;
          break;
        default:
          feet1 = feet51;
          feet2 = feet52;
      }
      switch (this.scanCount) {
        case 0:
          return feetStart;
        case 1:
          return feet1;
        default:
          return feet2;
      }
    },
  },
  methods: {
    ...mapActions([SCAN, SCAN_FINISH]),
    async onBtnScanClick() {
      const scanSuccess = await this[SCAN]();
      if (!scanSuccess) {
        return;
      }
      if (this.scanCount < 3) {
        this.$router.push('description');
      } else {
        this.$router.push('completed');
        await this[SCAN_FINISH]();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
  .scan {
    &__container {
      padding-top: 118px;
    }
    &__text {
      margin-top: 40px;
      margin-bottom: 20px;
    }
  }
</style>
