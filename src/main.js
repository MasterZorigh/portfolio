import { createApp } from "vue";
import App from "./App.vue";
import BootstrapVue3 from "bootstrap-vue-3";
// import vSelect from "vue-select-3";

import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";
// import "vue-select-3/dist/vue-select.css";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA7dnpyOSa3jDVEiOUgGFXnPZcofC0_ohE",
  authDomain: "portfolio-499b8.firebaseapp.com",
  projectId: "portfolio-499b8",
  storageBucket: "portfolio-499b8.appspot.com",
  messagingSenderId: "130678741946",
  appId: "1:130678741946:web:2ed3ca70d6618862f05b83",
  measurementId: "G-SWD07RWLSE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

createApp(App).use(router).mount("#app");

app.use(BootstrapVue3);
app.use(router);
// app.component("v-select", vSelect);
app.mount("#app");

