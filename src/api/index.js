const axios = require('axios');
const moment = require("moment");

const api = axios.create({
    baseURL: "http://185.91.53.208:8844/v1",
    timeout: 1000,
    headers: {
        "x-user-name": "objque@gmail.com",
    }
});

function format(time) {
    return time.format("YYYY-MM-DD");
}

function now() {
    return moment().utc()
}

function startOfWeek() {
    // in moment.js start of week it"s sunday
    return now().startOf("week").add(1, "day");
}

export default {
    getPastMonthReleases(cb) {
        var till = now().add(1, "day"); // include today releases
        var since = now().subtract(30, "days");
        this.getReleases(cb, format(since), format(till));
    },
    getWeeklyReleases(cb) {
        var since = startOfWeek();
        var till = startOfWeek().add(1, "week");
        this.getReleases(cb, format(since), format(till));
    },
    getNextWeekReleases(cb) {
        var since = startOfWeek().add(1, "week");
        var till = startOfWeek().add(2, "weeks");
        this.getReleases(cb, format(since), format(till));
    },
    getReleases(cb, since, till) {
        api.get("/releases", {
            params: {
                since: since,
                till: till,
            },
        }).then(
            response => {
                cb(this.excludeVideos(response.data));
            }
        ).catch(function (error) {
            console.log(error);
        });
    },
    excludeVideos(releases) {
        return releases.filter(function (release) {
            return release.type != "music-video";
        });
    },
}
