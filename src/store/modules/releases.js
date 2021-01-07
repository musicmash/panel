import api from "@/api";
import ReleasesService from "@/common/releases.service";
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
            limit: 24,
        };

        // use pagination if we've already load some releases
        if (state.items.length > 0) {
            const firstRelease = state.items[0];
            params.before = firstRelease.id;

            params.offset = state.items.length;
        }

        commit("setLoading", true);

        ReleasesService.get(params)
            .then((resp) => resp.data)
            .then((releases) => {
                commit("setLoading", false);
                commit("appendItems", releases);
            });
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
