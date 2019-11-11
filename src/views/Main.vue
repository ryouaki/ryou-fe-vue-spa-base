<template>
  <main id="app">
    <img class="app_logo" src="@/assets/logo.png">
    <p>{{msg}}</p>
    <ul class="app_menu">
      <li>页面导航</li>
      <li><router-link to="page1">页面一</router-link></li>
      <li><router-link to="page2">页面二</router-link></li>
    </ul>
  </main>
</template>
<script>
export default {
  name: 'Main',
  computed: {
    msg() {
      return this.$store.getters.message;
    }
  }
};
</script>
<style>
#app {
  height: 100%;
  width: 100%;
  text-align: center;
}

.app_logo {
  height: 200px;
  width: 200px;
  padding: 20px;
}

.app_menu {
  margin: auto;
  width: 200px;
  border: 1px solid #333;
  padding: 0px;
}

.app_menu li {
  display: block;
  height: 32px;
  line-height: 32px;
}

.app_menu li:first-child {
  background-color: #999;
}

.app_menu li:nth-child(2n) {
  border-top: 1px solid #333;
  border-bottom: 1px solid #333;
}
</style>
