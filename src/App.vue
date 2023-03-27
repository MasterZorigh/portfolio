<template>
  <nav class="mb-1 navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link to="/" class="nav-item nav-link">Accueil</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/experiences" class="nav-item nav-link">Expériences</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/skills" class="nav-item nav-link">Compétences</router-link>
        </li>
      </ul>
    </div>
  </nav>

  <router-view />
</template>

<script>
import { onBeforeMount } from 'vue';
import { useRouter, useRoute} from 'vue-router';
import firebase from 'firebase';

export default {
  name: "App",
  setup () {
    const router = useRouter();
    const route = useRoute();

    onBeforeMount(() => {
      firebase.auth().onAuthStateChanged((user) => {
        if (!user) {
          router.replace('/login');
          
        } else if (route.path == '/login' || route.path == '/register') {
          router.replace('/');
        }
      });
    });
  },
  components: {},
};
</script>

<style>

</style>
