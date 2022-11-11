<template>
    <div>
        <div v-if="productList == null">
            <Loading />
        </div>
        <div v-else>
            <div class="container-fluid individualBrand">
                <div class="row justify-content-center g-2">
                    <div class="col-xl-4 d-none d-xl-block">
                        <!-- Left Col -->
                        <BrandProfile
                            :merchant-name="merchant.name"
                            :merchant-pic="merchant.imgUrl"
                            :desc="merchant.aboutUs"
                            @fire-modal="showModal"
                        />
                        <BootstrapModal
                            v-if="show"
                            :merchant-email="merchant.email"
                            @close-modal-event="hideModal"
                        />
                        <MerchantRating :merchant-rating="merchantRating" />

                        <div class="card text-center mt-2 map">
                            <Map
                                :lat="merchantLat"
                                :lng="merchantLng"
                            />
                        </div>
                    </div>
                    <div class="col-xl-8 col-md-12">
                        <!-- Right Col -->
                        <img
                            src="../assets/img/placeholders/offer.png"
                            alt=""
                            class="img-fluid mx-auto d-block"
                        >
                        <div
                            class="row d-flex justify-content-center m-2 d-md-block d-xl-none align-top mt-3"
                        >
                            <!-- Split 2 Col to display 2 cards  -->
                            <div class="col-md-6 d-md-inline-block d-xl-none">
                                <BrandProfile
                                    :merchant-name="merchant.name"
                                    :merchant-pic="merchant.imgUrl"
                                    :desc="merchant.aboutUs"
                                    @fire-modal="showModal"
                                />
                                <BootstrapModal
                                    v-if="show"
                                    :merchant-email="merchant.email"
                                    @close-modal-event="hideModal"
                                />
                            </div>
                            <div
                                class="col-md-6 d-none d-md-inline-block d-xl-none align-top"
                            >
                                <div class="card text-center map">
                                    <Map
                                        :lat="merchantLat"
                                        :lng="merchantLng"
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="mt-3">
                            <h5 class="fw-bold mx-3 my-4">
                                Trending Now
                            </h5>
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
                                        class="mb-3 card-grow"
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
                                        class="mb-3 card-grow"
                                    />
                                </template>
                            </div>
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
import Loading from "../components/LoadingAnimation.vue";
import BootstrapModal from "../components/BootstrapModal.vue";

export default {
  name: "App",
  components: {
    ProductCard,
    Map,
    BrandProfile,
    MerchantRating,
    Loading,
    BootstrapModal,
  },
  data() {
    return {
      show: false,
      merchant: "",
      merchantId: "",
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
  methods: {
    showModal() {
      this.show = true;
      window.scrollTo(0, 0);
    },
    hideModal() {
      this.show = false;
      window.scrollTo(0, 30);
    },
  },
};
</script>

<style scoped>
@import "../assets/style/global.css";
</style>
