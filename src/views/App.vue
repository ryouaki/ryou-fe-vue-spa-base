<template>
  <main id="app">
    <login v-if="!isLogin"/>
    <router-view v-else/>
    <comp-alert :msg="sysError.msg" v-if="sysError.msg"/>
  </main>
</template>
<script>
import Login from '@/views/Login';
import CompAlert from '@/components/CompAlert';
import { mapState, mapGetters, mapActions } from 'vuex';

export default {
  name: 'app',
  components: {
    Login,
    CompAlert
  },
  computed: {
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
