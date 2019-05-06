<template>
  <section class="login__section">
    <form class="login__section-form" @submit.prevent="onSubmit">
      <div class="form-header">
        登陆
      </div>
      <div class="form-items">
        <input v-model="form.username" name="username" type="text">
        <input v-model="form.password" name="password" type="password">
      </div>
      <span>{{error.msg}}</span>
      <div class="form-footer">
        <button type="submit">登陆</button>
      </div>
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
  computed: {
    error() {
      return this.$store.state.Login.error
    }
  },
  methods: {
    onSubmit() {
      return this.$store.dispatch('Login/doLogin', this.form)
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
  padding: 10px 0px;
  border: 1px solid #3333;
  border-radius: 12px;
}

.login__section-form .form-header {
  text-align: center;
  height: 20px;
  line-height: 20px;
}

.login__section-form .form-items {
  display: flex;
  flex-direction: column;
  padding: 0px 10px 10px;
}

.login__section-form .form-items input {
  margin: 10px 0px;
  height: 24px;
}

.login__section-form .form-footer {
  text-align: center;
  padding: 10px;
}

.login__section-form .form-footer button {
  width: 100%;
  height: 24px;
  cursor: pointer;
}
</style>
