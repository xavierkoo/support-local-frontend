<template>
    <div :id="mode">
        <div class="box">
            <Particles />
            <div class="container-fluid blur p-0">
                <div class="app">
                    <NavBar />
                </div>
                <div class="row d-flex justify-content-center minHeight">
                    <router-view v-slot="{ Component }">
                        <transition
                            name="route"
                            mode="out-in"
                        >
                            <component :is="Component" />
                        </transition>
                    </router-view>
                </div>
                <PageFooter />
            </div>
        </div>
    </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import PageFooter from "./components/PageFooter.vue";
import Particles from "./components/BackgroundAnimation.vue";
export default {
  name: "App",
  components: {
    NavBar,
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

    this.$store.commit("updateCartFromLocalStorage");
    if (localStorage.getItem("reloaded")) {
      localStorage.removeItem("reloaded");
    } else {
      localStorage.setItem("reloaded", "1");
      location.reload();
    }
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
