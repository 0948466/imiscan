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
  USER_GET,
  SHOW_QUIT_CHANGE,
  QR_CODE_CHANGE,
} from './mutation-types';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading: false,
    error: null,
    warning: null,
    user: null,
    success: null,
    showQuit: false,
    qrCode: null,
  },
  getters: {
    isLoading: state => state.loading,
    user: state => state.user,
    error: state => state.error,
    showQuit: state => state.showQuit,
    qrCode: state => state.qrCode,
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
    [SHOW_QUIT_CHANGE](state, payload) {
      state.showQuit = payload;
    },
    [QR_CODE_CHANGE](state, payload) {
      state.showQuit = payload;
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
    async [AUTH_REGISTER]({ dispatch, commit }, params) {
      const result = await HTTP(URL.register, 'GET', params);
      if (result && result.error) {
        commit(ERROR_CHANGE, result.error);
      } else {
        console.log(123)
        await HTTP(URL.register, 'GET');
        console.log(444)
        console.log(USER_GET)
        const user = await dispatch([USER_GET]);
        // console.log(user);
        // commit(USER_CHANGE, user);
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
    async [USER_GET]({ commit }) {
      const result = await HTTP(URL.getUser, 'GET');
      if (result && result.error) {
        commit(ERROR_CHANGE, result.error);
      } else {
        commit(SUCCESS_CHANGE, 'Your password has been sent to your e-mail');
      }
    },
  },
});
