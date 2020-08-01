import { SubscriptionService } from "@/common/api.service";

// initial state
const state = {
    list: [],
};

// getters
const getters = {};

// actions
const actions = {
    fetch({ commit }) {
        SubscriptionService.get()
            .then((resp) => resp.data)
            .then((subscriptions) => commit("set", subscriptions));
    },
};

// mutations
const mutations = {
    set(state, subscriptions) {
        state.list = subscriptions;
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
