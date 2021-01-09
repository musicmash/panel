<template>
    <div class="navbar-item">
        <div class="buttons">
            <a class="button is-primary" v-bind:href="getAuthUrl()">
                <strong>Log in with Spotify</strong>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        getAuthUrl() {
            const url = new URL("https://accounts.spotify.com/authorize");
            url.searchParams.append("response_type", "code");
            url.searchParams.append("show_dialog", "true");
            url.searchParams.append("state", "auth");
            url.searchParams.append(
                "client_id",
                "e8a13cdace274204bd3f7c8526f00361"
            );
            url.searchParams.append(
                "redirect_uri",
                `https://${window.location.hostname}/v1/callbacks/spotify/auth`
            );
            return url.href;
        },
    },
};
</script>
