import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Messages from '../views/Messages.vue'
import Analytics from '../views/Analytics.vue'
import Settings from '../views/Settings.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard,
    },
    {
      path: '/messages',
      name: 'messages',
      component: Messages,
    },
    {
      path: '/analytics',
      name: 'analytics',
      component: Analytics,
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings,
    },
  ],
})