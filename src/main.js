import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import Particles from "vue3-particles";
import Vue from "vue";
import store from "./store";

createApp(App).use(router).use(Particles).use(store).mount("#app");
