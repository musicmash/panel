.
<template>
    <div>
        <releases-onboarding-banner v-show="!isAuthorizing && !isAuthorized" />

        <div class="columns is-multiline is-centered pl-5 pt-5 pr-5">
            <release
                class="column is-3"
                v-for="release in releases"
                :release="release"
                :text="release"
                :key="release.id"
            >
            </release>
        </div>

        <div class="container">
            <observer v-on:intersect="intersected"></observer>

            <div class="has-text-centered pb-5" v-show="isReleasesLoading">
                <button class="button is-success is-loading">Loading</button>
            </div>
        </div>
    </div>
</template>

<script>
import Release from "@/components/release";
import observer from "@/components/observer";
import ReleasesOnboardingBanner from "@/components/ReleasesOnboardingBanner";
import { mapState } from "vuex";

export default {
    computed: mapState({
        isAuthorizing: (state) => state.user.isAuthorizing,
        isAuthorized: (state) => state.user.isAuthorized,
        isReleasesLoading: (state) => state.releases.isLoading,

        releases: (state) => state.releases.items,
    }),
    methods: {
        intersected() {
            this.$store.dispatch("releases/fetch");
        },
    },
    components: {
        observer,
        release: Release,
        "releases-onboarding-banner": ReleasesOnboardingBanner,
    },
};
</script>
