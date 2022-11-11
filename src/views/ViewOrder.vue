<template>
    <div class="viewOrder">
        <div class="container">
            <div class="d-none d-sm-block">
                <div
                    class="row justify-content-center align-items-center text-center orderBar"
                >
                    <div class="col-sm-3">
                        <b>Product</b>
                    </div>
                    <div class="col-sm-2">
                        <b>Unit Price</b>
                    </div>
                    <div class="col-sm-2">
                        <b>Quantity</b>
                    </div>
                    <div class="col-sm-2">
                        <b>Total Price</b>
                    </div>
                    <div class="col-sm-3">
                        <b>Action</b>
                    </div>
                </div>
            </div>
            <div class="orderRow row">
                <h6 class="fw-bold my-auto col-sm-4 col-lg-3 text-center py-3">
                    <h5 class="d-block d-sm-none fw-bold">
                        OrderID:
                    </h5>
                    {{ orderObj.id }}
                </h6>
                <hr class="m-0">
            </div>
            <div class="row text-center orderRowIndItem">
                <div class="col-sm-3 py-3 my-auto">
                    <h5 class="d-block d-sm-none fw-bold">
                        Product:
                    </h5>
                    {{ productObj.name }}
                </div>
                <div class="col-sm-2 py-3 my-auto">
                    <span class="d-inline-block d-sm-none">Price: </span> ${{
                        productObj.price
                    }}
                </div>
                <div class="col-sm-2 py-3 my-auto">
                    <span class="d-inline-block d-sm-none">Quantity: </span>
                    {{ productObj.qty }}
                </div>
                <div class="col-sm-2 py-3 my-auto">
                    <span class="d-inline-block d-sm-none">Total Price:</span> ${{
                        productObj.price * productObj.qty
                    }}
                </div>
                <div class="col-3 d-inline-block d-sm-none" />
                <div class="col-6 col-sm-3 py-3 my-auto">
                    <button
                        class="mainBtnDesign w-100"
                        @click="rateToggle"
                    >
                        Rate
                    </button>
                </div>
                <div class="col-3 d-inline-block d-sm-none" />
            </div>
            <div
                v-if="rate == true"
                class="row"
            >
                <ReviewRating
                    :user-id="userID"
                    :product-id="productID"
                    class="rounded-bottom"
                />
            </div>
        </div>
        <OrderDetails
            :merchant="merchantObj.name"
            :location="merchantObj.location"
            :delivery-date="orderObj.deliveryDate"
            :order-status="orderObj.orderStatus"
            :order-id="orderObj.id"
        />
    </div>
</template>

<script>
import axios from "axios"; //npm install axios
import { useRoute } from "vue-router";
import OrderDetails from "../components/OrderDetails.vue";
import ReviewRating from "../components/ReviewRating.vue";
export default {
  components: {
    OrderDetails,
    ReviewRating,
  },
  data() {
    return {
      rate: false, //v-if for rating.   Change to true if rate is clicked
      userID: "", // I need the current logged in userID
      productID: "", // I need the the current product is being reviewed. Should be pass from orderlogs page
      productObj: {},
      orderObj: {},
      merchantObj: {},
    };
  },
  mounted() {
    window.addEventListener("modes-localstorage-changed", (event) => {
      this.mode = event.detail.storage;
    });
  },
  async beforeMount() {
    const route = useRoute();
    this.productObj = JSON.parse(route.params.prod);
    this.orderObj = JSON.parse(route.params.order);
    let merchantId = this.productObj.merchant;
    let merchant = await axios.get(
      `https://support-local.herokuapp.com/api/merchants/${merchantId}`
    );

    this.merchantObj = merchant.data;

    this.userID = window.localStorage.getItem("userId");
    this.productID = this.productObj.id;
  },
  methods: {
    rateToggle() {
      if (this.rate != true) {
        this.rate = true;
      } else {
        this.rate = !true;
      }
    },
  },
};
</script>
<style></style>
