import api from "@/api";

// initial state
const state = {
    filter: "",
    filterType: "",
    all: [],

    batchSize: 24,
    batch: [],
};

// getters
const getters = {};

// actions
const actions = {
    getPastMonthReleases({ dispatch, commit }) {
        api.getPastMonthReleases((releases) => {
            commit("setFilterType", "last-30-days");
            commit("setReleases", releases);
            commit("resetBatch");
            dispatch("loadNextBatch");
        });
    },
    getWeeklyReleases({ dispatch, commit }) {
        api.getWeeklyReleases((releases) => {
            commit("setFilterType", "this-week");
            commit("setReleases", releases);
            commit("resetBatch");
            dispatch("loadNextBatch");
        });
    },
    getNextWeekReleases({ dispatch, commit }) {
        api.getNextWeekReleases((releases) => {
            commit("setFilterType", "next-week");
            commit("setReleases", releases);
            commit("resetBatch");
            dispatch("loadNextBatch");
        });
    },

    loadNextBatch({ state, commit }) {
        if (state.batch.length == state.all.length) return;

        var batch = [],
            start = state.batch.length,
            max = state.batch.length + state.batchSize;

        // if we overflow length of all releases
        if (max > state.all.length) max = state.all.length;

        for (var i = start; i < max; i++) batch.push(state.all[i]);

        commit("appendBatch", batch);
    },
};

// mutations
const mutations = {
    setReleases(state, Releases) {
        state.all = Releases;
    },
    setFilterType(state, type) {
        state.filter = "Last 30 days";
        if (type == "this-week") state.filter = "This week";
        if (type == "next-week") state.filter = "Next week";
        state.filterType = type;
    },
    appendBatch(state, releases) {
        state.batch = state.batch.concat(releases);
    },
    resetBatch(state) {
        state.batch = [];
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
