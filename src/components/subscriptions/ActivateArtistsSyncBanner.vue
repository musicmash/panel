<template>
    <article class="message is-warning">
        <div class="message-body">
            This page displays artists that you follow and whose releases will
            be shown on the releases page.
            <br />
            We may scan the artists you follow on
            <strong>Spotify</strong> and move them to subscriptions on
            <strong>musicmash</strong>
            <br />
            <br />
            <strong>
                Would you like to sync every night your Spotify's subscriptions?
            </strong>
            <div class="buttons mt-3 mb-0">
                <a
                    class="button is-light is-link"
                    :href="getAuthUrlWithoutBackgroundSync()"
                >
                    No, just sync my artists once
                </a>
                <a
                    class="button is-active is-light is-success"
                    :href="getAuthUrlWithBackgroundSync()"
                >
                    <strong>Yes</strong>, enable it right now!&nbsp;🚀
                </a>
            </div>
        </div>
    </article>
</template>

<script>
export default {
    methods: {
        buildUrl(backgroundSyncEnabled) {
            const redirectURL = backgroundSyncEnabled
                ? `https://${window.location.hostname}/v1/artists/sync/daily/connect`
                : `https://${window.location.hostname}/v1/artists/sync/once/connect`;

            const url = new URL("https://accounts.spotify.com/authorize");
            url.searchParams.append("response_type", "code");
            url.searchParams.append("show_dialog", "false");
            url.searchParams.append(
                "scope",
                "user-top-read%20user-follow-read"
            );
            url.searchParams.append(
                "client_id",
                "e8a13cdace274204bd3f7c8526f00361"
            );
            url.searchParams.append("redirect_uri", redirectURL);
            return url.href;
        },
        getAuthUrlWithBackgroundSync() {
            return this.buildUrl(true);
        },
        getAuthUrlWithoutBackgroundSync() {
            return this.buildUrl(false);
        },
    },
};
</script>
