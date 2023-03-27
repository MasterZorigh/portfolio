<template>
  <section class="home">
    <b-container>
      <b-row>
        <b-col class="position-absolute top-50 start-50 translate-middle">
          <h1>BIENVENUE, {{ name }}</h1>
          <p>
            Vous trouverez ici mes expériences, mes compétences et mes travaux.
          </p>
          <br />
          <a
            href="https://storage.googleapis.com/gs:/portfolio-499b8.appspot.com/CV_Valentin_Mantez.pdf"
            target="_blank"
            >Télécharger mon CV</a
          >
        </b-col>
      </b-row>
      <b-row>
        <button class="logout" @click="Logout">Logout</button>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import { ref, onBeforeMount } from "vue";
import firebase from "firebase";

export default {
  name: "HomeComponent",
  setup() {
    const name = ref("");
    // onBeforeMount(() => {
    //   firebase.auth().onAuthStateChanged((user) => {
    //     if (user) {
    //       name.value = user.displayName;
    //     }
    //   });
    // });
    // const Logout = () => {
    //   firebase.auth().signOut();
    // };
    // return { name, Logout };

    onBeforeMount(() => {
      const user = firebase.auth().currentUser;
      if (user) {
        name.value = user.email.split("@")[0];
      }
    });
  },

  methods: {
    Logout() {
      firebase.auth().signOut();
    },
  },
};
</script>
