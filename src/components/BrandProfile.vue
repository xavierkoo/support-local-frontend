<template>
    <div>
        <div
            class="card text-center pt-2 brandProfile d-flex justify-content-center align-items-center"
        >
            <div>
                <img
                    :src="require(`@/${merchantPic}`)"
                    alt=""
                    class="d-block mx-auto mt-4"
                >
                <div class="card-body">
                    <h3 class="card-title fw-bold">
                        {{ merchantName }}
                    </h3>
                    <p class="card-text">
                        {{ desc }}
                    </p>
                    <button
                        class="mainBtnDesign mb-2"
                        @click="fireModal"
                    >
                        Contact me
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "BrandProfile",
  props: {
    merchantName: {
      type: String,
      default: "HellowWorld",
    },
    desc: {
      type: String,
      default:
        "The store's collection is a celebration of everything maximalist - there are face masks with elf ears, iridescent platform shoes",
    },
    contact: {
      type: String,
      default: "#",
    },
    merchantPic: {
      type: String,
      default: "",
    },
  },
  emits: ["fireModal"],
  methods: {
    fireModal() {
      this.$emit("fireModal");
    },
  },
};
</script>

<style scoped>
@import "../assets/style/global.css";
</style>
