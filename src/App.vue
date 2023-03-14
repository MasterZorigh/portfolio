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
        <li class="nav-item">
          <router-link to="/works" class="nav-item nav-link">Travaux</router-link>
        </li>
      </ul>
    </div>
  </nav>

  <router-view />
</template>

<script>
export default {
  name: "App",
  components: {},

  // mounted() {
  //   let isConnected = false;    
  // },
};
</script>

<style>

</style>
