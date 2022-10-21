<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/multi-word-component-names -->
<template>
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
            <div class="col-md-5 p-5 shadow form1">
                <div class="container">
                    <div class="row">
                        <h3 class="display-6">
                            <b>Login</b>
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
                                >
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
                                <span v-if="v$.password.$error">
                                    {{ v$.password.$errors[0].$message }}
                                </span>
                            </div>
                            <br>
                            <div class="container buttoncont">
                                <button
                                    type="submit"
                                    class="btn btn-danger"
                                    @click="submitForm()"
                                >
                                    Log In
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="col-md-1" />
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
  methods: {
    submitForm() {
      // make api call to db to get
      this.v$.$validate();
      if (!this.v$.$error) {
        alert("form successful");
      } else {
        alert("form failed");
      }
      //   alert("Form successfully submitted");
    },
    verify() {
      let url = "";
      axios
        .get()
        .then()
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
