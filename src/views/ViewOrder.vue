<template>
    <div :id="mode">
        <div class="container">
            <div class="row viewOrder p-0">
                <div class="d-none d-sm-block">
                    <div class="row viewOrderBar text-center py-2 mb-2">
                        <input
                            v-if="showCheckBox"
                            type="checkbox"
                            class="col-sm-1 cb1 my-auto"
                        >
                        <h6 class="col-md-6 my-auto align-left">
                            Product
                        </h6>
                        <h6 class="col-md-2 my-auto">
                            Unit Price
                        </h6>
                        <h6 class="col-md-2 my-auto">
                            Quantity
                        </h6>
                        <h6 class="col-md-2 my-auto">
                            Total Price
                        </h6>
                    </div>
                </div>
                <div class="row products mx-auto">
                    <CartProducts
                        v-for="item of shoppingCart"
                        :key="item[1]"
                        :merchant="item[5]"
                        :price="item[3]"
                        :name="item[0]"
                        :img="item[4]"
                        :show-check-box="showCheckBox"
                        :prod-id="item[1]"
                        :show-qty-input="showQtyInput"
                        :show-date="showDate"
                        :quantity="item[6]"
                        :total="total"
                    />
                </div>
                <OrderDetails
                    v-for="orderList of orderDetailsArr"
                    :key="orderList[0]"
                    :merchant="orderList[0]"
                    :location="orderList[1]"
                    :delivery-date="orderList[2]"
                    :order-status="orderList[3]"
                />
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios"; //npm install axios
import CartProducts from "../components/cart.vue";
import OrderDetails from "../components/OrderDetails.vue";
export default {
  components: {
    CartProducts,
    OrderDetails,
  },
  data() {
    return {
      mode: localStorage.modes,
      showCheckBox: false,
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
    //onload event for vue to populate products in cart
    // const user = await axios.get(
    //   "https://support-local.herokuapp.com/api/users?userId=" + this.userId
    // );
    const user = await axios.get("http://localhost:8081/users");

    // get the Shopping Cart nested array
    this.shoppingCart = user.data[0].shoppingCart;

    // get order details .orderDetails[replaced with the exact order ID][1]
    this.orderDetailsArr = user.data[0].orderDetails;
    this.location = this.orderDetailsArr[0][1];
    this.deliveryDate = this.orderDetailsArr[0][2];
    this.orderStatus = this.orderDetailsArr[0][3];

    // Structure of the properties in db
    // [ productName, prodID, qty, price, imgURL, merchantName, datePurchased ]
    // [ merchantName, location, deliverydate, orderStatus]

    // calc total
    for (var li of this.shoppingCart) {
      this.total += Number(li[3]);
    }
  },
  methods: {
    toCheckOut() {
      this.$router.push("checkout");
    },
  },
};
</script>
<style></style>
