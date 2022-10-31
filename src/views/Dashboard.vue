<template>
    <div class="App">
        <div :id="mode">
            <div class="container-fluid">
                <!-- TODO: Add content here -->
                <div class="row justify-content-center g-2">
                    <div class="col" />
                    <div class="col-10 bg-white p-2">
                        <!-- Main Content -->
                        <div class="mb-5">
                            <h2>
                                Welcome Back!
                                <span class="fw-bold text-primary">{{ merchant.name }}</span>
                            </h2>
                            <h4>You have earned</h4>
                            <span class="fw-bold">$XXX.XX </span><span>so far</span>
                        </div>
                        <div>
                            <div class="row g-2">
                                <div class="col-9">
                                    <h4 class="fw-bold">
                                        Your Product Overview
                                    </h4>
                                </div>
                                <div class="col-3">
                                    <button class="btn btn-primary float-end mb-2">
                                        Add Product
                                    </button>
                                </div>
                            </div>

                            <div class="row orderLog p-0">
                                <div class="d-none d-sm-block">
                                    <div class="row orderBar text-center py-2 mb-2">
                                        <div class="col-sm-3">
                                            <b>Product Name</b>
                                        </div>
                                        <div class="col-sm-3">
                                            <b>Category</b>
                                        </div>
                                        <div class="col-sm-3">
                                            <b>Unit Price</b>
                                        </div>
                                        <div class="col-sm-3">
                                            <b>Action</b>
                                        </div>
                                    </div>
                                </div>
                                <!-- Add Component -->
                                <template
                                    v-for="(obj, idx) in productList"
                                    :key="idx"
                                >
                                    <MerchantProductRow
                                        :product-name="obj.name"
                                        :category="obj.category"
                                        :unit-price="obj.price"
                                    />
                                </template>
                            </div>
                        </div>
                    </div>
                    <div class="col" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MerchantProductRow from "@/components/MerchantProductRow.vue";
import axios from "axios";
import { useRoute } from "vue-router";

export default {
  name: "App",
  components: { MerchantProductRow },
  data() {
    return {
      mode: localStorage.modes,
      merchant: "",
      merchantId: "",
      merchantName: "",
      merchantDesc: "",
      merchantEmail: "",
      merchantLatLong: "",
      productList: "",
      merchantRating: 0,
      merchantLat: 0.0,
      merchantLng: 0.0,
    };
  },
  watch: {},
  mounted() {
    window.addEventListener("modes-localstorage-changed", (event) => {
      this.mode = event.detail.storage;
    });
  },

  async beforeMount() {
    // A function that will be called before the component is mounted.
    const route = useRoute();
    // Pull all products from the specific merchantID
    // Retrieve merchant from API Endpoint
    const selectedMerchant = await axios.get(
      `https://support-local.herokuapp.com/api/merchants/${route.params.merchantId}`
    );
    this.merchant = selectedMerchant.data;
    console.log(this.merchant);

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
    console.log(this.productList);
  },
  methods: {
    addProduct() {
      // Define
      // POST
      // GET Merchant Product Arr
      // Add to Merchant Product Arr
      // PATCH Merchant Product Arr (override)
    },
    deleteProduct() {
      // Define
      // DELETE
      // GET Merchant Product Arr
      // Remove from Merchant Product Arr
      // PATCH Merchant Product Arr(override)
    },
    updateProduct() {
      // Define
      // PATCH Product Field (override)
    },
  },
};
</script>

<style>
@import "../assets/style/global.css";
</style>
