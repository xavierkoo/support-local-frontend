<template>
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
.dark {
  background: #121212;
}

.toggle {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.toggle input {
  opacity: 0;
  width: 0;
  height: 0;
}

.toggler {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #d36959;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.toggler:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  bottom: 4px;
  left: 4px;
  background: #fff;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .toggler {
  background: #6ae092;
}

input:focus + toggler {
  box-shadow: 0 0 2px #2196f3;
}

input:checked + .toggler:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

.toggler.round {
  border-radius: 34px;
}

.toggler.round:before {
  border-radius: 50%;
}
</style>
