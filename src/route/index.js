import Vue from 'vue';
import VueRouter from 'vue-router';

import Page1 from './page1';
import Page2 from './page2';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: () => import('@/views/Main')
  },
  Page1,
  Page2
];

export default new VueRouter({
  mode: 'history',
  routes,
});
