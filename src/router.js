import Vue from 'vue';
import Router from 'vue-router';
import Start from './views/Start.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'start',
      component: Start,
    },
    {
      path: '/sing-up',
      name: 'sing-up',
      component: () => import(/* webpackChunkName: "about" */ './views/SingUp.vue'),
    },
    {
      path: '/log-in',
      name: 'log-in',
      component: () => import(/* webpackChunkName: "about" */ './views/LogIn.vue'),
    },
    {
      path: '/restore',
      name: 'restore',
      component: () => import(/* webpackChunkName: "about" */ './views/Restore.vue'),
    },
    {
      path: '/prepare',
      name: 'prepare',
      component: () => import(/* webpackChunkName: "about" */ './views/Prepare.vue'),
    },
    {
      path: '/find-qr-code',
      name: 'find-qr-code',
      component: () => import(/* webpackChunkName: "about" */ './views/FindQrCode.vue'),
    },
    {
      path: '/scan-qr-code',
      name: 'scan-qr-code',
      component: () => import(/* webpackChunkName: "about" */ './views/ScanQrCode.vue'),
    },
    {
      path: '/get-connected',
      name: 'get-connected',
      component: () => import(/* webpackChunkName: "about" */ './views/GetConnected.vue'),
    },
    {
      path: '/error-qr-code',
      name: 'error-qr-code',
      component: () => import(/* webpackChunkName: "about" */ './views/ErrorQrCode.vue'),
    },
  ],
});
