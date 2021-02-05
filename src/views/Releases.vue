<template>
    <div>
        <releases-onboarding-banner v-if="!isAuthorizing && !isAuthorized" />

        <div class="container pt-5" v-if="releases.length > 0">
            <nav class="level mb-0">
                <div class="level-left">
                    <div class="level-item">
                        <section class="section p-0">
                            <h1 class="title">Released today</h1>
                        </section>
                    </div>
                </div>
            </nav>

            <div class="columns is-mobile is-centered is-multiline pt-5">
                <release
                    class="column is-8-mobile is-4-tablet is-3-desktop is-2-widescreen"
                    v-for="release in releases"
                    :release="release"
                    :showReleaseDate="false"
                    :key="release.id"
                />
            </div>
        </div>

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
import Release from "@/components/Release";
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
