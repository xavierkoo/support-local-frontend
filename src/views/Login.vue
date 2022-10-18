<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="container">
        <div class="row">
            <div class="col-md-1" />
            <div class="col-md-5">
                <img
                    src="https://i.pinimg.com/originals/7f/98/dc/7f98dcad5579ed7fc4d4b88b79ecfea4.jpg"
                    alt=""
                >
            </div>
            <div class="col-md-5 form1">
                <div class="container">
                    <div class="row">
                        <h3>Login</h3>
                    </div>
                    <div class="row">
                        <form>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Username</label>
                                <input
                                    id="userName"
                                    type="text"
                                    class="form-control"
                                >
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input
                                    id="exampleInputPassword1"
                                    type="password"
                                    class="form-control"
                                    placeholder="Password"
                                >
                            </div>
                            <button
                                type="submit"
                                class="btn btn-danger"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <div class="col-md-1" />
        </div>
    </div>
</template>

<style>
.container {
  display: inline;
  margin: auto;
}
img {
  width: 100%;
}
.form1 {
  padding: 20px;
}
</style>
