<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="signUp">
        <div :id="mode">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-1" />

                    <img
                        src="https://i.pinimg.com/originals/7f/98/dc/7f98dcad5579ed7fc4d4b88b79ecfea4.jpg"
                        alt=""
                        class="shadow col-md-5 my-5"
                    >

                    <div class="col-md-5 container shadow back px-5 my-5">
                        <div class="row display-6 mt-4">
                            <h3>
                                <bold>Sign Up</bold>
                            </h3>
                        </div>
                        <div class="row">
                            <form>
                                <div class="row my-2">
                                    <div class="form-group">
                                        <label for="Email">Email <span>*</span></label>
                                        <input
                                            id="emailAdd"
                                            v-model="state.email"
                                            type="email"
                                            class="form-control"
                                        >
                                        <span v-if="v$.email.$error">
                                            {{ v$.email.$errors[0].$message }}
                                        </span>
                                    </div>
                                </div>
                                <div class="row my-2">
                                    <div class="form-group">
                                        <label for="password">Password <span>*</span></label>
                                        <input
                                            id="password"
                                            v-model="state.password.password"
                                            type="password"
                                            class="form-control"
                                        >
                                        <span v-if="v$.password.$error">
                                            {{ v$.password.$errors[0].$message }}
                                        </span>
                                    </div>
                                </div>
                                <div class="row my-2">
                                    <div class="form-group">
                                        <label for="cfmpassword">Confirm Password <span>*</span></label>
                                        <input
                                            id="cfmpassword"
                                            v-model="state.password.confirm"
                                            type="password"
                                            class="form-control"
                                        >
                                        <span v-if="v$.password.$error">
                                            {{ v$.password.$errors[0].$message }}
                                        </span>
                                    </div>
                                </div>
                            </form>
                            <div class="row mt-4">
                                <div class="col-3" />
                                <button
                                    type="submit"
                                    class="mainBtnDesign col-6"
                                    @click="submitForm()"
                                >
                                    Sign Up
                                </button>
                                <div class="col-3" />
                            </div>
                        </div>
                    </div>
                    <div class="col-md-1" />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import useValidate from "@vuelidate/core";
import axios from "axios";
import {
  required,
  email,
  minLength,
  sameAs,
  helpers,
} from "@vuelidate/validators";
import { reactive, computed } from "vue";
export default {
  setup() {
    const state = reactive({
      email: "",
      password: {
        password: "",
        confirm: "",
      },
    });
    // Setting custom error messages
    // const emailErrMsg = (value) => value.includes("@");

    const rules = computed(() => {
      return {
        email: {
          required,
          email,
          //   emailErrMsg: helpers.withMessage(
          //     "Invalid email address!",
          //     emailErrMsg
          //   ),
        },
        password: {
          // uses vuelidate the validate the password and confirm password
          password: { required, minLength: minLength(6) },
          confirm: { required, sameAs: sameAs(state.password.password) },
        },
      };
    });
    // vuelidate's constant notation for error validation
    const v$ = useValidate(rules, state);

    return {
      state,
      v$,
    };
  },
  methods: {
    submitForm() {
      // method gets user's input values and add it into the db
      // trying to add data into userBase db
      let url = "http://localhost:8081/userBase";
      this.v$.$validate();
      axios
        .get(url)
        .then((resp) => {
          if (!this.v$.$error) {
            // alert("form successful");
            console.log(resp.data);
            // do form validation here
            var inputPassword = document.getElementById("password").value;
            var inputEmail = document.getElementById("emailAdd").value;

            // somehow need to append data into userBase db here ------

            // route to landing page
            this.$router.push("landing");
          } else {
            // did not meet input requirement
            console.log("form failed");
          }
        })
        .catch((err) => {
          console.log(err.message);
        });
      // this.v$.$validate();
      // if (!this.v$.$error) {
      //   alert("form successful");
      // } else {
      //   alert("form failed");
      // }
      //   alert("Form successfully submitted");
    },
  },
};
</script>

<style>
@import "../assets/style/global.css";
</style>
