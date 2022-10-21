<template>
    <div class="App">
        <div :id="mode">
            <div class="container-fluid box">
                <br>
                <div class="row justify-content-center g-2">
                    <div class="col-xl-3 col-md-2 d-none d-md-block bg-primary">
                        <!-- Left Column-->
                        <!-- Display logo only from MD to Lg -->
                        <!-- Logo will align left, Caption will be visible at XL -->
                        <ul
                            class="d-md-flex bg-light nav nav-pills nav-flush flex-sm-column flex-row flex-nowrap mb-auto mx-auto align-items-md-center align-items-xl-start px-xl-4"
                        >
                            <li class="nav-item">
                                <a
                                    href="#"
                                    class="nav-link py-3 px-2"
                                    title=""
                                >
                                    <img
                                        src="../assets/navSidePlaceholder.png"
                                        alt=""
                                        style="width: 40px"
                                    >
                                    <span class="d-none d-xl-inline">Placeholder Category</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    class="nav-link py-3 px-2"
                                    title=""
                                >
                                    <img
                                        src="../assets/navSidePlaceholder.png"
                                        alt=""
                                        style="width: 40px"
                                    >
                                    <span class="d-none d-xl-inline">Placeholder Category</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-xl-6 col-md-10 bg-dark">
                        <!-- Center Column -->
                        <img
                            src="../assets/hero.png"
                            class=""
                            style="width: 100%"
                        >
                        <div class="mt-2">
                            <span class="fw-bold mx-3 text-light">Trending now</span><span class="fw-bold mx-3 float-end text-light">See more></span>
                        </div>
                        <div class="row justify-content-center m-2">
                            <!-- Split 2 Col to display 2 cards  -->
                            <div class="col-md-6 bg-danger">
                                <!-- Card Component -->
                                <ProductCard />
                            </div>
                            <div class="col-md-6 bg-warning">
                                <ProductCard />
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 d-none d-xl-block bg-primary">
                        <!-- Right Column -->
                        <!-- Displays Ads on XL and Abovee-->
                        <img
                            class="rounded-5 mb-2"
                            src="../assets/mathilde-langevin-p3O5f4u95Lo-unsplash.jpg"
                            style="width: 100%"
                        >
                        <img
                            class="rounded-5 mb-2"
                            src="../assets/mathilde-langevin-p3O5f4u95Lo-unsplash.jpg"
                            style="width: 100%"
                        >
                        <img
                            class="rounded-5 mb-2"
                            src="../assets/mathilde-langevin-p3O5f4u95Lo-unsplash.jpg"
                            style="width: 100%"
                        >
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ProductCard from "../components/ProductCard.vue";
export default {
  name: "App",
  components: {
    ProductCard,
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
@import "../assets/style/global.css";
</style>
