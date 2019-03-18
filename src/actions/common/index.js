export default {
  async error(context, exception) {
    context.commit('ERROR', exception);
  }
};
