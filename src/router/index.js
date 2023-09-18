import { createRouter, createWebHistory } from "vue-router";
import Catalog from "../views/Catalog.vue";
import ProductDetail from "../views/ProductDetail.vue";

const router = createRouter({
  history: createWebHistory("#"),
  routes: [
    {
      path: "/",
      name: "home",
      component: Catalog,
    },
    {
      path: "/product/:id",
      name: "product",
      component: ProductDetail,
    },
  ],
});

export default router;
