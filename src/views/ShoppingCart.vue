<template>
    <div :id="mode">
        <div
            v-if="isCartNotEmpty"
            class="container"
        >
            <div class="row shoppingBack">
                <div class="d-none d-sm-block">
                    <div class="row shoppingBar text-center py-2">
                        <!-- <input
                            v-if="showCheckBox"
                            type="checkbox"
                            class="col-sm-1 cb1 my-auto"
                        > -->
                        <h6 class="col-sm-4 col-lg-4 my-auto text-start px-4">
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

                <CartProducts
                    v-for="product in items"
                    :key="product.id"
                    :product="product"
                />

                <div class="row p-0 mx-auto mt-3 pageBack">
                    <div class="col-1 col-sm-4 col-md-5" />
                    <h5 class="col-4 p-0 p-sm-auto col-sm-3 col-md-3 my-auto text-end">
                        Total Price:
                    </h5>
                    <h5 class="col-2 p-0 p-sm-auto col-sm-2 col-md-2 my-auto text-center">
                        ${{ total }}
                    </h5>
                    <router-link to="/login">
                        <button
                            type="button"
                            class="mainBtnDesign col-4 col-sm-3 col-md-2"
                        >
                            Order Now
                        </button>
                    </router-link>
                    <div class="col-1 col-sm-5 col-md-6" />
                    <hr class="mt-2 mb-0">
                </div>
            </div>
        </div>
        <div
            v-if="!isCartNotEmpty"
            class="container"
        >
            <div class="container">
                <h3>YOUR BAG</h3>
                <hr>
                <div>
                    Your shopping bag is empty <br>
                    <router-link to="/landing">
                        <b>Start shopping now!</b>
                    </router-link>
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
    };
  },
  computed: {
    items() {
      // call and get local storage cart items
      console.log(this.$store.getters.cartItems);
      return this.$store.getters.cartItems;
    },
    total() {
      // calculate total of all products in cart
      var total1 = 0;
      for (var product of this.items) {
        console.log(product);
        total1 += product.quantity * product.price;
      }
      return total1;
    },
    isCartNotEmpty() {
      if (this.$store.getters.cartItems.length == 0) {
        return false;
      } else {
        return true;
      }
    },
  },
  mounted() {
    window.addEventListener("modes-localstorage-changed", (event) => {
      this.mode = event.detail.storage;
    });
  },
};
</script>
