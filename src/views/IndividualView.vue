<template>
    <div class="Individual" />
    <div class="container-fluid">
        <div class="row mx-3">
            <div class="row mx-auto">
                <!--Product Image-->
                <img
                    class="col-lg-6 individualViewImg my-3"
                    src="../assets/logo.png"
                >
                <div class="col-lg-6 my-3 individualViewProductCard">
                    <!--Product Card-->
                    <div class="container">
                        <div class="row">
                            <div class="col-1" />
                            <h4 class="col text-start mt-2 mb-4">
                                Name of Item
                            </h4>
                        </div>
                        <div class="row">
                            <div class="col-1" />
                            <h6 class="col text-start mb-4">
                                Rating
                            </h6>
                        </div>
                        <div class="row">
                            <div class="col-1" />
                            <h2 class="col text-start mb-4">
                                S$180
                            </h2>
                        </div>
                        <div class="row">
                            <div class="col-1" />
                            <h6 class="col-2">
                                Quantity
                            </h6>
                            <div class="col-1" />
                            <input
                                id="qty"
                                class="col-4"
                                type="text"
                            >
                            <div class="col-3" />
                        </div>
                        <div class="row mb-4">
                            <div class="col-1" />
                            <h6 class="col-2">
                                Size
                            </h6>
                            <div class="col-1" />
                            <input
                                id="size"
                                class="col-4"
                                type="text"
                            >
                            <div class="col-3" />
                        </div>
                        <div class="row row-cols-3 row-cols-lg-6">
                            <div class="col" />
                            <button class="col cancelBtnDesign">
                                Cancel
                            </button>
                            <div class="col" />
                            <div class="col" />
                            <button class="col mainBtnDesign">
                                Purchase
                            </button>
                            <div class="col" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mx-auto my-3 d-none d-sm-block">
                <!--Product Desc-->
                <div class="row individualViewProdDesc mx-auto">
                    <h5 class="d-flex align-items-start mx-2 my-2">
                        Product Description
                    </h5>
                    <p class="d-flex align-items-start mx-2 my-3">
                        With the most impressive dual-camera
                    </p>
                    <ul class="mx-4">
                        <li>6.1-inch super retina</li>
                        <li>Advanced camera system</li>
                    </ul>
                </div>
            </div>
            <div class="row mx-auto my-3">
                <!--Question Card-->
                <div class="container">
                    <div class="row individualViewQuesion">
                        <div class="col-sm-3 d-flex justify-content-center">
                            <img
                                class="w-50 rounded-circle"
                                src="../assets/appLogo.svg"
                                alt=""
                            >
                        </div>
                        <div class="col-sm-6 my-3">
                            <h3 class="text-center text-sm-start">
                                nextdealshop
                            </h3>
                            <p class="text-center text-sm-start">
                                The store's collection is a celebration of everything maximalist
                                – there are face masks with elf ears, iridescent platform shoes.
                            </p>
                        </div>
                        <div
                            class="col-sm-3 d-flex justify-content-center align-items-center"
                        >
                            <button class="anyQuestionBtnDesign">
                                Got any question?
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <!--Product Rating Card-->
            <div class="row mx-auto my-3">
                <div class="container individualViewProductRating">
                    <h5 class="d-flex justify-content-start mx-4 my-3">
                        Product Rating
                    </h5>
                    <div class="row mx-3 reviewsRating">
                        <div class="col-3 d-flex justify-content-center">
                            <img
                                class="w-50 rounded-circle"
                                src="../assets/appLogo.svg"
                                alt=""
                            >
                        </div>
                        <div class="col-6">
                            <h3>WhyMyCTnoPass</h3>
                            <h4 class="d-inline">
                                5.0
                            </h4>
                            <span class="d-inline">5Star(image)</span>
                            <p>
                                The store's collection is a celebration of everything maximalist
                                – there are face masks with elf ears, iridescent platform shoes.
                            </p>
                        </div>
                    </div>
                    <div class="row mx-3 reviewsRating">
                        <div class="col-3 d-flex justify-content-center">
                            <img
                                class="w-50 rounded-circle"
                                src="../assets/appLogo.svg"
                                alt=""
                            >
                        </div>
                        <div class="col-6">
                            <h3>WhyMyCTnoPass</h3>
                            <h4 class="d-inline">
                                5.0
                            </h4>
                            <span class="d-inline">5Star(image)</span>
                            <p>
                                The store's collection is a celebration of everything maximalist
                                – there are face masks with elf ears, iridescent platform shoes.
                            </p>
                        </div>
                    </div>
                    <div class="row mx-3 reviewsRating">
                        <div class="col-3 d-flex justify-content-center">
                            <img
                                class="w-50 rounded-circle"
                                src="../assets/appLogo.svg"
                                alt=""
                            >
                        </div>
                        <div class="col-6">
                            <h3>WhyMyCTnoPass</h3>
                            <h4 class="d-inline">
                                5.0
                            </h4>
                            <span class="d-inline">5Star(image)</span>
                            <p>
                                The store's collection is a celebration of everything maximalist
                                – there are face masks with elf ears, iridescent platform shoes.
                            </p>
                        </div>
                    </div>
                    <div class="row mx-3 reviewsRating mb-4">
                        <div class="col-3 d-flex justify-content-center">
                            <img
                                class="w-50 rounded-circle"
                                src="../assets/appLogo.svg"
                                alt=""
                            >
                        </div>
                        <div class="col-6">
                            <h3>WhyMyCTnoPass</h3>
                            <h4 class="d-inline">
                                5.0
                            </h4>
                            <span class="d-inline">5Star(image)</span>
                            <p>
                                The store's collection is a celebration of everything maximalist
                                – there are face masks with elf ears, iridescent platform shoes.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <!--Related Products-->
            <div class="d-flex justify-content-start my-3 ms-3">
                <h5>Related Products</h5>
            </div>
            <div class="row row-cols-sm-2 row-cols-lg-3 mx-auto">
                <div class="col-12">
                    <div class="container">
                        <div class="row bg-body mx-2">
                            <div>
                                <div class="card-body">
                                    <div
                                        class="row mb-1"
                                        style="border: none"
                                    >
                                        <div class="col-xl-3">
                                            <img src="../assets/appLogo.svg">
                                        </div>
                                        <div class="col-xl-9">
                                            <h6 class="mb-0">
                                                Hello World
                                            </h6>
                                            <p class="">
                                                1 hour ago
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        class="row"
                                        style="border: none"
                                    >
                                        <div class="col-xl-8">
                                            <div class="">
                                                Foldable bicycle wa blue whell
                                            </div>
                                            <div class="fst-italic">
                                                Special offer: $21.99
                                            </div>
                                        </div>
                                        <div class="col-xl-4">
                                            <p class="fw-bold text-end">
                                                S$180
                                            </p>
                                            <p class="text-end">
                                                23 Sold
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12">
                    <div class="container">
                        <div class="row bg-body mx-2">
                            <div>
                                <div class="card-body">
                                    <div
                                        class="row mb-1"
                                        style="border: none"
                                    >
                                        <div class="col-xl-3">
                                            <img src="../assets/appLogo.svg">
                                        </div>
                                        <div class="col-xl-9">
                                            <h6 class="mb-0">
                                                Hello World
                                            </h6>
                                            <p class="">
                                                1 hour ago
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        class="row"
                                        style="border: none"
                                    >
                                        <div class="col-xl-8">
                                            <div class="">
                                                Foldable bicycle wa blue whell
                                            </div>
                                            <div class="fst-italic">
                                                Special offer: $21.99
                                            </div>
                                        </div>
                                        <div class="col-xl-4">
                                            <p class="fw-bold text-end">
                                                S$180
                                            </p>
                                            <p class="text-end">
                                                23 Sold
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12">
                    <div class="container">
                        <div class="row bg-body mx-2">
                            <div>
                                <div class="card-body">
                                    <div
                                        class="row mb-1"
                                        style="border: none"
                                    >
                                        <div class="col-xl-3">
                                            <img src="../assets/appLogo.svg">
                                        </div>
                                        <div class="col-xl-9">
                                            <h6 class="mb-0">
                                                Hello World
                                            </h6>
                                            <p class="">
                                                1 hour ago
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        class="row"
                                        style="border: none"
                                    >
                                        <div class="col-xl-8">
                                            <div class="">
                                                Foldable bicycle wa blue whell
                                            </div>
                                            <div class="fst-italic">
                                                Special offer: $21.99
                                            </div>
                                        </div>
                                        <div class="col-xl-4">
                                            <p class="fw-bold text-end">
                                                S$180
                                            </p>
                                            <p class="text-end">
                                                23 Sold
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12">
                    <div class="container">
                        <div class="row bg-body mx-2">
                            <div>
                                <div class="card-body">
                                    <div
                                        class="row mb-1"
                                        style="border: none"
                                    >
                                        <div class="col-xl-3">
                                            <img src="../assets/appLogo.svg">
                                        </div>
                                        <div class="col-xl-9">
                                            <h6 class="mb-0">
                                                Hello World
                                            </h6>
                                            <p class="">
                                                1 hour ago
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        class="row"
                                        style="border: none"
                                    >
                                        <div class="col-xl-8">
                                            <div class="">
                                                Foldable bicycle wa blue whell
                                            </div>
                                            <div class="fst-italic">
                                                Special offer: $21.99
                                            </div>
                                        </div>
                                        <div class="col-xl-4">
                                            <p class="fw-bold text-end">
                                                S$180
                                            </p>
                                            <p class="text-end">
                                                23 Sold
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12">
                    <div class="container">
                        <div class="row bg-body mx-2">
                            <div>
                                <div class="card-body">
                                    <div
                                        class="row mb-1"
                                        style="border: none"
                                    >
                                        <div class="col-xl-3">
                                            <img src="../assets/appLogo.svg">
                                        </div>
                                        <div class="col-xl-9">
                                            <h6 class="mb-0">
                                                Hello World
                                            </h6>
                                            <p class="">
                                                1 hour ago
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        class="row"
                                        style="border: none"
                                    >
                                        <div class="col-xl-8">
                                            <div class="">
                                                Foldable bicycle wa blue whell
                                            </div>
                                            <div class="fst-italic">
                                                Special offer: $21.99
                                            </div>
                                        </div>
                                        <div class="col-xl-4">
                                            <p class="fw-bold text-end">
                                                S$180
                                            </p>
                                            <p class="text-end">
                                                23 Sold
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12">
                    <div class="container">
                        <div class="row bg-body mx-2">
                            <div>
                                <div class="card-body">
                                    <div
                                        class="row mb-1"
                                        style="border: none"
                                    >
                                        <div class="col-xl-3">
                                            <img src="../assets/appLogo.svg">
                                        </div>
                                        <div class="col-xl-9">
                                            <h6 class="mb-0">
                                                Hello World
                                            </h6>
                                            <p class="">
                                                1 hour ago
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        class="row"
                                        style="border: none"
                                    >
                                        <div class="col-xl-8">
                                            <div class="">
                                                Foldable bicycle wa blue whell
                                            </div>
                                            <div class="fst-italic">
                                                Special offer: $21.99
                                            </div>
                                        </div>
                                        <div class="col-xl-4">
                                            <p class="fw-bold text-end">
                                                S$180
                                            </p>
                                            <p class="text-end">
                                                23 Sold
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import ProductCard from "@/components/ProductCard.vue";
// export default {
//   components: { ProductCard },
// };
</script>

<style>
@import "../assets/style/global.css";
</style>
