import Vue from 'vue';
import Vuex from 'vuex';

import Common from './modules/common';
import User from './modules/user';

import controllers from '@/controllers';
import getters from './getters';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    User: User(controllers.login),
    Common: Common(controllers.common)
  },
  getters
});
