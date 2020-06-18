<template>
  <div class="container">
    <div class="row justify-content-center">
        <release
            class="mr-2 p-0"
            v-for="release in releases"
            :release="release"
            :text="release"
            :key="release.id"
        >
        </release>
        <observer v-on:intersect="intersected"></observer>
    </div>
  </div>
</template>

<script>
import release from "@/components/release";
import observer from "@/components/observer";
import { mapState } from "vuex";

export default {
    computed: mapState({
        releases: (state) => state.releases.batch,
    }),
    components: {
        release,
        observer,
    },
    methods: {
        load: function () {
            this.$store.dispatch("releases/loadNextFeed");
        },
        intersected: function () {
            this.load();
        },
    },
};
</script>

<style>

</style>
