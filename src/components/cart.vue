<!-- eslint-disable vue/component-definition-name-casing -->
<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <div class="row mx-4">
            <div class="col-md-1 cb1">
                <input
                    v-if="showCheckBox"
                    id="cb"
                    type="checkbox"
                >
            </div>
            <div class="col-md-11">
                <b>{{ merchant }}</b>
            </div>
        </div>
        <div class="row bg-light py-5 mx-4">
            <div class="col-md-1 cb1">
                <input
                    v-if="showCheckBox"
                    type="checkbox"
                >
            </div>
            <div class="col-md-1">
                <img
                    src="../assets/bike.png"
                    alt=""
                >
            </div>
            <div class="col-md-2">
                <b>{{ name }}</b>
            </div>
            <div class="col-md-2">
                {{ price }}
            </div>
            <div class="col-md-2">
                <input
                    v-if="showQtyInput"
                    type="number"
                    value="1"
                >
                <span>
                    {{ quantity }}
                </span>
            </div>
            <div class="col-md-2">
                {{ price }}
            </div>
            <div class="col-md-2">
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
    bike: {
      type: String,
      default: "../assets/bike.png",
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
img {
  border-radius: 0;
}
.container {
  text-align: left;
}
.row1 {
  color: white;
}
.row {
  padding: 10px 0;
}
.cb1 {
  text-align: right;
}
.totalrow {
  padding: 50px 0 0 10px;
}
.red {
  color: rgb(160, 39, 39);
}
/* .button {
  width: 100px;
} */
input[type="number"] {
  width: 50px;
}
</style>
