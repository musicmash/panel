<template>
    <div>
        <releases-onboarding-banner v-if="!isAuthorizing && !isAuthorized" />

        <div class="columns is-multiline is-mobile is-centered pt-5">
            <release
                class="column is-narrow"
                v-for="release in releases"
                :release="release"
                :text="release"
                :key="release.id"
            >
            </release>
        </div>

        <back-to-top />

        <div class="container">
            <div class="has-text-centered pb-5" v-show="isReleasesLoading">
                <button class="button is-success is-loading">Loading</button>
            </div>
        </div>

        <infinity-loader v-on:intersect="intersected" />
    </div>
</template>

<script>
import Release from "@/components/release";
import InfinityLoader from "@/components/InfinityLoader";
import ReleasesOnboardingBanner from "@/components/ReleasesOnboardingBanner";
import BackToTop from "@/components/BackToTop";
import { mapState } from "vuex";

export default {
    computed: mapState({
        isAuthorizing: (state) => state.user.isAuthorizing,
        isAuthorized: (state) => state.user.isAuthorized,
        isReleasesLoading: (state) => state.releases.isLoading,

        releases: (state) => state.releases.items,
    }),
    mounted() {
        this.$store.dispatch("releases/fetch");
    },
    methods: {
        intersected() {
            if (this.isReleasesLoading) return;

            this.$store.dispatch("releases/fetch");
        },
    },
    components: {
        release: Release,
        "infinity-loader": InfinityLoader,
        "releases-onboarding-banner": ReleasesOnboardingBanner,
        "back-to-top": BackToTop,
    },
};
</script>
