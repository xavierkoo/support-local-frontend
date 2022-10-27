<template>
    <div class="container p-0">
        <div class="row bg-light mx-4 mt-5">
            <div class="container px-5 py-4">
                <h5 style="color: black">
                    <b>Order Details:</b>
                </h5>
            </div>
        </div>
        <div class="row bg-light mx-4 px-5 py-2">
            <div
                class="col-xl-2 col-md-6 col-sm-6"
                style="color: black"
            >
                <b>Merchant:</b>
            </div>
            <div
                class="col-xl-4 col-md-6 col-sm-6"
                style="color: black"
            >
                {{ merchant }}
            </div>
            <div
                class="col-xl-2 col-md-6 col-sm-6"
                style="color: black"
            >
                <b>Order Status:</b>
            </div>
            <div
                class="col-xl-4 col-md-6 col-sm-6"
                style="color: black"
            >
                {{ orderStatus }}
            </div>
        </div>
        <div class="row bg-light mx-4 px-5 py-2">
            <div
                class="col-xl-2 col-md-6 col-sm-6"
                style="color: black"
            >
                <b>Location:</b>
            </div>
            <div
                class="col-xl-2 col-md-6 col-sm-6"
                style="color: black"
            >
                {{ location }}
            </div>
            <div class="col-md-6" />
        </div>
        <div class="row bg-light mx-4 px-5 py-2">
            <div
                class="col-xl-2 col-md-6 col-sm-6"
                style="color: black"
            >
                <b>Expected Delivery Date:</b>
            </div>
            <div
                class="col-xl-4 col-md-4 col-sm-6"
                style="color: black"
            >
                {{ deliveryDate }}
            </div>
            <div class="col-xl-3 col-md-6 col-sm-6 py-2">
                <button
                    class="btn btn-secondary button"
                    type="button"
                    style="color: black"
                >
                    Contact Seller
                </button>
            </div>
            <div class="col-xl-3 col-md-4 col-sm-6 py-2">
                <button
                    class="btn btn-danger button"
                    type="button"
                >
                    Mark as Received
                </button>
            </div>
            <div class="col-md-2" />
        </div>
    </div>
</template>
<script>
export default {
  name: "CartProducts",
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
  },
};
</script>
