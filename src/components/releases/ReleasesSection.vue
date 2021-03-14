<template>
    <div class="container">
        <nav class="level mb-0">
            <div class="level-left">
                <div class="level-item">
                    <section class="section p-0">
                        <h1 class="title is-capitalized">
                            {{ releaseDatePrecision }}
                        </h1>
                    </section>
                </div>
            </div>
        </nav>

        <div class="columns is-mobile is-centered is-multiline mt-3">
            <release
                class="column is-8-mobile is-4-tablet is-3-desktop is-2-widescreen"
                v-for="release in releases"
                :release="release"
                :showReleaseDate="showReleaseDate"
                :key="release.id"
            />
        </div>
    </div>
</template>

<script>
import Release from "@/components/releases/Release";
import { mapState } from "vuex";

export default {
    props: {
        showReleaseDate: Boolean,
        releases: mapState([]),
        releaseDatePrecision: String,
    },
    components: {
        release: Release,
    },
};
</script>

<style scoped>
/*
    I don't know how to make centered columns only for mobile screens,
    so easy-fix is just override is-centered class on our scope.

    Same fix also uses on subscriptions page.
*/
@media screen and (min-width: 768px) {
    .is-centered {
        -webkit-box-pack: left;
        -ms-flex-pack: left;
        justify-content: left;
    }
}
</style>
