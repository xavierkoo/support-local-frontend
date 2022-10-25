<template>
    <div
        v-if="labels && inputFields"
        class="card-item"
        :class="{ '-active': isCardFlipped }"
    >
        <div class="card-item__side -front">
            <div
                ref="focusElement"
                :class="{ '-active': focusElementStyle }"
                :style="focusElementStyle"
                class="card-item__focus"
            />
            <div
                class="card-item__cover"
                :aria-label="imageCover"
            >
                <img
                    v-if="currentCardBackground"
                    :src="currentCardBackground"
                    class="card-item__bg"
                    alt="Background image"
                >
            </div>
            <div class="card-item__wrapper">
                <div class="card-item__top">
                    <img
                        src="../assets/images/chip.png"
                        class="card-item__chip"
                        alt="Card chip image"
                    >
                    <div class="card-item__type">
                        <transition name="slide-fade-up">
                            <img
                                v-if="cardType"
                                :key="cardType"
                                :src="getCreditCardImage"
                                :alt="`${cardType} brand image`"
                                class="card-item__typeImg"
                            >
                        </transition>
                    </div>
                </div>
                <label
                    :ref="inputFields.cardNumber"
                    :for="inputFields.cardNumber"
                    aria-label="Card number"
                    class="card-item__number"
                >
                    <span
                        v-for="(n, $index) in currentPlaceholder"
                        :key="$index"
                    >
                        <transition name="slide-fade-up">
                            <div
                                v-if="getIsNumberMasked($index, n)"
                                class="card-item__numberItem"
                            >
                                *
                            </div>
                            <div
                                v-else-if="valueFields.cardNumber.length > $index"
                                :key="currentPlaceholder"
                                :class="{ '-active': n.trim() === '' }"
                                class="card-item__numberItem"
                            >
                                {{ valueFields.cardNumber[$index] }}
                            </div>
                            <div
                                v-else
                                :key="currentPlaceholder + 1"
                                :class="{ '-active': n.trim() === '' }"
                                class="card-item__numberItem"
                            >
                                {{ n }}
                            </div>
                        </transition>
                    </span>
                </label>
                <div class="card-item__content">
                    <label
                        :ref="inputFields.cardName"
                        :for="inputFields.cardName"
                        aria-label="Card name"
                        class="card-item__info"
                    >
                        <div class="card-item__holder">
                            {{ labels.cardHolder || "Card Holder" }}
                        </div>
                        <transition name="slide-fade-up">
                            <div
                                v-if="valueFields.cardName.length"
                                key="1"
                                class="card-item__name"
                            >
                                <transition-group name="slide-fade-right">
                                    <span
                                        v-for="(n, key) in valueFields.cardName.replace(
                                            /\s\s+/g,
                                            ' '
                                        )"
                                        :key="key + 1"
                                        class="card-item__nameItem"
                                    >{{ n }}</span>
                                </transition-group>
                            </div>
                            <div
                                v-else
                                key="2"
                                class="card-item__name"
                            >
                                {{ labels.cardName || "Full Name" }}
                            </div>
                        </transition>
                    </label>
                    <div
                        ref="cardDate"
                        class="card-item__date"
                    >
                        <label
                            :for="inputFields.cardMonth"
                            class="card-item__dateTitle"
                            aria-label="Expiration date"
                        >{{ labels.cardExpires || "Expires" }}</label>
                        <label
                            :for="inputFields.cardMonth"
                            class="card-item__dateItem"
                            aria-label="Card month"
                        >
                            <transition name="slide-fade-up">
                                <span
                                    v-if="valueFields.cardMonth"
                                    :key="valueFields.cardMonth"
                                >{{ valueFields.cardMonth }}</span>
                                <span
                                    v-else
                                    key="2"
                                >{{ labels.cardMonth || "MM" }}</span>
                            </transition>
                        </label>
                        /
                        <label
                            :for="inputFields.cardYear"
                            class="card-item__dateItem"
                            aria-label="Card year"
                        >
                            <transition name="slide-fade-up">
                                <span
                                    v-if="valueFields.cardYear"
                                    :key="valueFields.cardYear"
                                >{{
                                    String(valueFields.cardYear).slice(2, 4)
                                }}</span>
                                <span
                                    v-else
                                    key="2"
                                >{{ labels.cardYear || "YY" }}</span>
                            </transition>
                        </label>
                    </div>
                </div>
            </div>
        </div>
        <div class="card-item__side -back">
            <div
                class="card-item__cover"
                :aria-label="imageCover"
            >
                <img
                    v-if="currentCardBackground"
                    :src="currentCardBackground"
                    class="card-item__bg"
                    alt="Background image"
                >
            </div>
            <div class="card-item__band" />
            <div class="card-item__cvv">
                <label
                    :for="inputFields.cardCvv"
                    aria-label="Card CVV"
                >
                    <div class="card-item__cvvTitle">{{ labels.cardCvv }}</div>
                    <div class="card-item__cvvBand">
                        <span>{{ valueFields.cardCvv }}</span>
                    </div>
                </label>
                <div class="card-item__type">
                    <img
                        v-if="cardType"
                        :src="getCreditCardImage"
                        class="card-item__typeImg"
                        alt="Dark bar image"
                    >
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "VuePaycard",
  props: {
    valueFields: {
      type: Object,
      required: true,
    },
    inputFields: {
      type: Object,
      default: () => ({
        cardNumber: "v-card-number",
        cardName: "v-card-name",
        cardMonth: "v-card-month",
        cardYear: "v-card-year",
        cardCvv: "v-card-cvv",
      }),
    },
    labels: {
      type: Object,
      default: () => ({
        cardName: "Full Name",
        cardHolder: "Card Holder",
        cardMonth: "MM",
        cardYear: "YY",
        cardExpires: "Expires",
        cardCvv: "CVV",
      }),
    },
    isCardNumberMasked: {
      type: Boolean,
      default: true,
    },
    hasRandomBackgrounds: {
      type: Boolean,
      default: true,
    },
    backgroundImage: {
      type: [String, Number],
      default: "",
    },
    setType: {
      type: String,
      default: "",
    },
  },
  emits: ["get-type"],
  data() {
    const defaultPlaceholder = "#### #### #### ####";

    return {
      focusElementStyle: null,
      currentFocus: null,
      isFocused: false,
      isCardFlipped: false,
      amexCardPlaceholder: "#### ###### #####",
      fifteenCardPlaceholder: "#### #### #### ###",
      dinersCardPlaceholder: "#### ###### ####",
      unionPayCardPlaceholder: "###### ####### ######",
      defaultCardPlaceholder: defaultPlaceholder,
      currentPlaceholder: defaultPlaceholder,
    };
  },
  computed: {
    jcbCardPlaceholder() {
      const number = this.valueFields.cardNumber.replace(/\s+/g, "");

      return number.startsWith("2131") || number.startsWith("1800")
        ? this.fifteenCardPlaceholder
        : this.defaultPlaceholder;
    },
    getCreditCardImage() {
      const path = require(`../assets/images/${this.cardType}.png`);
      return path.default || path;
    },
    cardType() {
      const acceptedTypes = [
        "visaelectron",
        "visa",
        "elo",
        "amex",
        "mastercard",
        "discover",
        "unionpay",
        "troy",
        "dinersclub",
        "jcb",
        "laser",
        "dankort",
        "uatp",
        "mir",
        "hipercard",
        "aura",
        "maestro",
      ];
      const setType = this.setType?.toLowerCase()?.replace(/ /g, "");
      if (setType?.length && acceptedTypes.includes(setType)) return setType;

      const number = this.valueFields.cardNumber.replace(/\s+/g, "");

      if (number.match(/^4(026|17500|405|508|844|91[37])/)) {
        return "visaelectron";
      }
      if (number.match(/^4\d{12}(\d{3})?$/)) return "visa";
      if (
        number.match(
          /^((509091)|(636368)|(636297)|(504175)|(438935)|(40117[8-9])|(45763[1-2])|(457393)|(431274)|(50990[0-2])|(5099[7-9][0-9])|(50996[4-9])|(509[1-8][0-9][0-9])|(5090(0[0-2]|0[4-9]|1[2-9]|[24589][0-9]|3[1-9]|6[0-46-9]|7[0-24-9]))|(5067(0[0-24-8]|1[0-24-9]|2[014-9]|3[0-379]|4[0-9]|5[0-3]|6[0-5]|7[0-8]))|(6504(0[5-9]|1[0-9]|2[0-9]|3[0-9]))|(6504(8[5-9]|9[0-9])|6505(0[0-9]|1[0-9]|2[0-9]|3[0-8]))|(6505(4[1-9]|5[0-9]|6[0-9]|7[0-9]|8[0-9]|9[0-8]))|(6507(0[0-9]|1[0-8]))|(65072[0-7])|(6509(0[1-9]|1[0-9]|20))|(6516(5[2-9]|6[0-9]|7[0-9]))|(6550(0[0-9]|1[0-9]))|(6550(2[1-9]|3[0-9]|4[0-9]|5[0-8])))/
        )
      ) {
        return "elo";
      }
      if (number.match(/^3[47]\d{13}$/)) return "amex";
      if (number.match(/^(5[1-5]\d{4}|677189)\d{10}$/)) return "mastercard";
      if (number.match(/^6(?:011|5[0-9]{2})[0-9]{12}$/)) return "discover";
      if (number.match(/^62[0-9]\d{14,17}$/)) return "unionpay";
      if (number.match(/^9792\d{12}$/)) return "troy";
      if (number.match(/^3(0[0-5]|[68]\d)\d{11,16}/)) return "dinersclub";
      if (number.match(/(?:2131|1800|35[0-9]{3})[0-9]{11}$/)) return "jcb";
      if (number.match(/^(6304|6706|6709|6771)[0-9]{12,15}$/)) return "laser";
      if (number.match(/^5019\d{12}$/)) return "dankort";
      if (number.match(/^1\d{14}$/)) return "uatp";
      if (number.match(/^220[0-4]\d{12}$/)) return "mir";
      if (number.match(/^(606282\d{10}(\d{3})?)|(3841\d{15})$/)) {
        return "hipercard";
      }
      if (number.match(/^((?!504175))^((?!5067))(^50[0-9])/)) return "aura";
      if (number.match(/(?:5[0678]\d\d|6304|6390|67\d\d)\d{8,15}$/)) {
        return "maestro";
      }

      return "";
    },
    imageCover() {
      return !this.hasRandomBackgrounds && parseInt(this.backgroundImage)
        ? "Image cover"
        : "";
    },
    isBackgroundImageFromAssets() {
      const numberImage = parseInt(this.backgroundImage);

      return (
        Number.isFinite(numberImage) &&
        parseInt(numberImage) < 26 &&
        parseInt(numberImage) > 0
      );
    },
    currentCardBackground() {
      const numberImage = parseInt(this.backgroundImage);

      if (this.isBackgroundImageFromAssets) {
        const path = require(`../assets/images/${numberImage}.jpg`);
        return path.default || path;
      }

      if (this.backgroundImage && !Number.isFinite(numberImage)) {
        return this.backgroundImage;
      }

      if (this.hasRandomBackgrounds) {
        const random = Math.floor(Math.random() * 25 + 1);

        const path = require(`../assets/images/${random}.jpg`);
        return path.default || path;
      }

      return null;
    },
  },
  watch: {
    currentFocus() {
      if (this.currentFocus) {
        this.changeFocus();
      } else {
        this.focusElementStyle = null;
      }
    },
    cardType(val) {
      this.$emit("get-type", val);
      this.changePlaceholder();
    },
  },
  mounted() {
    this.init();
  },
  beforeUnmount() {
    this.destroy();
  },
  // * This can't be tested since the project runs in Vue 2
  /* istanbul ignore next */
  beforeUnmount() {
    /* istanbul ignore next */
    this.destroy();
  },
  methods: {
    addOrRemoveFieldListeners(event = "addEventListener") {
      const self = this;
      const fields = document.querySelectorAll("[data-card-field]");
      fields.forEach((element) => {
        element[event]("focus", () => {
          this.isFocused = true;
          if (
            element.id === this.inputFields.cardYear ||
            element.id === this.inputFields.cardMonth
          ) {
            this.currentFocus = "cardDate";
          } else {
            this.currentFocus = element.id;
          }
          this.isCardFlipped = element.id === this.inputFields.cardCvv;
        });
        element[event]("blur", () => {
          this.isCardFlipped = !element.id === this.inputFields.cardCvv;
          const timeout = setTimeout(() => {
            if (!self.isFocused) {
              self.currentFocus = null;
            }
            clearTimeout(timeout);
          }, 300);
          self.isFocused = false;
        });
      });
    },
    init() {
      this.addOrRemoveFieldListeners();
    },
    destroy() {
      this.addOrRemoveFieldListeners("removeEventListener");
    },
    changeFocus() {
      const target = this.$refs[this.currentFocus];
      this.focusElementStyle = target
        ? {
            width: `${target.offsetWidth}px`,
            height: `${target.offsetHeight}px`,
            transform: `translateX(${target.offsetLeft}px) translateY(${target.offsetTop}px)`,
          }
        : null;
    },
    getIsNumberMasked(index, n) {
      const numbers = this.cardType === "amex" ? 13 : 14;

      return (
        index < numbers &&
        this.valueFields.cardNumber.length > index &&
        n.trim() !== "" &&
        this.isCardNumberMasked
      );
    },
    changePlaceholder() {
      const cardsPlaceholder = {
        amex: this.amexCardPlaceholder,
        dinersclub: this.dinersCardPlaceholder,
        jcb: this.jcbCardPlaceholder,
        uatp: this.fifteenCardPlaceholder,
        unionpay: this.unionPayCardPlaceholder,
      };

      this.currentPlaceholder =
        cardsPlaceholder[this.cardType] || this.defaultCardPlaceholder;
      this.$nextTick(() => {
        this.changeFocus();
      });
    },
  },
};
</script>

