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

        <p class="decode-result">
          Last result: <b>{{ result }}</b>
        </p>

        <qrcode-stream
          @decode="onDecode"
          @init="onInit"
        />


        <input
          v-model="result"
          class="input"
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

export default {
  name: 'ScanQrCode',
  components: { IconBack, QrcodeStream },
  data: () => ({
    result: '',
    error: '',
  }),
  methods: {
    onDecode(result) {
      this.result = result;
    },
    async onInit(promise) {
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
      }
    },
    onFormQrCodeSubmit() {
      this.$router.push({ name: 'description' });
    },

  },
};
</script>

<style lang="scss" scoped>
  .scan-qr-code {
  }
</style>
