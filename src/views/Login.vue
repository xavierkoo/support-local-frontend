<template>
    <div class="login">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-1 mb-2" />
                <img
                    src="https://i.pinimg.com/originals/7f/98/dc/7f98dcad5579ed7fc4d4b88b79ecfea4.jpg"
                    alt=""
                    class="col-md-5 d-none d-md-block"
                >
                <div class="col-md-5 container back px-5 mb-2">
                    <div class="row display-6 mt-4">
                        <h3 class="fw-bold">
                            Login
                        </h3>
                    </div>
                    <div class="row my-2">
                        <form>
                            <div class="form-group">
                                <label for="Email">Email <span>*</span></label>
                                <input
                                    id="emailAdd"
                                    v-model="state.email"
                                    type="email"
                                    class="form-control"
                                >
                                <span v-if="(isEmailIn == false) & (isInvalid == true)">{{
                                    errMsgEmail
                                }}</span>
                                <br>
                                <span v-if="v$.email.$error">
                                    {{ v$.email.$errors[0].$message }}
                                </span>
                            </div>
                            <br>
                            <div class="form-group">
                                <label for="password">Password <span>*</span></label>
                                <input
                                    id="password"
                                    v-model="state.password"
                                    type="password"
                                    class="form-control"
                                >
                                <span v-if="isInvalid == true">{{ errMsgPassword }}</span><br>
                                <span v-if="v$.password.$error">
                                    {{ v$.password.$errors[0].$message }}
                                </span>
                            </div>
                            <div class="row my-2">
                                <div class="mb-3">
                                    <label for="accType">Type of Account</label>
                                    <select
                                        id="accType"
                                        v-model="state.accType"
                                        class="form-select form-select-lg"
                                        name=""
                                    >
                                        <option selected>
                                            Select one
                                        </option>
                                        <option value="Patron">
                                            Patron
                                        </option>
                                        <option value="Merchant">
                                            Merchant
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <br>
                        </form>
                    </div>
                    <div class="row mt-4">
                        <div class="col-3" />
                        <div class="col-6">
                            <button
                                type="submit"
                                class="col-12 mainBtnDesign"
                                @click="submitForm()"
                            >
                                Log In
                            </button>
                        </div>
                        <div class="col-3" />
                    </div>
                    <div class="row mt-5 text-center">
                        <div class="col">
                            <router-link to="/signup">
                                Don't have an account
                            </router-link>
                        </div>
                    </div>
                </div>
                <div class="col-md-1" />
            </div>
        </div>
    </div>
</template>
<script>
import useValidate from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";
import axios from "axios";
import { reactive, computed } from "vue";
export default {
  name: "App",
  setup() {
    const state = reactive({
      email: "",
      password: "",
      accType: "",
    });

    const rules = computed(() => {
      return {
        email: {
          required,
          email,
        },
        password: { required, minLength: minLength(8) },
        accType: { required },
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
      isEmailIn: false,
      isInvalid: false,
      errMsgEmail: "Email is not a valid account with us!",
      errMsgPassword: "Invaild Password!",
    };
  },
  methods: {
    submitForm(v$) {
      // // make api call to db to get
      this.v$.$validate();
      if (this.state.accType == "Merchant") {
        console.log("test");
        let url = `https://support-local.herokuapp.com/api/merchants`;
        axios
          .get(url)
          .then((resp) => {
            if (!this.v$.$error) {
              var data = resp.data;
              let correctEmail = false;
              let correctPassword = false;

              for (const user of data) {
                if (this.state.email === user.email) {
                  if (this.state.password === user.password) {
                    // (Email, Password) pair matches => SUCCESS
                    // 1. Extract user.Id from the user
                    // 2. Log user into memory

                    let userID = user.id;
                    window.localStorage.setItem("userId", `${userID}`);
                    window.localStorage.setItem(
                      "accType",
                      `${this.state.accType}`
                    );
                    correctEmail = true;
                    correctPassword = true;
                    this.isInvalid = false;
                    this.isEmailIn = true;

                    console.log("All Correct, User Logged into Memory");
                    this.$router.push(`/dashboard/${userID}`);
                  }
                  // Wrong Password but Email is present in the database
                  correctEmail = true;
                }
              }

              if (correctEmail == true && correctPassword == false) {
                //
                // Wrong Password but Email is present in the database
                //

                this.isEmailIn = true;
                this.isInvalid = true;
                this.state.password = "";
              } else if ((correctEmail == false) & (correctPassword == false)) {
                //
                // No such email is present in the database
                //
                this.isInvalid = true;
                this.state.email = "";
                this.state.password = "";
              }
            } else {
              //
              // clear input value w/o refreshing page
              //
              this.state.email = "";
              this.state.password = "";
              this.isInvalid = true;
            }
          })
          .catch((err) => {
            console.log(err.message);
          });
      }

      if (this.state.accType == "Patron") {
        let url = `https://support-local.herokuapp.com/api/users`;
        axios
          .get(url)
          .then((resp) => {
            if (!this.v$.$error) {
              var data = resp.data;
              let correctEmail = false;
              let correctPassword = false;

              for (const user of data) {
                if (this.state.email === user.email) {
                  if (this.state.password === user.password) {
                    // (Email, Password) pair matches => SUCCESS
                    // 1. Extract user.Id from the user
                    // 2. Log user into memory

                    let userID = user.id;
                    window.localStorage.setItem("userId", `${userID}`);
                    window.localStorage.setItem(
                      "accType",
                      `${this.state.accType}`
                    );
                    correctEmail = true;
                    correctPassword = true;
                    this.isInvalid = false;
                    this.isEmailIn = true;

                    console.log("All Correct, User Logged into Memory");
                    this.$router.back();
                  }
                  // Wrong Password but Email is present in the database
                  correctEmail = true;
                }
              }

              if (correctEmail == true && correctPassword == false) {
                //
                // Wrong Password but Email is present in the database
                //

                this.isEmailIn = true;
                this.isInvalid = true;
                this.state.password = "";
              } else if ((correctEmail == false) & (correctPassword == false)) {
                //
                // No such email is present in the database
                //
                this.isInvalid = true;
                this.state.email = "";
                this.state.password = "";
              }
            } else {
              //
              // clear input value w/o refreshing page
              //
              this.state.email = "";
              this.state.password = "";
              this.isInvalid = true;
            }
          })
          .catch((err) => {
            console.log(err.message);
          });
      }
    },
  },
};
</script>

<style>
@import "../assets/style/global.css";
</style>
