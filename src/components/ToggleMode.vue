<template>
    <div :id="modes">
        <div class="container-fluid box">
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
    </div>
</template>

<script>
export default {
  name: "MyToggle",
  props: ["mode"],
  data() {
    return {
      modes: "light",
    };
  },
  mounted() {
    const initUserTheme = this.getTheme() || this.getMediaPreference();
    this.setTheme(initUserTheme);
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
    getMediaPreference() {
      const hasDarkPreference = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      if (hasDarkPreference) {
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
