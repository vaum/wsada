import { createRouter, createWebHistory } from 'vue-router'
import MainView from "@/views/MainView.vue";
import SignInView from "@/views/SignInView.vue";
import SignUpView from "@/views/SignUpView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainView
    },
    {
      path: '/login',
      name: 'login',
      component: SignInView
    },
    {
      path: '/sign-up',
      name: 'signup',
      component: SignUpView
    }
  ]
})

export default router
