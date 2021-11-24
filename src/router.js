import { createRouter, createWebHistory } from 'vue-router'

import AllCollections from "./components/AllCollections.vue";
import MainPage from "./components/MainPage.vue";
import NewCollections from "./components/NewCollections.vue";

const routes = [
  {
    path: "/",
    name: "mainPage",
    component: MainPage,
  },
  {
    path: "/new-collections",
    name: "NewCollections",
    component: NewCollections,
  },
  {
    path: "/all-collections",
    name: "AllCollections",
    component: AllCollections,
  },
  // {
  //   path: '/collection',
  //   name: 'Collection',
  //   component: Collection
  // },
];

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory('/base-directory/'),
  routes, // short for `routes: routes`
});

export default router;
