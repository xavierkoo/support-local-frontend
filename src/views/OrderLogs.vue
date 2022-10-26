<template>
    <div :id="mode">
        <div class="container">
            <div class="row d-none d-sm-block text-center">
                <div class="row orderBar mx-2">
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
            <div class="row orderBack">
                <CartProducts
                    v-for="(obj, ind) in shoppingCart"
                    :key="ind"
                    :merchant="obj[4]"
                    :price="obj[3]"
                    :name="obj[1]"
                    :bike="obj[5]"
                    :show-check-box="showCheckBox"
                    :prod-id="obj[0]"
                    :date-purchased="obj[6]"
                    :show-qty-input="showQtyInput"
                    :show-date="showDate"
                    :quantity="obj[2]"
                    :action="action"
                />
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
    const user = await axios.get("http://localhost:8081/user");
    this.objects = user.data;
    this.shoppingCart = this.objects[0]["shoppingCart"];
    // calc total
    for (var li of this.shoppingCart) {
      this.total += Number(li[3]);
    }
  },
};
</script>
<style>
@import "../assets/style/global.css";
</style>
