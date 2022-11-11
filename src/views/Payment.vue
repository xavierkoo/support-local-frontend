<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-1" />
            <div class="col-lg-5 my-auto p-0 mx-lg-2 mx-xl-0">
                <VuePaycard :value-fields="valueFields" />
            </div>
            <div class="col-1 col-md-2 d-lg-none" />
            <div class="col-10 col-sm-10 col-md-8 col-lg-4 paymentForm mt-3">
                <h2 class="fw-bold ms-2 my-3">
                    Payment Details
                </h2>

                <div class="card-input mt-2 mx-2">
                    <label
                        for="cardNumber"
                        class="form-label"
                    >Card Number</label>
                    <input
                        :id="inputFields.cardNumber"
                        type="tel"
                        title="Number"
                        class="form-control"
                        :value="valueFields.cardNumber"
                        data-card-field
                        autocomplete="off"
                        :maxlength="cardNumberMaxLength"
                        @input="updateNumber"
                    >
                </div>
                <div class="card-input mt-2 mx-2">
                    <label
                        for="cardName"
                        class="form-label"
                    >Card Holder</label>
                    <input
                        :id="inputFields.cardName"
                        v-letter-only
                        type="text"
                        title="Name"
                        class="form-control"
                        :value="valueFields.cardName"
                        data-card-field
                        autocomplete="off"
                        @input="updateName"
                    >
                </div>

                <div class="row">
                    <div class="col-7">
                        <label
                            for="cardMonth"
                            class="form-label mt-2 mx-2 col-12"
                            aria-label="Expiration Date"
                        >Expiration Date</label>
                        <select
                            :id="inputFields.cardMonth"
                            v-model="valueFields.cardMonth"
                            class="col-4 mx-1 mx-sm-2 mthDrop m-0"
                            aria-label="Card Month"
                            title="Month"
                            data-card-field
                        >
                            <option
                                value
                                disabled
                                selected
                            >
                                Month
                            </option>
                            <option
                                v-for="n in 12"
                                :key="n"
                                :value="n < 10 ? '0' + n : n"
                                :disabled="n < minCardMonth"
                            >
                                {{ generateMonth(n) }}
                            </option>
                        </select>
                        <select
                            :id="inputFields.cardYear"
                            v-model="valueFields.cardYear"
                            class="col-3 yearDrop"
                            aria-label="Card year"
                            title="Year"
                            data-card-field
                        >
                            <option
                                value
                                disabled
                                selected
                            >
                                Year
                            </option>
                            <option
                                v-for="(n, $index) in 12"
                                :key="n"
                                :value="$index + minCardYear"
                            >
                                {{ $index + minCardYear }}
                            </option>
                        </select>
                    </div>

                    <div class="col-5">
                        <div class="row">
                            <label
                                for="cardCvv"
                                class="form-label mt-2 mx-2 col-5 text-start p-0 ms-4"
                                aria-label="Card CVV"
                            >CVV</label>
                        </div>
                        <div class="row">
                            <input
                                :id="inputFields.cardCvv"
                                v-number-only
                                type="tel"
                                title="CVV"
                                class="cvvInput ms-4"
                                maxlength="4"
                                :value="valueFields.cardCvv"
                                data-card-field
                                autocomplete="off"
                                @input="changeCvv"
                            >
                        </div>
                    </div>
                </div>
                <div class="row mx-2 my-3">
                    <div class="col-1" />
                    <button
                        class="cancelBtnDesign col-4"
                        @click="$router.push(`/landing`)"
                    >
                        Cancel
                    </button>
                    <div class="col-2" />
                    <button
                        class="col-4 mainBtnDesign"
                        @click="payNow"
                    >
                        Pay
                    </button>
                    <div class="col-1" />
                </div>
            </div>
            <div class="col-1 col-md-2 d-lg-none" />
        </div>
    </div>
</template>

<script>
import VuePaycard from "../../src/components/VuePaycard";
import axios from "axios";

