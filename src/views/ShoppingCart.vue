<template>
    <div :id="mode">
        <div class="container">
            <div class="row shoppingBack">
                <div class="d-none d-sm-block">
                    <div class="row shoppingBar text-center py-2">
                        <input
                            v-if="showCheckBox"
                            type="checkbox"
                            class="col-sm-1 cb1 my-auto"
                        >
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
                    <CartProducts />
                    <!-- <CartProducts
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
                    /> -->
                </div>
                <div class="row p-0 mx-auto mt-3 pageBack">
                    <div class="col-1 col-sm-4 col-md-5" />
                    <h5 class="col-4 p-0 p-sm-auto col-sm-3 col-md-3 my-auto text-end">
                        Total Price:
                    </h5>
                    <h5 class="col-2 p-0 p-sm-auto col-sm-2 col-md-2 my-auto text-center">
                        ${{ total }}
                    </h5>
                    <button
                        type="button"
                        class="mainBtnDesign col-4 col-sm-3 col-md-2"
                    >
                        Order Now
                    </button>
                    <div class="col-1 col-sm-5 col-md-6" />
                    <hr class="mt-2 mb-0">
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
      showDate: false,
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
    // const user = await axios.get(
    //   "https://support-local.herokuapp.com/api/users?userId=" + this.userId
    // );

    // get the Shopping Cart nested array
    this.shoppingCart = user.data[0].shoppingCart;

    // [ productName, prodID, qty, price, imgURL, merchantName, datePurchased ]

    // calc total
    this.quantity = this.shoppingCart[2];
    this.price = this.shoppingCart[3];
    this.total = this.quantity * this.price;
  },
  methods: {
    toCheckOut() {
      // method routes to checkout page when clicked on 'order now'
      this.$router.push("checkout");
    },
  },
};
</script>
