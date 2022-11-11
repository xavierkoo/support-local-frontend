<template>
    <div class="cartBack">
        <div class="row py-3 px-2 text-center text-sm-start">
            <h5 class="d-block d-sm-none fw-bold">
                Merchant Name:
            </h5>
            <h6 class="fw-bold text-sm-start text-center my-auto">
                {{ product.merchantName }}
            </h6>
            <h6 v-if="showDate">
                {{ datePurchased }}
            </h6>
        </div>
        <div class="row productBack py-3 px-2">
            <div class="col-sm-3 col-lg-4 my-auto text-center">
                <h5 class="d-block d-sm-none fw-bold">
                    Product:
                </h5>
                <h6 class="fw-bold text-sm-start text-center">
                    {{ product.name }}
                </h6>
            </div>
            <div class="text-center col-sm-2 my-auto text-sm-center">
                <span class="d-inline-block d-sm-none">Price: </span> ${{
                    product.price
                }}
            </div>
            <div class="text-center mt-2 mt-sm-auto col-sm-2 my-auto text-sm-center">
                <span class="d-inline-block d-sm-none me-2">Quantity:</span>
                <input
                    v-if="showQtyInput"
                    v-model="quantity"
                    type="number"
                    class="text-end"
                    @change="addOrRemoveFromCart()"
                >

                <span v-if="!showQtyInput">
                    {{ product.quantity }}
                </span>
            </div>
            <div class="col-sm-3 my-auto text-center d-none d-sm-block">
                ${{ item_cost.toFixed(2) }}
            </div>
            <div class="col-3 d-inline-block d-sm-none" />
            <div
                class="text-center col-6 col-sm-2 mt-2 mt-sm-auto col-lg-1 my-auto text-sm-center"
            >
                <button
                    class="cancelBtnDesign w-100"
                    @click="deleteItem()"
                >
                    {{ action }}
                </button>
            </div>
            <div class="col-3 d-inline-block d-sm-none" />
        </div>
    </div>
</template>

<script>
export default {
  name: "CartProducts",
  props: {
    product: {
      type: Object,
      default: null,
    },
    showCheckBox: {
      type: Boolean,
      default: true,
    },
    showQtyInput: {
      type: Boolean,
      default: true,
    },
    showDate: {
      type: Boolean,
      default: true,
    },
    action: {
      type: String,
      default: "Delete",
    },
  },
  data() {
    return {
      // current qty
      quantity: this.product.quantity,
    };
  },
  computed: {
    item_cost() {
      return this.product.price * this.quantity;
    },
    items() {
      return this.$store.getters.cartItems;
    },
  },
  methods: {
    addOrRemoveFromCart() {
      var storeVal = this.product.quantity; // local storage qty
      var changedVal = this.quantity; // current qty

      if (storeVal < changedVal) {
        // means that person added to cart
        this.$store.commit("addToCart", this.product); // increment in local storage
      } else if (storeVal > this.quantity) {
        // person removed from cart
        this.$store.commit("removeFromCart", this.product); // decrement in local storage
      }
    },
    deleteItem() {
      this.$store.commit("deleteItem", this.product);
    },
  },
};
</script>

<style scoped>
@import "../assets/style/global.css";
</style>
