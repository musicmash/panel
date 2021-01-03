import api from "@/api";
import moment from "moment";

const state = {
    filter: "",
    filterType: "",
    all: [],

    batchSize: 24,
    batch: [],

    isLoading: false,
    items: [],
};

const getters = {};

const actions = {
    getPastMonthReleases({ dispatch, commit }) {
        api.getPastMonthReleases((releases) => {
            commit("setFilterType", "last-30-days");
            commit("setReleases", releases);
            commit("reset");
            dispatch("loadNextBatch");
        });
    },
    getWeeklyReleases({ dispatch, commit }) {
        api.getWeeklyReleases((releases) => {
            commit("setFilterType", "this-week");
            commit("setReleases", releases);
            commit("reset");
            dispatch("loadNextBatch");
        });
    },
    getNextWeekReleases({ dispatch, commit }) {
        api.getNextWeekReleases((releases) => {
            commit("setFilterType", "next-week");
            commit("setReleases", releases);
            commit("reset");
            dispatch("loadNextBatch");
        });
    },

    // deprecated
    loadNextBatch({ state, commit }) {
        if (state.batch.length === state.all.length) return;

        const batch = [];
        const start = state.batch.length;
        let max = state.batch.length + state.batchSize;

        // if we overflow length of all releases
        if (max > state.all.length) max = state.all.length;

        for (let i = start; i < max; i++) batch.push(state.all[i]);

        commit("append", batch);
    },

    loadNextFeed({ state, commit }) {
        const till = moment().format("YYYY-MM-DD");
        const since = moment().subtract(3, "month").format("YYYY-MM-DD");
        api.getReleases(
            (releases) => {
                commit("append", releases);
            },
            {
                since,
                till,
                offset: state.batch.length,
                limit: state.batchSize,

                // remove when backend will support filter by few types per one request
                type: "album",
            }
        );
    },

    fetch({ state, commit }) {
        // api returns releases that released < till.
        // so, to get releases for current day, we should request
        // releases until next day.
        const till = moment().add(1, "day").format("YYYY-MM-DD");
        const params = {
            till,
            offset: state.items.length,
        };

        console.log("fetching releases with params", params);
        commit("setLoading", true);

        const delay = 5000; // ms
        setTimeout(() => {
            const items = [
                {
                    released: "2021-01-03T00:00:00Z",
                    artist_name: "Serhat Erdem",
                    poster:
                        "https://i.scdn.co/image/ab67616d0000b273dd4b21effda6ed4365c8232b",
                    title: "Kendi İçinde Kaybolmak",
                    spotify_id: "7fHJ2w5GyXYQLfxMp9PVPi",
                    type: "album",
                    duration_ms: 2625870,
                    id: 39610401,
                    artist_id: 1434614,
                    tracks_count: 16,
                    explicit: false,
                },
                {
                    released: "2021-01-03T00:00:00Z",
                    artist_name: "Ritchi LMG",
                    poster:
                        "https://i.scdn.co/image/ab67616d0000b2731901a2d1a343b666c3663202",
                    title: "Gangsta Story",
                    spotify_id: "6kKhNWDuyjEe2BfJ8J1FoI",
                    type: "single",
                    duration_ms: 163725,
                    id: 39610400,
                    artist_id: 47201,
                    tracks_count: 1,
                    explicit: true,
                },
                {
                    released: "2021-01-03T00:00:00Z",
                    artist_name: "Sydney Yungins",
                    poster:
                        "https://i.scdn.co/image/ab67616d0000b273b30e5359b52781f64b4432aa",
                    title: "Eshays",
                    spotify_id: "6Pnywt9OxUMof7KSadDNaJ",
                    type: "single",
                    duration_ms: 181428,
                    id: 39610399,
                    artist_id: 1271946,
                    tracks_count: 1,
                    explicit: true,
                },
                {
                    released: "2021-01-03T00:00:00Z",
                    artist_name: "Wincent Weiss",
                    poster:
                        "https://i.scdn.co/image/ab67616d0000b273c194f97d44ad5274812c01d2",
                    title: "Was habt ihr gedacht (Piano Version)",
                    spotify_id: "2S5G3DkNjGoNaEPYmBuRow",
                    type: "single",
                    duration_ms: 108000,
                    id: 39610397,
                    artist_id: 756440,
                    tracks_count: 1,
                    explicit: false,
                },
                {
                    released: "2021-01-03T00:00:00Z",
                    artist_name: "Victoria Solé",
                    poster:
                        "https://i.scdn.co/image/ab67616d0000b27398f8483649a45c92140326bf",
                    title: "Seguir Viviendo",
                    spotify_id: "2UJMrH99mwUXR1VIXZ42dw",
                    type: "single",
                    duration_ms: 197257,
                    id: 39610392,
                    artist_id: 339013,
                    tracks_count: 1,
                    explicit: false,
                },
                {
                    released: "2021-01-03T00:00:00Z",
                    artist_name: "Questy",
                    poster:
                        "https://i.scdn.co/image/ab67616d0000b273d8c6842488307c39fb8eab0b",
                    title: "uzależnia",
                    spotify_id: "6wKtNRknGAreRQrv8lPYP1",
                    type: "single",
                    duration_ms: 187500,
                    id: 39610391,
                    artist_id: 327598,
                    tracks_count: 1,
                    explicit: false,
                },
                {
                    released: "2021-01-03T00:00:00Z",
                    artist_name: "Margvelani",
                    poster:
                        "https://i.scdn.co/image/ab67616d0000b27388896178fcd7f1398398b251",
                    title: "Insurgent",
                    spotify_id: "1uONTHBeFWg2Id1sMCx7tP",
                    type: "single",
                    duration_ms: 126666,
                    id: 39610389,
                    artist_id: 3425714,
                    tracks_count: 1,
                    explicit: false,
                },
                {
                    released: "2021-01-03T00:00:00Z",
                    artist_name: "Mas",
                    poster:
                        "https://i.scdn.co/image/ab67616d0000b2736a4cccee2a9ab3de503ad0f1",
                    title: "Ich Hab Zutun",
                    spotify_id: "7axyTKCRuRfJ1rCtVvWdAG",
                    type: "single",
                    duration_ms: 210676,
                    id: 39610387,
                    artist_id: 3140369,
                    tracks_count: 1,
                    explicit: true,
                },
                {
                    released: "2021-01-03T00:00:00Z",
                    artist_name: "Jay-Soul",
                    poster:
                        "https://i.scdn.co/image/ab67616d0000b27367b4051362c82d0c35adec6b",
                    title: "L.O.V.",
                    spotify_id: "5cMAT8zxYACr8731Ka7fhJ",
                    type: "single",
                    duration_ms: 216346,
                    id: 39610385,
                    artist_id: 2705557,
                    tracks_count: 1,
                    explicit: false,
                },
                {
                    released: "2021-01-03T00:00:00Z",
                    artist_name: "Letizia Vocos",
                    poster:
                        "https://i.scdn.co/image/ab67616d0000b273051c0155239ecca4cd6a12bb",
                    title: "Un lugar",
                    spotify_id: "7FQdlXc1sYQ8lMhQnONOmW",
                    type: "single",
                    duration_ms: 267123,
                    id: 39610377,
                    artist_id: 2350245,
                    tracks_count: 1,
                    explicit: false,
                },
            ];

            commit("setLoading", false);
            commit("appendItems", items);
        }, delay);
    },
};

const mutations = {
    setReleases(state, Releases) {
        state.all = Releases;
    },
    setFilterType(state, type) {
        state.filter = "Last 30 days";
        if (type === "this-week") state.filter = "This week";
        if (type === "next-week") state.filter = "Next week";
        state.filterType = type;
    },
    append(state, releases) {
        state.batch = state.batch.concat(releases);
    },
    reset(state) {
        state.batch = [];
    },

    setLoading(state, isLoading) {
        state.isLoading = isLoading;
    },
    setLoaded(state, isLoaded) {
        state.isLoaded = isLoaded;
    },
    appendItems(state, releases) {
        state.items = state.items.concat(releases);
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
