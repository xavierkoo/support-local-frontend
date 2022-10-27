<template>
    <div :id="mode">
        <div class="container">
            <div class="row orderLog p-0">
                <div class="d-none d-sm-block">
                    <div class="row orderBar text-center py-2 mb-2">
                        <div class="col-sm-1 cb1">
                            <input
                                v-if="showCheckBox"
                                type="checkbox"
                            >
                        </div>
                        <div class="col-sm-2">
                            <b>Product</b>
                        </div>
                        <div class="col-sm-2">
                            <b>Unit Price</b>
                        </div>
                        <div class="col-sm-2">
                            <b>Quantity</b>
                        </div>
                        <div class="col-sm-3">
                            <b>Total Price</b>
                        </div>
                        <div class="col-sm-2">
                            <b>Action</b>
                        </div>
                    </div>
                </div>
                <div class="row orderBack mx-auto">
                    <CartProducts
                        v-for="item of shoppingCart"
                        :key="item[1]"
                        :merchant="item[5]"
                        :price="item[3]"
                        :name="item[0]"
                        :img="item[4]"
                        :show-check-box="showCheckBox"
                        :prod-id="item[1]"
                        :date-purchased="item[6]"
                        :show-qty-input="showQtyInput"
                        :show-date="showDate"
                        :quantity="item[6]"
                        :action="action"
                    />
                </div>
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
      name: "", // [0]
      price: "", // [3]
      quantity: "1", // [2]
      action: "Review",
      total: 0,
      merchant: "", // [5]
      objects: "",
      img: "", // [4]
      shoppingCart: [],
      prodId: "", // [1]
      datePurchased: "", // [6]
    };
  },
  mounted() {
    window.addEventListener("modes-localstorage-changed", (event) => {
      this.mode = event.detail.storage;
    });
  },
  async beforeMount() {
    //onload event for vue to populate products in cart
    const user = await axios.get("http://localhost:8081/users");
    console.log(user);

    // for later when calling to mongodb
    // const user = await axios.get(
    //   "https://support-local.herokuapp.com/api/users?userId=" + this.userId
    // );

    // get the Shopping Cart nested array
    this.shoppingCart = user.data[0].shoppingCart;
    console.log(this.shoppingCart);

    // [ productName, prodID, qty, price, imgURL, merchantName, datePurchased ]
    // [
    //     "MARTIN necklace",
    //     "63576ea5bbe3f9f87c117c4a",
    //     1,
    //     89,
    //     "assets/img/products/martin.png",
    //     "In Good Company",
    //     "27/9/2022"
    //   ];

    // calc total
    this.total = this.quantity * this.price;
    // for (var li of this.shoppingCart) {
    //   this.total += Number(li[3]);
    //   // console.log(li);
    // }
  },
};
</script>
<style>
@import "../assets/style/global.css";
</style>
