<template>
    <div>
        <div class="Individual" />
        <div :id="mode">
            <div class="container-fluid box">
                <div class="row mx-3">
                    <div class="row mx-auto">
                        <!--Product Image-->
                        <img
                            class="col-lg-5 individualViewImg my-3"
                            src="../assets/logo.png"
                        >
                        <div class="col-1" />
                        <div class="col-lg-6 my-3 individualViewProductCard">
                            <!--Product Card-->
                            <div class="container">
                                <div class="row">
                                    <div class="col-1" />
                                    <h4 class="col text-start mt-2 mb-4">
                                        {{ product.name }}
                                    </h4>
                                </div>
                                <div class="row">
                                    <div class="col-1" />
                                    <h6 class="col text-start mb-4">
                                        {{ product.rating }}
                                        <span
                                            v-for="i of rating"
                                            :key="i"
                                        >{{ starsEmoji }}</span> /
                                        5
                                    </h6>
                                </div>
                                <div class="row">
                                    <div class="col-1" />
                                    <h2 class="col text-start mb-4">
                                        S${{ product.price }}
                                    </h2>
                                </div>
                                <div class="row">
                                    <div class="col-1" />
                                    <h6 class="col-2">
                                        Quantity
                                    </h6>
                                    <div class="col-1" />
                                    <input
                                        id="qty"
                                        v-model="quantity"
                                        class="col-4"
                                        type="text"
                                    >
                                    <div class="col-3" />
                                </div>
                                <div class="row mb-4">
                                    <div class="col-1" />
                                    <h6 class="col-2">
                                        Size
                                    </h6>
                                    <div class="col-1" />
                                    <input
                                        id="size"
                                        class="col-4"
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
                                v-for="(specs, idx) in product.ProductSpec"
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
                                    <h3 class="text-center text-sm-start">
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
                            <div
                                class="row mx-auto"
                                style="position: relative; height: 500px"
                            >
                                <div class="container vertical-scrollable mx-auto">
                                    <div v-if="isShow">
                                        <div
                                            v-for="rev in review.slice(0, 3)"
                                            :key="rev.userID"
                                            class="row mx-3 reviewsRating my-4"
                                        >
                                            <div class="col-3 d-flex justify-content-center">
                                                <img
                                                    class="w-50 rounded-circle"
                                                    src="../assets/appLogo.svg"
                                                    alt=""
                                                >
                                            </div>
                                            <div class="col-6">
                                                <h3>{{ rev["userName"] }}</h3>
                                                <h4 class="d-inline">
                                                    {{ rev["rating"] }}
                                                </h4>
                                                <span class="d-inline">5Star(image)</span>
                                                <p>
                                                    {{ rev["orderDetails"] }}
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
                                                        class="w-50 rounded-circle"
                                                        src="../assets/appLogo.svg"
                                                        alt=""
                                                    >
                                                </div>
                                                <div class="col-6">
                                                    <h3>{{ rev["userName"] }}</h3>
                                                    <h4 class="d-inline">
                                                        {{ rev["rating"] }}
                                                    </h4>
                                                    <span class="d-inline">5Star(image)</span>
                                                    <p>
                                                        {{ rev["orderDetails"] }}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
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
                            v-for="(prod, value) in relatedProd"
                            :key="value"
                            :merchant-name="merchant"
                            :last-online-hour="prod.lastonlinehour"
                            :desc="value"
                            :price="prod.price"
                            :num-sold="prod.numberSold"
                            :offer-price="prod.specialPrice"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios"; //npm install axios
import ProductCard from "../components/ProductCard.vue"; //import product card
export default {
  components: {
    ProductCard,
  },
  data() {
    return {
      mode: localStorage.modes,
      isShow: true,
      relatedProd: "", //v-for for related product card
      merchant: "", //merchant name
      review: "", //v-for for rating card
      quantity: 1,
      //////////// edited:Cydnie
      product: "",
      cart: [],
      starsEmoji: "⭐️",
      rating: 0,
    };
  },

  mounted() {
    window.addEventListener("modes-localstorage-changed", (event) => {
      this.mode = event.detail.storage;
    });
  },
  async beforeMount() {
    //onload event for vue to populate related product card and rating card
    const prod = await axios.get("http://localhost:8081/merchant");
    this.merchant = prod.data.name;
    this.relatedProd = prod.data.products[0];
    const rev = await axios.get("http://localhost:8081/reviews");
    this.review = rev.data;
    //////////// edited: Cydnie
    this.product = prod.data.products[0];
    this.rating = this.product.rating;
    console.log(this.product);
    console.log(this.rating);
  },
  methods: {
    addToCart(product) {
      this.cart.push(product);
      console.log(this.cart);
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
