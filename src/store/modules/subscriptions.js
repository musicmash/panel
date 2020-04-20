import api from "@/api";

// initial state
const state = {
    all: [],

    batchSize: 24,
    batch: [],
};

// getters
const getters = {};

// actions
const actions = {
    getSubscriptions({ dispatch, commit }) {
        api.getSubscriptions((subscriptions) => {
            commit("setSubscriptions", subscriptions);
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
    setSubscriptions(state, subscriptions) {
        state.all = subscriptions;
    },
    appendBatch(state, subscriptions) {
        state.batch = state.batch.concat(subscriptions);
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
