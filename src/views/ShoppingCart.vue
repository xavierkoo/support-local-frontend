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
                    v-for="(obj, ind) in shoppingCart"
                    :key="ind"
                    :merchant="obj[4]"
                    :price="obj[3]"
                    :name="obj[1]"
                    :bike="obj[5]"
                    :show-check-box="showCheckBox"
                    :prod-id="obj[0]"
                    :show-qty-input="showQtyInput"
                    :show-date="showDate"
                    :quantity="obj[2]"
                />
            </div>
            <div class="row totalrow">
                <div class="col-md-6" />
                <div class="col-md-2 red">
                    <b>Total</b>
                </div>
                <div class="col-md-2 red">
                    <b>${{ total }}</b>
                </div>
                <div class="col-md-2">
                    <button
                        type="button"
                        class="btn btn-danger"
                    >
                        <b>Order Now</b>
                    </button>
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
      showCheckBox: true,
      showQtyInput: true,
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
</style>
