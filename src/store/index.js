import { createStore } from "vuex";
import Vue from "vue";

// updating local storage
function updateLocalStorage(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}
export default createStore({
  state: {
    cart: [],
  },
  getters: {
    // productQuantity: (state) => (product) => {
    //   const item = state.cart.find((i) => i.id === product.id);
    //   // if item is found, return the current product qty
    //   if (item) return item.quantity;
    //   else return null;
    // },
    cartItems: (state) => {
      return state.cart;
    },
  },
  mutations: {
    addToCart(state, product) {
      // search thru the cart array to look for the item, if exist, item shud exist in the cart pg
      let item = state.cart.find((i) => i.id === product.id);

      if (item) {
        // add the item to cart array
        item.quantity++;
      } else {
        // create the item and push it into the cart
        state.cart.push({ ...product, quantity: 1 });
      }

      // if user closes the page and comes back to it ltr, the state of the cart will not change (retains the data)
      updateLocalStorage(state.cart);
    },
    removeFromCart(state, product) {
      let item = state.cart.find((i) => i.name === product.name);

      if (item) {
        if (item.quantity > 1) {
          item.quantity--;
        } else {
          state.cart = state.cart.filter((i) => i.name !== product.name);
        }
      }
      updateLocalStorage(state.cart);
    },
    updateCartFromLocalStorage(state) {
      const cart = localStorage.getItem("cart");
      if (cart) {
        state.cart = JSON.parse(cart);
      }
    },
  },
  actions: {},
  modules: {},
});

// const app = createApp();
// app.use(store);
// app.mount("#app");
