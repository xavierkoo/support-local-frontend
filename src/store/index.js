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
      // Find the product from the local storage cart by id, then remove by decrementing
      let item = state.cart.find((i) => i.id === product.id);

      if (item) {
        if (item.quantity > 1) {
          item.quantity--;
        } else {
          state.cart = state.cart.filter((i) => i.id !== product.id);
        }
      }
      // call updateLocalStorage(state.cart) to update the local storage cart
      updateLocalStorage(state.cart);
    },
    updateCartFromLocalStorage(state) {
      // update cart by .getItem
      const cart = localStorage.getItem("cart");
      if (cart) {
        // if cart exist (not null), update new cart to local storage
        state.cart = JSON.parse(cart);
      }
    },
    deleteItem(state, product) {
      let item = state.cart.find((i) => i.id === product.id);
      let index = state.cart.indexOf(item);
      state.cart.splice(index, 1);
      // localStorage.removeItem(item1);
    },
  },
  actions: {},
  modules: {},
});

// const app = createApp();
// app.use(store);
// app.mount("#app");
