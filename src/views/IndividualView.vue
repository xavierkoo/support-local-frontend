<template>
    <div class="Individual" />
    <div class="container-fluid">
        <div class="row mx-3">
            <div class="col-6 my-3">
                <img
                    class="w-100 h-100 border border-dark"
                    src="../assets/logo.png"
                    alt=""
                >
            </div>
            <div class="col-6 my-3">
                <div class="card w-100 h-100">
                    <div class="card-body">
                        <h5 class="card-title d-flex align-items-start mx-3 my-4">
                            Name of Item
                        </h5>
                        <p class="card-text d-flex align-items-start mx-3 my-4">
                            Rating
                        </p>
                        <h2 class="card-text d-flex align-items-start mx-3 my-4">
                            S$180
                        </h2>
                        <table>
                            <tr>
                                <td class="d-flex align-items-start mx-3 my-3">
                                    Quantity
                                </td>
                                <td>
                                    <input
                                        id="qty"
                                        class="w-100"
                                        type="text"
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td class="d-flex align-items-start mx-3 my-3">
                                    Size
                                </td>
                                <td>
                                    <input
                                        id="size"
                                        class="w-100"
                                        type="text"
                                    >
                                </td>
                            </tr>
                        </table>
                        <div class="my-3">
                            <button
                                style="
                  background: white;
                  width: 40%;
                  margin-right: 15%;
                  margin-top: 3%;
                "
                            >
                                Cancel
                            </button>
                            <button style="background: red; width: 40%">
                                Purchase
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mx-auto my-3">
                <div class="card w-100 h-100">
                    <div class="card-body">
                        <h5 class="card-title d-flex align-items-start mx-3 my-2">
                            Product Description
                        </h5>
                        <p class="card-text d-flex align-items-start mx-3 my-3">
                            With the most impressive dual-camera
                        </p>
                        <ul
                            class="card-text"
                            style="text-align: left"
                        >
                            <li>6.1-inch super retina</li>
                            <li>Advanced camera system</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="row mx-auto my-3">
                <div class="card w-100 h-100 bg-danger">
                    <div class="card-body">
                        <div class="container">
                            <div class="row">
                                <div class="col-3 d-flex justify-content-center">
                                    <img
                                        class="w-50 rounded-circle"
                                        src="../assets/appLogo.svg"
                                        alt=""
                                    >
                                </div>
                                <div class="col-6">
                                    <h1>nextdealshop</h1>
                                    <p>
                                        The store's collection is a celebration of everything
                                        maximalist – there are face masks with elf ears, iridescent
                                        platform shoes.
                                    </p>
                                </div>
                                <div
                                    class="col-3 d-flex justify-content-center align-items-center"
                                >
                                    <button>Got any question?</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
