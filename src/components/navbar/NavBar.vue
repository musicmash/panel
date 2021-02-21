<template>
    <div class="container">
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <nav-home-button />
            </div>

            <div class="navbar-end">
                <nav-login-button v-if="!isAuthorizing && !isAuthorized" />
                <nav-profile-button v-else />
            </div>
        </nav>

        <div class="tabs is-centered">
            <ul v-show="isAuthorized">
                <li
                    :class="{
                        'is-active': $route.fullPath == '/releases',
                    }"
                >
                    <router-link to="/releases">Releases</router-link>
                </li>
                <li
                    :class="{
                        'is-active': $route.fullPath == '/subscriptions',
                    }"
                >
                    <router-link to="/subscriptions">Subscriptions</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import LoginButton from "@/components/navbar/LoginButton";
import HomeButton from "@/components/navbar/HomeButton";
import ProfileButton from "@/components/navbar/ProfileButton";
import { mapState } from "vuex";

export default {
    name: "navbar",
    computed: mapState({
        isAuthorizing: (state) => state.user.isAuthorizing,
        isAuthorized: (state) => state.user.isAuthorized,
    }),
    components: {
        "nav-login-button": LoginButton,
        "nav-profile-button": ProfileButton,
        "nav-home-button": HomeButton,
    },
};
</script>
