<template>
    <div class="row">
        <div class="empty-list" v-if="releasesWithoutVideos && releasesWithoutVideos.length == 0">
            No releases found
        </div>
        <release
            v-for="release in releasesWithoutVideos"
            :release="release"
            :key="release.id"
        ></release>
    </div>
</template>

<script>
import release from '@/components/release'
import releaseMixin from '@/mixins/releases'

var moment = require('moment');

function format(time) {
    return time.format('YYYY-MM-DD');
}

function parseMonth(month) {
    return moment(month, "MMM");
}

export default {
    mixins: [releaseMixin],
    created() {
        this.fetchData();
    },
    watch: {
        // call again the method if the route changes
        '$route': 'fetchData'
    },
    methods: {
        fetchData() {
            var params = this.getPeriods(this.$route.params.month);
            this.loadReleases(params.since, params.till);
        },
        getPeriods(month) {
            var since = parseMonth(month);
            var till = parseMonth(month).add(1, 'month');
            return {"since": format(since), "till": format(till)}
        }
    },
    components: {
        release
    },
}
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
    color: hsla(0,0%,100%,.3);
    text-align: center;
}
</style>