<template>
  <div class="login">
    <h1>Login Form</h1>
    <form @submit.prevent="Login" id="firebaseui-auth-container">
      <input type="text" placeholder="Email" v-model="email" />
      <input type="password" placeholder="Password" v-model="password" />
      <button type="submit">Login</button>
      <button @click="signInWithGoogle">Sign in with Google</button>
      <p>
        Pas encore de compte ?
        <router-link to="/register">Inscrivez-vous</router-link>
      </p>
    </form>
  </div>
</template>

<script>
// import firebase from "firebase/app";
// import "firebase/auth";
// import * as firebaseui from "firebaseui";

import { ref } from "vue";
import firebase from "firebase";

export default {
  name: "AuthenticationComponent",

  setup() {
    const email = ref("");
    const password = ref("");

    const Login = () => {
      firebase
        .auth()
        .signInWithEmailAndPassword(email.value, password.value)
        .then((data) => console.log(data))
        .catch((error) => alert(error.message));
    };

    return {
      Login,
      email,
      password,
    };
  },
  // mounted() {
  //   const uiConfig = {
  //     signInSuccessUrl: "/dashboard",
  //     signInOptions: [
  //       firebase.auth.EmailAuthProvider.PROVIDER_ID,
  //       firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  //     ],
  //     tosUrl: "/terms-of-service",
  //     privacyPolicyUrl: "/privacy-policy",
  //   };

  //   const ui = new firebaseui.auth.AuthUI(firebase.auth());
  //   ui.start("#firebaseui-auth-container", uiConfig);
  // },
};
</script>
