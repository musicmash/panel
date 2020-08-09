import moment from "moment";

function format(time) {
    return time.format("YYYY-MM-DD");
}

function now() {
    return moment().utc();
}

function startOfWeek() {
    // in moment.js start of week it's sunday
    return now().startOf("week").add(1, "day");
}

export default {
    data() {
        return {
            allReleases: [],
            releases: [],
        };
    },
    created() {
        this.resource = this.$resource("releases");
    },
    methods: {
        excludeVideos(releases) {
            return releases.filter(function (release) {
                return release.type !== "music-video";
            });
        },
        loadReleases(since, till) {
            return this.resource.get({ since, till }).then((resp) => {
                this.releases = [];
                // exclude videos on the backend
                this.allReleases = this.excludeVideos(resp.body);
                this.loadNextReleases(0, 24);
            });
        },
        loadPastMonthReleases() {
            const till = now().add(1, "day"); // include today releases
            const since = now().subtract(30, "days");
            return this.loadReleases(format(since), format(till));
        },
        loadWeeklyReleases() {
            const since = startOfWeek();
            const till = startOfWeek().add(1, "week");
            return this.loadReleases(format(since), format(till));
        },
        loadNextWeekReleases() {
            const since = startOfWeek().add(1, "week");
            const till = startOfWeek().add(2, "weeks");
            return this.loadReleases(format(since), format(till));
        },
        loadNextReleases(offset, limit) {
            let max = offset + limit;
            if (max > this.allReleases.length) max = this.allReleases.length;

            for (let i = offset; i < max; i++)
                this.releases.push(this.allReleases[i]);
        },
    },
};
