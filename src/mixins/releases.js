export default {
    data() {
        return {
            releases: []
        }
    },
    created() {
        this.resource = this.$resource("releases");
    },
    methods: {
        loadReleases(since, till) {
            return this.resource.get({"since": since, "till": till}).then(
                resp => this.releases = resp.body
            );
        },
        loadPastMonthReleases() {
            var since = "2020-02-01"
            var till = "2020-02-10"
            return this.loadReleases(since, till);
        },
        loadWeeklyReleases() {
            var since = "2020-03-01"
            var till = "2020-03-10"
            return this.loadReleases(since, till);
        },
        loadNextWeekReleases() {
            var since = "2020-03-10"
            var till = "2020-03-17"
            return this.loadReleases(since, till);
        }
    },
    computed: {
        releasesWithoutVideos: function() {
            return this.releases.filter(function(release) {
                return release.type != "music-video";
            });
        }
    }
}
