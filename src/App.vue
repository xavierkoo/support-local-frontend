<template>
    <div :id="mode">
        <div class="box">
            <Particles />
            <div class="row blur">
                <div class="app">
                    <NavBar />
                    <ToggleMode />
                </div>

                <nav class="d-flex justify-content-center">
                    <router-link to="/landing">
                        Landing
                    </router-link> |
                    <router-link to="/brand">
                        Individual Brand
                    </router-link> |
                    <router-link to="/cart">
                        ShoppingCart
                    </router-link> |
                    <router-link to="/login">
                        Login
                    </router-link> |
                    <router-link to="/checkout">
                        Checkout
                    </router-link> |
                    <router-link to="/signup">
                        Sign Up
                    </router-link> |
                    <router-link to="/orderLog">
                        Order Log
                    </router-link> |
                    <router-link to="/viewOrder">
                        View Order
                    </router-link> |
                    <router-link to="/viewPayment">
                        View Payment
                    </router-link>
                </nav>

                <router-view v-slot="{ Component }">
                    <transition
                        name="route"
                        mode="out-in"
                    >
                        <component :is="Component" />
                    </transition>
                </router-view>
                <PageFooter />
            </div>
        </div>
    </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import ToggleMode from "./components/ToggleMode.vue";
import PageFooter from "./components/PageFooter.vue";
import Particles from "./components/BackgroundAnimation.vue";
export default {
  name: "App",
  components: {
    NavBar,
    ToggleMode,
    PageFooter,
    Particles,
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

.route-enter-from {
  opacity: 0;
  transform: translateX(-100px);
}
.route-enter-active {
  transition: all 0.3s ease-out;
}
.route-leave-to {
  opacity: 0;
  transform: translateX(100px);
}
.route-leave-active {
  transition: all 0.3s ease-in;
}
</style>
