var moment = require('moment');

function format(time) {
    return time.format('YYYY-MM-DD');
}

function now() {
    return moment().utc()
}

function startOfWeek() {
    // in moment.js start of week it's sunday
    return now().startOf('week').add(1, 'day');
}

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
            var till = now().add(1, 'day'); // include today releases
            var since = now().subtract(30, 'days');
            return this.loadReleases(format(since), format(till));
        },
        loadWeeklyReleases() {
            var since = startOfWeek();
            var till = startOfWeek().add(1, 'week');
            return this.loadReleases(format(since), format(till));
        },
        loadNextWeekReleases() {
            var since = startOfWeek().add(1, 'week');
            var till = startOfWeek().add(2, 'weeks');
            return this.loadReleases(format(since), format(till));
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
