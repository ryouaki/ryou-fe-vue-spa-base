export default {
  isLogin(state) {
    return state.User.data !== null;
  }
};