export default {
  name: "FormComponent",
  components: { VuePaycard },
  directives: {
    "number-only": {
      bind(el) {
        //
        function checkValue(event) {
          event.target.value = event.target.value.replace(/[^0-9]/g, "");
          if (event.charCode >= 48 && event.charCode <= 57) {
            return true;
          }
          event.preventDefault();
        }
        el.addEventListener("keypress", checkValue);
      },
    },
    "letter-only": {
      bind(el) {
        function checkValue(event) {
          if (event.charCode >= 48 && event.charCode <= 57) {
            event.preventDefault();
          }
          return true;
        }
        el.addEventListener("keypress", checkValue);
      },
    },
  },
  emits: [
    "input-card-name",
    "input-card-number",
    "input-card-month",
    "input-card-year",
    "input-card-cvv",
  ],
  data: () => ({
    minCardYear: new Date().getFullYear(),
    mainCardNumber: "",
    cardNumberMaxLength: 19,
    valueFields: {
      cardName: "",
      cardNumber: "",
      cardMonth: null,
      cardYear: null,
      cardCvv: null,
    },
    inputFields: {
      cardNumber: "v-card-number",
      cardName: "v-card-name",
      cardMonth: "v-card-month",
      cardYear: "v-card-year",
      cardCvv: "v-card-cvv",
    },
  }),
  computed: {
    minCardMonth() {
      if (this.valueFields.cardYear === this.minCardYear)
        return new Date().getMonth() + 1;
      return 1;
    },
  },
  watch: {
    cardYear() {
      if (this.valueFields.cardMonth < this.minCardMonth) {
        this.valueFields.cardMonth = "";
      }
    },
  },
  methods: {
    updateName(e) {
      // updateName(e) method updates the name of the card dynamically
      // emits input-card-name event in component, passing Name as a parameter when @input is triggered
      // @input provides two-way data binding by binding the input text element and the value binded to a variable assigned
      this.valueFields.cardName = e.target.value;
      this.$emit("input-card-name", this.valueFields.cardName);
    },
    updateNumber(e) {
      // this method changes the number of different card input number, and checks and replace characters that dont match
      // .replace replaces the match of the regex with the first capture group ($1) followed by
      // a comma, followed by the second capture group ($2)
      this.valueFields.cardNumber = e.target.value;
      const value = this.valueFields.cardNumber.replace(/\D/g, "");
      // american express, 15 digits
      if (/^3[47]\d{0,13}$/.test(value)) {
        this.valueFields.cardNumber = values
          .replace(/(\d{4})/, "$1 ")
          .replace(/(\d{4}) (\d{6})/, "$1 $2 ");
        this.cardNumberMaxLength = 17;
      } else if (/^3(?:0[0-5]|[68]\d)\d{0,11}$/.test(value)) {
        // diner's club, 14 digits
        this.valueFields.cardNumber = value
          .replace(/(\d{4})/, "$1 ")
          .replace(/(\d{4}) (\d{6})/, "$1 $2 ");
        this.cardNumberMaxLength = 16;
      } else if (/^62[0-9]\d*/.test(value)) {
        this.valueFields.cardNumber = value
          .replace(/(\d{6})/, "$1 ")
          .replace(/(\d{6}) (\d{7})/, "$1 $2 ")
          .replace(/(\d{6}) (\d{7}) (\d{6})/, "$1 $2 $3 ")
          .replace(/(\d{5}) (\d{5}) (\d{5}) (\d{4})/, "$1 $2 $3 $4");
        this.cardNumberMaxLength = 21;
      } else if (/^\d{0,16}$/.test(value)) {
        // regular cc number, 16 digits
        this.valueFields.cardNumber = value
          .replace(/(\d{4})/, "$1 ")
          .replace(/(\d{4}) (\d{4})/, "$1 $2 ")
          .replace(/(\d{4}) (\d{4}) (\d{4})/, "$1 $2 $3 ");
        this.cardNumberMaxLength = 19;
      }
      if (e.inputType == "deleteContentBackward") {
        const lastChar = this.valueFields.cardNumber.substring(
          this.valueFields.cardNumber.length,
          this.valueFields.cardNumber.length - 1
        );

        if (lastChar == " ") {
          this.valueFields.cardNumber = this.valueFields.cardNumber.substring(
            0,
            this.valueFields.cardNumber.length - 1
          );
        }
      }
      this.$emit("input-card-number", this.valueFields.cardNumber);
    },
    changeMonth() {
      // change the month input
      this.$emit("input-card-month", this.valueFields.cardMonth);
    },
    changeYear() {
      // change the year input
      this.$emit("input-card-year", this.valueFields.cardYear);
    },
    changeCvv(e) {
      // change the Cvv number
      this.valueFields.cardCvv = e.target.value;
      this.$emit("input-card-cvv", this.valueFields.cardCvv);
    },
    generateMonth(n) {
      // method generates the month values
      return n < 10 ? `0${n}` : n;
    },
    toggleMask() {
      // this method toggles between mask and unmask numbers
      this.isCardNumberMasked = !this.isCardNumberMasked;
      if (this.isCardNumberMasked) {
        this.maskCardNumber();
      } else {
        this.unMaskCardNumber();
      }
    },
    maskCardNumber() {
      // this method does not mask the last 4 numbers on the card
      this.valueFields.cardNumberNotMask = this.valueFields.cardNumber;
      this.mainCardNumber = this.valueFields.cardNumber;
      const arr = this.valueFields.cardNumber.split("");
      arr.forEach((element, index) => {
        if (index > 4 && index < 14 && element.trim() !== "") {
          arr[index] = "*";
        }
      });
      this.valueFields.cardNumber = arr.join("");
    },
    unMaskCardNumber() {
      // method unmask all the card numbers
      this.valueFields.cardNumber = this.mainCardNumber;
    },
    payNow() {
      // Get the data object & userID stored on local storage
      let currentCartObj = this.$store.getters.cartItems;
      let currentUserID = window.localStorage.getItem("userId");

      if (
        (currentCartObj == null) |
        (currentCartObj.length == 0) |
        (currentUserID == null)
      ) {
        alert("You seem to have jumped through a loophole... Time to go back!");
        this.$router.push("/");
      } else {
        let currentCartArr = [];
        let date = new Date();
        let todayDate = date.toLocaleDateString("en-TT");
        let deliveryDate = new Date(
          date.setDate(date.getDate() + 7)
        ).toLocaleDateString("en-TT");
        for (const item of currentCartObj) {
          let tempArr = { prodId: item.id, qty: item.quantity };
          currentCartArr.push(tempArr);
        }
        // Post details to the orders based on the requirements
        axios
          .post("https://support-local.herokuapp.com/api/orders", {
            // Add Key: Values
            user: currentUserID,
            orderDate: todayDate,
            orderStatus: "Waiting for Seller to ship",
            products: currentCartArr,
            deliveryDate: deliveryDate,
          })
          .then(async (res) => {
            // RESPONSE returns the newly injected order object
            const user = await axios.get(
              `https://support-local.herokuapp.com/api/users/${currentUserID}`
            );
            // GET User's orderDetails Arr
            let orderDetailArr = user.data.orderDetails;
            // Add to User's orderDetails Arr
            orderDetailArr.push(res.data.id);
            // PATCH User's orderDetails Arr (override)
            axios.patch(
              `https://support-local.herokuapp.com/api/users/${currentUserID}`,
              {
                orderDetails: orderDetailArr,
              }
            );
            // Clears the cart from local storage
            window.localStorage.removeItem("cart");
            this.$router.push("/orderLog");
          })
          .catch((err) => {
            console.error(err);
            this.error = true;
          });
      }
    },
  },
};
</script>

