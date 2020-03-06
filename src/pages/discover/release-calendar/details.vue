<template>
    <div class="row">
        <release
            v-for="release in releasesWithoutVideos"
            :release="release"
            :key="release.id"
        ></release>
    </div>
</template>

<script>
import release from '../../../components/release'
import releaseMixin from '../../../mixins/releases'

export default {
    mixins: [releaseMixin],
    watch: {
        // call again the method if the route changes
        '$route': 'fetchData'
    },
    methods: {
        fetchData() {
            var params = this.getPerios(this.$route.params.month);
            this.loadReleases(params.since, params.till);
        },
        getPerios(month) {
            // todo: release this with time.js
            if (month == "jan")
                return {"since": "2020-01-01", "till": "2020-02-01"}
            if (month == "feb")
                return {"since": "2020-02-01", "till": "2020-03-01"}
            if (month == "mar")
                return {"since": "2020-03-01", "till": "2020-04-01"}
            if (month == "apr")
                return {"since": "2020-04-01", "till": "2020-05-01"}
            if (month == "may")
                return {"since": "2020-05-01", "till": "2020-06-01"}
            if (month == "jun")
                return {"since": "2020-06-01", "till": "2020-07-01"}
            if (month == "jul")
                return {"since": "2020-07-01", "till": "2020-08-01"}
            if (month == "aug")
                return {"since": "2020-08-01", "till": "2020-09-01"}
            if (month == "sep")
                return {"since": "2020-09-01", "till": "2020-10-01"}
            if (month == "oct")
                return {"since": "2020-10-01", "till": "2020-11-01"}
            if (month == "nov")
                return {"since": "2020-11-01", "till": "2020-12-01"}
            return {"since": "2020-12-01", "till": "2021-01-01"}
        }
    },
    components: {
        release
    },
}
</script>

