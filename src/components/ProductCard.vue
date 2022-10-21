<template>
    <div>
        <!-- Card Component -->
        <div class="card">
            <img
                class="rounded-0 card-img-top"
                src="../assets/hero.png"
            >

            <div class="card-body">
                <div class="row mb-1">
                    <div class="col-3">
                        <img src="../assets/profilepng.png">
                    </div>
                    <div class="col-9">
                        <h6 class="mb-0">
                            {{ merchantName }}
                        </h6>
                        <p class="">
                            {{ lastOnlineHour }} hour ago
                        </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-8">
                        <div class="text-truncate">
                            {{ desc }}
                        </div>
                        <div class="fst-italic">
                            Special offer: ${{ offerPrice }}
                        </div>
                    </div>
                    <div class="col-4">
                        <p class="fw-bold text-end mb-0">
                            S${{ price }}
                        </p>
                        <p class="text-end">
                            {{ numSold }} Sold
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    merchantName: {
      type: String,
      default: "HellowWorld",
    },
    lastOnlineHour: {
      type: String,
      default: "1",
    },
    desc: {
      type: String,
      default: "Foldable bicycle wa blue whell",
    },
    price: {
      type: String,
      default: "180",
    },
    numSold: {
      type: String,
      default: "23",
    },
    offerPrice: {
      type: String,
      default: "21.99",
    },
  },
};
</script>

<style scoped></style>
