<template>
    <div>
        <div class="container">
            <div class="d-none d-sm-block">
                <div v-if="selectedUserOrders.length == 0">
                    <div class="container cartEmpty p-3">
                        <div>
                            <div class="mb-3">
                                You have not made any orders
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
                <div
                    v-else
                    class="row justify-content-center align-items-center text-center orderBar py-sm-2"
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
      selectedUserOrders: "",
      done: null,
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

    if (userOrderIdArr.length == 0) {
      this.selectedUserOrders = selectedUserOrders;
    } else {
      // 2. LOOP & AXIOS Get specific orderIDs found in the user obj
      for (const orderId of userOrderIdArr) {
        const anOrder = await axios.get(
          `https://support-local.herokuapp.com/api/orders/${orderId}`
        );
        selectedUserOrders.push(anOrder.data);
      }
      // 3. Load into Instance
      this.selectedUserOrders = selectedUserOrders;
    }
  },
};
</script>
<style>
@import "../assets/style/global.css";
</style>
