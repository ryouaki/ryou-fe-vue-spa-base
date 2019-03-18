export default {
  namespaced: true,
  state: {
    data: null
  },
  mutations: {
    ERROR(state, exception) {
      state.data = exception;
    }
  }
};
