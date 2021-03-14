<template>
    <div class="container">
        <activate-artist-sync-banner
            class="mt-3"
            v-if="!isDailySyncStateLoading && !isDailySyncEnabled"
        />
        <disable-artist-sync-banner
            class="mt-3"
            v-if="!isDailySyncStateLoading && isDailySyncEnabled"
        />

        <div class="columns is-mobile is-centered is-multiline">
            <subscription
                class="column is-8-mobile is-4-tablet is-3-desktop is-2-widescreen"
                v-for="subscription in subscriptions"
                :subscription="subscription"
                :key="subscription.id"
            />
        </div>

        <div class="container my-3">
            <div class="has-text-centered" v-show="isSubscriptionsLoading">
                <button class="button is-success is-loading">Loading</button>
            </div>
        </div>

        <back-to-top />
        <infinity-loader v-on:intersect="intersected" />
    </div>
</template>

<script>
import ActivateArtistSyncBanner from "@/components/subscriptions/ActivateArtistsSyncBanner";
import DisableArtistSyncBanner from "@/components/subscriptions/DisableArtistsSyncBanner";
import Subscription from "@/components/subscriptions/Subscription";
import InfinityLoader from "@/components/InfinityLoader";
import BackToTop from "@/components/BackToTop";
import { mapState } from "vuex";

export default {
    computed: mapState({
        isDailySyncStateLoading: (state) => state.sync.isLoading,
        isDailySyncEnabled: (state) => state.sync.isDailySyncEnabled,

        isSubscriptionsLoading: (state) => state.subscriptions.isLoading,
        subscriptions: (state) => state.subscriptions.items,
    }),
    mounted() {
        this.$store.dispatch("sync/fetch");
        this.$store.dispatch("sync/getLastSyncDate");
        this.$store.dispatch("subscriptions/fetch");
    },
    methods: {
        intersected() {
            if (this.isSubscriptionsLoading) return;

            this.$store.dispatch("subscriptions/fetch");
        },
    },
    components: {
        "activate-artist-sync-banner": ActivateArtistSyncBanner,
        "disable-artist-sync-banner": DisableArtistSyncBanner,
        subscription: Subscription,
        "infinity-loader": InfinityLoader,
        "back-to-top": BackToTop,
    },
};
</script>

<style scoped>
/*
    I don't know how to make centered columns only for mobile screens,
    so easy-fix is just override is-centered class on our scope.

    Same fix also uses on releases page.
*/
@media screen and (min-width: 768px) {
    .is-centered {
        -webkit-box-pack: left;
        -ms-flex-pack: left;
        justify-content: left;
    }
}
</style>
