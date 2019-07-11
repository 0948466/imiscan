import Vue from 'vue';
import Vuex from 'vuex';
import HTTP from '../utils/api';
import URL from '../utils/url';
import errors from '../utils/errors';

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
  SCAN,
  SCAN_COUNT_CHANGE,
  SCAN_FINISH,
  SCAN_ACTIVATE,
  QR_CODE_DELETE,
} from './mutation-types';

Vue.use(Vuex);

let user = '';
let qrCode = null;
try {
  user = (localStorage.getItem('user') && JSON.parse(localStorage.getItem('user'))) || '';
} catch (e) {
  localStorage.removeItem('user');
  console.error(e);
}

if (user) {
  qrCode = localStorage.getItem('qrCode') || '';
}

export default new Vuex.Store({
  state: {
    loading: false,
    error: null,
    warning: null,
    user,
    success: null,
    showQuit: false,
    qrCode,
    scanCount: 0,
    random: null,
    showQrCode: true,
  },
  getters: {
    isLoading: state => state.loading,
    user: state => state.user,
    error: state => state.error,
    showQuit: state => state.showQuit,
    qrCode: state => state.qrCode,
    qrCodeId: state => ((state.qrCode) ? state.qrCode.split(';')[0] : null),
    qrCodeToken: state => ((state.qrCode) ? state.qrCode.split(';')[1] : null),
    scanCount: state => state.scanCount,
    random: state => state.random,
  },
  mutations: {
    [LOADING](state, payload) {
      state.loading = payload;
    },
    [USER_CHANGE](state, payload) {
      state.user = payload;
      localStorage.setItem('user', JSON.stringify(payload));
    },
    [USER_EXIT](state) {
      state.user = null;
      localStorage.removeItem('user');
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
      state.random = Math.floor(Math.random() * 5) + 1;
      state.qrCode = payload;
      localStorage.setItem('qrCode', payload);
    },
    [QR_CODE_DELETE](state) {
      state.qrCode = null;
      localStorage.removeItem('qrCode');
    },
    [SCAN_COUNT_CHANGE](state, payload) {
      if (payload) {
        state.scanCount += payload;
      } else {
        state.scanCount = 0;
      }
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
    async [USER_EXIT]({ commit }) {
      const result = await HTTP(URL.userExit, 'GET');
      if (result && result.error) {
        commit(ERROR_CHANGE, result.error);
      } else {
        commit(USER_EXIT);
        commit(QR_CODE_DELETE);
      }
    },
    async [AUTH_REGISTER]({ commit }, params) {
      const result = await HTTP(URL.register, 'GET', params);
      if (result && result.error) {
        commit(ERROR_CHANGE, result.error);
        return false;
      }
      return true;
    },
    async [USER_RESTORE]({ commit }, params) {
      const result = await HTTP(URL.restore, 'GET', params);
      if (result && result.error) {
        commit(ERROR_CHANGE, result.error);
        return false;
      }
      commit(SUCCESS_CHANGE, 'Your password has been sent to your e-mail');
      return true;
    },
    async [USER_GET]({ commit }) {
      const result = await HTTP(URL.getUser, 'GET');
      if (result && result.error) {
        commit(ERROR_CHANGE, result.error);
        return false;
      }
      commit(USER_CHANGE, result.user);
      return true;
    },
    async [SCAN]({ commit }) {
      const params = {
        t: this.getters.qrCodeToken,
      };
      const result = await HTTP(`${URL.create}${this.getters.qrCodeId}`, 'GET', params);
      if (result && result.e) {
        commit(ERROR_CHANGE, result.e);
        return false;
      }
      commit(SCAN_COUNT_CHANGE, 1);
      return true;
    },
    async [SCAN_FINISH]({ commit }) {
      const params = {
        t: this.getters.qrCodeToken,
      };
      const result = await HTTP(`${URL.finish}${this.getters.qrCodeId}`, 'GET', params);
      if (result && result.e) {
        commit(ERROR_CHANGE, result.e);
        return false;
      }
      return true;
    },
    async [SCAN_ACTIVATE]({ commit }) {
      const params = {
        t: this.getters.qrCodeToken,
      };
      const result = await HTTP(`${URL.activate}${this.getters.qrCodeId}`, 'GET', params);
      if (result && result.e) {
        const error = errors[result.e] || result.e;
        commit(ERROR_CHANGE, error);
        return false;
      }
      return true;
    },
  },
});
