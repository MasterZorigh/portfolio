import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Experiences from "@/views/Experiences.vue";
import Skills from "@/views/Skills.vue";
import Works from "@/views/Works.vue";

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
  },    
  {
    name: "Travaux",
    path: "/works",
    component: Works,
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});


export default router;
