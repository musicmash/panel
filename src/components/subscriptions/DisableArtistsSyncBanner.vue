<template>
    <article class="message is-dark">
        <div class="message-body">
            This page displays artists that you follow and whose releases will
            be shown on the releases page.
            <br />
            Every night at <em>03:00 UTC</em> we scan the artists you follow on
            <strong>Spotify</strong> and move them to subscriptions on
            <strong>musicmash</strong>
            <div class="buttons mt-3 mb-0">
                <button
                    class="button is-danger"
                    :class="{
                        'is-loading': isDailySyncDisabling,
                        'is-light': !isDailySyncDisabling,
                    }"
                    @click="onDisableClick()"
                >
                    I want to disable the every night sync right now&nbsp;😠
                </button>
            </div>
            <div class="ml-1" v-if="lastSyncDate != ''">
                <em>last sync was on {{ lastSyncDate }} UTC</em>
            </div>
        </div>
    </article>
</template>

<script>
import { mapState } from "vuex";

export default {
    computed: mapState({
        lastSyncDate: (state) => state.sync.lastSyncDate,
        isDailySyncDisabling: (state) => state.sync.isDailySyncDisabling,
    }),
    methods: {
        onDisableClick() {
            this.$store.dispatch("sync/disableDailySync");
        },
    },
};
</script>
