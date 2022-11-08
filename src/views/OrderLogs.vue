<template>
    <div :id="mode">
        <div class="container">
            <div class="d-none d-sm-block">
                <div
                    class="row justify-content-center align-items-center text-center g-2 orderBar"
                >
                    <div class="col-sm-3">
                        <b>Product</b>
                    </div>
                    <div class="col-sm-2">
                        <b>Unit Price</b>
                    </div>
                    <div class="col-sm-2">
                        <b>Quantity</b>
                    </div>
                    <div class="col-sm-2">
                        <b>Total Price</b>
                    </div>
                    <div class="col-sm-3">
                        <b>Action</b>
                    </div>
                </div>
            </div>
            <OrderRow
                v-for="(order, index) in selectedUserOrders"
                :key="index"
                :order-id="order.id"
                :order="order"
                :products="order.products"
            />
        </div>
    </div>
</template>

<script>
import axios from "axios";
import OrderRow from "@/components/OrderRow.vue";
export default {
  components: { OrderRow },
  data() {
    return {
      mode: localStorage.modes,
      selectedUserOrders: "",
    };
  },
  mounted() {
    window.addEventListener("modes-localstorage-changed", (event) => {
      this.mode = event.detail.storage;
    });
  },
  async beforeMount() {
    // Get all the orders from the orders api endpoint
    let userId = window.localStorage.getItem("userId");
    // 1. AXIOS Get specific userID
    let user = await axios.get(
      `https://support-local.herokuapp.com/api/users/${userId}`
    );

    let userOrderIdArr = user.data.orderDetails;
    let selectedUserOrders = [];

    // 2. LOOP & AXIOS Get specific orderIDs found in the user obj
    for (const orderId of userOrderIdArr) {
      const anOrder = await axios.get(
        `https://support-local.herokuapp.com/api/orders/${orderId}`
      );
      selectedUserOrders.push(anOrder.data);
    }
    // 3. Load into Instance
    this.selectedUserOrders = selectedUserOrders;
  },
};
</script>
<style>
@import "../assets/style/global.css";
</style>
