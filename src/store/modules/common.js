export default function (actions) {
  return {
    namespaced: true,
    state: {
      data: null
    },
    mutations: {
      ERROR(state, exception) {
        state.data = exception;
      }
    },
    actions: actions
  };
}
