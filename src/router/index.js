import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('/@views/home.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('/@views/login.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
