import * as api from '@/api/init';

export default {
  async doInit({commit}) {
    try {
      const ret = await api.doInit();
      commit('msg', ret);
    } catch(e) {
      commit('msg', 'Error');
    }
  }
};
