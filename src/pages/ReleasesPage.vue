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
