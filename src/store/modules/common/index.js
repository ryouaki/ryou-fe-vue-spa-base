import proxy from '@/store/proxy';

export default {
  namespaced: true,
  state: {
    data: null
  },
  mutations: {
    ERROR(state, exception) {
      state.data = exception;
    }
  },
  actions: proxy({
    async error(context, exception) {
      context.commit('ERROR', exception);
    }
  })
};
