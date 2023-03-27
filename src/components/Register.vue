<template>
  <div class="register">
    <h1>Register Form</h1>
    <form @submit.prevent="Register" id="firebaseui-auth-container">
      <input type="text" placeholder="Email" v-model="email" />
      <input type="password" placeholder="Password" v-model="password" />
      <input type="password" placeholder="Confirm Password" v-model="password" />
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script>
import firebase from "firebase";
import { ref } from "vue";

export default {
    name: "RegisterComponent",
  setup() {
    const email = ref("");
    const password = ref("");

    const Register = () => {
      firebase
        .auth()
        .signInWithEmailAndPassword(email.value, password.value)
        .then((data) => console.log(data))
        .catch((error) => alert(error.message));
    };

    return {
      Register,
      email,
      password,
    };
  }
};
</script>
