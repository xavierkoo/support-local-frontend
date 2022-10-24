import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LandingView from "../views/LandingView.vue";
import ShoppingCart from "../views/ShoppingCart.vue";
import Login from "../views/Login.vue";
import Checkout from "../views/Checkout.vue";
import IndividualView from "../views/IndividualView.vue";
import SignUp from "../views/Signup.vue";
import orderLog from "../views/OrderLogs.vue";
import viewOrder from "../views/ViewOrder.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/landing",
    name: "landing",
    component: LandingView,
  },
  {
    path: "/cart",
    name: "cart",
    component: ShoppingCart,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/checkout",
    name: "checkout",
    component: Checkout,
  },
  {
    path: "/individual",
    name: "individual",
    component: IndividualView,
  },
  {
    path: "/signup",
    name: "sign",
    component: SignUp,
  },
  {
    path: "/orderLog",
    name: "orderLog",
    component: orderLog,
  },
  {
    path: "/viewOrder",
    name: "viewOrder",
    component: viewOrder,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