<style>
.card-item * {
  box-sizing: border-box;
}
.card-item :focus {
  outline: 0;
}
.wrapper {
  min-height: 100vh;
  display: flex;
  padding: 50px 15px;
}
@media screen and (max-width: 700px), (max-height: 500px) {
  .wrapper {
    flex-wrap: wrap;
    flex-direction: column;
  }
}
.card-item {
  max-width: 430px;
  height: 270px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  z-index: 2;
  width: 100%;
}
@media screen and (max-width: 480px) {
  .card-item {
    max-width: 310px;
    height: 220px;
    width: 90%;
  }
}
@media screen and (max-width: 360px) {
  .card-item {
    height: 180px;
  }
}
.card-item.-active .card-item__side.-front {
  transform: perspective(1000px) rotateY(180deg) rotateX(0) rotateZ(0);
}
.card-item.-active .card-item__side.-back {
  transform: perspective(1000px) rotateY(0) rotateX(0) rotateZ(0);
}
.card-item__focus {
  position: absolute;
  z-index: 3;
  border-radius: 5px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transition: all 0.35s cubic-bezier(0.71, 0.03, 0.56, 0.85);
  opacity: 0;
  pointer-events: none;
  overflow: hidden;
  border: 2px solid rgba(255, 255, 255, 0.65);
}
.card-item__focus:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: #08142f;
  height: 100%;
  border-radius: 5px;
  filter: blur(25px);
  opacity: 0.5;
}
.card-item__focus.-active {
  opacity: 1;
}
.card-item__side {
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 20px 60px 0 rgba(14, 42, 90, 0.55);
  transform: perspective(2000px) rotateY(0) rotateX(0) rotate(0);
  transform-style: preserve-3d;
  transition: all 0.8s cubic-bezier(0.71, 0.03, 0.56, 0.85);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  height: 100%;
}
.card-item__side.-back {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  transform: perspective(2000px) rotateY(-180deg) rotateX(0) rotate(0);
  z-index: 2;
  padding: 0;
  height: 100%;
}
.card-item__side.-back .card-item__cover {
  transform: rotateY(-180deg);
}
.card-item__bg {
  max-width: 100%;
  display: block;
  max-height: 100%;
  height: 100%;
  width: 100%;
  -o-object-fit: cover;
  object-fit: cover;
}
.card-item__cover {
  height: 100%;
  position: absolute;
  height: 100%;
  background-color: #1c1d27;
  background-image: linear-gradient(147deg, #354fce 0, #0c296b 74%);
  left: 0;
  top: 0;
  width: 100%;
  border-radius: 15px;
  overflow: hidden;
}
.card-item__cover:after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(6, 2, 29, 0.45);
}
.card-item__top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 40px;
  padding: 0 10px;
}
@media screen and (max-width: 480px) {
  .card-item__top {
    margin-bottom: 25px;
  }
}
@media screen and (max-width: 360px) {
  .card-item__top {
    margin-bottom: 15px;
  }
}
.card-item__chip {
  width: 60px;
}
@media screen and (max-width: 480px) {
  .card-item__chip {
    width: 50px;
  }
}
@media screen and (max-width: 360px) {
  .card-item__chip {
    width: 40px;
  }
}
.card-item__type {
  height: 45px;
  position: relative;
  display: flex;
  justify-content: flex-end;
  max-width: 100px;
  margin-left: auto;
  width: 100%;
}
@media screen and (max-width: 480px) {
  .card-item__type {
    height: 40px;
    max-width: 90px;
  }
}
@media screen and (max-width: 360px) {
  .card-item__type {
    height: 30px;
  }
}
.card-item__typeImg {
  max-width: 100%;
  -o-object-fit: contain;
  object-fit: contain;
  max-height: 100%;
  -o-object-position: top right;
  object-position: top right;
}
.card-item__info {
  color: #fff;
  width: 100%;
  max-width: calc(100% - 85px);
  padding: 10px 15px;
  font-weight: 500;
  display: block;
  cursor: pointer;
}
@media screen and (max-width: 480px) {
  .card-item__info {
    padding: 10px;
  }
}
.card-item__holder {
  opacity: 0.7;
  font-size: 13px;
  margin-bottom: 6px;
}
@media screen and (max-width: 480px) {
  .card-item__holder {
    font-size: 12px;
    margin-bottom: 5px;
  }
}
.card-item__wrapper {
  font-family: "Source Code Pro", monospace;
  padding: 25px 15px;
  position: relative;
  z-index: 4;
  height: 100%;
  text-shadow: 7px 6px 10px rgba(14, 42, 90, 0.8);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
@media screen and (max-width: 480px) {
  .card-item__wrapper {
    padding: 20px 10px;
  }
}
.card-item__name {
  font-size: 18px;
  line-height: 1;
  white-space: nowrap;
  overflow: hidden;
  text-transform: uppercase;
}
@media screen and (max-width: 480px) {
  .card-item__name {
    font-size: 16px;
  }
}
.card-item__nameItem {
  display: inline-block;
  min-width: 8px;
  position: relative;
}
.card-item__number {
  font-weight: 500;
  line-height: 1;
  color: #fff;
  font-size: 27px;
  margin-bottom: 25px;
  display: inline-block;
  padding: 10px 15px;
  cursor: pointer;
}
@media screen and (max-width: 480px) {
  .card-item__number {
    font-size: 21px;
    margin-bottom: 15px;
    padding: 10px 10px;
  }
}
@media screen and (max-width: 360px) {
  .card-item__number {
    font-size: 19px;
    margin-bottom: 10px;
    padding: 10px 10px;
  }
}
.card-item__numberItem {
  width: 16px;
  display: inline-block;
}
.card-item__numberItem.-active {
  width: 30px;
}
@media screen and (max-width: 480px) {
  .card-item__numberItem {
    width: 13px;
  }
  .card-item__numberItem.-active {
    width: 16px;
  }
}
@media screen and (max-width: 360px) {
  .card-item__numberItem {
    width: 12px;
  }
  .card-item__numberItem.-active {
    width: 8px;
  }
}
.card-item__content {
  color: #fff;
  display: flex;
  align-items: flex-start;
}
.card-item__date {
  flex-wrap: wrap;
  font-size: 18px;
  margin-left: auto;
  padding: 10px;
  display: inline-flex;
  width: 80px;
  white-space: nowrap;
  flex-shrink: 0;
  cursor: pointer;
}
.card-item__date label {
  cursor: pointer;
}
@media screen and (max-width: 480px) {
  .card-item__date {
    font-size: 16px;
  }
}
.card-item__dateItem {
  position: relative;
}
.card-item__dateItem span {
  width: 22px;
  display: inline-block;
}
.card-item__dateTitle {
  opacity: 0.7;
  font-size: 13px;
  padding-bottom: 6px;
  width: 100%;
}
@media screen and (max-width: 480px) {
  .card-item__dateTitle {
    font-size: 12px;
    padding-bottom: 5px;
  }
}
.card-item__band {
  background: rgba(0, 0, 19, 0.8);
  width: 100%;
  height: 50px;
  margin-top: 30px;
  position: relative;
  z-index: 2;
}
@media screen and (max-width: 480px) {
  .card-item__band {
    margin-top: 20px;
  }
}
@media screen and (max-width: 360px) {
  .card-item__band {
    height: 40px;
    margin-top: 10px;
  }
}
.card-item__cvv {
  text-align: right;
  position: relative;
  z-index: 2;
  padding: 15px;
}
.card-item__cvv .card-item__type {
  opacity: 0.7;
}
@media screen and (max-width: 360px) {
  .card-item__cvv {
    padding: 10px 15px;
  }
}
.card-item__cvvTitle {
  padding-right: 10px;
  font-size: 15px;
  font-weight: 500;
  color: #fff;
  margin-bottom: 5px;
}
.card-item__cvvBand {
  height: 45px;
  background: #fff;
  margin-bottom: 30px;
  text-align: right;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 10px;
  color: #1a3b5d;
  font-size: 18px;
  border-radius: 4px;
  box-shadow: 0 10px 20px -7px rgba(32, 56, 117, 0.35);
}
@media screen and (max-width: 480px) {
  .card-item__cvvBand {
    height: 40px;
    margin-bottom: 20px;
  }
}
@media screen and (max-width: 360px) {
  .card-item__cvvBand {
    margin-bottom: 15px;
  }
}
.card-list {
  margin-bottom: -130px;
}
@media screen and (max-width: 480px) {
  .card-list {
    margin-bottom: -120px;
  }
}
.slide-fade-up-enter-active {
  transition: all 0.25s ease-in-out;
  transition-delay: 0.1s;
  position: relative;
}
.slide-fade-up-leave-active {
  transition: all 0.25s ease-in-out;
  position: absolute;
}
.slide-fade-up-enter {
  opacity: 0;
  transform: translateY(15px);
  pointer-events: none;
}
.slide-fade-up-leave-to {
  opacity: 0;
  transform: translateY(-15px);
  pointer-events: none;
}
.slide-fade-right-enter-active {
  transition: all 0.25s ease-in-out;
  transition-delay: 0.1s;
  position: relative;
}
.slide-fade-right-leave-active {
  transition: all 0.25s ease-in-out;
  position: absolute;
}
.slide-fade-right-enter {
  opacity: 0;
  transform: translateX(10px) rotate(45deg);
  pointer-events: none;
}
.slide-fade-right-leave-to {
  opacity: 0;
  transform: translateX(-10px) rotate(45deg);
  pointer-events: none;
}
/*# sourceMappingURL=style.min.css.map */
</style>
<!-- <style src="../assets/css/style.min.css" scoped></style> -->
