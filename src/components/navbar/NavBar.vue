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

        <b-tabs class="block" position="is-centered">
            <!-- <b-tab-item label="Feed"></b-tab-item> -->
            <!-- <b-tab-item label="Subscriptions"></b-tab-item> -->
            <!-- <b-tab-item label="Settings"></b-tab-item> -->
        </b-tabs>
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
