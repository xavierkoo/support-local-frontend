<template>
    <div :id="mode">
        <div class="container">
            <div class="row viewOrder">
                <div class="d-none d-sm-block">
                    <div class="row viewOrderBar text-center py-2">
                        <div class="col-sm-1 cb1 my-auto" />
                        <h6 class="col-sm-3 col-lg-4 my-auto text-start">
                            Product
                        </h6>
                        <h6 class="col-sm-2 my-auto">
                            Unit Price
                        </h6>
                        <h6 class="col-sm-2 my-auto">
                            Quantity
                        </h6>
                        <h6 class="col-sm-2 my-auto">
                            Total Price
                        </h6>
                        <h6 class="col-sm-2 col-lg-1 my-auto">
                            Action
                        </h6>
                    </div>
                </div>
                <div class="products p-0">
                    <div v-if="rate == true">
                        <ReviewRating
                            :user-id="userID"
                            :product-id="productID"
                            class="rounded-bottom"
                        />
                    </div>
                </div>
                <OrderDetails />
                <!-- <OrderDetails
                    v-for="orderList of orderDetailsArr"
                    :key="orderList[0]"
                    :merchant="orderList[0]"
                    :location="orderList[1]"
                    :delivery-date="orderList[2]"
                    :order-status="orderList[3]"
                /> -->
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios"; //npm install axios

import OrderDetails from "../components/OrderDetails.vue";
import ReviewRating from "../components/ReviewRating.vue";
export default {
  components: {
    OrderDetails,
    ReviewRating,
  },
  data() {
    return {
      mode: localStorage.modes,
      rate: true, //v-if for rating.   Change to true if rate is clicked
      userID: "635ac046b01737e727fb4b42", // I need the current logged in userID
      productID: "635abd38b01737e727fb4b38", // I need the the current product is being reviewed. Should be pass from orderlogs page
      showCheckBox: true,
      showQtyInput: false,
      showDate: true,
      name: "", // [0]
      price: 0, // [3]
      quantity: 0, // [2]
      action: "Review",
      total: 0,
      merchant: "", // [5]
      objects: "",
      img: "", // [4]
      shoppingCart: [],
      prodId: "", // [1]
      datePurchased: "", // [6]
      orderDetailsArr: [], // returns nested list of diff merchant's order details
      location: "",
      deliveryDate: "",
      orderStatus: "",
    };
  },
  mounted() {
    window.addEventListener("modes-localstorage-changed", (event) => {
      this.mode = event.detail.storage;
    });
  },
  async beforeMount() {
    // //onload event for vue to populate products in cart
    // // const user = await axios.get(
    // //   "https://support-local.herokuapp.com/api/users?userId=" + this.userId
    // // );
    // const user = await axios.get("http://localhost:8081/users");
    // // get the Shopping Cart nested array
    // this.shoppingCart = user.data[0].shoppingCart;
    // // get order details .orderDetails[replaced with the exact order ID][1]
    // this.orderDetailsArr = user.data[0].orderDetails;
    // this.location = this.orderDetailsArr[0][1];
    // this.deliveryDate = this.orderDetailsArr[0][2];
    // this.orderStatus = this.orderDetailsArr[0][3];
    // // Structure of the properties in db
    // // [ productName, prodID, qty, price, imgURL, merchantName, datePurchased ]
    // // [ merchantName, location, deliverydate, orderStatus]
    // // calc total
    // for (var li of this.shoppingCart) {
    //   this.total += Number(li[3]);
    // }
  },
  methods: {
    toCheckOut() {
      this.$router.push("checkout");
    },
  },
};
</script>
<style></style>
