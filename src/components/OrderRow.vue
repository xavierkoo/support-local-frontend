<template>
    <div class="row orderRow">
        <h6 class="fw-bold my-auto col-sm-4 col-lg-3 text-center py-3 orderID">
            <h5 class="d-block d-sm-none fw-bold">
                OrderID:
            </h5>
            {{ orderId }}
        </h6>
        <hr class="m-0">
    </div>
    <div
        v-for="(prod, index) in productsArr"
        :key="index"
        class="row text-center orderRowIndItem"
    >
        <div class="col-sm-3 py-3 my-auto">
            <h5 class="d-block d-sm-none fw-bold">
                Product:
            </h5>
            {{ prod.name }}
        </div>
        <div class="col-sm-2 py-3 my-auto">
            <span class="d-inline-block d-sm-none">Price: </span> ${{ prod.price }}
        </div>
        <div class="col-sm-2 py-3 my-auto">
            <span class="d-inline-block d-sm-none">Quantity: </span> {{ prod.qty }}
        </div>
        <div class="col-sm-2 py-3 my-auto">
            <span class="d-inline-block d-sm-none">Total Price:</span> ${{
                prod.price * prod.qty
            }}
        </div>
        <div class="col-3 d-inline-block d-sm-none" />
        <div class="col-6 col-sm-3 py-3 my-auto">
            <router-link
                :to="{
                    name: 'viewOrder',
                    params: {
                        prod: `${JSON.stringify(prod)}`,
                        order: `${JSON.stringify(order)}`,
                    },
                }"
            >
                <button class="mainBtnDesign w-100">
                    Review
                </button>
            </router-link>
        </div>
        <div class="col-3 d-inline-block d-sm-none" />
        <hr class="m-0">
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
