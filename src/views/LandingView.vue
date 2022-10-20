<template>
    <div
        class="container-fluid"
        style="background-color: grey"
    >
        <br>
        <div class="row justify-content-center g-2">
            <div class="col-xl-3 col-md-2 d-none d-md-block bg-primary">
                <!-- Left Column -->
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
                        <div
                            class="card"
                            style="background-color: #ebeceb"
                        >
                            <img
                                class="card-img-top"
                                src="../assets/hero.png"
                            >

                            <div class="card-body">
                                <div
                                    class="row mb-1"
                                    style="border: none"
                                >
                                    <div class="col-3">
                                        <img src="../assets/profilepng.png">
                                    </div>
                                    <div class="col-9">
                                        <h6 class="mb-0">
                                            Hello World
                                        </h6>
                                        <p class="">
                                            1 hour ago
                                        </p>
                                    </div>
                                </div>
                                <div
                                    class="row"
                                    style="border: none"
                                >
                                    <div class="col-8">
                                        <div class="text-truncate">
                                            Foldable bicycle wa blue whell
                                        </div>
                                        <div class="fst-italic">
                                            Special offer: $21.99
                                        </div>
                                    </div>
                                    <div class="col-4">
                                        <p class="fw-bold text-end mb-0">
                                            S$180
                                        </p>
                                        <p class="text-end">
                                            23 Sold
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 bg-warning" />
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
</template>

<script>
import ProductCard from "../components/ProductCard.vue";
export default {
  name: "ProductCard",
  components: {},
};
</script>

<style>
@import "../assets/style/global.css";
</style>
