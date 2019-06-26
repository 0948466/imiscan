import Vue from 'vue';
import VeeValidate from 'vee-validate';
import App from './App.vue';
import router from './router';
import store from './store';
import Notifications from 'vue-notification'
import screenfullInit from './api/screenfull';
import preloadInit from './api/preload';

Vue.config.productionTip = false;
Vue.use(VeeValidate);
Vue.use(Notifications);
Vue.prototype.$screenfullInit = screenfullInit;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

preloadInit();
