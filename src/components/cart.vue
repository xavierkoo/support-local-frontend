<template>
    <div class="cartBack">
        <div class="row py-3">
            <div class="col-1 d-block d-sm-none" />
            <div
                class="col-1 cb1 my-auto d-flex justify-content-center align-content-center"
            >
                <input
                    v-if="showCheckBox"
                    id="cb"
                    type="checkbox"
                >
            </div>
            <div class="col-8">
                <div>
                    <b>{{ product.merchant }} </b> &nbsp;
                    <b v-if="showDate">{{ datePurchased }}</b>
                </div>
            </div>
        </div>
        <div class="row productBack py-5">
            <div class="col-1 d-block d-sm-none" />
            <div
                class="col-1 col-sm-1 cb1 my-auto d-flex justify-content-center align-content-center"
            >
                <input
                    v-if="showCheckBox"
                    type="checkbox"
                >
            </div>
            <div class="col-sm-1 d-none d-lg-block">
                <img
                    :src="img"
                    alt=""
                    class="img-fluid my-auto"
                >
            </div>
            <div class="col-7 col-sm-3 col-lg-3 my-auto">
                <b>{{ product.name }}</b>
            </div>
            <div class="text-end col-3 col-sm-2 my-auto text-sm-center">
                ${{ product.price }}
            </div>
            <div class="text-end mt-2 mt-sm-auto col-sm-2 my-auto text-sm-center">
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
            <div class="col-sm-2 my-auto text-center d-none d-sm-block">
                ${{ item_cost.toFixed(2) }}
            </div>
            <div
                class="text-end col-sm-2 mt-2 mt-sm-auto col-lg-1 my-auto text-sm-center"
            >
                <span
                    class="deleteItem"
                    @click="deleteItem()"
                >{{ action }}</span>
            </div>
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
.deleteItem {
  text-decoration: underline;
  color: blue;
}
</style>
