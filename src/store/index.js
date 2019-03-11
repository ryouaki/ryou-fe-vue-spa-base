import Vue from 'vue';
import Vuex from 'vuex';

import Common from './modules/common';
import User from './modules/user';

import actions from '@/services';
import getters from './getters';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    User: User(actions.login),
    Common: Common(actions.common)
  },
  getters
});
