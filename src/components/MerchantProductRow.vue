<template>
    <div class="row orderBack mx-auto text-center mb-2">
        <div class="col-sm-3">
            {{ productName }}
        </div>
        <div class="col-sm-3">
            {{ category }}
        </div>
        <div class="col-sm-3">
            {{ unitPrice }}
        </div>
        <div class="col-sm-3">
            <button class="btn btn-danger me-2">
                Delete
            </button>
            <button class="btn btn-warning">
                Edit
            </button>
        </div>
    </div>
</template>

<script>
export default {
  name: "ProductRow",
  props: {
    productName: {
      type: String,
      default: "HellowWorld",
    },
    category: {
      type: String,
      default: "Women Category",
    },
    unitPrice: {
      type: Number,
      default: 99.0,
    },
  },
};
</script>

<style scoped></style>
