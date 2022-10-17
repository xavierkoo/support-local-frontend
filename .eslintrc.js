module.exports = {
  extends: ["plugin:vue/vue3-recommended"],
  rules: {
    // override/add rules settings here, such as:
    "vue/html-indent": [
      "error",
      4,
      {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: true,
        ignores: [],
      },
    ],
    "vue/no-unused-vars": "error",
    "no-trailing-spaces": "error",
    "object-curly-spacing": ["error", "always"],
    "arrow-spacing": ["error", { before: true, after: true }],
  },
};
