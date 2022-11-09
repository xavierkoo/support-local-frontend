<template>
    <div>
        <div v-if="productList == null">
            <div class="container d-flex justify-content-center align-content-center">
                <div class="spinner">
                    <img
                        src="../assets/Nobackgroundlogo.png"
                        alt=""
                        class="img-fluid"
                    >
                    <div class="spinner-sector spinner-sector-one" />
                    <div class="spinner-sector spinner-sector-two" />
                    <div class="spinner-sector spinner-sector-three" />
                </div>
            </div>
        </div>
        <div v-else>
            <div class="row justify-content-center g-2">
                <div class="col-xl-4 d-none d-xl-block">
                    <!-- Left Col -->
                    <BrandProfile
                        :merchant-name="merchant.name"
                        :merchant-pic="merchant.imgUrl"
                        :desc="merchant.aboutUs"
                    />
                    <MerchantRating :merchant-rating="merchantRating" />

                    <div
                        class="card text-center mt-2"
                        style="height: 444px"
                    >
                        <Map
                            :lat="merchantLat"
                            :lng="merchantLng"
                        />
                    </div>
                </div>
                <div class="col-xl-8 col-md-12">
                    <!-- Right Col -->
                    <img
                        src="../assets/offer.png"
                        alt=""
                        class="img-fluid mx-auto d-block"
                    >
                    <div class="row justify-content-center m-2 d-md-block d-xl-none">
                        <!-- Split 2 Col to display 2 cards  -->
                        <div class="col-md-6 d-md-inline-block d-xl-none align-top">
                            <BrandProfile
                                :merchant-name="merchant.name"
                                :merchant-pic="merchant.imgUrl"
                                :desc="merchant.aboutUs"
                            />
                        </div>
                        <div class="col-md-6 d-none d-md-inline-block d-xl-none align-top">
                            <div
                                class="card text-center mt-2"
                                style="height: 444px"
                            >
                                <Map
                                    :lat="merchantLat"
                                    :lng="merchantLng"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="mt-3">
                        <span class="fw-bold mx-3 text-dark">Featured Product</span>
                    </div>
                    <div class="row justify-content-center m-2">
                        <!-- Split 2 Col to display 2 cards  -->
                        <div class="col-md-6">
                            <!-- Card Component -->
                            <template
                                v-for="(obj, idx) in productList"
                                :key="idx"
                            >
                                <ProductCard
                                    v-if="(idx % 2 == 0) | (idx == 0)"
                                    :merchant-id="obj.merchant.id"
                                    :merchant-name="obj.merchant.name"
                                    :desc="obj.name"
                                    :offer-price="obj.specialPrice"
                                    :price="obj.price"
                                    :num-sold="obj.numberSold"
                                    :product-pic-url="obj.imgUrl"
                                    :product-id="obj.id"
                                    class="mb-3"
                                />
                            </template>
                        </div>
                        <div class="col-md-6">
                            <template
                                v-for="(obj, idx) in productList"
                                :key="idx"
                            >
                                <ProductCard
                                    v-if="(idx % 2 == 1) & (idx > 0)"
                                    :merchant-id="obj.merchant.id"
                                    :merchant-name="obj.merchant.name"
                                    :desc="obj.name"
                                    :offer-price="obj.specialPrice"
                                    :price="obj.price"
                                    :num-sold="obj.numberSold"
                                    :product-pic-url="obj.imgUrl"
                                    :product-id="obj.id"
                                    class="mb-3"
                                />
                            </template>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import { useRoute } from "vue-router";
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
    return {
      merchant: "",
      merchantId: "",
      merchantDesc: "",
      merchantEmail: "",
      merchantLatLong: "",
      productList: null,
      merchantRating: 0,
      merchantLat: 0.0,
      merchantLng: 0.0,
    };
  },
  watch: {},

  mounted() {
    // Toggle Darkmode Functionality
    // The below code is listening for the event "modes-localstorage-changed" and when it is triggered, it
    // it will update the mode variable with the new value.
    window.addEventListener("modes-localstorage-changed", (event) => {
      this.mode = event.detail.storage;
    });
  },
  async beforeMount() {
    // Dynamically retrieve productId from routing
    const route = useRoute();
    this.merchantId = route.params.merchantId;

    // Retrieve merchant from API Endpoint
    const selectedMerchant = await axios.get(
      `https://support-local.herokuapp.com/api/merchants/${route.params.merchantId}`
    );
    this.merchant = selectedMerchant.data;
    console.log(this.merchant);

    // For loop the different productId
    let merchantProducts = selectedMerchant.data.products;
    let productArr = [];
    let avgRating = 0;

    for (const prodId of merchantProducts) {
      // Retrieve product based on productId
      let selectedProduct = await axios.get(
        `https://support-local.herokuapp.com/api/products/${prodId}`
      );
      avgRating += selectedProduct.data.rating;

      // Add to productArr
      productArr.push(selectedProduct.data);
    }
    // Process the average rating from all the products
    avgRating = Math.floor(avgRating / merchantProducts.length);
    this.merchantRating = avgRating;

    // Assign productArr to state
    this.productList = productArr;

    // Process Lat & Long Coordinates
    let LatLongArr = selectedMerchant.data.coord.split(",");
    this.merchantLat = Number(LatLongArr[0].trim());
    this.merchantLng = Number(LatLongArr[1].trim());
  },
  methods: {},
};
</script>

<style scoped>
@import "../assets/style/global.css";
</style>
