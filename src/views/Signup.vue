<template>
    <div class="signUp">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-1" />

                <img
                    src="https://i.pinimg.com/originals/7f/98/dc/7f98dcad5579ed7fc4d4b88b79ecfea4.jpg"
                    alt=""
                    class="col-md-5 mb-2 d-none d-md-block"
                >

                <div class="col-md-5 container back px-5 mb-2">
                    <div class="row display-6 mt-4">
                        <h3 class="fw-bold">
                            Sign Up
                        </h3>
                    </div>
                    <div class="row">
                        <form>
                            <div class="row my-2">
                                <div class="form-group">
                                    <label for="Email">Email: <span class="text-danger">*</span></label>
                                    <input
                                        id="emailAdd"
                                        v-model="state.email"
                                        type="email"
                                        class="form-control"
                                    >
                                    <span
                                        v-if="v$.email.$error"
                                        class="text-danger"
                                    >
                                        {{ invalidEmail }}
                                    </span>
                                </div>
                            </div>
                            <div class="row my-2">
                                <div class="form-group">
                                    <label for="password">Password: (min. 8 characters)
                                        <span class="text-danger">*</span></label>
                                    <input
                                        id="password"
                                        v-model="state.password.password"
                                        type="password"
                                        class="form-control"
                                    >
                                    <span
                                        v-if="v$.password.$error"
                                        class="text-danger"
                                    >
                                        {{ errMsgPassword }}
                                    </span>
                                </div>
                            </div>
                            <div class="row my-2">
                                <div class="form-group">
                                    <label for="cfmpassword">Confirm Password <span class="text-danger">*</span></label>
                                    <input
                                        id="cfmpassword"
                                        v-model="state.password.confirm"
                                        type="password"
                                        class="form-control"
                                    >
                                    <span
                                        v-if="v$.password.$error"
                                        class="text-danger"
                                    >
                                        {{ errMsgPassword }}
                                    </span>
                                </div>
                            </div>
                        </form>
                        <div class="row mt-4 mx-auto">
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
</template>
<script>
import useValidate from "@vuelidate/core";
import axios from "axios";
import { required, email, minLength, sameAs } from "@vuelidate/validators";
import { reactive, computed } from "vue";
export default {
  name: "App",
  setup() {
    const state = reactive({
      email: "",
      password: {
        password: "",
        confirm: "",
      },
      accType: "",
    });

    const rules = computed(() => {
      return {
        email: {
          required,
          email,
        },
        password: {
          // uses vuelidate the validate the password and confirm password
          password: { required, minLength: minLength(8) },
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
  data() {
    return {
      errMsgPassword: "Invalid Password!",
      invalidEmail: "Invalid Email!",
    };
  },
  methods: {
    submitForm() {
      // method gets user's input values and add it into the db
      // trying to add data into userBase db
      let url = "https://support-local-backend.onrender.com/api/users";
      var inputPassword = this.state.password.password;
      var inputEmail = this.state.email;
      var accType = this.state.accType;
      this.v$.$validate();

      axios.get(url).then((res) => {
        let existingEmailArr = [];
        let usersArr = res.data;
        for (const key in usersArr) {
          existingEmailArr.push(usersArr[key].email);
        }

        if (existingEmailArr.includes(inputEmail)) {
          alert("This email is already taken!");
          this.state.email = "";
          this.state.password.password = "";
          this.state.password.confirm = "";
        } else {
          axios
            .post(url, {
              email: inputEmail,
              password: inputPassword,
              profImageUrl: "assets/img/placeholders/dp1.jpeg",
              reviews: [],
              orderDetails: [],
            })
            .then((res) => {
              if (!this.v$.$error) {
                // route to landing page
                alert("Sign up successful!");
                this.$router.push("/landing");
              } else {
                // did not meet input requirement
                console.log("Form input did not meet the input requirement!");
                this.state.email = "";
                this.state.password.password = "";
                this.state.password.confirm = "";
              }
            })
            .catch((err) => {
              console.log(err.message);
            });
        }
      });
    },
  },
};
</script>

<style>
@import "../assets/style/global.css";
</style>
