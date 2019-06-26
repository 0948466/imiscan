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
    error: null,
  },
  getters: {
    isLoading: state => state.loading,
    user: state => state.user,
    error: state => state.error,
  },
  mutations: {
    [LOADING](state, payload) {
      state.loading = payload;
    },
    userChange(state, payload) {
      state.user = payload;
    },
    errorChange(state, payload) {
      state.error = payload;
    },
  },
  actions: {
    async [AUTH_SING_IN]({ dispatch, commit }, params) {
      const result = await HTTP(URL.singIn, 'GET', params);
      if (result && result.error) {
        commit('errorChange', result.error);
      } else {
        commit('userChange', result.user);
      }
      console.log(result);
    },
  },
});
