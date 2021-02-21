import SubscriptionService from "@/common/subscriptions.service";

const state = {
    isLoading: false,
    items: [],
};

const getters = {};

const actions = {
    fetch({ state, commit }) {
        const params = {
            limit: 24,
        };

        // use pagination if we've already load some subscriptions
        if (state.items.length > 0) {
            const latestSubscription = state.items[state.items.length - 1];

            params.before = latestSubscription.id;
        }

        commit("setLoading", true);

        SubscriptionService.get(params)
            .then((resp) => resp.data)
            .then((subscriptions) => {
                commit("setLoading", false);
                commit("appendItems", subscriptions);
            });
    },
};

const mutations = {
    setLoading(state, isLoading) {
        state.isLoading = isLoading;
    },
    setLoaded(state, isLoaded) {
        state.isLoaded = isLoaded;
    },
    appendItems(state, subscriptions) {
        state.items = state.items.concat(subscriptions);
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
