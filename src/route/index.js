import Vue from 'vue';
import VueRouter from 'vue-router';

import Introduction from './Introduction';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/introduction/index'
  },
  Introduction
];

export default new VueRouter({
  mode: 'history',
  routes,
});
