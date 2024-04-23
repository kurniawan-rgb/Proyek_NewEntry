import homePage from "@/views/homePage.vue";
import aboutPage from "@/views/aboutPage.vue";
import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "@/views/loginPage.vue";

const routes = [
  {
    path: "/",
    component: homePage,
  },
  {
    path: "/login",
    component: LoginPage,
  },
  {
    path: "/about",
    component: aboutPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
