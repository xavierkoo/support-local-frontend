<template>
    <div class="p-0">
        <div class="Individual" />
        <div :id="mode">
            <div v-if="isLoaded == false">
                <Loading />
            </div>
            <div v-else>
                <div class="container-fluid p-0 m-0">
                    <div class="row mx-3">
                        <div class="row mx-auto">
                            <!--Product Image-->
                            <img
                                class="col-lg-5 individualViewImg my-3 p-0"
                                style="object-fit: contain"
                                :src="require(`@/${product.imgUrl}`)"
                            >
                            <div class="col-1" />
                            <div class="col-lg-6 my-3 individualViewProductCard">
                                <!--Product Card-->
                                <div class="row mt-5">
                                    <div class="col-1" />
                                    <h2 class="col text-start mb-3">
                                        <b>{{ product.name }}</b>
                                    </h2>
                                </div>
                                <div class="row">
                                    <div class="col-1" />
                                    <h4 class="col text-start mb-3">
                                        {{ product.rating }}
                                        <span
                                            v-for="i of product.rating"
                                            :key="i"
                                        >
                                            {{ starsEmoji }}
                                        </span>
                                    </h4>
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
                                    <div class="col-3 col-sm-1" />
                                    <input
                                        id="qty"
                                        v-model="quantity"
                                        class="col-5 py-2"
                                        type="number"
                                    >
                                    <div class="col-1 col-sm-3" />
                                </div>
                                <div class="row mt-5">
                                    <div class="col-1" />
                                    <div class="row col-sm-4 p-0 m-0 my-2">
                                        <div class="col-1" />
                                        <div class="col-10 p-0">
                                            <router-link to="/cart">
                                                <button
                                                    type="button"
                                                    class="col-12 cancelBtnDesign"
                                                >
                                                    View Cart
                                                </button>
                                            </router-link>
                                        </div>
                                        <div class="col-1" />
                                    </div>
                                    <div class="col-2" />
                                    <div class="row col-sm-4 p-0 m-0 my-2">
                                        <div class="col-1" />
                                        <button
                                            id="addToCart"
                                            type="button"
                                            class="col-10 addBtnDesign"
                                            @click="addToCart()"
                                        >
                                            Add To Cart
                                        </button>
                                        <div class="col-1" />
                                    </div>
                                    <div class="col-1" />
                                </div>
                            </div>
                        </div>
                        <div class="row mx-auto my-3 d-none d-sm-block">
                            <!--Product Desc-->
                            <div class="row individualViewProdDesc mx-auto">
                                <h5 class="d-flex align-items-start mx-2 my-2">
                                    <b>Product Description</b>
                                </h5>
                                <h6 class="d-flex align-items-start mx-2 my-3">
                                    {{ product.name }}
                                </h6>
                                <ul
                                    v-for="(specs, idx) in product.productSpec"
                                    :key="idx"
                                    class="mx-4 my-1"
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
                                        class="col-12 col-lg-4 col-xl-3 d-flex justify-content-center"
                                    >
                                        <img
                                            class="img-fluid my-2 rounded-circle"
                                            :src="require(`@/${merchant.imgUrl}`)"
                                            alt=""
                                        >
                                    </div>
                                    <div class="col-12 col-lg-5 col-xl-7 my-auto">
                                        <h3 class="text-center text-lg-start">
                                            <b>{{ merchant.name }}</b>
                                        </h3>
                                        <p class="col-12 text-center text-lg-start m-0">
                                            {{ merchant.aboutUs }}
                                        </p>
                                    </div>
                                    <div
                                        class="col-12 col-lg-3 col-xl-2 my-auto d-flex justify-content-center align-content-center"
                                    >
                                        <button
                                            class="anyQuestionBtnDesign btnAnimation my-2"
                                            data-bs-toggle="modal"
                                            data-bs-target="#staticBackdrop"
                                        >
                                            Got any question?
                                        </button>
                                    </div>

                                    <div
                                        id="staticBackdrop"
                                        class="modal fade shadowbox sticky-top BootModal"
                                        data-bs-keyboard="false"
                                        tabindex="-1"
                                        aria-labelledby="staticBackdropLabel"
                                        aria-hidden="true"
                                    >
                                        <div class="modal-dialog modalCenter">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5
                                                        id="staticBackdropLabel"
                                                        class="modal-title fw-bold"
                                                    >
                                                        Send your queries to the merchant!
                                                    </h5>
                                                    <button
                                                        type="button"
                                                        class="btn-close"
                                                        data-bs-dismiss="modal"
                                                        aria-label="Close"
                                                    />
                                                </div>
                                                <form
                                                    ref="form"
                                                    @submit.prevent="sendEmail"
                                                >
                                                    <div class="modal-body">
                                                        <input
                                                            id="emailMerchant"
                                                            v-model="merchantEmail"
                                                            type="email"
                                                            name="merchant_email"
                                                            class="form-control"
                                                            hidden
                                                        >
                                                        <label
                                                            for="email"
                                                            class="form-label"
                                                        >Email:</label>
                                                        <input
                                                            id="emailUser"
                                                            v-model="userEmail"
                                                            type="email"
                                                            name="user_email"
                                                            class="form-control"
                                                        >
                                                        <label
                                                            for="subject"
                                                            class="form-label"
                                                        >Subject:</label>
                                                        <input
                                                            id="subject"
                                                            v-model="subject"
                                                            type="text"
                                                            name="subject"
                                                            class="form-control"
                                                        >
                                                        <label
                                                            for="queries"
                                                            class="form-label"
                                                        >Queries:</label>
                                                        <textarea
                                                            id="queries"
                                                            v-model="queries"
                                                            type="text"
                                                            name="queries"
                                                            class="form-control"
                                                            rows="6"
                                                        />
                                                    </div>
                                                    <div class="modal-footer">
                                                        <button
                                                            type="button"
                                                            class="btn cancelbtnDesign"
                                                            data-bs-dismiss="modal"
                                                        >
                                                            Close
                                                        </button>
                                                        <button
                                                            type="submit"
                                                            class="btn mainBtnDesign"
                                                        >
                                                            Send
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!--Product Rating Card-->
                        <div class="row mx-auto my-3">
                            <div class="container individualViewProductRating">
                                <div class="row">
                                    <h5
                                        class="d-flex justify-content-center justify-content-md-start ps-md-4 ms-md-1 mt-3 text-center fw-bold"
                                    >
                                        Product Rating
                                    </h5>
                                </div>
                                <div class="row mx-auto scrollBox">
                                    <div class="vertical-scrollable p-0">
                                        <div v-if="review.length == 0">
                                            <div class="container text-center">
                                                <h5 class="text-secondary">
                                                    No Reviews Yet
                                                </h5>
                                            </div>
                                        </div>
                                        <div v-else>
                                            <div v-if="isShow">
                                                <div
                                                    v-for="(rev, idx) in review.slice(0, 2)"
                                                    :key="idx"
                                                    class="row mx-3 reviewsRating mt-1"
                                                >
                                                    <div class="col-md-1 col-lg-1" />
                                                    <div
                                                        class="col-2 col-md-2 col-lg-2 d-flex justify-content-md-end my-auto"
                                                    >
                                                        <img
                                                            class="userPhoto d-none d-md-block"
                                                            :src="require(`@/${rev.profImageUrl}`)"
                                                            alt=""
                                                        >
                                                    </div>
                                                    <div class="col-md-1 d-none d-md-block" />
                                                    <div class="col-md-7 my-3 ms-xl-4">
                                                        <div class="row">
                                                            <h5
                                                                class="col-xl-10 my-auto text-start text-sm-center ps-1 ps-xl-0 text-md-start ms-md-0 fw-bold p-0"
                                                            >
                                                                User {{ rev.user }}
                                                            </h5>
                                                            <div class="row col-xl-10 m-0 p-0 ms-1 ms-xl-0">
                                                                <h5
                                                                    class="d-inline my-auto text-start text-sm-center text-md-start p-0"
                                                                >
                                                                    {{ rev.rating }}
                                                                    <span
                                                                        v-for="i of rev.rating"
                                                                        :key="i"
                                                                    >
                                                                        {{ starsEmoji }}
                                                                    </span>
                                                                </h5>
                                                                <h5
                                                                    class="my-auto text-start text-sm-center text-md-start p-0"
                                                                >
                                                                    {{ rev.orderDetails }}
                                                                </h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-1" />
                                                </div>
                                            </div>
                                            <div v-else>
                                                <div
                                                    v-for="(rev, idx) in review"
                                                    :key="idx"
                                                    class="row mx-3 reviewsRating mt-1"
                                                >
                                                    <div class="col-md-1 col-lg-1" />
                                                    <div
                                                        class="col-2 col-md-2 col-lg-2 d-flex justify-content-md-end my-auto"
                                                    >
                                                        <img
                                                            class="userPhoto d-none d-md-block"
                                                            :src="require(`@/${rev.profImageUrl}`)"
                                                            alt=""
                                                        >
                                                    </div>
                                                    <div class="col-md-1 d-none d-md-block" />
                                                    <div class="col-md-7 my-3 ms-xl-4">
                                                        <div class="row">
                                                            <h5
                                                                class="col-xl-10 my-auto text-start text-sm-center ps-1 ps-xl-0 text-md-start ms-md-0 fw-bold p-0"
                                                            >
                                                                User {{ rev.user }}
                                                            </h5>
                                                            <div class="row col-xl-10 m-0 p-0 ms-1 ms-xl-0">
                                                                <h5
                                                                    class="d-inline my-auto text-start text-sm-center text-md-start p-0"
                                                                >
                                                                    {{ rev.rating }}
                                                                    <span
                                                                        v-for="i of rev.rating"
                                                                        :key="i"
                                                                    >
                                                                        {{ starsEmoji }}
                                                                    </span>
                                                                </h5>
                                                                <h5
                                                                    class="my-auto text-start text-sm-center text-md-start p-0"
                                                                >
                                                                    {{ rev.orderDetails }}
                                                                </h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-1" />
                                                </div>
                                            </div>
                                            <div class="row my-3 pe-1 pe-md-0">
                                                <div class="col-2 col-md-5" />
                                                <button
                                                    class="col-8 col-md-2 mainBtnDesign"
                                                    @click="isShow ? (isShow = false) : (isShow = true)"
                                                >
                                                    {{ isShow ? "Show More" : "Show Less" }}
                                                </button>
                                                <div class="col-2 col-md-5" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!--Related Products-->
                        <div class="d-flex justify-content-start my-3 ms-sm-3">
                            <h5 class="fw-bold">
                                Related Products
                            </h5>
                        </div>
                        <div class="row row-cols-sm-2 row-cols-lg-3 mx-auto">
                            <ProductCard
                                v-for="(obj, idx) in productList"
                                :key="idx"
                                :merchant-id="obj.merchant.id"
                                :merchant-name="obj.merchant.name"
                                :desc="obj.name"
                                :price="obj.price"
                                :num-sold="obj.numberSold"
                                :offer-price="obj.specialPrice"
                                :product-pic-url="obj.imgUrl"
                                :profile-pic-url="obj.merchant.imgUrl"
                                :product-id="obj.id"
                                :last-online-hour="obj.merchant.lastOnline"
                                class="px-sm-2 mb-2 card-grow"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import ProductCard from "../components/ProductCard.vue";
