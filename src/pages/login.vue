<template>
    <div class="container d-flex flex-column">
        <div
            class="row align-items-center justify-content-center no-gutters min-vh-100"
        >
            <div class="col-12 col-md-5 col-lg-5 py-5">
                <div class="alert alert-danger" v-if="error">
                    {{ error.message }}
                </div>
                <h1 class="font-bold text-center mb-4">Welcome back 👋</h1>

                <form class="mx-1 mb-3" @submit.prevent="pressed">
                    <div class="form-group">
                        <label for="email" class="sr-only">Email Address</label>
                        <input
                            id="email"
                            type="email"
                            class="form-control form-control-lg"
                            placeholder="Enter your email"
                            v-model="email"
                        />
                    </div>

                    <div class="form-group">
                        <label for="password" class="sr-only">Password</label>
                        <input
                            id="password"
                            type="password"
                            class="form-control form-control-lg"
                            placeholder="Enter your password"
                            v-model="password"
                        />
                    </div>

                    <div class="form-group d-flex justify-content-between">
                        <div class="custom-control custom-checkbox">
                            <input
                                type="checkbox"
                                class="custom-control-input"
                                checked=""
                                id="checkbox-remember"
                            />
                            <label
                                class="custom-control-label"
                                for="checkbox-remember"
                                >Remember me</label
                            >
                        </div>
                        <router-link to="/reset">Reset password</router-link>
                    </div>

                    <button
                        class="btn btn-lg btn-block btn-primary form-button"
                        type="submit"
                    >
                        Login
                    </button>
                </form>

                <p class="text-center">
                    Don't have an account?
                    <router-link to="/join">Join</router-link>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";

export default {
    data() {
        return {
            email: "",
            password: "",
            error: "",
        };
    },
    methods: {
        pressed() {
            firebase
                .auth()
                .signInWithEmailAndPassword(this.email, this.password)
                .then(() => {
                    this.$router.replace({ name: "feed" });
                })
                .catch((error) => {
                    this.error = error;
                });
        },
    },
};
</script>

<style scoped>
.form-group {
    margin-bottom: 1.5rem;
}
.form-control-lg {
    height: calc(1.6em + 1.875rem + 2px);
    padding: 0.9375rem 1.25rem;
    font-size: 0.9375rem;
    line-height: 1.6;
    border-radius: 0.375rem;
}
.form-control {
    display: block;
    width: 100%;
    height: calc(1.6em + 1.375rem + 2px);
    padding: 0.6875rem 1.0625rem;
    font-size: 0.9375rem;
    font-weight: 400;
    line-height: 1.6;
    color: #7f808c;
    background-color: #edeef6;
    background-clip: padding-box;
    border: 1px solid #edeef6;
    border-radius: 0.375rem;
    -webkit-transition: border-color 0.15s ease-in-out,
        -webkit-box-shadow 0.15s ease-in-out;
    transition: border-color 0.15s ease-in-out,
        -webkit-box-shadow 0.15s ease-in-out;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out,
        -webkit-box-shadow 0.15s ease-in-out;
}
.form-button {
    font-family: "Inter", sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
}
</style>
