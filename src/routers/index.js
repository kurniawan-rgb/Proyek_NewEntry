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
  {
    path: "/error",
    component: () => import("@/views/errorPage.vue"),
  },
  {
    path: "/dashboard",
    component: () => import("@/views/dashboardPage.vue"),
  },
  {
    path: "/input",
    component: () => import("@/views/inputUser.vue"),
  },
  {
    path: "/outputmenu",
    component: () => import("@/views/outputMenu.vue"),
  },
  {
    path: "/feedbackadmin",
    component: () => import("@/views/feedbackAdmin.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
