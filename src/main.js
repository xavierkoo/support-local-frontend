import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import Particles from "vue3-particles";

createApp(App).use(router).use(Particles).mount("#app");
