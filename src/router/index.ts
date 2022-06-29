import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: () => ({ path: "/characters" }),
    },
    {
      path: "/characters",
      component: () => import("../views/CharacterListView.vue"),
    },
    {
      path: "/character/:id",
      component: () => import("../views/CharacterView.vue"),
    },
  ],
});

export default router;
