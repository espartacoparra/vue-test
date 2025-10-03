import { createRouter, createWebHistory } from 'vue-router'
import { DashboardView, SettingsView } from '@/views/'
const routes = [
  { path: '/', component: DashboardView },
  { path: '/settings', component: SettingsView },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
