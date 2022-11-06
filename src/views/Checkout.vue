<template>
    <div class="App checkOut">
        <form>
            <div class="container checkOutBack my-3">
                <h3 class="my-3">
                    Contact Details
                </h3>
                <div class="row">
                    <div class="col-md-1" />
                    <div class="col-md-2">
                        <label for="salutation">Title</label>
                        <input
                            id="salutation"
                            type="text"
                            class="form-control"
                        >
                    </div>

                    <div class="row">
                        <div class="col-1" />
                        <div class="col-md-5 mb-4">
                            <label for="firstName">First Name</label>
                            <input
                                id="firstName"
                                type="text"
                                class="form-control"
                            >
                            <label for="inputEmail">Email</label>
                            <input
                                id="inputEmail"
                                type="email"
                                class="form-control"
                            >
                            <label for="address">Address</label>
                            <input
                                id="address"
                                type="text"
                                class="form-control"
                            >
                        </div>
                        <div class="col-md-5 mb-4">
                            <label for="lastName">Last Name</label>
                            <input
                                id="lastName"
                                type="text"
                                class="form-control"
                            >
                            <label for="contactNumber">Contact Number</label>
                            <input
                                id="contactNumber"
                                type="number"
                                class="form-control"
                                style="width: 100%"
                            >
                            <input
                                id="billDetails"
                                type="checkbox"
                                class="mt-4"
                            >
                            <label for="billDetails">
                                &nbsp; Biling detail is the same as contact details
                            </label>
                            <div class="col-1" />
                        </div>
                    </div>
                </div>
            </div>

            <div class="container checkOutBack">
                <h3 class="my-3">
                    Billing Details
                </h3>
                <div class="row">
                    <div class="col-1" />
                    <div class="col-md-5 mb-4">
                        <label for="firstName">First Name</label>
                        <input
                            id="firstName"
                            type="text"
                            class="form-control"
                        >
                        <label for="inputEmail">Email</label>
                        <input
                            id="inputEmail"
                            type="email"
                            class="form-control"
                        >
                        <label for="billAddress">Billing Address</label>
                        <input
                            id="billAddress"
                            type="text"
                            class="form-control"
                        >
                    </div>
                    <div class="col-md-5 mb-4">
                        <label for="lastName">Last Name</label>
                        <input
                            id="lastName"
                            type="text"
                            class="form-control"
                        >
                        <label for="contactNumber">Contact Number</label>
                        <input
                            id="contactNumber"
                            type="number"
                            class="form-control"
                            style="width: 100%"
                        >
                        <label for="postalCode">Postal Code</label>
                        <input
                            id="postalCode"
                            type="text"
                            class="form-control"
                        >
                        <div class="col-1" />
                    </div>
                    <div class="row mx-auto">
                        <div class="col-3 col-md-8" />
                        <button
                            type="button"
                            class="mainBtnDesign my-3 col-6 col-md-3"
                            @click="$router.push(`/viewPayment`)"
                        >
                            Checkout
                        </button>
                        <div class="col-3 col-md-1" />
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    //TODO: Insert Validation Here
  },
};
</script>
