<template>
    <div class="App">
        <div :id="mode">
            <div class="container-fluid">
                <br>
                <div class="row justify-content-center g-2">
                    <div class="col-xl-3 col-md-2 d-none d-md-block">
                        <!-- Left Column-->
                        <!-- Display logo only from MD to Lg -->
                        <!-- Logo will align left, Caption will be visible at XL -->
                        <div
                            class="row justify-content-center align-items-center sticky-top"
                        >
                            <SideNavPill
                                v-for="(cat, idx) in productCatArr"
                                :key="idx"
                                :category-name="cat"
                                @clicked-item="changeCat"
                            />
                        </div>
                    </div>
                    <div class="col-xl-6 col-md-10 centerbox">
                        <!-- Center Column -->
                        <img
                            src="../assets/hero.png"
                            class=""
                            style="height: auto; width: 100%"
                        >
                        <div class="mt-2">
                            <h5 class="fw-bold mx-3">
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
                                        :merchant-name="obj.merchant"
                                        :desc="obj.name"
                                        :offer-price="obj.specialPrice"
                                        :price="obj.price"
                                        :num-sold="obj.numberSold"
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
                                        :merchant-name="obj.merchant"
                                        :desc="obj.name"
                                        :offer-price="obj.specialPrice"
                                        :price="obj.price"
                                        :num-sold="obj.numberSold"
                                        class="mb-3"
                                    />
                                </template>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4 col-md-5" />
                            <button
                                v-if="viewMore == false"
                                class="btn mainBtnDesign col-4 col-md-2"
                                @click="viewMore = true"
                            >
                                View More
                            </button>
                            <div class="col-4 col-md-5" />
                        </div>
                    </div>
                    <div class="col-xl-3 d-none d-xl-block rightbar">
                        <!-- Right Column -->
                        <!-- Displays Ads on XL and Abovee-->
                        <img
                            class="mb-2"
                            src="../assets/mathilde-langevin-p3O5f4u95Lo-unsplash.jpg"
                            style="width: 100%; height: auto"
                        >
                        <img
                            class="mb-2"
                            src="../assets/mathilde-langevin-p3O5f4u95Lo-unsplash.jpg"
                            style="width: 100%; height: auto"
                        >
                        <img
                            class="mb-2"
                            src="../assets/mathilde-langevin-p3O5f4u95Lo-unsplash.jpg"
                            style="width: 100%; height: auto"
                        >
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ProductCard from "../components/ProductCard.vue";
import SideNavPill from "../components/SideNavPill.vue";
import axios from "axios";

export default {
  name: "App",
  components: {
    ProductCard,
    SideNavPill,
  },
  data() {
    return {
      mode: localStorage.modes,
      category: "all",
      viewMore: false,
      productList: "",
      productCatArr: [
        "Food & Beverages",
        "Men's Apparel",
        "Women's Apparel",
        "Electronics",
        "Hobbies & Books",
        "Beauty & Personal",
      ],
    };
  },
  watch: {
    // A watch function that will trigger when the category is changed.
    category(selectedCat) {
      this.viewMore = false;
      var viewMore = this.viewMore;
      this.getSelectedProduct(selectedCat, viewMore);
    },
    viewMore(viewBool) {
      var selectedCat = this.category;
      this.getSelectedProduct(selectedCat, viewBool);
    },
  },
  mounted() {
    window.addEventListener("modes-localstorage-changed", (event) => {
      this.mode = event.detail.storage;
    });
  },
  // A function that will be called before the component is mounted.
  async beforeMount() {
    const res = await axios.get("http://localhost:8081/products");
    let startUpArr = [];
    for (const key in res.data) {
      if (Object.hasOwnProperty.call(res.data, key)) {
        const element = res.data[key];
        let category = element.category;
        if (startUpArr.length < 6) {
          startUpArr.push(element);
        }
      }
    }

    this.productList = startUpArr;
  },
  methods: {
    // This function is used to change the category of the product.
    changeCat(value) {
      this.category = value;
    },
    // This function is used to get the selected product from the API.
    getSelectedProduct(selectedCat, viewMore) {
      let url = "http://localhost:8081/products";

      axios.get(url).then((res) => {
        if (viewMore === false) {
          var maxArrLen = 6;
        } else {
          var maxArrLen = 99;
        }
        console.log(res.data);
        let productArr = [];
        if (selectedCat == "all") {
          this.productList = res.data;
        } else {
          for (const key in res.data) {
            if (Object.hasOwnProperty.call(res.data, key)) {
              const element = res.data[key];
              let category = element.category;
              if ((category == selectedCat) & (productArr.length < maxArrLen)) {
                productArr.push(element);
              }
              this.productList = productArr;
            }
          }
        }
      });
    },
  },
};
</script>

<style>
@import "../assets/style/global.css";
</style>
