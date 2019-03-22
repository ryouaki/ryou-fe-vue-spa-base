<template>
  <main id="app">
    {{JSON.stringify(state)}}
    <login v-if="!isLogin"/>
    <router-view v-else/>
  </main>
</template>
<script>
import Login from '@/views/Login';
import { mapState, mapGetters, mapActions } from 'vuex';

export default {
  name: 'app',
  components: {
    Login
  },
  computed: {
    ...mapState({
      state: state => state
    }),
    ...mapGetters([
      'isLogin',
      'sysError'
    ])
  },
  created() {
    this.doInit();
  },
  methods: {
    ...mapActions('Login', ['doInit'])
  }
};
</script>
<style>
#app {
  height: 100%;
  width: 100%;
}
</style>
