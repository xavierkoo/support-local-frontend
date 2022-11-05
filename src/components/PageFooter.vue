<template>
    <div :id="mode">
        <div class="container-fluid footer mt-3">
            <div class="row mx-auto">
                <div class="row m-0">
                    <div class="col-2 col-sm-4" />
                    <h2
                        class="col-8 col-sm-4 mt-3 d-flex justify-content-center align-content-center text-center"
                    >
                        Stay Connected!
                    </h2>
                    <div class="col-2 col-sm-4" />
                </div>
                <div class="row m-0">
                    <div class="col-1 col-sm-3" />
                    <p
                        class="col-10 col-sm-6 text-center d-flex justify-content-center align-content-center"
                    >
                        Sign up for the Support Local Newsletter now to <br>
                        get the latest updates!
                    </p>
                    <div class="col-1 col-sm-3" />
                </div>
                <div class="row m-0">
                    <form
                        ref="form"
                        class="d-flex justify-content-center"
                        @submit.prevent="sendEmail"
                    >
                        <div class="col-1 col-sm-3" />
                        <label class="email my-auto col-2 col-sm-1 text-end">Email: </label>
                        <input
                            v-model="msg"
                            class="col-4 col-sm-4 m-0"
                            type="email"
                            name="user_email"
                        >
                        <input
                            type="submit"
                            value="Sign Up"
                            class="cancelBtnDesign col-4 col-sm-2 col-lg-1 m-0"
                        >
                        <div class="col-1 col-sm-2 col-lg-3" />
                    </form>
                </div>
                <div class="row d-none d-sm-block my-3">
                    <div
                        class="footerWrapper col-12 d-flex justify-content-center align-content-center"
                    >
                        <div class="footerButton">
                            <div class="icon">
                                <i class="fab fa-facebook-f" />
                            </div>
                            <span> Facebook</span>
                        </div>
                        <div class="footerButton">
                            <div class="icon">
                                <i class="fab fa-twitter" />
                            </div>
                            <span> Twitter</span>
                        </div>
                        <div class="footerButton">
                            <div class="icon">
                                <i class="fab fa-instagram" />
                            </div>
                            <span> Instagram</span>
                        </div>
                        <div class="footerButton">
                            <div class="icon">
                                <i class="fab fa-youtube" />
                            </div>
                            <span> Youtube</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import emailjs from "@emailjs/browser";
export default {
  data() {
    return {
      mode: localStorage.modes,
      msg: "",
    };
  },
  mounted() {
    let themejs = document.createElement("script");
    themejs.setAttribute("src", "https://kit.fontawesome.com/a076d05399.js");
    document.head.appendChild(themejs);
  },
  methods: {
    sendEmail() {
      emailjs
        .sendForm(
          "SupportLocal2022",
          "SupportLocal2022",
          this.$refs.form,
          "8Ofr7mrBSFNOFqcER"
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.text);
            alert(
              "You have successfully signed up for the Support Local Newsletter!"
            );
            this.msg = "";
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    },
  },
};
</script>

<style scoped>
@import "../assets/style/global.css";
</style>
