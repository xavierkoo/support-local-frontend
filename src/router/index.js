import { createRouter, createWebHashHistory } from "vue-router";
import IndividualBrand from "../views/IndividualBrand.vue";
import LandingView from "../views/LandingView.vue";
import ShoppingCart from "../views/ShoppingCart.vue";
import Login from "../views/Login.vue";
import Checkout from "../views/Checkout.vue";
import IndividualView from "../views/IndividualView.vue";
import SignUp from "../views/Signup.vue";
import orderLog from "../views/OrderLogs.vue";
import viewOrder from "../views/ViewOrder.vue";
import Payment from "../views/Payment.vue";
import DashBoard from "../views/Dashboard.vue";

const routes = [
  {
    path: "/",
    name: "/",
    component: LandingView,
  },
  {
    path: "/index.html",
    name: "index.html",
    component: LandingView,
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
    path: "/individual/:productId",
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
    path: "/viewOrder/:prod/:order",
    name: "viewOrder",
    component: viewOrder,
    props: true,
  },
  {
    path: "/brand/:merchantId",
    name: "brand",
    component: IndividualBrand,
  },
  {
    path: "/payment",
    name: "payment",
    component: Payment,
  },
  {
    path: "/dashboard/:merchantId",
    name: "dashBoard",
    component: DashBoard,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
