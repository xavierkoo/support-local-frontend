<template>
    <div class="row orderBack mx-auto text-center mb-2 p-0">
        <div class="col-sm-3 my-auto">
            {{ productName }}
        </div>
        <div class="col-sm-3 my-auto">
            {{ category }}
        </div>
        <div class="col-sm-3 my-auto">
            {{ unitPrice }}
        </div>
        <div class="col-sm-3 my-auto">
            <div class="row">
                <button
                    class="btn cancelBtnDesign me-2 col-sm-6 d-flex align-content-center justify-content-center"
                    @click="$emit('deleteItem', productObj.id)"
                >
                    Delete
                </button>

                <button
                    class="btn mainBtnDesign col-sm-5 d-flex align-content-center justify-content-center"
                    @click="$emit('editItem', productObj.id)"
                >
                    Edit
                </button>
            </div>
        </div>
        <hr class="mt-2">
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
    productObj: {
      type: Object,
      default: () => ({}),
    },
  },
  emits: ["deleteItem", "editItem"],
  methods: {},
};
</script>

<style scoped>
@import "../assets/style/global.css";
</style>
