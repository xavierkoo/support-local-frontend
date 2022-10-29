<template>
    <div>
        <div class="Individual" />
        <div :id="mode">
            <div v-if="product == null">
                <div
                    class="container d-flex justify-content-center align-content-center"
                >
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
                <div class="container-fluid">
                    <div class="row mx-3">
                        <div class="row mx-auto">
                            <!--Product Image-->
                            <img
                                class="col-lg-5 individualViewImg my-3 p-0"
                                :src="require(`@/${product.imgUrl}`)"
                            >
                            <div class="col-1" />
                            <div class="col-lg-6 my-3 individualViewProductCard">
                                <!--Product Card-->
                                <div class="container my-5">
                                    <div class="row">
                                        <div class="col-1" />
                                        <h2 class="col text-start mb-3">
                                            {{ product.name }}
                                        </h2>
                                    </div>
                                    <div class="row">
                                        <div class="col-1" />
                                        <h3 class="col text-start mb-3">
                                            {{ product.rating }}
                                            <span
                                                v-for="i of product.rating"
                                                :key="i"
                                            >
                                                {{ starsEmoji }}
                                            </span>
                                            / 5
                                        </h3>
                                    </div>
                                    <div class="row">
                                        <div class="col-1" />
                                        <h3 class="col text-start mb-3">
                                            S${{ product.price }}
                                        </h3>
                                    </div>
                                    <div class="row mb-2">
                                        <div class="col-1" />
                                        <h6 class="col-2 my-auto">
                                            Quantity
                                        </h6>
                                        <div class="col-1" />
                                        <input
                                            id="qty"
                                            v-model="quantity"
                                            class="col-4 py-2"
                                            type="text"
                                        >
                                        <div class="col-3" />
                                    </div>
                                    <div class="row mb-4">
                                        <div class="col-1" />
                                        <h6 class="col-2 my-auto">
                                            Size
                                        </h6>
                                        <div class="col-1" />
                                        <input
                                            id="size"
                                            class="col-4 py-2"
                                            type="text"
                                        >
                                        <div class="col-3" />
                                    </div>
                                    <div class="row">
                                        <div class="col-1" />
                                        <button
                                            type="button"
                                            class="col-4 cancelBtnDesign"
                                            @click="viewCart()"
                                        >
                                            View Cart
                                        </button>
                                        <div class="col-2" />
                                        <button
                                            id="addToCart"
                                            type="button"
                                            class="col-4 mainBtnDesign"
                                            @click="addToCart(product)"
                                        >
                                            Add To Cart
                                        </button>
                                        <div class="col-1" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row mx-auto my-3 d-none d-sm-block">
                            <!--Product Desc-->
                            <div class="row individualViewProdDesc mx-auto">
                                <h5 class="d-flex align-items-start mx-2 my-2">
                                    Product Description
                                </h5>
                                <h5 class="d-flex align-items-start mx-2 my-3">
                                    {{ product.name }}
                                </h5>
                                <ul
                                    v-for="(specs, idx) in product.productSpec"
                                    :key="idx"
                                    class="mx-4"
                                >
                                    <li>{{ specs }}</li>
                                </ul>
                            </div>
                        </div>
                        <div class="row mx-auto my-3">
                            <!--Question Card-->
                            <div class="container">
                                <div class="row individualViewQuesion">
                                    <div
                                        class="col-12 col-md-2 col-lg-3 col-xl-2 d-flex justify-content-center"
                                    >
                                        <img
                                            class="w-100 rounded-circle"
                                            src="../assets/appLogo.svg"
                                            alt=""
                                        >
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-6 col-xl-8 my-3">
                                        <h3 class="text-center text-md-start">
                                            nextdealshop
                                        </h3>
                                        <p class="col-12 text-center text-sm-start">
                                            The store's collection is a celebration of everything
                                            maximalist there are face masks with elf ears, iridescent
                                            platform shoes.
                                        </p>
                                    </div>
                                    <div
                                        class="col-12 col-md-3 col-lg-3 col-xl-2 my-auto d-flex justify-content-center align-content-center"
                                    >
                                        <button class="anyQuestionBtnDesign btnAnimation">
                                            Got any question?
                                        </button>
                                    </div>
                                    <div class="col-md-1 d-lg-none" />
                                </div>
                            </div>
                        </div>
                        <!--Product Rating Card-->
                        <div class="row mx-auto my-3">
                            <div class="container individualViewProductRating">
                                <div class="row">
                                    <h5 class="d-flex justify-content-start mx-4 my-3">
                                        Product Rating
                                    </h5>
                                </div>
                                <div class="row mx-auto scrollBox">
                                    <div class="container vertical-scrollable mx-auto">
                                        <div v-if="isShow">
                                            <div
                                                v-for="(rev, idx) in review.slice(0, 3)"
                                                :key="idx"
                                                class="row mx-3 reviewsRating my-4"
                                            >
                                                <div class="col-3 d-flex justify-content-center">
                                                    <img
                                                        class="img-fluid"
                                                        :src="require(`@/${rev.profImageUrl}`)"
                                                        alt=""
                                                    >
                                                </div>
                                                <div class="col-6">
                                                    <h3>{{ rev.username }}</h3>
                                                    <h4 class="d-inline">
                                                        {{ rev.rating }}
                                                        <span
                                                            v-for="i of rev.rating"
                                                            :key="i"
                                                        >
                                                            {{ starsEmoji }}
                                                        </span>
                                                    </h4>
                                                    <p>
                                                        {{ rev.orderDetails }}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div v-else>
                                            <div class="container">
                                                <div
                                                    v-for="rev in review"
                                                    :key="rev.userID"
                                                    class="row mx-3 reviewsRating my-4"
                                                >
                                                    <div class="col-3 d-flex justify-content-center">
                                                        <img
                                                            class="rounded-circle"
                                                            :src="require(`@/${rev.profImageUrl}`)"
                                                            alt=""
                                                        >
                                                    </div>
                                                    <div class="col-6">
                                                        <h3>{{ rev.username }}</h3>
                                                        <h4 class="d-inline">
                                                            {{ rev.rating }}
                                                        </h4>
                                                        <span
                                                            v-for="i of rev.rating"
                                                            :key="i"
                                                        >
                                                            {{ starsEmoji }}
                                                        </span>
                                                        <p>
                                                            {{ rev.orderDetails }}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row my-3">
                                    <div class="col-4 col-md-5" />
                                    <button
                                        class="col-4 col-md-2 mainBtnDesign"
                                        @click="isShow ? (isShow = false) : (isShow = true)"
                                    >
                                        {{ isShow ? "Show More" : "Show Less" }}
                                    </button>
                                    <div class="col-4 col-md-5" />
                                </div>
                            </div>
                        </div>
                        <!--Related Products-->
                        <div class="d-flex justify-content-start my-3 ms-3">
                            <h5>Related Products</h5>
                        </div>
                        <div class="row row-cols-sm-2 row-cols-lg-3 mx-auto">
                            <ProductCard
                                v-for="(obj, idx) in productList"
                                :key="idx"
                                :merchant-name="obj.merchant.name"
                                :desc="obj.name"
                                :price="obj.price"
                                :num-sold="obj.numberSold"
                                :offer-price="obj.specialPrice"
                                :product-pic-url="obj.imgUrl"
                                :profile-pic-url="obj.merchant.imgUrl"
                                :product-id="obj.id"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios"; //npm install axios
