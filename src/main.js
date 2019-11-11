import Vue from 'vue';
import 'normalize.css';

import '@/styles/index.css';
import App from '@/App.vue';
import router from '@/route';
import store from '@/store';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
