<template>
    <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT"
        crossorigin="anonymous"
    >
    <div :id="mode">
        <div class="box">
            <div class="app">
                <NavBar />
                <ToggleMode />
            </div>

            <nav>
                <router-link to="/">
                    Home
                </router-link> |
                <router-link to="/about">
                    About
                </router-link> |
                <router-link to="/landing">
                    Landing
                </router-link>
                <router-link to="/cart">
                    | ShoppingCart
                </router-link>
                <router-link to="/login">
                    | Login
                </router-link>
                <router-link to="/checkout">
                    | Checkout
                </router-link>
                <router-link to="/individual">
                    | Individual
                </router-link>
                <router-link to="/signup">
                    | Sign Up
                </router-link>
                <router-link to="/orderLog">
                    | Order Log
                </router-link>
            </nav>

            <router-view />
        </div>
    </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import ToggleMode from "./components/ToggleMode.vue";
import axios from "axios";

export default {
  name: "App",
  components: {
    NavBar,
    ToggleMode,
  },
  data() {
    return {
      mode: localStorage.modes,
    };
  },
  mounted() {
    window.addEventListener("modes-localstorage-changed", (event) => {
      this.mode = event.detail.storage;
    });
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
