<!-- eslint-disable vue/component-definition-name-casing -->
<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <div class="row mx-4">
            <div class="col-md-1 cb1">
                <input
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
                <input type="checkbox">
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
                    type="number"
                    value="1"
                >
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
