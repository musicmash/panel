<template>
    <div class="row">
        <div class="empty-list" v-if="releases && releases.length == 0">
            No releases found
        </div>
        <release
            class="col-3 mx-4 mb-4 p-0"
            v-for="release in releases"
            :release="release"
            :key="release.id"
        ></release>
    </div>
</template>

<script>
import release from "@/components/release";
import releaseMixin from "@/mixins/releases";
import loaderMixin from "@/mixins/infinity-loader";
import moment from "moment";

function format(time) {
    return time.format("YYYY-MM-DD");
}

function parseMonth(month) {
    return moment(month, "MMM");
}

export default {
    mixins: [releaseMixin, loaderMixin],
    created() {
        this.fetchData();
        this.subscribeOnScroll((offset, limit) => {
            this.loadNextReleases(offset, limit);
        });
    },
    watch: {
        // call again the method if the route changes
        $route: "fetchData",
    },
    methods: {
        fetchData() {
            this.resetLoader();
            const params = this.getPeriods(this.$route.params.month);
            this.loadReleases(params.since, params.till);
        },
        getPeriods(month) {
            const since = parseMonth(month);
            const till = parseMonth(month).add(1, "month");
            return { since: format(since), till: format(till) };
        },
    },
    components: {
        release,
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.empty-list {
    font-size: 18px;
    line-height: normal;
    font-weight: 400;
    align-items: center;
    width: 100%;
    margin: 64px auto 0;
    color: hsla(0, 0%, 100%, 0.3);
    text-align: center;
}
</style>