import ProductCard from "../components/ProductCard.vue"; //import product card
import { useRoute } from "vue-router";

export default {
  components: {
    ProductCard,
  },
  async beforeRouteUpdate(to, from) {
    // If component is all loaded, but user click to see different product
    // component data will change but page will not reload
    this.productId = to.params.productId;
    const selectedProduct = await axios.get(
      `https://support-local.herokuapp.com/api/products/${this.productId}`
    );
    this.product = selectedProduct.data;
    this.merchant = selectedProduct.data.merchant.name;

    // Fetch and Process Reviews
    // Get the reviewIds tagged to this individual product
    let reviewIdArr = selectedProduct.data.reviews;
    let reviewArr = [];
    for (const [idx, reviewId] of Object.entries(reviewIdArr)) {
      let aReview = await axios.get(
        `https://support-local.herokuapp.com/api/reviews/${reviewId}`
      );
      // Extract UserID from aReview & User UserID to find user Obj
      let userID = aReview.data.user;
      let aUser = await axios.get(
        `https://support-local.herokuapp.com/api/users/${userID}`
      );

      // Find the Username & Find the ProfilePic URL
      let username = aUser.data.username;
      let profImageUrl = aUser.data.profImageUrl;

      // Add to aReview Object
      aReview.data.username = username;
      aReview.data.profImageUrl = profImageUrl;

      // Add to reviewArr
      reviewArr.push(aReview.data);
    }
    this.review = reviewArr;
    // Scroll to the top once the user clicks another product
    window.scrollTo(0, 0);
  },
  data() {
    return {
      mode: localStorage.modes,
      isShow: true,
      productId: "",
      merchantProducts: "", //merchant Related Products obj
      productList: "", //product obj
      review: "", //review Arr
      merchant: "", //dummy selected merchant In Good Company
      product: null, //dummy selected product Martine Necklace
      quantity: 1,
      cart: [],
      shoppingCart: [],
      starsEmoji: "⭐️",
    };
  },

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
    this.productId = route.params.productId;

    // Retrieve products and review from API Endpoint
    const products = await axios.get(
      "https://support-local.herokuapp.com/api/products"
    );

    const selectedProduct = await axios.get(
      `https://support-local.herokuapp.com/api/products/${route.params.productId}`
    );

    // await axios
    //   .post("http://localhost:8080/users")
    //   .then((resp) => {
    //     console.log(resp.data);
    //   })
    //   .catch((err) => {
    //     console.log(err.message);
    //   });

    this.product = selectedProduct.data;
    this.productList = products.data;
    this.merchant = selectedProduct.data.merchant.name;

    // Fetch and Process Reviews
    // Get the reviewIds tagged to this individual product
    let reviewIdArr = selectedProduct.data.reviews;
    let reviewArr = [];
    for (const [idx, reviewId] of Object.entries(reviewIdArr)) {
      let aReview = await axios.get(
        `https://support-local.herokuapp.com/api/reviews/${reviewId}`
      );
      // Extract UserID from aReview & User UserID to find user Obj
      let userID = aReview.data.user;
      let aUser = await axios.get(
        `https://support-local.herokuapp.com/api/users/${userID}`
      );

      // Find the Username & Find the ProfilePic URL
      let username = aUser.data.username;
      let profImageUrl = aUser.data.profImageUrl;

      // Add to aReview Object
      aReview.data.username = username;
      aReview.data.profImageUrl = profImageUrl;

      // Add to reviewArr
      reviewArr.push(aReview.data);
    }
    this.review = reviewArr;
  },
  methods: {
    addToCart(product) {
      // push shopping cart's product details into the array to be sent to db, subsequently used in the ShoppingCart/ViewOrder pages
      // [ productName, prodID, qty, price, imgURL, merchantName, datePurchased ]
      var dateObj = new Date();
      var date = dateObj.getDate();
      var month = dateObj.getMonth();
      var year = dateObj.getFullYear();
      console.log(date);
      var datePurchased = date + `/` + month + `/` + year;
      console.log(this.product);

      // push array into the shopping cart array: nested list to db user
      this.shoppingCart.push([
        product.name,
        product.id,
        this.quantity,
        product.price,
        product.imgUrl,
        this.merchant,
        datePurchased,
      ]);

      console.log(this.shoppingCart);
    },
    viewCart() {
      this.$router.push("cart");
    },
  },
};
</script>

<style>
@import "../assets/style/global.css";
</style>
