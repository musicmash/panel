const axios = require("axios");
const moment = require("moment");

const api = axios.create({
    baseURL: "http://185.91.53.208:8844/v1",
    timeout: 1000,
    headers: {
        "x-user-name": "objque@gmail.com",
    },
});

function format(time) {
    return time.format("YYYY-MM-DD");
}

function now() {
    return moment().utc();
}

function startOfWeek() {
    // in moment.js start of week it"s sunday
    return now().startOf("week").add(1, "day");
}

export default {
    // releases
    getPastMonthReleases(cb) {
        var till = now().add(1, "day"); // include today releases
        var since = now().subtract(30, "days");
        this.getReleases(cb, {since: format(since), till: format(till)});
    },
    getWeeklyReleases(cb) {
        var since = startOfWeek();
        var till = startOfWeek().add(1, "week");
        this.getReleases(cb, {since: format(since), till: format(till)});
    },
    getNextWeekReleases(cb) {
        var since = startOfWeek().add(1, "week");
        var till = startOfWeek().add(2, "weeks");
        this.getReleases(cb, {since: format(since), till: format(till)});
    },
    getReleases(cb, params) {
        api.get("/releases", { params: params })
            .then((response) => {
                cb(this.excludeVideos(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });
    },
    excludeVideos(releases) {
        return releases.filter(function (release) {
            return release.type != "music-video";
        });
    },

    // subscriptions
    getSubscriptions(cb) {
        api.get("/subscriptions")
            .then((response) => {
                cb(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    },
    subscribe(cb, subscription) {
        // subscription should be { artist_id: 12345}
        api.post("/subscriptions", subscription)
            .then(() => {
                cb();
            })
            .catch(function (error) {
                console.log(error);
            });
    },
    unsubscribe(cb, subscription) {
        // subscription should be { artist_id: 12345}
        api.delete("/subscriptions", subscription)
            .then(() => {
                cb();
            })
            .catch(function (error) {
                console.log(error);
            });
    },
};
