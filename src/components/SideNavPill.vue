<template>
    <div class="mb-1 sideBar">
        <div class="row">
            <a
                class="box text-center w-75 mx-4"
                :class="{ active: isActive }"
                role="button"
                @click="$emit('clickedItem', categoryName)"
            >
                <div class="col-1" />
                <img :src="require(`@/${categoryImage}`)">
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
      default: "../assets/navSidePlaceholder.png",
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  emits: ["clickedItem"],
  data() {
    return {
      categoryImage: "",
    };
  },

  beforeMount() {
    if (this.categoryName == "All") {
      this.categoryImage = "assets/img/icons/All.svg";
    }

    if (this.categoryName == "Food & Beverages") {
      this.categoryImage = "assets/img/icons/Food.svg";
    }

    if (this.categoryName == "Men's Apparel") {
      this.categoryImage = "assets/img/icons/MenApparel.svg";
    }

    if (this.categoryName == "Women's Apparel") {
      this.categoryImage = "assets/img/icons/WomenApparel.svg";
    }

    if (this.categoryName == "Electronics") {
      this.categoryImage = "assets/img/icons/Electronics.svg";
    }

    if (this.categoryName == "Hobbies & Books") {
      this.categoryImage = "assets/img/icons/HobbiesBooks.svg";
    }

    if (this.categoryName == "Beauty & Personal") {
      this.categoryImage = "assets/img/icons/BeautyPersonal.svg";
    }

    if (this.categoryName == "Services") {
      this.categoryImage = "assets/img/icons/Services.svg";
    }
  },
};
</script>

<style scoped>
@import "../assets/style/global.css";
.bg-none {
  background-color: #d36959;
}

.active {
  background-color: #d36959 !important;
}
</style>
