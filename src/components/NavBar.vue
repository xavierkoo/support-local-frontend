<template>
    <header>
        <nav>
            <div :id="mode">
                <div class="container-fluid">
                    <div class="row justify-content-center align-items-center g-2">
                        <div class="col col-lg-3 col-md-3 d-sm-block">
                            <img
                                src="../assets/appLogo.svg"
                                alt=""
                                class="brand-logo"
                            >
                        </div>
                        <div class="col col-lg-7 col-md-7 d-none d-md-block searchBox">
                            <div class="text-center">
                                <input
                                    type="text"
                                    placeholder="Search for your product"
                                    style="width: 60%"
                                >
                                <button class="mx-3 mainBtnDesign">
                                    Search
                                </button>
                            </div>
                        </div>
                        <div class="col col-lg-2 col-md-2 d-none d-sm-block">
                            <div
                                class="pe-3"
                                style="float: right; height: 45px"
                            >
                                <svg
                                    class="me-3"
                                    style="width: 30%; height: 100%"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"
                                    />
                                </svg>

                                <svg
                                    class="me-3"
                                    style="width: 30%; height: 100%"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
  data() {
    return {
      mode: localStorage.modes,
    };
  },
  mounted() {
    window.addEventListener("modes-localstorage-changed", (event) => {
      this.mode = event.detail.storage;
    });
  },
};
</script>

<style scoped>
@import "../assets/style/global.css";
</style>
