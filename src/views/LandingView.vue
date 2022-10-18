<template>
    <div class="Landing">
        <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT"
            crossorigin="anonymous"
        >
        <div class="container-fluid">
            <div class="d-none d-sm-block">
                <div class="row my-5">
                    <!--swap position at small-->
                    <div class="col-2 px-5">
                        Support Local
                    </div>
                    <div class="col-7">
                        <input
                            id="searchText"
                            type="text"
                        >
                    </div>
                    <div class="col-1">
                        <button id="searchBtn">
                            Search
                        </button>
                    </div>
                    <div class="col-1">
                        Profile
                    </div>
                    <div class="col-1">
                        Shopping cart
                    </div>
                </div>
            </div>

            <div class="d-block d-sm-none">
                <div class="row my-5 h-100">
                    <!--appear only at small-->
                    <div class="col-5" />
                    <div class="col-2 my-auto">
                        Support Local
                    </div>
                    <div class="col-2" />
                    <div class="col-2">
                        <div class="pos-f-t">
                            <div
                                id="navbarToggleExternalContent"
                                class="collapse"
                            >
                                <div class="bg-dark">
                                    <h5 class="text-dark">
                                        Collapsed content
                                    </h5>
                                    <span class="text-muted">Toggleable via the navbar brand.</span>
                                </div>
                            </div>
                            <nav class="navbar navbar-dark bg-dark">
                                <button
                                    class="navbar-toggler"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#navbarToggleExternalContent"
                                    aria-controls="navbarToggleExternalContent"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <span class="navbar-toggler-icon" />
                                </button>
                            </nav>
                        </div>
                        <div class="col-1" />
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-sm-3 col-lg-2 px-5 d-none d-sm-block">
                    <div class="my-2">
                        What would you like?
                    </div>
                    <div class="row">
                        <div class="my-2 col-6 col-lg-12">
                            <button
                                id="food"
                                class="w-100"
                            >
                                Food & Beverages
                            </button>
                        </div>
                        <div class="my-2 col-6 col-lg-12">
                            <button
                                id="menApparel"
                                class="w-100"
                            >
                                Men's Apparel
                            </button>
                        </div>
                        <div class="my-2 col-6 col-lg-12">
                            <button
                                id="womenApparel"
                                class="w-100"
                            >
                                Women's Apparel
                            </button>
                        </div>
                        <div class="my-2 col-6 col-lg-12">
                            <button
                                id="electronics"
                                class="w-100"
                            >
                                Electronics
                            </button>
                        </div>
                        <div class="my-2 col-6 col-lg-12">
                            <button
                                id="hb"
                                class="w-100"
                            >
                                Hobbies & Books
                            </button>
                        </div>
                        <div class="my-2 col-6 col-lg-12">
                            <button
                                class="w-100"
                                if="bp"
                            >
                                Beauty & Personal
                            </button>
                        </div>
                    </div>
                </div>
                <div class="col-sm-8 col-lg-7 my-2">
                    <!-- <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active"  data-bs-interval="2000">
                                <img class="d-block w-100" src="..." alt="First slide">
                                <div class="carousel-caption d-none d-md-block"> //caption if needed
                                    <h5>...</h5>
                                    <p>...</p>
                                </div>
                            </div>
                            <div class="carousel-item" data-bs-interval="2000">
                                <img class="d-block w-100" src="..." alt="Second slide">
                            </div>
                            <div class="carousel-item" data-bs-interval="2000">
                                <img class="d-block w-100" src="..." alt="Third slide">
                            </div>
                        </div>
                    </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#countries" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#countries" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>  -->
                    <div class="row my-2">
                        <div class="col-2">
                            <button id="trending">
                                Trending now
                            </button>
                        </div>
                        <div class="col-8" />
                        <div
                            class="col-2"
                            style="padding-left: 5%"
                        >
                            <button id="seeMore">
                                See more>
                            </button>
                        </div>
                    </div>
                    <div class="row my-2">
                        <div
                            class="col-sm-6 d-flex align-content-center justify-content-center my-2"
                        >
                            shop1
                        </div>
                        <div
                            class="col-sm-6 d-flex align-content-center justify-content-center my-2"
                        >
                            shop2
                        </div>
                        <div
                            class="col-sm-6 d-flex align-content-center justify-content-center my-2"
                        >
                            shop3
                        </div>
                        <div
                            class="col-sm-6 d-flex align-content-center justify-content-center my-2"
                        >
                            shop4
                        </div>
                        <div
                            class="col-sm-6 d-flex align-content-center justify-content-center my-2"
                        >
                            shop5
                        </div>
                        <div
                            class="col-sm-6 d-flex align-content-center justify-content-center my-2"
                        >
                            shop6
                        </div>
                    </div>
                    <div class="row my-2">
                        <div class="col-5" />
                        <button
                            id="showMore"
                            class="col-2"
                        >
                            Show More
                        </button>
                        <div class="col-5" />
                    </div>
                </div>
                <div class="col-3 d-none d-lg-block">
                    <div
                        class="col-lg-12 d-flex align-content-center justify-content-center my-2"
                    >
                        item 1
                    </div>
                    <div
                        class="col-lg-12 d-flex align-content-center justify-content-center my-2"
                    >
                        item 2
                    </div>
                    <div
                        class="col-lg-12 d-flex align-content-center justify-content-center my-2"
                    >
                        item 3
                    </div>
                    <div
                        class="col-lg-12 d-flex align-content-center justify-content-center my-2"
                    >
                        item 4
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script></script>

<style>
@import "../assets/style/style.css";
</style>
