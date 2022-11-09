<template>
    <div class="viewOrder">
        <div class="container">
            <div class="d-none d-sm-block">
                <div
                    class="row justify-content-center align-items-center text-center g-2 orderBar"
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
            <div class="products p-0">
                <div class="row py-3">
                    <div class="col-1 d-block d-sm-none" />
                    <div class="col-8">
                        <div>
                            <!-- <b><b>{{ orderId }}</b></b> -->
                        </div>
                    </div>
                </div>
                <div
                    class="row justify-content-center align-items-center text-center g-2 bg-secondary text-light"
                >
                    <div class="col-sm-3">
                        {{ productObj.name }}
                    </div>
                    <div class="col-sm-2">
                        {{ productObj.price }}
                    </div>
                    <div class="col-sm-2">
                        {{ productObj.qty }}
                    </div>
                    <div class="col-sm-2">
                        {{ productObj.price * productObj.qty }}
                    </div>
                    <div class="col-sm-3">
                        <button @click="rateToggle">
                            Rate
                        </button>
                    </div>
                </div>
                <div v-if="rate == true">
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
            />
        </div>
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
      rate: true, //v-if for rating.   Change to true if rate is clicked
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
