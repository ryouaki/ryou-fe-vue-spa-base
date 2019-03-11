<template>
  <main id="app">
    <login v-if="!isLogin"/>
    <router-view v-else/>
  </main>
</template>
<script>
import Login from '@/views/Login';
import { mapState, mapGetters } from 'vuex';

export default {
  name: 'app',
  components: {
    Login
  },
  computed: {
    ...mapGetters([
      'isLogin'
    ])
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
