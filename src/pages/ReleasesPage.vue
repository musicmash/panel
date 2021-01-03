.
<template>
    <div>
        <releases-onboarding-banner />

        <div class="container">
            <release
                class="mr-3 mb-3 p-0"
                v-for="release in releases"
                :release="release"
                :text="release"
                :key="release.id"
            >
            </release>

            <div class="box has-text-centered" v-show="isReleasesLoading">
                <button class="button is-success is-loading">Loading</button>
            </div>
        </div>
    </div>
</template>

<script>
import Release from "@/components/release";
import ReleasesOnboardingBanner from "@/components/ReleasesOnboardingBanner";
import { mapState } from "vuex";

export default {
    mounted() {
        if (!this.$store.state.releases.isLoaded)
            this.fetchReleases();
    },
    computed: mapState({
        releases: (state) => state.releases.items,
        isReleasesLoading: (state) => state.releases.isLoading,
    }),
    methods: {
        fetchReleases() {
            return this.$store.dispatch("releases/fetch");
        },
    },
    components: {
        "release": Release,
        "releases-onboarding-banner": ReleasesOnboardingBanner,
    },
};
</script>
