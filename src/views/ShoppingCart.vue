<template>
    <div class="container">
        <div class="row bg-danger row1">
            <div class="col-md-1 cb1">
                <input
                    type="checkbox"
                    aria-label="Checkbox for following text input"
                >
            </div>
            <div class="col-md-3">
                <b>Product</b>
            </div>
            <div class="col-md-2">
                <b>Unit Price</b>
            </div>
            <div class="col-md-2">
                <b>Quantity</b>
            </div>
            <div class="col-md-2">
                <b>Total Price</b>
            </div>
            <div class="col-md-2">
                <b>Action</b>
            </div>
        </div>
        <div class="row py-4">
            <div class="col-md-1 cb1">
                <input
                    type="checkbox"
                    aria-label="Checkbox for following text input"
                >
            </div>
            <div class="col-md-11">
                <b>nextdealshop</b>
            </div>
        </div>
        <div class="row bg-light py-5">
            <div class="col-md-1 cb1">
                <input
                    type="checkbox"
                    aria-label="Checkbox for following text input"
                >
            </div>
            <div class="col-md-3">
                <img src="#">
                <b>Foldable Bicycle</b>
            </div>
            <div class="col-md-2">
                $4
            </div>
            <div class="col-md-2">
                <input
                    id="qty"
                    type="number"
                    min="0"
                    max="10"
                    value="1"
                >
            </div>
            <div class="col-md-2">
                $180
            </div>
            <div class="col-md-2">
                Delete
            </div>
        </div>
        <div class="row totalrow">
            <div class="col-md-6" />
            <div class="col-md-2 red">
                <b>Total Price:</b>
            </div>
            <div class="col-md-2 red">
                <b>$180</b>
            </div>
            <div class="col-md-2">
                <button
                    type="button"
                    class="btn btn-danger"
                >
                    <b>Check Out</b>
                </button>
            </div>
        </div>
    </div>
</template>

<style>
.container {
  text-align: left;
}
.row1 {
  color: white;
}
.row {
  padding: 10px 0;
}
.cb1 {
  text-align: right;
}
.totalrow {
  padding: 50px 0 0 10px;
}
.red {
  color: rgb(160, 39, 39);
}
</style>
