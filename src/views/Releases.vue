<template>
    <div>
        <releases-onboarding-banner v-if="!isAuthorizing && !isAuthorized" />

        <releases-section
            class="mt-5"
            v-if="todayReleases.length > 0"
            :releases="todayReleases"
            :releaseDatePrecision="'today'"
        />

        <releases-section
            class="mt-5"
            v-if="yesterdayReleases.length > 0"
            :releases="yesterdayReleases"
            :releaseDatePrecision="'yesterday'"
        />

        <releases-section
            class="mt-5"
            v-if="thisWeekReleases.length > 0"
            :releases="thisWeekReleases"
            :releaseDatePrecision="'this week'"
            :showReleaseDate="true"
        />

        <releases-section
            class="mt-5"
            v-if="thisMonthReleases.length > 0"
            :releases="thisMonthReleases"
            :releaseDatePrecision="'this month'"
            :showReleaseDate="true"
        />

        <releases-section
            class="mt-5"
            v-if="recentlyReleases.length > 0"
            :releases="recentlyReleases"
            :releaseDatePrecision="'older'"
            :showReleaseDate="true"
        />

        <div class="container mt-3">
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

        todayReleases: (state) => state.releases.todayReleases,
        yesterdayReleases: (state) => state.releases.yesterdayReleases,
        thisWeekReleases: (state) => state.releases.thisWeekReleases,
        thisMonthReleases: (state) => state.releases.thisMonthReleases,
        recentlyReleases: (state) => state.releases.recentlyReleases,
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
