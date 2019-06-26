import Vue from 'vue';
import Vuex from 'vuex';
import HTTP from '../api/http-common';
import URL from '../api/url';

import {
  LOADING,
  AUTH_SING_IN,
} from './mutation-types';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading: false,
  },
  getters: {
    isLoading: state => state.loading,
    user: state => state.user,
  },
  mutations: {
    [LOADING](state, payload) {
      state.loading = payload;
    },
  },
  actions: {
    async [AUTH_SING_IN] ({ dispatch, commit }) {
      const result = await HTTP(URL.singIn); // дожидаемся завершения действия `actionA`
      console.log(result);
    },
  },
});
