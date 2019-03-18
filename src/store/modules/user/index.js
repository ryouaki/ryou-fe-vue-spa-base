export default {
  namespaced: true,
  state: {
    data: null
  },
  mutations: {
    UPDATE(state, user) {
      state.data = user;
    },
    CLEAN(state) {
      state.data = null;
    }
  }
};
