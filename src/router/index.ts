import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/totalList.vue';
import Error from '../views/errorPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'TotalList',
    component: Home,
  },
  {
    path: '/error',
    name: 'ErrorPage',
    component: Error,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
