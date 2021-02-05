import SubscriptionService from "@/common/subscriptions.service";

const state = {
    batchSize: 24,
    batch: [],
};

const getters = {};

const actions = {
    loadNextBatch({ state, commit }) {
        const limit = state.batchSize;
        const offset = state.batch.length;

        SubscriptionService.get(limit, offset)
            .then((resp) => resp.data)
            .then((subscriptions) => commit("append", subscriptions));
    },
};

const mutations = {
    append(state, batch) {
        state.batch = state.batch.concat(batch);
    },
    reset(state) {
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
