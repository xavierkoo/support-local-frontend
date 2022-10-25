<template>
    <div>
        <div class="row justify-content-center g-2">
            <div class="col-xl-4 bg-primary">
                <!-- Left Col -->
                <div
                    class="card text-center pt-2"
                    style="height: 444px"
                >
                    <!-- Insert Img here -->
                    <img
                        src="../assets/brandprofilepng.png"
                        alt=""
                        class="d-block mx-auto"
                        style="width: 50%; height: auto"
                    >
                    <div class="card-body">
                        <h3 class="card-title fw-bold">
                            nextdealshop
                        </h3>
                        <p class="card-text">
                            The store's collection is a celebration of everything maximalist -
                            there are face masks with elf ears, iridescent platform shoes.
                        </p>
                        <button class="btn btn-primary">
                            Contact me
                        </button>
                    </div>
                </div>

                <div
                    class="card text-center pt-2 mt-2"
                    style="height: 267px"
                >
                    <div class="card-body">
                        <h3 class="card-title fw-bold">
                            Merchant Rating
                        </h3>
                        <h1>80</h1>
                        <h5>Amazing Seller</h5>
                    </div>
                </div>

                <div
                    class="card text-center pt-2 mt-2"
                    style="height: 267px"
                >
                    API GOOGLE MAP HERE
                </div>
            </div>
            <div class="col-xl-8 bg-warning">
                <!-- Right Col -->
                <img
                    src="../assets/offer.png"
                    alt=""
                    style="border-radius: 0px; width: 100%; height: 444px"
                >
                <div class="mt-3">
                    <span class="fw-bold mx-3 text-dark">Trending now</span><span class="fw-bold mx-3 float-end text-dark">See more></span>
                </div>
                <div class="row justify-content-center m-2">
                    <!-- Split 2 Col to display 2 cards  -->
                    <div class="col-md-6 bg-danger">
                        <!-- Card Component -->
                        <ProductCard />
                    </div>
                    <div class="col-md-6 bg-success">
                        <ProductCard />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ProductCard from "../components/ProductCard.vue";
import axios from "axios";

export default {
  name: "App",
  components: {
    ProductCard,
  },
  data() {
    return {};
  },
  watch: {},
  methods: {},
};
</script>

<style scoped>
@import "../assets/style/global.css";
</style>
