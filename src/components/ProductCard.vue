<template>
    <div class="p-0">
        <!-- Card Component -->
        <transition
            appear
            name="fade"
            @before-enter="beforeEnter"
            @enter="enter"
            @after-enter="afterEnter"
        >
            <div class="card drop-sd-card">
                <img
                    class="rounded-0 card-img-top"
                    :src="require(`@/${productPicUrl}`)"
                >

                <div class="card-body productCard">
                    <div
                        v-if="merchantName != ''"
                        class="row mb-1"
                    >
                        <div class="col-3 text-center">
                            <img
                                class="rounded"
                                :src="require(`@/${profilePicUrl}`)"
                                style="width: 100%; height: 100%; object-fit: contain"
                            >
                        </div>
                        <div class="col-9 mb-0 my-auto">
                            <router-link :to="`/brand/${merchantId}`">
                                <h6 class="mb-0 fw-bold">
                                    {{ merchantName }}
                                </h6>
                            </router-link>
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
                        <div class="d-flex justify-content-center align-content-center">
                            <router-link
                                class="mainBtnDesign text-decoration-none text-center p-2 my-auto"
                                :to="`/individual/${productId}`"
                            >
                                Buy now!
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default {
  name: "ProductCard",
  props: {
    merchantId: {
      type: String,
      default: "",
    },
    merchantName: {
      type: String,
      default: "",
    },
    lastOnlineHour: {
      type: Number,
      default: 1,
    },
    desc: {
      type: String,
      default: "Foldable bicycle wa blue whell",
    },
    price: {
      type: Number,
      default: 180,
    },
    numSold: {
      type: Number,
      default: 23,
    },
    offerPrice: {
      type: Number,
      default: 21.99,
    },
    profilePicUrl: {
      type: String,
      default: "assets/profilepng.png",
    },
    productPicUrl: {
      type: String,
      default: "assets/hero.png",
    },
    productId: {
      type: String,
      default: "",
    },
  },
  setup() {
    //animation
    const beforeEnter = (el) => {
      //initial state
      el.style.transform = "translateY(-60px)";
      el.style.opacity = 0;
    };
    const enter = (el, done) => {
      //animation
      gsap.to(el, {
        scrollTrigger: {
          trigger: el,
          toggleActions: "restart none none none",
        },
        y: 0, //transform
        opacity: 1,
        duration: 2,
        ease: "Back.easeOut",
        onComplete: done, //to show that animation is completed
      });
    };
    const afterEnter = (el) => {
      //execute after animation settle in. However, vue does not know whena animation ended.
    };
    return { beforeEnter, enter, afterEnter };
  },
};
</script>

<style scoped>
@import "../assets/style/global.css";

.card {
  border: 0px !important;
}
</style>
