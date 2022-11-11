<template>
    <div :id="mode">
        <div class="container-fluid footer mt-3">
            <div class="row m-0">
                <div class="col-2 col-sm-4" />
                <h2
                    class="col-8 col-sm-4 mt-3 d-flex justify-content-center align-content-center text-center pe-0"
                >
                    Stay Connected!
                </h2>
                <div class="col-2 col-sm-4" />
            </div>
            <div class="row m-0">
                <div class="col-1 col-sm-3" />
                <p
                    class="col-10 col-sm-6 text-center d-flex justify-content-center align-content-center pe-0"
                >
                    Sign up for the Support Local Newsletter now to <br>
                    get the latest updates!
                </p>
                <div class="col-1 col-sm-3" />
            </div>
            <form
                ref="form"
                @submit.prevent="sendEmail"
            >
                <div class="row ms-0">
                    <div class="col-sm-1" />
                    <label
                        class="email text-center p-0 my-auto col-2 col-sm-2 text-sm-end"
                    >Email:
                    </label>
                    <input
                        v-model="msg"
                        class="col-8 col-sm-6 m-0 emailInput"
                        type="email"
                        name="user_email"
                    >
                    <div class="col-4 d-block d-sm-none" />
                    <input
                        type="submit"
                        value="Sign Up"
                        class="signUpBtnDesign col-4 col-sm-2 col-md-2 col-lg-1 m-0 my-2 my-sm-auto ms-sm-2"
                    >
                    <div class="col-sm-2" />
                </div>
            </form>
            <div class="row d-none d-sm-block py-3 ms-0">
                <div
                    class="footerWrapper d-flex justify-content-center align-content-center p-0"
                >
                    <a
                        class="footerButton text-decoration-none"
                        href="https://www.facebook.com/profile.php?id=100087343224860"
                    >
                        <div class="icon">
                            <i class="fab fa-facebook-f" />
                        </div>
                        <span> Facebook</span>
                    </a>
                    <a
                        class="footerButton text-decoration-none"
                        href="https://twitter.com/SupportLocalWAD"
                    >
                        <div class="icon">
                            <i class="fab fa-twitter" />
                        </div>
                        <span> Twitter</span>
                    </a>
                    <a
                        class="footerButton text-decoration-none"
                        href="https://www.instagram.com/supportlocalwad2/"
                    >
                        <div class="icon">
                            <i class="fab fa-instagram" />
                        </div>
                        <span> Instagram</span>
                    </a>
                    <a
                        class="footerButton text-decoration-none"
                        href="https://www.youtube.com/channel/UCiY4X25IhzK4wrOn6ButkSQ"
                    >
                        <div class="icon">
                            <i class="fab fa-youtube" />
                        </div>
                        <span> Youtube</span>
                    </a>
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
