import Vue from 'vue';
import Router from 'vue-router';
import NProgress from 'nprogress';
import GetConnected from './views/00_GetConnected.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'get-connected',
      component: GetConnected,
      meta: {
        public: true,
      },
    },
    {
      path: '/sing-up',
      name: 'sing-up',
      component: () => import(/* webpackChunkName: "Sing-up" */ './views/reg/SingUp.vue'),
      meta: {
        public: true,
        onlyWhenLoggedOut: true,
      },
    },
    {
      path: '/log-in',
      name: 'log-in',
      component: () => import(/* webpackChunkName: "Log-in" */ './views/reg/LogIn.vue'),
      meta: {
        public: true,
      },
    },
    {
      path: '/prepare',
      name: 'prepare',
      component: () => import(/* webpackChunkName: "Prepare" */ './views/01_Prepare.vue'),
      meta: {
        public: false,
      },
    },
    {
      path: '/find-qr-code',
      name: 'find-qr-code',
      component: () => import(/* webpackChunkName: "Find-qr-code" */ './views/02_FindQrCode.vue'),
      meta: {
        public: false,
      },
    },
    {
      path: '/scan-qr-code',
      name: 'scan-qr-code',
      component: () => import(/* webpackChunkName: "Scan-qr-code" */ './views/ScanQrCode.vue'),
      meta: {
        public: false,
      },
    },
    {
      path: '/start',
      name: 'start',
      component: () => import(/* webpackChunkName: "Start" */ './views/reg/Start.vue'),
      meta: {
        public: false,
      },
    },
    {
      path: '/error-qr-code',
      name: 'error-qr-code',
      component: () => import(/* webpackChunkName: "Error-qr-code" */ './views/ErrorQrCode.vue'),
      meta: {
        public: false,
      },
    },
    {
      path: '/description',
      name: 'description',
      component: () => import(/* webpackChunkName: "Description" */ './views/03_Description.vue'),
      meta: {
        public: false,
      },
    },
    {
      path: '/scan',
      name: 'scan',
      component: () => import(/* webpackChunkName: "Scan" */ './views/04_Scan.vue'),
      meta: {
        public: false,
      },
    },
    {
      path: '/completed',
      name: 'completed',
      component: () => import(/* webpackChunkName: "Completed" */ './views/09_Completed.vue'),
      meta: {
        public: false,
      },
    },
  ],
});

router.beforeResolve((to, from, next) => {
  if (to.name) {
    NProgress.start();
  }
  next();
});

router.afterEach(() => {
  NProgress.done();
});

router.beforeEach((to, from, next) => {
  const isPublic = to.matched.some(record => record.meta.public);
  // const onlyWhenLoggedOut = to.matched.some(record => record.meta.onlyWhenLoggedOut);
  const loggedIn = !!localStorage.getItem('user');

  if (!isPublic && !loggedIn && to.path !== '/log-in') {
    next({
      path: '/log-in',
    });
  } else {
    next();
  }
});

export default router;
