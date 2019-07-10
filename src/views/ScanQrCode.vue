<template>
  <section class="scan-qr-code wrapper">
    <div class="scan-qr-code__container container ">
      <icon-back />

      <form
        action="#"
        class="scan-qr-code__form"
        @submit.prevent="onFormQrCodeSubmit"
      >
        <p class="error">
          {{ error }}
        </p>

        <div class="scan-qr-code__qrcode-stream">
          <qrcode-stream
            @decode="onDecode"
            @init="onInit"
          >
            <div
              v-if="loading"
              class="loading-indicator"
            >
              Loading...
            </div>
          </qrcode-stream>
        </div>

        <input
          v-model="result"
          class="input scan-qr-code__input"
          type="text"
          placeholder="Enter QR code"
          required
        >
        <button
          type="submit"
          class="btn btn_blue"
        >
          Next
        </button>
      </form>
    </div>
  </section>
</template>

<script>
import { QrcodeStream } from 'vue-qrcode-reader';
import IconBack from '@/components/IconBack.vue';
import {
  QR_CODE_CHANGE,
} from '@/store/mutation-types';

export default {
  name: 'ScanQrCode',
  components: { IconBack, QrcodeStream },
  data: () => ({
    result: '',
    error: '',
    loading: false,
  }),
  methods: {
    onDecode(result) {
      this.result = result;
      this.$store.commit(QR_CODE_CHANGE, this.result);
      this.$router.push({ name: 'description' });
    },
    async onInit(promise) {
      this.loading = true;
      try {
        await promise;
      } catch (error) {
        if (error.name === 'NotAllowedError') {
          this.error = 'ERROR: you need to grant camera access permisson';
        } else if (error.name === 'NotFoundError') {
          this.error = 'ERROR: no camera on this device';
        } else if (error.name === 'NotSupportedError') {
          this.error = 'ERROR: secure context required (HTTPS, localhost)';
        } else if (error.name === 'NotReadableError') {
          this.error = 'ERROR: is the camera already in use?';
        } else if (error.name === 'OverconstrainedError') {
          this.error = 'ERROR: installed cameras are not suitable';
        } else if (error.name === 'StreamApiNotSupportedError') {
          this.error = 'ERROR: Stream API is not supported in this browser';
        }
      } finally {
        this.loading = false;
      }
    },
    onFormQrCodeSubmit() {
      this.$store.commit(QR_CODE_CHANGE, this.result);
      if (!this.$store.getters.qrCodeToken) {
        this.$router.push({ name: 'error-qr-code' });
      } else {
        this.$router.push({ name: 'description' });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
  .scan-qr-code {
    &__form {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      align-items: center;
      padding-top: 30px;
    }
    &__qrcode-stream {
      margin-top: auto;
      margin-bottom: auto;
      width: 100%;
      height: 350px;
      max-height: 50vh;
      overflow: hidden;
    }
    &__input {
      margin-top: 20px;
      margin-bottom: 22px;
      max-width: 252px;
    }
  }
</style>
