<template>
    <div class="container">
        <b-navbar>
            <template slot="brand">
                <nav-home-button />
            </template>

            <template slot="end">
                <b-navbar-item tag="div">
                    <div class="buttons">
                        <a class="button is-primary">
                            <strong>Sign up</strong>
                        </a>
                        <a class="button is-light"> Log in </a>
                    </div>
                </b-navbar-item>
            </template>
        </b-navbar>
    </div>
</template>

<script>
import HomeButton from "@/components/navbar/HomeButton";

export default {
    name: "navbar",
    components: {
        "nav-home-button": HomeButton,
    },
};
</script>
