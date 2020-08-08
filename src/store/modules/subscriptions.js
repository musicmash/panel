import { SubscriptionService } from "@/common/api.service";

// initial state
const state = {
    batchSize: 24,
    batch: [],
};

// getters
const getters = {};

// actions
const actions = {
    loadNextBatch({ state, commit }) {
        var limit = state.batchSize;
        var offset = state.batch.length;

        SubscriptionService.get(limit, offset)
            .then((resp) => resp.data)
            .then((subscriptions) => commit("append", subscriptions));
    },
};

// mutations
const mutations = {
    append(state, batch) {
        state.batch = state.batch.concat(batch);
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
