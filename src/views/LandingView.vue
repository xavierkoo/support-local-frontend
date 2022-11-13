<template>
    <div class="App p-0">
        <div v-if="productList == null">
            <loading />
        </div>
        <div v-else>
            <div class="container-fluid">
                <br>
                <div class="row justify-content-center">
                    <div class="col-xl-3 col-md-2 d-none d-md-block sidePanel">
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
                                :is-active="category == cat ? true : false"
                                @clicked-item="changeCat"
                            />
                        </div>
                    </div>
                    <div class="d-block d-md-none">
                        <div class="row row-cols-2 row-cols-sm-3">
                            <SideNavPill
                                v-for="(cat, idx) in productCatArr"
                                :key="idx"
                                :category-name="cat"
                                :is-active="category == cat ? true : false"
                                @clicked-item="changeCat"
                            />
                        </div>
                    </div>
                    <div class="col-xl-6 col-md-10 centerbox">
                        <!-- Center Column -->
                        <!-- Hero Carousell -->
                        <div
                            id="carouselId"
                            class="carousel slide"
                            data-bs-ride="carousel"
                        >
                            <ol class="carousel-indicators">
                                <li
                                    data-bs-target="#carouselId"
                                    data-bs-slide-to="0"
                                    class="active"
                                    aria-current="true"
                                    aria-label="First slide"
                                />
                                <li
                                    data-bs-target="#carouselId"
                                    data-bs-slide-to="1"
                                    aria-label="Second slide"
                                />
                                <li
                                    data-bs-target="#carouselId"
                                    data-bs-slide-to="2"
                                    aria-label="Third slide"
                                />
                            </ol>
                            <div
                                class="carousel-inner"
                                role="listbox"
                            >
                                <div class="carousel-item active">
                                    <img
                                        src="../assets/img/placeholders/walchcarousell.avif"
                                        class="w-100 d-block"
                                        alt="First slide"
                                    >
                                </div>
                                <div class="carousel-item">
                                    <img
                                        src="../assets/img/placeholders/walchcarousell.avif"
                                        class="w-100 d-block"
                                        alt="Second slide"
                                    >
                                </div>
                                <div class="carousel-item">
                                    <img
                                        src="../assets/img/placeholders/salecarousell.avif"
                                        class="w-100 d-block"
                                        alt="Third slide"
                                    >
                                </div>
                            </div>
                            <button
                                class="carousel-control-prev"
                                type="button"
                                data-bs-target="#carouselId"
                                data-bs-slide="prev"
                            >
                                <span
                                    class="carousel-control-prev-icon"
                                    aria-hidden="true"
                                />
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button
                                class="carousel-control-next"
                                type="button"
                                data-bs-target="#carouselId"
                                data-bs-slide="next"
                            >
                                <span
                                    class="carousel-control-next-icon"
                                    aria-hidden="true"
                                />
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                        <div class="mt-2">
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
                                        :profile-pic-url="obj.merchant.imgUrl"
                                        :last-online-hour="obj.merchant.lastOnline"
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
                                        :profile-pic-url="obj.merchant.imgUrl"
                                        :last-online-hour="obj.merchant.lastOnline"
                                        :product-id="obj.id"
                                        class="mb-3 card-grow"
                                    />
                                </template>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4 col-md-5" />
                            <button
                                v-if="viewMore == false && moreThanSix == true"
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
                        <div
                            class="sticky-top"
                            style="z-index: -1"
                        >
                            <img
                                class="mb-2"
                                src="../assets/img/placeholders/sidedrink.avif"
                                style="width: 100%; height: auto"
                            >
                            <img
                                class="mb-2"
                                src="../assets/img/placeholders/sidemilk.avif"
                                style="width: 100%; height: auto"
                            >
                            <img
                                class="mb-2"
                                src="../assets/img/placeholders/sidesale.avif"
                                style="width: 100%; height: auto"
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ProductCard from "../components/ProductCard.vue";
import SideNavPill from "../components/SideNavPill.vue";
import Loading from "../components/LoadingAnimation.vue";
import axios from "axios";

export default {
  name: "App",
  components: {
    ProductCard,
    SideNavPill,
    Loading,
  },
  data() {
    return {
      category: "All",
      moreThanSix: false,
      viewMore: false,
      productList: null,
      productCatArr: [
        "All",
        "Food & Beverages",
        "Men's Apparel",
        "Women's Apparel",
        "Electronics",
        "Hobbies & Books",
        "Beauty & Personal",
        "Services",
      ],
    };
  },
  watch: {
    category(selectedCat) {
      // A watch function that will trigger when the category is changed.
      this.viewMore = false;
      var viewMore = this.viewMore;
      this.getSelectedProduct(selectedCat, viewMore);
    },
    viewMore(viewBool) {
      // A watch function that will trigger when the viewMore is triggered.
      var selectedCat = this.category;
      this.getSelectedProduct(selectedCat, viewBool);
    },
  },
  mounted() {
    window.addEventListener("modes-localstorage-changed", (event) => {
      this.mode = event.detail.storage;
    });
  },

  async beforeMount() {
    // A function that will be called before the component is mounted.
    const res = await axios.get(
      "https://support-local.herokuapp.com/api/products"
    );
    let startUpArr = [];
    for (const key in res.data) {
      if (Object.hasOwnProperty.call(res.data, key)) {
        const element = res.data[key];
        if (startUpArr.length < 6) {
          startUpArr.push(element);
        } else {
          this.moreThanSix = true;
        }
      }
    }
    this.productList = startUpArr;
  },
  methods: {
    changeCat(value) {
      // This function is used to change the category of the product.
      this.category = value;
    },

    getSelectedProduct(selectedCat, viewMore) {
      // This function is get products from API Endpoint and display

      let url = "https://support-local.herokuapp.com/api/products";

      axios.get(url).then((res) => {
        if (viewMore === false) {
          var maxArrLen = 6;
        } else {
          var maxArrLen = 12;
          this.moreThanSix = false;
        }
        let productArr = [];
        if (selectedCat == "All") {
          for (const key in res.data) {
            if (Object.hasOwnProperty.call(res.data, key)) {
              const element = res.data[key];
              if (productArr.length < maxArrLen) {
                productArr.push(element);
              }
            }
          }
          this.productList = productArr;
        } else {
          for (const key in res.data) {
            if (Object.hasOwnProperty.call(res.data, key)) {
              const element = res.data[key];
              let category = element.category;
              if ((category == selectedCat) & (productArr.length < maxArrLen)) {
                productArr.push(element);
              }
            }
            this.productList = productArr;
          }
        }
      });
    },
  },
};
</script>

<style>
@import "../assets/style/global.css";

.sidePanel {
  border-right: 1px solid #c8c8c8;
}
</style>
