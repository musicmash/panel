<template>
    <div class="container">
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <nav-home-button />
            </div>

            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="buttons">
                        <a class="button is-primary" v-show="!isAuthorized">
                            <strong>Log in with Spotify</strong>
                        </a>
                    </div>
                </div>
            </div>
        </nav>

        <div class="tabs is-centered">
            <ul  v-show="isAuthorized">
                <!-- <li class="is-active"><a>Releases</a></li> -->
                <!-- <li><a>Subscriptions</a></li> -->
                <!-- <li><a>Settings</a></li> -->
            </ul>
        </div>
    </div>
</template>

<script>
import HomeButton from "@/components/navbar/HomeButton";
import { mapState } from "vuex";

export default {
    name: "navbar",
    computed: mapState({
        isAuthorized: (state) => state.user.isAuthorized,
    }),
    components: {
        "nav-home-button": HomeButton,
    },
};
</script>
