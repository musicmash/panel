<template>
    <div class="container">
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <nav-home-button />
            </div>

            <div class="navbar-end">
                <nav-login-button v-show="!isAuthorizing && !isAuthorized" />
                <nav-profile-button v-show="!isAuthorizing && isAuthorized" />
            </div>
        </nav>

        <div class="tabs is-centered">
            <ul v-show="isAuthorized">
                <!-- <li class="is-active"><a>Releases</a></li> -->
                <!-- <li><a>Subscriptions</a></li> -->
                <!-- <li><a>Settings</a></li> -->
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
