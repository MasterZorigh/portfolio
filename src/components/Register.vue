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
import firebase from 'firebase';
import { ref } from 'vue';

export default {
    
}
</script>
