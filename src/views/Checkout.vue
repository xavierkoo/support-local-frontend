<template>
    <div class="App">
        <form>
            <div class="row justify-content-center">
                <div class="col-10 bg-warning">
                    <h3>Contact Details</h3>
                    <div class="row">
                        <div class="col-1" />
                        <div class="col-1">
                            <label for="salutation">Title</label>
                            <input
                                id="salutation"
                                type="text"
                                class="form-control"
                            >
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-5">
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
                        <div class="col-5">
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
                                Biling detail is the same as contact details</label>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row justify-content-center">
                <div class="col-10 bg-primary">
                    <h3>Billing Details</h3>
                    <div class="row justify-content-center">
                        <div class="col-5">
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
                        <div class="col-5">
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
                            <button
                                type="submit"
                                class="btn btn-danger mt-3"
                            >
                                Checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
/* .container {
  padding: 0px;
} */
.inline-block {
  display: inline-block;
}
</style>
