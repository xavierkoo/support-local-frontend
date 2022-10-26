<template>
    <div :id="mode">
        <div class="container">
            <div class="row shoppingBack p-0">
                <div class="d-none d-sm-block">
                    <div class="row shoppingBar text-center">
                        <input
                            v-if="showCheckBox"
                            type="checkbox"
                            class="col-sm-1 cb1 my-auto"
                        >
                        <h6 class="col-sm-2 my-auto">
                            Product
                        </h6>
                        <h6 class="col-sm-2 my-auto">
                            Unit Price
                        </h6>
                        <h6 class="col-sm-2 my-auto">
                            Quantity
                        </h6>
                        <h6 class="col-sm-3 my-auto">
                            Total Price
                        </h6>
                        <h6 class="col-sm-2 my-auto">
                            Action
                        </h6>
                    </div>
                </div>

                <div class="row products mx-auto">
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
                <div class="row p-0 mx-auto">
                    <div class="col-sm-5 col-md-6" />
                    <h5 class="col4-4 col-sm-2 col-md-2 my-auto">
                        Total:
                    </h5>
                    <h4 class="col-4 col-sm-2 col-md-2 my-auto">
                        ${{ total }}
                    </h4>
                    <button
                        type="button"
                        class="mainBtnDesign col-4 col-sm-3 col-md-2"
                    >
                        Order Now
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
      showDate: false,
      quantity: 1,
      action: "Review",
      name: "",
      price: "",
      total: 0,
      merchant: "",
      objects: "",
      bikeImg: "",
      shoppingCart: [],
      prodId: "",
      datePurchased: "",
      userId: "1",
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

    // console.log(this.shoppingCart);
    // console.log(user.data[0]);
    // console.log(user.data);

    // calc total
    for (li of this.shoppingCart) {
      this.total += Number(li[3]);
      // console.log(li);
    }
  },
  methods: {
    toCheckOut() {
      // method routes to checkout page when clicked on 'order now'
      this.$router.push("checkout");
    },
  },
};
</script>
