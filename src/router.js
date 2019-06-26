import Vue from 'vue';
import Router from 'vue-router';
import GetConnected from './views/00_GetConnected.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'get-connected',
      component: GetConnected,
    },
    {
      path: '/sing-up',
      name: 'sing-up',
      component: () => import(/* webpackChunkName: "Sing-up" */ './views/reg/SingUp.vue'),
    },
    {
      path: '/log-in',
      name: 'log-in',
      component: () => import(/* webpackChunkName: "Log-in" */ './views/reg/LogIn.vue'),
    },
    {
      path: '/restore',
      name: 'restore',
      component: () => import(/* webpackChunkName: "Restore" */ './views/reg/Restore.vue'),
    },
    {
      path: '/prepare',
      name: 'prepare',
      component: () => import(/* webpackChunkName: "Prepare" */ './views/01_Prepare.vue'),
    },
    {
      path: '/find-qr-code',
      name: 'find-qr-code',
      component: () => import(/* webpackChunkName: "Find-qr-code" */ './views/02_FindQrCode.vue'),
    },
    {
      path: '/scan-qr-code',
      name: 'scan-qr-code',
      component: () => import(/* webpackChunkName: "Scan-qr-code" */ './views/ScanQrCode.vue'),
    },
    {
      path: '/start',
      name: 'start',
      component: () => import(/* webpackChunkName: "Start" */ './views/reg/Start.vue'),
    },
    {
      path: '/error-qr-code',
      name: 'error-qr-code',
      component: () => import(/* webpackChunkName: "Error-qr-code" */ './views/ErrorQrCode.vue'),
    },
    {
      path: '/description',
      name: 'description',
      component: () => import(/* webpackChunkName: "Description" */ './views/03_Description.vue'),
    },
    {
      path: '/scan',
      name: 'scan',
      component: () => import(/* webpackChunkName: "Scan" */ './views/04_Scan.vue'),
    },
    {
      path: '/completed',
      name: 'completed',
      component: () => import(/* webpackChunkName: "Completed" */ './views/09_Completed.vue'),
    },
  ],
});
