import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Experiences from "@/views/Experiences.vue";
import Skills from "@/views/Skills.vue";

const routes = [
  {
    name: "Accueil",
    path: "/",
    component: Home,
  },
  {
    name: "Experiences",
    path: "/experiences",
    component: Experiences,
  },
  {
    name: "Compétences",
    path: "/skills",
    component: Skills,
  }

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});


export default router;
