<template>
    <div>
        <releases-onboarding-banner v-if="!isAuthorizing && !isAuthorized" />

        <releases-section
            v-if="releases.length > 0"
            :releases="releases"
            :releaseDatePrecision="'today'"
        />

        <div class="container pt-5">
            <div class="has-text-centered" v-show="isReleasesLoading">
                <button class="button is-success is-loading">Loading</button>
            </div>
        </div>

        <back-to-top />
        <infinity-loader v-on:intersect="intersected" />
    </div>
</template>

<script>
import ReleasesSection from "@/components/ReleasesSection";
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
        "releases-section": ReleasesSection,
        "infinity-loader": InfinityLoader,
        "releases-onboarding-banner": ReleasesOnboardingBanner,
        "back-to-top": BackToTop,
    },
};
</script>