<style scoped>
html,
body,
#root {
  align-items: center;
  background-color: transparent !important;
  display: flex;
  height: 97vh;
  justify-content: center;
  width: 100%;
  font-family: -apple-system, BlinkMacSystemFont, "Source Sans Pro", "Segoe UI",
    "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
    "Helvetica Neue", sans-serif;
}
#docs-root .card-form__inner {
  display: none;
}
#docs-root .card-form {
  margin-top: 90px;
}
* {
  box-sizing: border-box;
}
*:focus {
  outline: none;
}
#root {
  min-height: 100vh;
  display: flex;
  padding: 50px 15px;
}
@media screen and (max-width: 700px), (max-height: 500px) {
  #root {
    flex-wrap: wrap;
    flex-direction: column;
  }
}
.card-form {
  max-width: 1090px;
  width: 100%;
}
@media screen and (max-width: 576px) {
  .card-form {
    margin: 0 auto;
  }
}
.card-form__inner {
  background: #fff;
  box-shadow: 0px 30px 60px 0 rgba(90, 116, 148, 0.4);
  border-radius: 10px;
  padding: 45px 25px 25px 25px;
}
@media screen and (max-width: 480px) {
  .card-form__inner {
    padding: 25px;
  }
}
@media screen and (max-width: 360px) {
  .card-form__inner {
    padding: 15px;
  }
}
.card-form__row {
  display: flex;
  align-items: flex-start;
}
@media screen and (max-width: 480px) {
  .card-form__row {
    flex-wrap: wrap;
  }
}
.card-form__col {
  flex: auto;
  margin-right: 35px;
}
.card-form__col:last-child {
  margin-right: 0;
}
@media screen and (max-width: 480px) {
  .card-form__col {
    margin-right: 0;
    flex: unset;
    width: 100%;
    margin-bottom: 20px;
  }
  .card-form__col:last-child {
    margin-bottom: 0;
  }
}
.card-form__col.-cvv {
  max-width: 150px;
}
@media screen and (max-width: 480px) {
  .card-form__col.-cvv {
    max-width: initial;
  }
}
.card-form__group {
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
}
.card-form__group .card-input__input {
  flex: 1;
  margin-right: 15px;
}
.card-form__group .card-input__input:last-child {
  margin-right: 0;
}
.card-form__button {
  width: 100%;
  height: 55px;
  background: #2364d2;
  border: none;
  border-radius: 5px;
  font-size: 22px;
  font-weight: 500;
  font-family: "Source Sans Pro", sans-serif;
  box-shadow: 3px 10px 20px 0px rgba(35, 100, 210, 0.3);
  color: #fff;
  margin-top: 20px;
  cursor: pointer;
}
@media screen and (max-width: 480px) {
  .card-form__button {
    margin-top: 10px;
  }
}
.card-list {
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}
@media screen and (max-width: 759px) {
  .card-list {
    flex-flow: column nowrap;
    margin-top: 200px;
  }
}
@media screen and (max-width: 480px) {
  .card-list {
    margin-bottom: 0;
  }
}
.card-input {
  margin-bottom: 20px;
}
.card-input__label {
  font-size: 14px;
  margin-bottom: 5px;
  font-weight: 500;
  color: #1a3b5d;
  width: 100%;
  display: block;
  user-select: none;
}
.card-input__input {
  width: 100%;
  height: 50px;
  border-radius: 5px;
  box-shadow: none;
  border: 1px solid #ced6e0;
  transition: all 0.3s ease-in-out;
  font-size: 18px;
  padding: 5px 15px;
  background: none;
  color: #1a3b5d;
  font-family: "Source Sans Pro", sans-serif;
}
.card-input__input:hover,
.card-input__input:focus {
  border-color: #3d9cff;
}
.card-input__input:focus {
  box-shadow: 0px 10px 20px -13px rgba(32, 56, 117, 0.35);
}
.card-input__input.-select {
  appearance: none;
  -webkit-appearance: none;
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAeCAYAAABuUU38AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAUxJREFUeNrM1sEJwkAQBdCsngXPHsQO9O5FS7AAMVYgdqAd2IGCDWgFnryLFQiCZ8EGnJUNimiyM/tnk4HNEAg/8y6ZmMRVqz9eUJvRaSbvutCZ347bXVJy/ZnvTmdJ862Me+hAbZCTs6GHpyUi1tTSvPnqTpoWZPUa7W7ncT3vK4h4zVejy8QzM3WhVUO8ykI6jOxoGA4ig3BLHcNFSCGqGAkig2yqgpEiMsjSfY9LxYQg7L6r0X6wS29YJiYQYecemY+wHrXD1+bklGhpAhBDeu/JfIVGxaAQ9sb8CI+CQSJ+QmJg0Ii/EE2MBiIXooHRQhRCkBhNhBcEhLkwf05ZCG8ICCOpk0MULmvDSY2M8UawIRExLIQIEgHDRoghihgRIgiigBEjgiFATBACAgFgghEwSAAGgoBCBBgYAg5hYKAIFYgHBo6w9RRgAFfy160QuV8NAAAAAElFTkSuQmCC");
  background-size: 12px;
  background-position: 90% center;
  background-repeat: no-repeat;
  padding-right: 30px;
}
</style>
