<template>
    <div class="container orderDetails mt-4">
        <div class="row mt-3">
            <div class="px-3">
                <h5 class="fw-bold">
                    Order Details:
                </h5>
            </div>
        </div>
        <div class="row px-3">
            <div class="col-xl-2 col-md-6 col-6 my-2">
                <b>Merchant:</b>
            </div>
            <div class="col-xl-4 col-md-6 col-6 my-2">
                {{ merchant }}
            </div>
            <div class="col-xl-2 col-md-6 col-6 my-2 ps-xl-0">
                <b>Order Status:</b>
            </div>
            <div class="col-xl-4 col-md-6 col-6 my-2">
                {{ deliveryStatus }}
            </div>
        </div>
        <div class="row px-3">
            <div class="col-xl-2 col-md-6 col-6 my-2">
                <b>Location:</b>
            </div>
            <div class="col-xl-4 col-md-6 col-6 my-2">
                {{ location }}
            </div>
        </div>
        <div class="row px-3">
            <div class="col-xl-2 col-md-6 col-6 my-2">
                <b>Expected Delivery Date:</b>
            </div>
            <div class="col-xl-4 col-md-4 col-6 my-2">
                {{ deliveryDate }}
            </div>

            <div
                class="col-xl-2 col-md-6 col-sm-6 col-6 my-2 px-0 px-sm-auto text-end text-xl-start px-1"
            >
                <button
                    class="cancelBtnDesign"
                    type="button"
                    @click="fireModal"
                >
                    Contact Seller
                </button>
            </div>
            <div class="col-xl-4 col-md-4 col-sm-6 col-6 my-2 px-1">
                <button
                    v-if="deliveryStatus != 'Item Received!'"
                    class="mainBtnDesign px-4"
                    type="button"
                    @click="updateDeliveryStatus()"
                >
                    Received
                </button>
            </div>
            <div class="col-md-2" />
        </div>
    </div>
</template>
<script>
import axios from "axios";

export default {
  name: "OrderItem",
  props: {
    merchant: {
      type: String,
      default: "In Good Company",
    },
    location: {
      type: String,
      default: "81 Victoria St",
    },
    deliveryDate: {
      type: String,
      default: "15/10/2022",
    },
    orderStatus: {
      type: String,
      default: "Waiting for seller to ship",
    },
    orderId: {
      type: String,
      default: "",
    },
  },
  emits: ["fireModal"],
  data() {
    return {
      deliveryStatus: this.orderStatus,
    };
  },
  methods: {
    updateDeliveryStatus() {
      let deliveryStatus = "Item Received!";
      axios
        .patch(
          `https://support-local-backend.onrender.com/api/orders/${this.orderId}`,
          {
            orderStatus: deliveryStatus,
          }
        )
        .then((res) => {
          this.deliveryStatus = deliveryStatus;
          console.log("Delivery Status Updated");
        })
        .catch((err) => {
          console.log(err);
          console.log("Error Patching~");
        });
    },
    fireModal() {
      this.$emit("fireModal");
    },
  },
};
</script>
