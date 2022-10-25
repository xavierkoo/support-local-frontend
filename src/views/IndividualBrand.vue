<template>
    <div>
        <div class="row justify-content-center g-2">
            <div class="col-xl-4 bg-primary">
                <!-- Left Col -->
                <BrandProfile />
                <MerchantRating />

                <div
                    class="card text-center mt-2"
                    style="height: 444px"
                >
                    <Map
                        lat="1.296568"
                        lng="103.852119"
                    />
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
import Map from "../components/Map.vue";
import BrandProfile from "../components/BrandProfile.vue";
import MerchantRating from "../components/MerchantRating.vue";

export default {
  name: "App",
  components: {
    ProductCard,
    Map,
    BrandProfile,
    MerchantRating,
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
