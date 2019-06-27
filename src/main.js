import Notifications from 'vue-notification';
import Vue from 'vue';
import VeeValidate from 'vee-validate';
import App from './App.vue';
import router from './router';
import store from './store';
import screenfullInit from './utils/screenfull';

Vue.config.productionTip = false;
Vue.use(VeeValidate);
Vue.use(Notifications);
Vue.prototype.$screenfullInit = screenfullInit;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
