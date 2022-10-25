<template>
    <div class="mb-1 sideBar">
        <div class="row">
            <a
                class="box text-center w-75 mx-4"
                role="button"
                @click="$emit('clickedItem', categoryName)"
            >
                <div class="col-1" />
                <img
                    src="../assets/navSidePlaceholder.png"
                    class="col-2"
                >
                <span class="col-8 d-none d-xl-inline pill text-start">
                    {{ categoryName }}
                </span>
                <div class="col-1" />
            </a>
        </div>
    </div>
</template>

<script>
export default {
  name: "SideNavPill",
  props: {
    categoryName: {
      type: String,
      default: "Default Cat Name",
    },
    categoryImg: {
      type: String,
      default: "../assets/navSidePlaceholder.png'",
    },
  },
  emits: ["clickedItem"],
};
</script>

<style scoped>
@import "../assets/style/global.css";
</style>
