<template>
    <div class="container-fluid">
        <div class="row bg-light mt-5">
            <div class="px-3 py-4">
                <h5
                    class="fw-bold"
                    style="color: black"
                >
                    Order Details:
                </h5>
            </div>
        </div>
        <div class="row bg-light px-3">
            <div
                class="col-xl-2 col-md-6 col-6 my-2"
                style="color: black"
            >
                <b>Merchant:</b>
            </div>
            <div
                class="col-xl-4 col-md-6 col-6 my-2"
                style="color: black"
            >
                {{ merchant }}
            </div>
            <div
                class="col-xl-2 col-md-6 col-6 my-2"
                style="color: black"
            >
                <b>Order Status:</b>
            </div>
            <div
                class="col-xl-4 col-md-6 col-6 my-2"
                style="color: black"
            >
                {{ orderStatus }}
            </div>
        </div>
        <div class="row bg-light px-3">
            <div
                class="col-xl-2 col-md-6 col-6 my-2"
                style="color: black"
            >
                <b>Location:</b>
            </div>
            <div
                class="col-xl-2 col-md-6 col-6 my-2"
                style="color: black"
            >
                {{ location }}
            </div>
            <div class="col-md-6" />
        </div>
        <div class="row bg-light px-3">
            <div
                class="col-xl-2 col-md-6 col-6 my-2"
                style="color: black"
            >
                <b>Expected Delivery Date:</b>
            </div>
            <div
                class="col-xl-4 col-md-4 col-6 my-2"
                style="color: black"
            >
                {{ deliveryDate }}
            </div>

            <div
                class="col-xl-2 col-md-6 col-sm-6 col-6 my-2 px-0 px-sm-auto text-end text-xl-start px-1"
            >
                <button
                    class="cancelBtnDesign"
                    type="button"
                    style="color: black"
                >
                    Contact Seller
                </button>
            </div>
            <div class="col-xl-4 col-md-4 col-sm-6 col-6 my-2 px-1">
                <button
                    class="mainBtnDesign px-4"
                    type="button"
                >
                    Received
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
