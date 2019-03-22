import { doInit, doLogin, doLogout } from '@/api/login';
import proxy from '@/store/proxy';

export default {
  namespaced: true,
  actions: proxy({
    async doInit(context) {
      const ret = await doInit();
      if (ret.code === 0) {
        context.commit('User/UPDATE', ret.data, {root: true});
        context.dispatch('Common/error', ret.data, {root: true});
      }
    },
    async doLogin(context, { username, password }) {
      const ret = await doLogin({ username, password });
      if (ret.code === 0) {
        context.commit('User/UPDATE', ret.data, {root: true});
      }
    },
    async doLogout(context) {
      const ret = await doLogout();
      if (ret.code === 0) {
        context.commit('User/CLEAN');
      }
    }
  })
};
