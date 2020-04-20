<template>
    <div class="wrapper">
        <sidebar ref="sidebar" />
        <div class="content">
            <div
                class="d-flex flex-column flex-md-row align-items-center"
            >
                <collapser class="ml-3" v-on:click="$refs.sidebar.toggle()" />
                <h1 class="header ml-2">{{ filter }}</h1>
                <h1 class="sub-header ml-2">
                    ({{ releasesAll.length }} results)
                </h1>
            </div>

            <div class="releases">
                <div class="row d-flex flex-row align-items-center">
                    <release
                        class="col-3 mx-3 mb-4 p-0"
                        v-for="release in releasesBatch"
                        :release="release"
                        :key="release.id"
                    ></release>
                    <observer v-on:intersect="intersected"></observer>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import sidebar from "@/components/sidebar/sidebar";
import release from "@/components/release";
import observer from "@/components/observer";
import collapser from "@/components/collapser";
import { mapState } from "vuex";

export default {
    computed: mapState({
        filter: (state) => state.releases.filter,
        releasesBatch: (state) => state.releases.batch,
        releasesAll: (state) => state.releases.all,
    }),
    components: {
        collapser,
        sidebar,
        release,
        observer,
    },
    created() {
        this.$store.dispatch("releases/getPastMonthReleases");
    },
    methods: {
        load: function () {
            this.$store.dispatch("releases/loadNextBatch");
        },
        intersected: function () {
            this.load();
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapper {
    display: flex;
    width: 100%;
    align-items: stretch;
}

.content {
    width: 100%;
    min-height: 100vh;
    transition: all 0.3s;
}

.navbar-content {
    padding-left: 1rem;
}

.releases {
    padding: 0.5rem 1rem;
}

.header {
    font-size: 50px;
    font-weight: 700;
}
.sub-header {
    font-size: 40px;
    font-weight: 700;
    color: #7a7a7a;
}
</style>
