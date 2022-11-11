<template>
    <header>
        <nav class="navbar navbar-expand-md">
            <div class="container-fluid">
                <router-link :to="`/landing`">
                    <img
                        src="../assets/Nobackgroundlogo.png"
                        alt=""
                        class="brand-logo"
                    >
                </router-link>

                <button
                    class="navbar-toggler burger"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon" />
                </button>
                <div
                    id="navbarSupportedContent"
                    class="collapse navbar-collapse justify-content-end"
                >
                    <form
                        class="d-flex ms-auto justify-content-center"
                        role="search"
                    >
                        <input
                            v-model="searchInput"
                            class="form-control"
                            style="width: 40vw"
                            list="datalistOptions"
                            placeholder="Type to search..."
                        >
                        <datalist id="datalistOptions">
                            <option
                                v-for="(item, index) in productList"
                                :key="index"
                                :value="titleCase(item.name)"
                            />
                        </datalist>

                        <button
                            class="btn mainBtnDesign ms-2"
                            type="button"
                            @click="redirect()"
                        >
                            Search
                        </button>
                    </form>
                    <div class="nav-item">
                        <toggle-mode class="ms-3 d-none d-md-block" />
                    </div>
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <router-link
                                to="/cart"
                                class="nav-link navCart"
                            >
                                Cart
                            </router-link>
                        </li>
                        <li
                            v-if="loginFlag"
                            class="nav-item dropdown"
                        >
                            <a
                                class="nav-link dropdown-toggle navProfile"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Profile
                            </a>
                            <ul
                                class="dropdown-menu dpMenu"
                                style="margin: 0"
                            >
                                <li v-if="merchantFlag">
                                    <router-link
                                        :to="merchantDashHref"
                                        class="dropdown-item dpSign"
                                        style="margin: 0"
                                    >
                                        Dashboard
                                    </router-link>
                                </li>
                                <li v-if="merchantFlag == false">
                                    <router-link
                                        to="/orderLog"
                                        class="dropdown-item dpSign"
                                    >
                                        My Orders
                                    </router-link>
                                </li>
                                <li>
                                    <a
                                        class="dropdown-item"
                                        @click="logOut"
                                    >Logout</a>
                                </li>
                            </ul>
                        </li>
                        <li
                            v-else
                            class="nav-item dropdown"
                        >
                            <a
                                class="nav-link dropdown-toggle navProfile"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Guest
                            </a>
                            <ul
                                class="dropdown-menu dpMenu"
                                style="margin: 0"
                            >
                                <li>
                                    <router-link
                                        to="/signup"
                                        class="dropdown-item dpSign"
                                    >
                                        Sign Up
                                    </router-link>
                                </li>
                                <li>
                                    <router-link
                                        to="/login"
                                        class="dropdown-item dpLogin"
                                    >
                                        Login
                                    </router-link>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item d-md-none mt-2">
                            <toggle-mode />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
import axios from "axios";
import ToggleMode from "../components/ToggleMode.vue";
export default {
  components: {
    ToggleMode,
  },
  data() {
    return {
      mode: localStorage.modes,
      searchInput: "",
      productList: [],
      loginFlag: false,
      merchantFlag: false,
      userId: "",
      merchantDashHref: ``,
    };
  },
  async beforeMount() {
    // A function that will be called before the component is mounted.
    const res = await axios.get(
      "https://support-local.herokuapp.com/api/products"
    );
    let startUpArr = [];
    for (const key in res.data) {
      if (Object.hasOwnProperty.call(res.data, key)) {
        const element = res.data[key];
        let productSearchPair = {};
        productSearchPair["id"] = element.id;
        productSearchPair["name"] = element.name;
        startUpArr.push(productSearchPair);
      }
    }
    this.productList = startUpArr;
  },

  mounted() {
    window.addEventListener("modes-localstorage-changed", (event) => {
      this.mode = event.detail.storage;
    });
    setInterval(() => {
      if (window.localStorage.getItem("userId") === null) {
        this.loginFlag = false;
        this.merchantFlag = false;
      } else {
        this.loginFlag = true;
        this.merchantFlag = false;
        if (window.localStorage.getItem("accType") === "Merchant") {
          this.userId = window.localStorage.getItem("userId");
          this.merchantDashHref = `/dashboard/${this.userId}`;
          this.merchantFlag = true;
        }
      }
    }, 3000);
  },
  methods: {
    redirect() {
      // On click of the search button, function searches the productList
      // Redirects to the first individual product that matchs the search product name
      let prodName = this.searchInput;
      let resultKey = "";
      for (const aProductSearchPair of this.productList) {
        if (this.titleCase(aProductSearchPair.name) == prodName) {
          resultKey = aProductSearchPair.id;
          break;
        }
      }
      if (resultKey == "") {
        alert("There is no such product! Search again");
        this.searchInput = "";
      } else {
        this.$router.push(`/individual/${resultKey}`);
      }
    },

    logOut() {
      window.localStorage.removeItem("userId");
      window.localStorage.removeItem("cart");
      window.localStorage.removeItem("accType");
      this.$router.push("/");
    },

    titleCase(str) {
      // Ref: https://stackoverflow.com/questions/32589197/how-can-i-capitalize-the-first-letter-of-each-word-in-a-string-using-javascript
      var splitStr = str.toLowerCase().split(" ");
      for (var i = 0; i < splitStr.length; i++) {
        // You do not need to check if i is larger than splitStr length, as your for does that for you
        // Assign it back to the array
        splitStr[i] =
          splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
      }
      // Directly return the joined string
      return splitStr.join(" ");
    },
  },
};
</script>

<style scoped>
@import "../assets/style/global.css";
</style>
