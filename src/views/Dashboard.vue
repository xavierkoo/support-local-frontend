<template>
    <div class="App">
        <div v-if="productList == null">
            <div class="container d-flex justify-content-center align-content-center">
                <div class="spinner">
                    <img
                        src="../assets/Nobackgroundlogo.png"
                        alt=""
                        class="img-fluid"
                    >
                    <div class="spinner-sector spinner-sector-one" />
                    <div class="spinner-sector spinner-sector-two" />
                    <div class="spinner-sector spinner-sector-three" />
                </div>
            </div>
        </div>
        <div v-else>
            <div class="container-fluid">
                <!-- TODO: Add content here -->
                <div class="row justify-content-center g-2">
                    <div class="col" />
                    <div class="col-10 dashAll">
                        <!-- Main Content -->
                        <div class="mb-5 text-center text-sm-start mt-3">
                            <h2 class="fw-bold">
                                Welcome Back!
                                <span class="fw-bold dashName d-block d-sm-inline">{{
                                    merchant.name
                                }}</span>
                            </h2>
                            <h4><span>P/L:</span> <span class="pAndL"> $XXX.XX</span></h4>
                        </div>
                        <section>
                            <!-- Form Section -->

                            <!-- Add Product -->
                            <div
                                v-if="addNew"
                                class="container border-bottom mb-4"
                            >
                                <form @submit.prevent="addProduct">
                                    <h3 class="fw-bold">
                                        Add New Product
                                    </h3>
                                    <div class="row justify-content-center g-2">
                                        <div class="col-md-6">
                                            <!-- Left Col -->
                                            <div class="mb-3">
                                                <label
                                                    for="prodName"
                                                    class="form-label"
                                                >Product Name</label>
                                                <input
                                                    id="prodName"
                                                    v-model="newProdName"
                                                    type="text"
                                                    class="form-control"
                                                    placeholder="Maria Dress"
                                                    required
                                                >
                                            </div>
                                            <div class="mb-3">
                                                <label
                                                    for="prodCat"
                                                    class="form-label"
                                                >Category</label>
                                                <input
                                                    id="prodCat"
                                                    v-model="newProdCategory"
                                                    type="text"
                                                    class="form-control"
                                                    placeholder="Women's Apparel"
                                                    required
                                                >
                                            </div>
                                            <div class="mb-3">
                                                <label
                                                    for="prodImgURL"
                                                    class="form-label"
                                                >Product Image</label>
                                                <input
                                                    id="prodImgURL"
                                                    v-model="newProdImgURL"
                                                    type="text"
                                                    class="form-control"
                                                    placeholder="assets/img/products/martin.png"
                                                    required
                                                >
                                            </div>
                                            <div class="mb-3">
                                                <label
                                                    for="prodDesc"
                                                    class="form-label"
                                                >Description</label>
                                                <input
                                                    id="prodDesc"
                                                    v-model="newProdDesc"
                                                    type="text"
                                                    class="form-control"
                                                    placeholder="A long wavey dress for good for all climates"
                                                    required
                                                >
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <!-- Right Col -->
                                            <div class="mb-3">
                                                <label
                                                    for="prodPrice"
                                                    class="form-label"
                                                >Price</label>
                                                <input
                                                    id="prodPrice"
                                                    v-model="newProdPrice"
                                                    type="number"
                                                    class="form-control"
                                                    placeholder="65.00"
                                                    step="0.1"
                                                    min="1"
                                                    required
                                                >
                                            </div>
                                            <div class="mb-3">
                                                <label
                                                    for="prodRating"
                                                    class="form-label"
                                                >Rating</label>
                                                <input
                                                    id="prodRating"
                                                    v-model="newProdRating"
                                                    type="number"
                                                    class="form-control"
                                                    placeholder="3"
                                                    step="1"
                                                    min="1"
                                                    max="5"
                                                    required
                                                >
                                            </div>
                                            <div class="mb-3">
                                                <label
                                                    for="prodNumSold"
                                                    class="form-label"
                                                >Number Sold</label>
                                                <input
                                                    id="prodNumSold"
                                                    v-model="newProdNumSold"
                                                    type="number"
                                                    class="form-control"
                                                    step="1"
                                                    min="0"
                                                    required
                                                >
                                            </div>
                                            <div class="mb-3">
                                                <label
                                                    for="prodSpecs"
                                                    class="form-label"
                                                >Product Specs (separate with ,)</label>
                                                <input
                                                    id="prodSpecs"
                                                    v-model="newProdSpec"
                                                    type="text"
                                                    class="form-control"
                                                    placeholder="100% cotten, Washer ready"
                                                    required
                                                >
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-4" />
                                            <input
                                                type="submit"
                                                value="Add"
                                                class="btn mainBtnDesign col-4"
                                            >
                                            <div class="col-4" />
                                        </div>
                                    </div>
                                </form>
                                <h1 v-if="submitting">
                                    Submitting
                                </h1>
                                <h1 v-if="error">
                                    Something went wrong! Try submitting again~
                                </h1>
                            </div>

                            <!-- Edit Product -->
                            <div
                                v-if="editProd"
                                class="container border-bottom mb-4"
                            >
                                <form @submit.prevent="updateProduct">
                                    <h3 class="fw-bold">
                                        Update this Product
                                    </h3>
                                    <div class="row justify-content-center g-2">
                                        <div class="col-md-6">
                                            <!-- Left Col -->
                                            <div class="mb-3">
                                                <label
                                                    for="prodName"
                                                    class="form-label"
                                                >Product Name</label>
                                                <input
                                                    id="prodName"
                                                    v-model="newProdName"
                                                    type="text"
                                                    class="form-control"
                                                    placeholder="Maria Dress"
                                                    required
                                                >
                                            </div>
                                            <div class="mb-3">
                                                <label
                                                    for="prodCat"
                                                    class="form-label"
                                                >Category</label>
                                                <input
                                                    id="prodCat"
                                                    v-model="newProdCategory"
                                                    type="text"
                                                    class="form-control"
                                                    placeholder="Women's Apparel"
                                                    required
                                                >
                                            </div>
                                            <div class="mb-3">
                                                <label
                                                    for="prodImgURL"
                                                    class="form-label"
                                                >Product Image</label>
                                                <input
                                                    id="prodImgURL"
                                                    v-model="newProdImgURL"
                                                    type="text"
                                                    class="form-control"
                                                    placeholder="assets/img/products/martin.png"
                                                    required
                                                >
                                            </div>
                                            <div class="mb-3">
                                                <label
                                                    for="prodDesc"
                                                    class="form-label"
                                                >Description</label>
                                                <input
                                                    id="prodDesc"
                                                    v-model="newProdDesc"
                                                    type="text"
                                                    class="form-control"
                                                    placeholder="A long wavey dress for good for all climates"
                                                    required
                                                >
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <!-- Right Col -->
                                            <div class="mb-3">
                                                <label
                                                    for="prodPrice"
                                                    class="form-label"
                                                >Price</label>
                                                <input
                                                    id="prodPrice"
                                                    v-model="newProdPrice"
                                                    type="number"
                                                    class="form-control"
                                                    placeholder="65.00"
                                                    step="0.1"
                                                    min="1"
                                                    required
                                                >
                                            </div>
                                            <div class="mb-3">
                                                <label
                                                    for="prodRating"
                                                    class="form-label"
                                                >Rating</label>
                                                <input
                                                    id="prodRating"
                                                    v-model="newProdRating"
                                                    type="number"
                                                    class="form-control"
                                                    placeholder="3"
                                                    step="1"
                                                    min="1"
                                                    max="5"
                                                    required
                                                >
                                            </div>
                                            <div class="mb-3">
                                                <label
                                                    for="prodNumSold"
                                                    class="form-label"
                                                >Number Sold</label>
                                                <input
                                                    id="prodNumSold"
                                                    v-model="newProdNumSold"
                                                    type="number"
                                                    class="form-control"
                                                    step="1"
                                                    min="0"
                                                    required
                                                >
                                            </div>
                                            <div class="mb-3">
                                                <label
                                                    for="prodSpecs"
                                                    class="form-label"
                                                >Product Specs (separate with ,)</label>
                                                <input
                                                    id="prodSpecs"
                                                    v-model="newProdSpec"
                                                    type="text"
                                                    class="form-control"
                                                    placeholder="100% cotten, Washer ready"
                                                    required
                                                >
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-4" />
                                            <input
                                                type="submit"
                                                value="Update"
                                                class="btn mainBtnDesign col-4"
                                            >
                                            <div class="col-4" />
                                        </div>
                                    </div>
                                </form>
                                <h1 v-if="submitting">
                                    Submitting
                                </h1>
                                <h1 v-if="error">
                                    Something went wrong! Try submitting again~
                                </h1>
                            </div>
                        </section>
                        <section>
                            <!-- Product Overview Section -->
                            <div class="row">
                                <div class="col-9">
                                    <h4 class="fw-bold">
                                        Your Product Overview
                                    </h4>
                                </div>
                                <div class="col-3 pe-xl-4">
                                    <button
                                        v-if="addNew != true"
                                        class="btn addProductBtnDesign float-end mb-2"
                                        @click="setAddNew()"
                                    >
                                        Add Product
                                    </button>
                                </div>
                            </div>

                            <div class="row orderLog">
                                <div class="d-none d-sm-block">
                                    <div class="row orderBar text-center py-2 mb-2">
                                        <div class="col-sm-3">
                                            <b>Product Name</b>
                                        </div>
                                        <div class="col-sm-3">
                                            <b>Category</b>
                                        </div>
                                        <div class="col-sm-3">
                                            <b>Unit Price</b>
                                        </div>
                                        <div class="col-sm-3">
                                            <b>Action</b>
                                        </div>
                                    </div>
                                </div>
                                <!-- Add Component -->
                                <template
                                    v-for="(obj, idx) in productList"
                                    :key="idx"
                                >
                                    <MerchantProductRow
                                        :product-obj="obj"
                                        :product-name="obj.name"
                                        :category="obj.category"
                                        :unit-price="obj.price"
                                        @delete-item="deleteProduct"
                                        @edit-item="setEditProd"
                                    />
                                </template>
                            </div>
                        </section>
                    </div>
                    <div class="col" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MerchantProductRow from "@/components/MerchantProductRow.vue";
