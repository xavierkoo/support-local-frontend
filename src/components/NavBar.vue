<template>
    <header>
        <nav class="navbar navbar-expand-md bg-light">
            <div class="container-fluid">
                <router-link :to="`/landing`">
                    <img
                        src="../assets/Nobackgroundlogo.png"
                        alt=""
                        class="brand-logo"
                    >
                </router-link>
                <button
                    class="navbar-toggler"
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
                            class="form-control me-2"
                            style="width: 40vw"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        >
                        <button
                            class="btn btn-outline-success"
                            type="submit"
                        >
                            Search
                        </button>
                    </form>
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <router-link
                                to="/cart"
                                class="nav-link"
                            >
                                Cart
                            </router-link>
                        </li>
                        <li class="nav-item dropdown">
                            <a
                                class="nav-link dropdown-toggle"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Profile
                            </a>
                            <ul class="dropdown-menu">
                                <li>
                                    <router-link
                                        to="/signup"
                                        class="dropdown-item"
                                    >
                                        Sign Up
                                    </router-link>
                                </li>
                                <li>
                                    <router-link
                                        to="/login"
                                        class="dropdown-item"
                                    >
                                        Login
                                    </router-link>
                                </li>
                            </ul>
                        </li>
                    </ul>
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
