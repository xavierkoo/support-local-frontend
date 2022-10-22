<template>
    <div class="my-1">
        <a
            class="btn btn-primary text-center"
            role="button"
            style="width: 100%"
        >
            <img
                src="../assets/navSidePlaceholder.png"
                style="width: 40px"
                class="me-md-2"
            >
            <span class="d-none d-xl-inline">{{ categoryname }}</span></a>
    </div>
</template>

<script>
export default {
  name: "SideNavPill",
  props: {
    categoryname: {
      type: String,
      default: "Default Cat Name",
    },
    categoryimg: {
      type: String,
      default: "../assets/navSidePlaceholder.png'",
    },
  },
  methods: {},
};
</script>

<style scoped></style>
