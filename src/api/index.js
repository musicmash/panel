import firebase from "firebase/app";
import "firebase/auth";
import axios from "axios";
import moment from "moment";

const api = axios.create({
    baseURL: "/v1",
    timeout: 1000,
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
        const till = now().add(1, "day"); // include today releases
        const since = now().subtract(30, "days");
        this.getReleases(cb, { since: format(since), till: format(till) });
    },
    getWeeklyReleases(cb) {
        const since = startOfWeek();
        const till = startOfWeek().add(1, "week");
        this.getReleases(cb, { since: format(since), till: format(till) });
    },
    getNextWeekReleases(cb) {
        const since = startOfWeek().add(1, "week");
        const till = startOfWeek().add(2, "weeks");
        this.getReleases(cb, { since: format(since), till: format(till) });
    },
    getReleases(cb, params) {
        firebase
            .auth()
            .currentUser.getIdToken(/* forceRefresh */ false)
            .then(function (idToken) {
                api.get("/releases", {
                    params,
                    headers: {
                        "x-musicmash-access-token": idToken,
                    },
                })
                    .then((response) => response.data)
                    .then((releases) => {
                        return releases.filter(function (release) {
                            return release.type !== "music-video";
                        });
                    })
                    .then((releases) => {
                        cb(releases);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            })
            .catch(function (error) {
                // Handle error
                console.log(error);
            });
    },

    // subscriptions
    getSubscriptions(cb) {
        firebase
            .auth()
            .currentUser.getIdToken(/* forceRefresh */ false)
            .then(function (idToken) {
                api.get("/subscriptions", {
                    headers: {
                        "x-musicmash-access-token": idToken,
                    },
                })
                    .then((response) => response.data)
                    .then((subscriptions) => {
                        cb(subscriptions);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            })
            .catch(function (error) {
                // Handle error
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
