<template>
  <section class="introduction__section">
    <button @click="doLogout">请求异常接口</button>
  </section>
</template>
<script>
import { mapActions } from 'vuex';

export default {
  name: 'Introduction',
  methods: {
    ...mapActions('Login', ['doLogout'])
  }
};
</script>
<style>
.introduction__section {
  width: 100%;
  height: 100%;
}
</style>
