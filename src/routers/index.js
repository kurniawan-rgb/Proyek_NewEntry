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
    path: "/output",
    component: () => import("@/views/outputPage.vue"),
  },
  {
    path: "/adminuser",
    component: () => import("@/views/adminUser.vue"),
  },
  {
    path: "/nu",
    component: () => import("@/views/adminNU.vue"),
  },

  {
    path: "/wcu",
    component: () => import("@/views/adminWCU.vue"),
  },

  {
    path: "/sni",
    component: () => import("@/views/adminSNI.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
