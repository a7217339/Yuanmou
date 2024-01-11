
import { createRouter, createWebHistory } from "vue-router";
import type{ RouteRecordRaw, Router  } from "vue-router";

const routes: RouteRecordRaw[] = [
 {  path: "/",
    component: () => import("@/layouts/AppLayout.vue"),
    children: [
  {
    path: "/home",
    name: "home",
    alias: "/",
    component: () => import('../views/home.vue')
  },
  { path:"/algorithm",
    name: "algorithm",
    component: () => import('../views/algorithm.vue')
  },
  { path:"/contactus",
    name: "contactus",
    component: () => import('../views/contactus.vue')
  },
 
]
}
];

 const router: Router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes
});
export  default router