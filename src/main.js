import Vue from 'vue';
import VeeValidate from 'vee-validate';
import App from './App.vue';
import router from './router';
import store from './store';
import URL from './api/url';
import HTTP from './api/http-common';
import screenfullInit from './api/screenfull';
import preloadInit from './api/preload';

Vue.config.productionTip = false;
Vue.use(VeeValidate);
Vue.prototype.$http = HTTP;
Vue.prototype.$url = URL;
Vue.prototype.$screenfullInit = screenfullInit;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

preloadInit();
