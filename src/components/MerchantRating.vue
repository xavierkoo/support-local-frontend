<template>
    <div>
        <div class="card text-center pt-2 mt-2 merchantRating">
            <div class="card-body">
                <h3 class="card-title fw-bold">
                    Merchant Rating
                </h3>
                <h1 class="ps-3">
                    {{ merchantRating }}{{ star }}
                </h1>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "MerchantRating",
  props: {
    merchantRating: {
      type: Number,
      default: 5,
    },
    star: {
      type: String,
      default: "⭐",
    },
  },
};
</script>

<style scoped></style>
