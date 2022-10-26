<template>
    <div :id="mode">
        <div class="container p-0">
            <div class="row bg-danger row1 mx-4">
                <div class="col-md-1 cb1">
                    <input
                        v-if="showCheckBox"
                        type="checkbox"
                    >
                </div>
                <div class="col-md-3">
                    <b>Product</b>
                </div>
                <div class="col-md-2">
                    <b>Unit Price</b>
                </div>
                <div class="col-md-2">
                    <b>Quantity</b>
                </div>
                <div class="col-md-2">
                    <b>Total Price</b>
                </div>
                <div class="col-md-2">
                    <b>Action</b>
                </div>
            </div>
            <div>
                <CartProducts
                    v-for="li of shoppingCart"
                    :key="li[1]"
                    :merchant="li[5]"
                    :price="li[3]"
                    :name="li[0]"
                    :bike-img="li[4]"
                    :show-check-box="showCheckBox"
                    :prod-id="li[1]"
                    :show-qty-input="showQtyInput"
                    :show-date="showDate"
                    :quantity="li[2]"
                    :date-purchased="li[6]"
                    :action="action"
                />
            </div>
        </div>
        <div class="container p-0">
            <div class="row bg-light mx-4 mt-5">
                <div class="container px-5 py-4">
                    <h5 style="color: black">
                        <b>Order Details:</b>
                    </h5>
                </div>
            </div>
            <div class="row bg-light mx-4 px-5">
                <div
                    class="col-md-2"
                    style="color: black"
                >
                    <b>Merchant:</b>
                </div>
                <div
                    class="col-md-4"
                    style="color: black"
                >
                    nextdealshop
                </div>
                <div
                    class="col-md-2"
                    style="color: black"
                >
                    <b>Order Status</b>
                </div>
                <div
                    class="col-md-4"
                    style="color: black"
                >
                    Waiting for Seller to ship
                </div>
            </div>
            <div class="row bg-light mx-4 px-5">
                <div
                    class="col-md-2"
                    style="color: black"
                >
                    <b>Location:</b>
                </div>
                <div
                    class="col-md-4"
                    style="color: black"
                >
                    81 Victoria St
                </div>
                <div class="col-md-6" />
            </div>
            <div class="row bg-light mx-4 px-5">
                <div
                    class="col-md-2"
                    style="color: black"
                >
                    <b>Expected Delivery Date:</b>
                </div>
                <div
                    class="col-md-4"
                    style="color: black"
                >
                    15-10-2022
                </div>
                <div class="col-md-2">
                    <button
                        class="btn btn-secondary button"
                        type="button"
                        style="color: black"
                    >
                        Contact Seller
                    </button>
                </div>
                <div class="col-md-2">
                    <button
                        class="btn btn-danger button"
                        type="button"
                    >
                        Mark as Received
                    </button>
                </div>
                <div class="col-md-2" />
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios"; //npm install axios
import CartProducts from "../components/cart.vue";
export default {
  components: {
    CartProducts,
  },
  data() {
    return {
      mode: localStorage.modes,
      showCheckBox: false,
      showQtyInput: false,
      showDate: true,
      name: "",
      price: "",
      quantity: "1",
      action: "Review",
      total: 0,
      merchant: "",
      objects: "",
      bike: "",
      shoppingCart: "",
      prodId: "",
      datePurchased: "",
    };
  },
  mounted() {
    window.addEventListener("modes-localstorage-changed", (event) => {
      this.mode = event.detail.storage;
    });
  },
  async beforeMount() {
    //onload event for vue to populate products in cart
    const user = await axios.get(
      "https://support-local.herokuapp.com/api/users?userId=" + this.userId
    );

    // get the Shopping Cart nested array
    this.shoppingCart = user.data[0].shoppingCart;

    // [ productName, prodID, qty, price, imgURL, merchantName, datePurchased ]

    // calc total
    for (li of this.shoppingCart) {
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
<style>
.container {
  text-align: left;
}
.row1 {
  color: white;
}
.row {
  padding: 10px 0;
}
.cb1 {
  text-align: right;
}
.totalrow {
  padding: 50px 0 0 10px;
}
.red {
  color: rgb(160, 39, 39);
}
input[type="number"] {
  width: 50px;
}
.button {
  width: 80%;
}
</style>
