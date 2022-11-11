<template>
    <div>
        <div
            v-if="isCartNotEmpty"
            class="container"
        >
            <div class="row shoppingBack">
                <div class="d-none d-sm-block">
                    <div class="row shoppingBar text-center py-2 px-2">
                        <h6 class="col-sm-3 col-lg-4 my-auto text-start">
                            Product
                        </h6>
                        <h6 class="col-sm-2 my-auto">
                            Unit Price
                        </h6>
                        <h6 class="col-sm-2 my-auto">
                            Quantity
                        </h6>
                        <h6 class="col-sm-3 col-lg-3 my-auto">
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
                    <div class="col-2 col-sm-3 col-md-3 col-lg-5" />
                    <h5
                        class="col-4 ms-4 ms-sm-0 p-0 p-sm-auto col-sm-3 col-md-3 my-auto text-end"
                    >
                        Total Price:
                    </h5>
                    <h5
                        class="col-4 p-0 p-sm-auto col-sm-2 col-md-2 my-auto ms-3 ms-sm-0 text-start text-sm-center"
                    >
                        ${{ total }}
                    </h5>
                    <div class="col-3 d-block d-sm-none" />
                    <router-link
                        v-if="loginFlag"
                        to="/checkout"
                        class="col-6 col-sm-3 col-md-2"
                    >
                        <button
                            type="button"
                            class="mainBtnDesign w-100"
                        >
                            Order Now
                        </button>
                    </router-link>
                    <router-link
                        v-else
                        to="/login"
                        class="col-6 col-sm-4 col-md-4 col-lg-2"
                    >
                        <button
                            type="button"
                            class="mainBtnDesign w-100"
                        >
                            Login to Order
                        </button>
                    </router-link>
                    <div class="col-3 d-block d-sm-none" />
                    <div class="col-1 col-sm-5" />
                    <hr class="mt-2 mb-0">
                </div>
            </div>
        </div>
        <div v-if="!isCartNotEmpty">
            <div class="container cartEmpty p-3">
                <h3>YOUR BAG</h3>
                <hr>
                <div>
                    <div class="mb-3">
                        Your shopping bag is empty
                    </div>
                    <router-link to="/landing">
                        <button
                            class="btn mainBtnDesign text-decoration-none text-center p-2 my-auto"
                        >
                            Start shopping now!
                        </button>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CartProducts from "../components/cart.vue";
export default {
  name: "App",
  components: {
    CartProducts,
  },
  data() {
    return {
      loginFlag: false,
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

    if (window.localStorage.getItem("userId") === null) {
      this.loginFlag = false;
    } else {
      this.loginFlag = true;
    }
  },
};
</script>

<style>
@import "../assets/style/global.css";
</style>
