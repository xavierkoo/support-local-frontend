<template>
    <div class="my-1">
        <a
            class="btn btn-primary text-center"
            role="button"
            style="width: 100%"
            @click="$emit('clickedItem', categoryName)"
        >
            <img
                src="../assets/navSidePlaceholder.png"
                style="width: 40px"
                class="me-md-2"
            >
            <span class="d-none d-xl-inline">{{ categoryName }}</span></a>
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

<style scoped></style>
