<template>
  <section class="login__section">
    <form class="login__section-form" @submit.prevent="onSubmit">
      <input v-model="form.username" name="username" type="text">
      <input v-model="form.password" name="password" type="password">
      <button type="submit">登陆</button>
    </form>
  </section>
</template>
<script>
export default {
  name: 'LoginView',
  data() {
    return {
      form: {
        username: 'ryouaki',
        password: '123456'
      }
    };
  },
  methods: {
    onSubmit() {
      return false;
    }
  }
};
</script>
<style>
.login__section {
  width: 100%;
  height: 100%;
  position: relative;
}

.login__section-form {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 300px;
  border: 1px solid #3333;
  border-radius: 12px;
}
</style>