import axios from "axios";
import { useRoute } from "vue-router";

export default {
  name: "App",
  components: { MerchantProductRow },
  data() {
    return {
      merchant: "",
      productList: null,
      merchantRating: 0,
      addNew: false,
      editProd: false,
      submitting: false,
      error: false,
      newProdId: "",
      newProdName: "",
      newProdPrice: 0,
      newProdCategory: "",
      newProdRating: 0,
      newProdImgURL: "",
      newProdNumSold: 0,
      newProdDesc: "",
      newProdSpec: "",
    };
  },
  watch: {},
  mounted() {
    window.addEventListener("modes-localstorage-changed", (event) => {
      this.mode = event.detail.storage;
    });
  },

  async beforeMount() {
    // A function that will be called before the component is mounted.
    const route = useRoute();

    // Pull all products from the specific merchantID
    // Retrieve merchant from API Endpoint
    const selectedMerchant = await axios.get(
      `https://support-local.herokuapp.com/api/merchants/${route.params.merchantId}`
    );
    this.merchant = selectedMerchant.data;
    console.log(this.merchant);

    let merchantProducts = selectedMerchant.data.products;
    let productArr = [];
    let avgRating = 0;

    for (const prodId of merchantProducts) {
      // Retrieve product based on productId
      let selectedProduct = await axios.get(
        `https://support-local.herokuapp.com/api/products/${prodId}`
      );
      avgRating += selectedProduct.data.rating;

      // Add to productArr
      productArr.push(selectedProduct.data);
    }
    // Process the average rating from all the products
    avgRating = Math.floor(avgRating / merchantProducts.length);
    this.merchantRating = avgRating;

    // Assign productArr to state
    this.productList = productArr;
    console.log(this.productList);
  },
  methods: {
    addProduct() {
      // Define
      this.submitting = true;
      this.error = false;
      let productSpecArr = this.newProdSpec.split(",");
      // POST
      axios
        .post("https://support-local.herokuapp.com/api/products", {
          name: this.newProdName,
          price: this.newProdPrice,
          category: this.newProdCategory,
          rating: this.newProdRating,
          numberSold: this.newProdNumSold,
          imgUrl: this.newProdImgURL,
          productDesc: this.newProdDesc,
          merchant: this.merchant.id,
          productSpec: productSpecArr,
        })
        .then((res) => {
          console.log(res.data);
          this.productList.push(res.data);
          this.newProdName = "";
          this.newProdPrice = 0;
          this.newProdCategory = "";
          this.newProdRating = 0;
          this.newProdImgURL = "";
          this.newProdNumSold = 0;
          this.newProdDesc = "";
          this.newProdSpec = "";
          this.submitting = false;

          // GET Merchant Product Arr
          var merchantProdArr = this.merchant.products;
          // Add to Merchant Product Arr
          merchantProdArr.push(res.data.id);
          // Update current instance without getting again
          this.merchant.products = merchantProdArr;
          // PATCH Merchant Product Arr (override)
          axios.patch(
            `https://support-local.herokuapp.com/api/merchants/${this.merchant.id}`,
            {
              products: merchantProdArr,
            }
          );
          this.addNew = false;
        })
        .catch((err) => {
          console.error(err);
          this.error = true;
        });
    },
    deleteProduct(prodId) {
      // DELETE
      axios
        .delete(`https://support-local.herokuapp.com/api/products/${prodId}`)
        .then((res) => {
          // GET Merchant Product Arr
          var merchantProdArr = this.merchant.products;
          // Remove from Merchant Product Arr
          var index = merchantProdArr.indexOf(prodId);
          if (index > -1) {
            // only splice array when item is found
            // 2nd parameter means remove one item only
            merchantProdArr.splice(index, 1);
          }
          // Update current instance without getting again
          this.merchant.products = merchantProdArr;
          // PATCH Merchant Product Arr (override)
          axios.patch(
            `https://support-local.herokuapp.com/api/merchants/${this.merchant.id}`,
            {
              products: this.merchant.products,
            }
          );

          // Loop through existing instance and remove product with the selected id
          for (let i = 0; i < this.productList.length; i++) {
            const product = this.productList[i];
            if (product.id == prodId) {
              this.productList.splice(i, 1);
            }
          }
        })
        .catch((err) => {
          console.error(err);
        });
    },
    updateProduct() {
      this.submitting = true;
      this.error = false;
      let productSpecArr = this.newProdSpec.split(",");
      // PATCH
      axios
        .patch(
          `https://support-local.herokuapp.com/api/products/${this.newProdId}`,
          {
            name: this.newProdName,
            price: this.newProdPrice,
            category: this.newProdCategory,
            rating: this.newProdRating,
            numberSold: this.newProdNumSold,
            imgUrl: this.newProdImgURL,
            productDesc: this.newProdDesc,
            merchant: this.merchant.id,
            productSpec: productSpecArr,
          }
        )
        .then((res) => {
          location.reload();
          this.newProdName = "";
          this.newProdPrice = 0;
          this.newProdCategory = "";
          this.newProdRating = 0;
          this.newProdImgURL = "";
          this.newProdNumSold = 0;
          this.newProdDesc = "";
          this.newProdSpec = "";
          this.submitting = false;
          this.editProd = false;
        })
        .catch((err) => {
          console.error(err);
          this.error = true;
        });
    },
    setEditProd(prodId) {
      this.editProd = true;
      // Loop through existing instance and select product obj based on product id
      for (let i = 0; i < this.productList.length; i++) {
        const product = this.productList[i];
        if (product.id == prodId) {
          var selectedProduct = product;
        }
      }
      this.newProdId = prodId;
      this.newProdName = selectedProduct.name;
      this.newProdPrice = selectedProduct.price;
      this.newProdCategory = selectedProduct.category;
      this.newProdRating = selectedProduct.rating;
      this.newProdImgURL = selectedProduct.imgUrl;
      this.newProdNumSold = selectedProduct.numberSold;
      this.newProdDesc = selectedProduct.productDesc;
      this.newProdSpec = selectedProduct.productSpec.join(", ");
    },
    setAddNew() {
      this.addNew = true;
    },
  },
};
</script>

<style>
@import "../assets/style/global.css";
</style>
