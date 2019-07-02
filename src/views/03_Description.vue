<template>
  <section class="description wrapper">
    <div class="description__container container ">
      <icon-back />
      <img
        :src="getImgSrc"
        alt="Feet"
      >
      <p class="description__text text text_up">
        {{ descText }}
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
import { mapGetters } from 'vuex';
import IconBack from '@/components/IconBack.vue';

import feetDesc from '../assets/img/feet/03-desc.png';
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

export default {
  name: 'Description',
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
          return feetDesc;
        case 1:
          return feet1;
        default:
          return feet2;
      }
    },
    descText() {
      switch (this.scanCount) {
        case 0:
          return 'Stand on the green markers and keep still';
        case 1:
          return 'Shift  from  one  foot  to  the  other and  stand  again  on  the  markers';
        default:
          return 'Shift  from  one  foot  to  the  other and  stand  again  on  the  markers';
      }
    },
  },
};
</script>

<style lang="scss" scoped>
  .description {
    &__container {
      padding-top: 118px;
    }
    &__text {
      text-align: center;
      margin-top: 40px;
    }
  }

</style>
