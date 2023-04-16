import { createRouter, createWebHistory } from 'vue-router'
import Header from "@/components/home/Header.vue";
import Home from "@/components/layout/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    }
  ]
})

export default router
