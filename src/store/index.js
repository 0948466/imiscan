import Vue from 'vue';
import Vuex from 'vuex';
import HTTP from '../utils/api';
import URL from '../utils/url';

import {
  LOADING,
  AUTH_SING_IN,
  AUTH_REGISTER,
  ERROR_CHANGE,
  WARNING_CHANGE,
  SUCCESS_CHANGE,
  USER_CHANGE,
  USER_EXIT,
  USER_RESTORE,
} from './mutation-types';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading: false,
    error: null,
    warning: null,
    user: null,
    success: null,
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
    [USER_CHANGE](state, payload) {
      state.user = payload;
    },
    [USER_EXIT](state) {
      state.user = null;
    },
    [ERROR_CHANGE](state, payload) {
      state.error = payload;
    },
    [WARNING_CHANGE](state, payload) {
      state.warning = payload;
    },
    [SUCCESS_CHANGE](state, payload) {
      state.warning = payload;
    },
  },
  actions: {
    async [AUTH_SING_IN]({ commit }, params) {
      const result = await HTTP(URL.singIn, 'GET', params);
      if (result && result.error) {
        commit(ERROR_CHANGE, result.error);
      } else {
        commit(USER_CHANGE, result.user);
      }
    },
    async [AUTH_REGISTER]({ commit }, params) {
      const result = await HTTP(URL.register, 'POST', params);
      if (result && result.error) {
        commit(ERROR_CHANGE, result.error);
      } else {
        commit(USER_CHANGE, result.user);
      }
    },
    async [USER_RESTORE]({ commit }, params) {
      const result = await HTTP(URL.restore, 'GET', params);
      if (result && result.error) {
        commit(ERROR_CHANGE, result.error);
      } else {
        commit(SUCCESS_CHANGE, 'Your password has been sent to your e-mail');
      }
    },
  },
});
