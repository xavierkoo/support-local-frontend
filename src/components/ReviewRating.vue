<template>
    <div class="container-fluid review">
        <div class="row pt-3">
            <div class="col-md-8">
                <div class="row">
                    <div class="col-1" />
                    <div class="col ps-0 prompt">
                        Let us know what you think
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="col-1" />
                    <textarea
                        v-model="review"
                        class="col-10 col-sm-10"
                        type="text"
                        rows="4"
                        style="reize: none"
                    />
                    <div class="col-1" />
                </div>
            </div>
            <div class="col-md-4">
                <div class="row my-md-4">
                    <div class="col-1 d-block d-md-none" />
                    <label class="prompt col-11 col-md-5 col-lg-4 text-start ps-0 my-auto">Rate Me</label>
                    <div class="col-1 d-block d-md-none" />
                    <star-rating
                        v-model:rating="rating"
                        :increment="1"
                        :max-rating="5"
                        inactive-color="#000"
                        active-color="#ebd142"
                        :star-size="15"
                        class="col-3 col-md-3 col-lg-6 ps-0"
                    />
                    <div class="col-2 col-sm-4 d-block d-md-none" />
                    <button
                        class="cancelBtnDesign d-block d-md-none col-5 col-sm-3 col-md-3 mb-2"
                        @click="send"
                    >
                        Send review
                    </button>
                </div>
                <div class="row d-none d-md-block">
                    <div class="col-lg-1" />
                    <div class="col-1 d-block d-md-none" />
                    <button
                        class="cancelBtnDesign col-md-7 mb-2"
                        @click="send"
                    >
                        Send review
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import StarRating from "vue-star-rating";

export default {
  components: {
    StarRating,
  },
  props: {
    userId: {
      type: String,
      default: "", //need to get dynamically based on login
    },
    productId: {
      type: String,
      default: "", //need to get dynamically
    },
  },
  emits: ["reviewDone"],
  data() {
    return {
      rating: 1,
      review: "",
      userSelectedreviewArr: "",
      productSelectedreviewArr: "",
      urlUser: "",
      urlProduct: "",
    };
  },
  async beforeMount() {
    //get review from user database using user ID for patch
    this.urlUser =
      "https://support-local-backend.onrender.com/api/users/" + this.userId;
    const USelectedReview = await axios.get(this.urlUser);
    this.userSelectedreviewArr = USelectedReview.data.reviews;
    //get review from products database using product ID for patch
    this.urlProduct =
      "https://support-local-backend.onrender.com/api/products/" + this.productId;
    const PSelectedReview = await axios.get(this.urlProduct);
    this.productSelectedreviewArr = PSelectedReview.data.reviews;
  },
  methods: {
    send() {
      //post new review to review database
      if (this.review.trim().length < 20) {
        alert("Invalid review. Review must be atleast 20 characters long.");
      } else {
        axios
          .post("https://support-local-backend.onrender.com/api/reviews", {
            user: this.userId,
            product: this.productId,
            rating: this.rating,
            orderDetails: this.review,
          })
          .then((res) => {
            this.rating = 1;
            this.review = "";
            this.userSelectedreviewArr.push(res.data.id); //push new review id into user review array to prepare for patch (replace)
            this.productSelectedreviewArr.push(res.data.id); //push new review id into product review array to prepare for patch (replace)
            axios.patch(
              `https://support-local-backend.onrender.com/api/users/${this.userId}`,
              {
                reviews: this.userSelectedreviewArr,
              }
            );
            axios.patch(
              `https://support-local-backend.onrender.com/api/products/${this.productId}`,
              {
                reviews: this.productSelectedreviewArr,
              }
            );
            alert("Review has been added! Thank you :)");
            this.$emit("reviewDone");
          })
          .catch((err) => {
            console.error(err);
            this.error = true;
          });
      }
    },
  },
};
</script>

<style></style>
