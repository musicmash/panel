<template>
    <div class="container d-flex flex-column">
        <div
            class="row align-items-center justify-content-center no-gutters min-vh-100"
        >
            <div class="col-12 col-md-5 col-lg-5 py-5">
                <h1 class="font-bold text-center">Forgot your password? 🤔</h1>

                <p class="text-center mb-6">
                    Enter your email address associated with your account and
                    we’ll send you a link to reset your password.
                </p>

                <form class="mb-3">
                    <div class="form-group">
                        <label for="email" class="sr-only">Email Address</label>
                        <input
                            type="email"
                            class="form-control form-control-lg"
                            id="email"
                            placeholder="Enter your email"
                        />
                    </div>

                    <button
                        class="btn btn-lg btn-block btn-primary form-button"
                        type="submit"
                    >
                        Send password reset instructions
                    </button>
                </form>

                <p class="text-center">
                    Already have an account?
                    <router-link to="/login">Login</router-link>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
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
