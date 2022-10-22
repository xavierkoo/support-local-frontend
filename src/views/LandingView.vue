<template>
    <div class="App">
        <div :id="mode">
            <div class="container-fluid box bg-secondary">
                <br>
                <div class="row justify-content-center g-2">
                    <div class="col-xl-3 col-md-2 d-none d-md-block bg-info">
                        <!-- Left Column-->
                        <!-- Display logo only from MD to Lg -->
                        <!-- Logo will align left, Caption will be visible at XL -->
                        <div class="row justify-content-center align-items-center">
                            <SideNavPill
                                v-for="(cat, idx) in productCatArr"
                                :key="idx"
                                :category-name="cat"
                                @clicked-item="changeCat"
                            />
                        </div>
                    </div>
                    <div class="col-xl-6 col-md-10 bg-success centerbox">
                        <!-- Center Column -->
                        <img
                            src="../assets/hero.png"
                            class=""
                            style="height: auto; width: 100%"
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
                    <div class="col-xl-3 d-none d-xl-block rightbar bg-warning">
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
  computed: {
    getAllProduct() {
      return null;
    },
  },
  mounted() {
    window.addEventListener("modes-localstorage-changed", (event) => {
      this.mode = event.detail.storage;
    });
  },
  methods: {
    changeCat(value) {
      this.category = value;
    },
  },
};
</script>

<style>
@import "../assets/style/global.css";
</style>
