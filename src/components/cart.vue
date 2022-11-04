<!-- eslint-disable vue/component-definition-name-casing -->
<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="container-fluid cartBack">
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
                    <b>{{ merchant }} </b> &nbsp;
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
                <b>{{ name }}</b>
            </div>
            <div class="text-end col-3 col-sm-2 my-auto text-sm-center">
                ${{ price }}
            </div>
            <div class="text-end mt-2 mt-sm-auto col-sm-2 my-auto text-sm-center">
                <input
                    v-if="showQtyInput"
                    type="number"
                    value="1"
                    class="text-end"
                >
                <span v-if="!showQtyInput">
                    {{ quantity }}
                </span>
            </div>
            <div class="col-sm-2 my-auto text-center d-none d-sm-block">
                ${{ price }}
            </div>
            <div
                class="text-end col-sm-2 mt-2 mt-sm-auto col-lg-1 my-auto text-sm-center"
            >
                {{ action }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "CartProducts",
  props: {
    name: {
      type: String,
      default: "Bicycle",
    },
    price: {
      type: String,
      default: "180",
    },
    quantity: {
      type: String,
      default: "1",
    },
    action: {
      type: String,
      default: "Delete",
    },
    order: {
      type: String,
      default: "Order Now",
    },
    total: {
      type: String,
      default: "180",
    },
    merchant: {
      type: String,
      default: "nextShop",
    },
    img: {
      type: String,
      default: "assets/img/products/martin.png",
    },
    showCheckBox: {
      type: Boolean,
      default: true,
    },
    showQtyInput: {
      type: Boolean,
      default: true,
    },
    datePurchased: {
      type: String,
      default: "20/1/2022",
    },
    showDate: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style scoped>
@import "../assets/style/global.css";
</style>
