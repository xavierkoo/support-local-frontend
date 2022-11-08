<template>
    <div class="row py-3">
        <div class="col-1 d-block d-sm-none" />
        <div class="col-8">
            <div>
                <b><b>{{ orderId }}</b></b>
            </div>
        </div>
    </div>
    <div
        v-for="(prod, index) in productsArr"
        :key="index"
        class="row justify-content-center align-items-center text-center g-2 bg-secondary text-light"
    >
        <div class="col-sm-3">
            {{ prod.name }}
        </div>
        <div class="col-sm-2">
            {{ prod.price }}
        </div>
        <div class="col-sm-2">
            {{ prod.qty }}
        </div>
        <div class="col-sm-2">
            {{ prod.price * prod.qty }}
        </div>
        <div class="col-sm-3">
            <router-link
                :to="{
                    name: 'viewOrder',
                    params: {
                        prod: `${JSON.stringify(prod)}`,
                        order: `${JSON.stringify(order)}`,
                    },
                }"
            >
                Review
            </router-link>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
  name: "OrderRow",
  props: {
    orderId: {
      type: String,
      default: "",
    },
    products: {
      type: Array,
      default: () => [],
    },
    order: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      productsArr: [],
    };
  },
  async beforeMount() {
    // 1. AXIOS Get specific userID
    let selectedUserOrders = [];

    // 2. LOOP & AXIOS Get specific orderIDs found in the user obj
    for (const product of this.products) {
      let prodId = product.prodId;
      const aProduct = await axios.get(
        `https://support-local.herokuapp.com/api/products/${prodId}`
      );
      aProduct.data.qty = product.qty;

      // 3. Load into Instance
      this.productsArr.push(aProduct.data);
    }
  },
};
</script>

<style scoped></style>
