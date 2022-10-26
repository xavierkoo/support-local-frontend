<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="login">
        <div :id="mode">
            <div class="container">
                <div class="row">
                    <div class="col-md-1" />
                    <div class="col-md-5">
                        <img
                            src="https://i.pinimg.com/originals/7f/98/dc/7f98dcad5579ed7fc4d4b88b79ecfea4.jpg"
                            alt=""
                            class="shadow"
                        >
                    </div>
                    <div class="col-md-5 p-5 shadow back">
                        <div class="container">
                            <div class="row display-6">
                                <h3>
                                    <bold>Login</bold>
                                </h3>
                            </div>
                            <div class="row">
                                <form>
                                    <div class="form-group">
                                        <label for="Email">Email <span>*</span></label>
                                        <input
                                            id="emailAdd"
                                            v-model="state.email"
                                            type="email"
                                            class="form-control"
                                            onfocus="this.value=''"
                                        >
                                        <!-- <span
                                            v-if="isInvalid"
                                            class="color:red"
                                        >Incorrect Email</span> -->
                                        <span v-if="v$.email.$error">
                                            {{ v$.email.$errors[0].$message }}
                                        </span>
                                    </div>
                                    <br>
                                    <div class="form-group">
                                        <label for="password">Password <span>*</span></label>
                                        <input
                                            v-model="state.password"
                                            type="password"
                                            class="form-control"
                                            onfocus="this.value=''"
                                        >
                                        <!-- <span
                                            v-if="isInvalid"
                                            class="color:red"
                                        >Incorrect Password</span> -->
                                        <span v-if="v$.password.$error">
                                            {{ v$.password.$errors[0].$message }}
                                        </span>
                                    </div>
                                    <br>
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-4" />
                                            <button
                                                type="submit"
                                                class="col-4 mainBtnDesign"
                                                @click="submitForm()"
                                            >
                                                Log In
                                            </button>
                                            <div class="col-4" />
                                        </div>
                                    </div>
                                </form>
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
import { required, email, minLength, helpers } from "@vuelidate/validators";
import axios from "axios";
import { reactive, computed } from "vue";
export default {
  setup() {
    const state = reactive({
      email: "",
      password: "",
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
        password: { required, minLength: minLength(6) },
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
      errMsgEmail: "",
      errMsgPassword: "",
      isInvalid: false,
    };
  },
  methods: {
    submitForm(v$) {
      // make api call to db to get
      let url = "http://localhost:8081/user";
      this.v$.$validate();
      axios
        .get(url)
        .then((resp) => {
          if (!this.v$.$error) {
            // alert("form successful");
            console.log(resp.data);
            // do form validation here
            // var inputPassword = document.getElementById("password").value;
            // var inputEmail = document.getElementById("emailAdd").value;
            var data = resp.data;
            var dbEmail = data[0].email;
            // console.log(dbEmail);
            // check if email exist in db
            var checkEmail = (data) => data.email === this.state.email;
            var isValidEmail = data.some(checkEmail);
            // check if password exist in db
            var checkPassword = (data) => data.password === this.state.password;
            var isValidPassword = data.some(checkPassword);

            // check both conditions met, route to the landing page
            if (isValidEmail && isValidPassword) {
              this.$router.push("landing");
            } else {
              // clear input value w/o refreshing page
              document.querySelector("#emailAdd").value = "";
              document.querySelector("#password").value = "";

              // set isInvalid to show the red error msg in the form
              this.isInvalid = true;
              // display err msg
              // document.getElementById(
              //   "errmsgEmail"
              // ).innerHTML = `<span class='color:red'>Incorrect Email</span>`;
              // document.getElementById(
              //   "errmsgPassword"
              // ).innerHTML = `<span class='color:red'>Incorrect Password</span>`;
            }
          } else {
            // did not meet input requirement
            // alert("form failed");
            console.log("form failed");
          }
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
  },
};
</script>

<style>
.container {
  display: inline;
  margin: auto;
}
img {
  width: 100%;
  height: 100%;
  border-radius: 30px;
}
.form1 {
  padding: 20px;
  /* border: 1px #c8c8c8 solid; */
  border-radius: 20px;
}
.buttoncont {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
}
button {
  width: 100px;
}
span {
  color: red;
}
</style>
