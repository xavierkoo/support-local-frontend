<template>
    <div>
        <!-- Card Component -->
        <transition
            appear
            name="fade"
            @before-enter="beforeEnter"
            @enter="enter"
            @after-enter="afterEnter"
        >
            <div class="card">
                <img
                    class="rounded-0 card-img-top"
                    src="../assets/hero.png"
                >

                <div class="card-body productCard">
                    <div class="row mb-1">
                        <div class="col-3">
                            <img
                                src="../assets/profilepng.png"
                                style="height: auto; width: 100%"
                            >
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
                        <div
                            class="cardInner d-flex justify-content-center align-content-center"
                        >
                            <button class="my-auto mainBtnDesign">
                                More Info
                            </button>
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
        onComplete: done, //to shwo that animation is completed
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
</style>