import { useRoute } from "vue-router";
import Loading from "../components/LoadingAnimation.vue";
import emailjs from "@emailjs/browser";

export default {
  components: {
    ProductCard,
    Loading,
  },
  async beforeRouteUpdate(to, from) {
    this.isLoaded = false;
    // If component is all loaded, but user click to see different product
    // component data will change but page will not reload
    this.productId = to.params.productId;
    const selectedProduct = await axios.get(
      `https://support-local-backend.onrender.com/api/products/${this.productId}`
    );
    this.product = selectedProduct.data;
    this.selectedProd = selectedProduct.data; // get the prod data property
    this.merchantId = this.product.merchant;
    const url = `https://support-local-backend.onrender.com/api/merchants/${this.merchantId}`;
    const merchant = await axios.get(url);
    this.merchant = merchant.data;

    // Fetch and Process Reviews
    // Get the reviewIds tagged to this individual product
    let reviewIdArr = selectedProduct.data.reviews;
    let reviewArr = [];
    for (const [idx, reviewId] of Object.entries(reviewIdArr)) {
      let aReview = await axios.get(
        `https://support-local-backend.onrender.com/api/reviews/${reviewId}`
      );
      // Extract UserID from aReview & User UserID to find user Obj
      let userID = aReview.data.user;
      let aUser = await axios.get(
        `https://support-local-backend.onrender.com/api/users/${userID}`
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
    this.isLoaded = true;
    window.scrollTo(0, 0);
  },
  data() {
    return {
      isLoaded: false,
      merchantEmail: "",
      queries: "",
      subject: "",
      userEmail: "",
      mode: localStorage.modes,
      isShow: true,
      productId: "",
      merchantId: "",
      merchantProducts: "", //merchant Related Products obj
      productList: "", //product obj
      review: null, //review Arr
      merchant: null,
      product: null,
      quantity: 1, // v-model qty
      cart: [],
      shoppingCart: [],
      starsEmoji: "⭐️",
      selectedProd: "", // product obj retrieved from api
    };
  },
  watch: {
    isLoaded() {
      window.scrollTo(0, 0);
    },
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
      "https://support-local-backend.onrender.com/api/products"
    );

    const selectedProduct = await axios.get(
      `https://support-local-backend.onrender.com/api/products/${route.params.productId}`
    );

    // selectedProduct will act as a db to get the data
    this.selectedProd = selectedProduct.data; // get the prod data property

    //retrieve merchant that is selling the selected product
    this.product = selectedProduct.data;
    this.productList = products.data.slice(0, 12);
    this.merchantId = this.product.merchant;
    const url = `https://support-local-backend.onrender.com/api/merchants/${this.merchantId}`;
    const merchant = await axios.get(url);
    this.merchant = merchant.data;
    this.merchantEmail = merchant.data.email;
    // retrieve merchant name from this.merchant
    var merchantName = this.merchant.name;
    // add merchant name to this.selectedProd
    this.selectedProd["merchantName"] = merchantName;

    // Fetch and Process Reviews
    // Get the reviewIds tagged to this individual product
    let reviewIdArr = selectedProduct.data.reviews;
    let reviewArr = [];
    for (const [idx, reviewId] of Object.entries(reviewIdArr)) {
      let aReview = await axios.get(
        `https://support-local-backend.onrender.com/api/reviews/${reviewId}`
      );
      // Extract UserID from aReview & User UserID to find user Obj
      let userID = aReview.data.user;
      let aUser = await axios.get(
        `https://support-local-backend.onrender.com/api/users/${userID}`
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
    this.isLoaded = true;
  },
  methods: {
    addToCart() {
      // Commit and add selected product object to local storage
      // retrieve qty from v-model and add to this.selectedProd
      this.selectedProd["quantity"] = this.quantity;
      this.$store.commit("addToCart", this.selectedProd);
      alert(`${this.selectedProd.name} has been added!`);
    },
    removeFromCart() {
      // Commit and remove selected product from local storage
      this.$store.commit("removeFromCart", this.product);
    },
    deleteItem() {
      this.$store.commit("deleteItem", this.product);
    },
    sendEmail() {
      if (
        this.subject.trim() == "" ||
        this.queries.trim() == "" ||
        this.userEmail.trim() == ""
      ) {
        alert("Please make sure you fill up the form correctly");
      } else {
        emailjs
          .sendForm(
            "SupportLocal2022",
            "queriesWAD2",
            this.$refs.form,
            "8Ofr7mrBSFNOFqcER"
          )
          .then(
            (result) => {
              console.log("SUCCESS!", result.text);
              alert(
                "Your queries have been successfully sent to the merchant!"
              );
              this.queries = "";
              this.subject = "";
              this.userEmail = "";
            },
            (error) => {
              console.log("FAILED...", error.text);
            }
          );
      }
    },
  },
};
</script>

<style>
@import "../assets/style/global.css";
</style>
