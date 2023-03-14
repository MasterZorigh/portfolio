import { createApp } from "vue";
import App from "./App.vue";
import BootstrapVue3 from "bootstrap-vue-3";
import vSelect from "vue-select-3";

import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";
import "vue-select-3/dist/vue-select.css";

const app = createApp(App);

app.use(BootstrapVue3);
app.use(router);
app.component("v-select", vSelect);
app.mount("#app");

