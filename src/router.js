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
  ],
});
