import api from "@/api";

// initial state
const state = {
    batchSize: 24,
    batch: [],
};

// getters
const getters = {};

// actions
const actions = {
    loadNext({ commit }) {
        api.getSubscriptions((subscriptions) => {
            commit("appendBatch", subscriptions);
        });
    },
};

// mutations
const mutations = {
    appendBatch(state, subscriptions) {
        state.batch = state.batch.concat(subscriptions);
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
