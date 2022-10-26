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
                        <h6 class="col-md-2 my-auto">
                            Product
                        </h6>
                        <h6 class="col-md-2 my-auto">
                            Unit Price
                        </h6>
                        <h6 class="col-md-2 my-auto">
                            Quantity
                        </h6>
                        <h6 class="col-md-3 my-auto">
                            Total Price
                        </h6>
                        <h6 class="col-md-2 my-auto">
                            Action
                        </h6>
                    </div>
                </div>
                <div class="row products mx-auto">
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
                    />
                </div>
                <div class="container orderDetails">
                    <div class="row p-0 mx-auto">
                        <div class="col-1" />
                        <div class="my-4 col-4">
                            <h3>Order Details:</h3>
                        </div>
                        <div class="col-7" />
                    </div>
                    <div class="row">
                        <div class="col-xl-6">
                            <div class="row p-0 mx-auto">
                                <div class="col-2" />
                                <h6 class="col-5">
                                    Merchant:
                                </h6>
                                <h6 class="col-5">
                                    nextdealshop
                                </h6>
                            </div>
                            <div class="row p-0 mx-auto">
                                <div class="col-2" />
                                <h6 class="col-5">
                                    Location:
                                </h6>
                                <h6 class="col-5">
                                    81 Victoria St
                                </h6>
                            </div>
                            <div class="row p-0 mx-auto">
                                <div class="col-2" />
                                <h6 class="col-5">
                                    Expected Delivery Date:
                                </h6>
                                <h6 class="col-5 my-auto">
                                    15-10-2022
                                </h6>
                            </div>
                        </div>
                        <div class="col-xl-6 mb-3">
                            <div class="row p-0 mx-auto">
                                <div class="col-2" />
                                <h6 class="col-5">
                                    Order Status:
                                </h6>
                                <h6 class="col-5 my-auto my-auto">
                                    Waiting for seller to ship
                                </h6>
                            </div>
                            <div class="row p-0 mx-auto my-2">
                                <div class="col-1 col-xl-2" />
                                <button
                                    class="cancelBtnDesign col-4"
                                    type="button"
                                >
                                    Contact Seller
                                </button>
                                <div class="col-2 col-xl-1" />
                                <button
                                    class="mainBtnDesign col-4"
                                    type="button"
                                >
                                    Mark as Received
                                </button>
                                <div class="col-1" />
                            </div>
                        </div>
                    </div>
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
<style></style>
