import { doInit, doLogin, doLogout } from '@/api/login';

export default {
  async doInit(context) {
    const ret = await doInit();
    if (ret.code === 0) {
      context.commit('UPDATE', ret.data);
    }
  },
  async doLogin(context, { username, password }) {
    const ret = await doLogin({ username, password });
    if (ret.code === 0) {
      context.commit('UPDATE', ret.data);
    }
  },
  async doLogout(context) {
    const ret = await doLogout();
    if (ret.code === 0) {
      context.commit('CLEAN');
    }
  }
};
