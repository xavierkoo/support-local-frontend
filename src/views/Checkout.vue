<!-- eslint-disable vue/multi-word-component-names -->

<template>
    <div class="checkOut">
        <div class="container p-0">
            <h2>Contact Details</h2>
            <form>
                <div class="form-group">
                    <label for="salutation">Title</label>
                    <input
                        id="salutation"
                        type="text"
                        class="form-control"
                    >
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6 inline-block">
                        <label for="firstName">First Name</label>
                        <input
                            id="firstName"
                            type="text"
                            class="form-control"
                        >
                    </div>
                    <div class="form-group col-md-6 inline-block">
                        <label for="lastName">Last Name</label>
                        <input
                            id="lastName"
                            type="text"
                            class="form-control"
                        >
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6 inline-block">
                        <label for="inputEmail">Email</label>
                        <input
                            id="inputEmail"
                            type="email"
                            class="form-control"
                        >
                    </div>
                    <div class="form-group col-md-6 inline-block">
                        <label for="contactNumber">Contact Number</label>
                        <input
                            id="contactNumber"
                            type="number"
                            class="form-control"
                        >
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6 inline-block">
                        <label for="address">Address</label>
                        <input
                            id="address"
                            type="text"
                            class="form-control"
                        >
                    </div>
                    <div class="form-group col-md-6 inline-block">
            &nbsp;
                        <input
                            id="billDetails"
                            type="checkbox"
                        >&nbsp;
                        <label for="billDetails">Biling detail is the same as contact details</label>
                    </div>
                </div>
            </form>
        </div>
        <hr>
        <div class="container p-0">
            <h2>Contact Details</h2>
            <form>
                <div class="form-group">
                    <label for="salutation">Title</label>
                    <input
                        id="salutation"
                        type="text"
                        class="form-control"
                    >
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6 inline-block">
                        <label for="firstName">First Name</label>
                        <input
                            id="firstName"
                            type="text"
                            class="form-control"
                        >
                    </div>
                    <div class="form-group col-md-6 inline-block">
                        <label for="lastName">Last Name</label>
                        <input
                            id="lastName"
                            type="text"
                            class="form-control"
                        >
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6 inline-block">
                        <label for="inputEmail">Email</label>
                        <input
                            id="inputEmail"
                            type="email"
                            class="form-control"
                        >
                    </div>
                    <div class="form-group col-md-6 inline-block">
                        <label for="contactNumber">Contact Number</label>
                        <input
                            id="contactNumber"
                            type="number"
                            class="form-control"
                        >
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6 inline-block">
                        <label for="address">Address</label>
                        <input
                            id="address"
                            type="text"
                            class="form-control"
                        >
                    </div>
                    <div class="form-group col-md-6 inline-block">
                        <label for="inputEmail">Postal Code</label>
                        <input
                            id="inputEmail"
                            type="email"
                            class="form-control"
                        >
                    </div>
                </div>
                <button
                    type="submit"
                    class="btn btn-danger"
                >
                    Sign in
                </button>
            </form>
        </div>
    </div>
</template>

<style>
.first {
  width: 60%;
  box-sizing: border-box;
}
.container {
  margin: 100px;
}
</style>

<style>
.container {
  padding: 0px;
  margin: 100px;
}
.inline-block {
  display: inline-block;
}
</style>
