<template>
    <div class="container-fluid p-0">
        <div :class="modes === 'dark' ? 'checked' : false">
            <label class="toggle">
                <input
                    type="checkbox"
                    :checked="modes === 'dark' ? 'checked' : false"
                    @change="toggle"
                >
                <span class="toggler round" />
            </label>
        </div>
    </div>
</template>

<script>
import { ResolveLoader } from "webpack-chain";

export default {
  name: "MyToggle",
  props: {
    mode: {
      type: String,
      default: "light",
    },
  },
  data() {
    return {
      modes: "light",
    };
  },
  mounted() {
    const userTheme = this.getTheme() || this.getUserPreference();
    this.setTheme(userTheme);
  },
  methods: {
    toggle() {
      // toggle light and dark switch
      const activeTheme = localStorage.getItem("modes");
      if (activeTheme === "light") {
        this.setTheme("dark");
      } else {
        this.setTheme("light");
      }
    },
    setTheme(theme) {
      localStorage.setItem("modes", theme);
      this.modes = theme;
      window.dispatchEvent(
        new CustomEvent("modes-localstorage-changed", {
          detail: {
            storage: localStorage.getItem("modes"),
          },
        })
      );
    },
    getTheme() {
      return localStorage.getItem("modes");
    },
    getUserPreference() {
      const darkPreference = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      if (darkPreference) {
        return "dark";
      } else {
        return "light";
      }
    },
  },
};
</script>

<style>
@import "../assets/style/global.css";
</style>
