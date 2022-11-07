<template>
    <div class="App checkOut">
        <form @submit.prevent="onSubmit">
            <div class="container checkOutBack my-3">
                <h3 class="my-3">
                    Contact Details
                </h3>
                <div class="row">
                    <div class="col-md-1" />
                    <div class="col-md-2">
                        <label for="salutation">Title</label>
                        <input
                            id="salutation"
                            type="text"
                            class="form-control"
                        >
                    </div>

                    <div class="row">
                        <div class="col-1" />
                        <div class="col-md-5 mb-4">
                            <label for="firstName">First Name <span>*</span></label>
                            <input
                                id="firstName"
                                v-model="state.fName1"
                                type="text"
                                class="form-control"
                            >
                            <span v-if="v$.fName1.$error">
                                {{ v$.fName1.$errors[0].$message }} <br>
                            </span>
                            <label for="inputEmail">Email <span>*</span></label>
                            <input
                                id="inputEmail"
                                v-model="state.email"
                                type="email"
                                class="form-control"
                            >
                            <span v-if="!showEmailMsg">
                                <span v-if="v$.email.$error">
                                    {{ v$.email.$errors[0].$message }} <br>
                                </span>
                            </span>
                            <span v-if="showEmailMsg">Invalid Email <br></span>
                            <label for="address">Address <span>*</span></label>
                            <input
                                id="address"
                                v-model="state.add1"
                                type="text"
                                class="form-control"
                            >
                            <span v-if="v$.add1.$error">
                                {{ v$.add1.$errors[0].$message }} <br>
                            </span>
                            <label for="postal">Postal Code <span>*</span></label>
                            <input
                                id="postal"
                                v-model="state.postal1"
                                type="text"
                                class="form-control"
                            >
                            <span v-if="v$.postal1.$error">
                                {{ v$.postal1.$errors[0].$message }} <br>
                            </span>
                        </div>
                        <div class="col-md-5 mb-4">
                            <label for="lastName">Last Name <span>*</span></label>
                            <input
                                id="lastName"
                                v-model="state.lName1"
                                type="text"
                                class="form-control"
                            >
                            <span v-if="v$.lName1.$error">
                                {{ v$.lName1.$errors[0].$message }} <br>
                            </span>
                            <label for="contactNumber">Contact Number <span>*</span></label>
                            <input
                                id="contactNumber"
                                v-model="state.contactNo1"
                                type="number"
                                class="form-control"
                                style="width: 100%"
                            >
                            <span v-if="v$.contactNo1.$error">
                                Please enter a valid Contact Number! <br>
                            </span>
                            <input
                                id="billDetails"
                                type="checkbox"
                                class="mt-4"
                                @change="autoFill()"
                            >
                            <label for="billDetails">
                                &nbsp; Billing detail is the same as contact details
                            </label>
                            <div class="col-1" />
                        </div>
                    </div>
                </div>
            </div>

            <div class="container checkOutBack">
                <h3 class="my-3">
                    Billing Details
                </h3>
                <div class="row">
                    <div class="col-1" />
                    <div class="col-md-5 mb-4">
                        <label for="firstName">First Name <span>*</span></label>
                        <input
                            id="firstName"
                            :value="state.fName2"
                            type="text"
                            class="form-control"
                        >
                        <span v-if="v$.fName2.$error">
                            {{ v$.fName2.$errors[0].$message }} <br>
                        </span>
                        <label for="inputEmail">Email <span>*</span></label>
                        <input
                            id="inputEmail"
                            :value="state.email2"
                            type="email"
                            class="form-control"
                        >
                        <span v-if="!showEmailMsg2">
                            <span v-if="v$.email.$error">
                                {{ v$.email.$errors[0].$message }} <br>
                            </span>
                        </span>
                        <span v-if="showEmailMsg2">Invalid Email <br></span>
                        <label for="billAddress">Billing Address <span>*</span></label>
                        <input
                            id="billAddress"
                            :value="state.add2"
                            type="text"
                            class="form-control"
                        >
                        <span v-if="v$.add2.$error">
                            {{ v$.add2.$errors[0].$message }} <br>
                        </span>
                    </div>
                    <div class="col-md-5 mb-4">
                        <label for="lastName">Last Name <span>*</span></label>
                        <input
                            id="lastName"
                            :value="state.lName2"
                            type="text"
                            class="form-control"
                        >
                        <span v-if="v$.lName2.$error">
                            {{ v$.lName2.$errors[0].$message }} <br>
                        </span>
                        <label for="contactNumber">Contact Number <span>*</span></label>
                        <input
                            id="contactNumber"
                            :value="state.contactNo2"
                            type="number"
                            class="form-control"
                            style="width: 100%"
                        >
                        <span v-if="v$.contactNo2.$error">
                            Please enter a valid Contact Number! <br>
                        </span>
                        <label for="postalCode">Postal Code <span>*</span></label>
                        <input
                            id="postalCode"
                            :value="state.postal2"
                            type="text"
                            class="form-control"
                        >
                        <span v-if="v$.postal2.$error">
                            {{ v$.postal2.$errors[0].$message }} <br>
                        </span>
                        <div class="col-1" />
                    </div>
                    <div class="row mx-auto">
                        <div class="col-3 col-md-8" />
                        <button
                            type="button"
                            class="mainBtnDesign my-3 col-6 col-md-3"
                            @click="submitForm()"
                        >
                            Checkout
                        </button>
                        <div class="col-3 col-md-1" />
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import useValidate from "@vuelidate/core";
import {
  required,
  email,
  minLength,
  maxLength,
  helpers,
} from "@vuelidate/validators";
import axios from "axios";
import { reactive, computed } from "vue";
export default {
  name: "App",
  setup() {
    const state = reactive({
      email: "",
      contactNo1: "",
      contactNo2: "",
      email2: "",
      fName1: "",
      fName2: "",
      lName1: "",
      lName2: "",
      add1: "",
      add2: "",
      postal1: "",
      postal2: "",
    });

    const rules = computed(() => {
      return {
        email: {
          required,
          email,
        },
        contactNo1: {
          required,
          minLength: minLength(8),
          maxLength: maxLength(8),
        },
        contactNo2: {
          required,
          minLength: minLength(8),
          maxLength: maxLength(8),
        },
        email2: {
          required,
        },
        fName1: {
          required,
        },
        fName2: {
          required,
        },
        lName1: {
          required,
        },
        lName2: {
          required,
        },
        add1: {
          required,
        },
        add2: {
          required,
        },
        postal1: {
          required,
        },
        postal2: {
          required,
        },
      };
    });
    const v$ = useValidate(rules, state);

    return {
      state,
      v$,
    };
  },
  data() {
    return {
      errMsgEmail: "Correct Email ",
      showEmailMsg: false,
      showEmailMsg2: false,
      isFilled: false,
      invalidNumber: false,
      invalidNumber2: false,
    };
  },
  methods: {
    submitForm(v$) {
      // // make api call to db to get
      let url = `https://support-local.herokuapp.com/api/users`;
      this.v$.$validate();
      axios
        .get(url)
        .then((resp) => {
          if (!this.v$.$error) {
            // executes to true, email passed requirements

            // check if first email exist in db
            var data = resp.data;
            var checkEmail = (data) => data.email === this.state.email;
            var isValidEmail = data.some(checkEmail);

            // check if second email exist in db
            var checkEmail2 = (data) => data.email2 === this.state.email2;
            var isValidEmail2 = data.some(checkEmail2);

            // // check if contactNo meets requirement
            // if (this.contactNo1.length != 8) {
            //   this.invalidNumber = true;
            // }

            if (isValidEmail && isValidEmail2) {
              this.$router.push("/viewPayment");
            } else {
              this.state.email = "";
              this.state.email2 = "";
              this.showEmailMsg = true;
              this.showEmailMsg2 = true;
              //   this.invalidNumber2 = true;
            }
          } else {
            // did not meet email input requirement
            // alert("form failed");
            // this.invalidNumber = true;
            console.log("form failed");
          }
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
    autoFill() {
      //auto fill the input fields for billing details by v-binding
      if (!this.isFilled) {
        // if it is not auto filled
        this.state.fName2 = this.state.fName1;
        this.state.lName2 = this.state.lName1;
        this.state.add2 = this.state.add1;
        this.state.contactNo2 = this.state.contactNo1;
        this.state.postal2 = this.state.postal1;
        this.state.email2 = this.state.email;

        // if email in Contact Details is wrong, show the email error message in Billing Details
        if (this.showEmailMsg) {
          this.showEmailMsg2 = true;
        }
        if (this.invalidNumber) {
          this.invalidNumber2 = true;
        }
        this.isFilled = true;
      } else {
        // uncheck auto fill
        this.state.fName2 = "";
        this.state.lName2 = "";
        this.state.add2 = "";
        this.state.contactNo2 = "";
        this.state.postal2 = "";
        this.state.email2 = "";

        this.isFilled = false;
      }
    },
  },
};
</script>

<style scoped>
span {
  color: red;
}
</style>
