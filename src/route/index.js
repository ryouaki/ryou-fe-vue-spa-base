import Vue from 'vue';
import VueRouter from 'vue-router';

import Introduction from './Introduction';

Vue.use(VueRouter);

const routes = [
  Introduction
];

export default new VueRouter({
  mode: 'history',
  routes,
});
