<template>
    <div :id="mode">
        <div class="container-fluid footer mt-3">
            <div class="row mx-auto">
                <div class="row">
                    <div class="col-2 col-sm-4" />
                    <h2
                        class="col-8 col-sm-4 mt-3 d-flex justify-content-center align-content-center"
                    >
                        Stay Connected!
                    </h2>
                    <div class="col-2 col-sm-4" />
                </div>
                <div class="row">
                    <div class="col-1 col-sm-3" />
                    <p
                        class="col-10 col-sm-6 text-center d-flex justify-content-center align-content-center"
                    >
                        Sign up for the Support Local Newsletter now to <br>
                        get the latest updates!
                    </p>
                    <div class="col-1 col-sm-3" />
                </div>
                <div class="row">
                    <div class="col-1 col-sm-3" />
                    <span class="col-2 col-sm-1 my-auto email">Email: </span>
                    <input
                        class="col-5 col-sm-4"
                        type="text"
                    >
                    <button
                        class="col-3 col-sm-2 col-lg-1 cancelBtnDesign my-auto align-items-end"
                    >
                        SignUp
                    </button>
                    <div class="col-1 col-sm-2 col-lg-3" />
                </div>
                <div class="row d-none d-sm-block">
                    <div
                        class="footerWrapper col-12 d-flex justify-content-center align-content-center"
                    >
                        <div class="footerButton">
                            <div class="icon">
                                <i class="fab fa-facebook-f" />
                            </div>
                            <span>Facebook</span>
                        </div>
                        <div class="footerButton">
                            <div class="icon">
                                <i class="fab fa-twitter" />
                            </div>
                            <span>Twitter</span>
                        </div>
                        <div class="footerButton">
                            <div class="icon">
                                <i class="fab fa-instagram" />
                            </div>
                            <span>Instagram</span>
                        </div>
                        <div class="footerButton">
                            <div class="icon">
                                <i class="fab fa-youtube" />
                            </div>
                            <span>Youtube</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      mode: localStorage.modes,
    };
  },
  mounted() {
    let themejs = document.createElement("script");
    themejs.setAttribute("src", "https://kit.fontawesome.com/a076d05399.js");
    document.head.appendChild(themejs);
  },
};
</script>

<style scoped>
@import "../assets/style/global.css";
</style>
