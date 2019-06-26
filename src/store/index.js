import Vue from 'vue';
import Vuex from 'vuex';

import {
  LOADING,
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

  },
});
