import SyncService from "@/common/sync.service";

const state = {
    // represents state when we wait daily sync state response
    isLoading: false,

    // represents state is daily sync enabled for user
    isDailySyncEnabled: false,

    // represents state when we wait disable daily sync response
    isDailySyncDisabling: false,
};

const getters = {};

const actions = {
    fetch({ commit }) {
        commit("setLoading", true);

        SyncService.getDailySyncInfo()
            .then((resp) => resp.data)
            .then((resp) => {
                commit("setDailySyncEnabled", resp.enabled);
            })
            .finally(() => {
                commit("setLoading", false);
            });
    },
    disableDailySync({ commit }) {
        commit("setDailySyncDisabling", true);

        SyncService.disableDailySync()
            .then(() => {
                commit("setDailySyncEnabled", false);
            })
            .finally(() => {
                commit("setDailySyncDisabling", false);
            });
    },
};

const mutations = {
    setDailySyncDisabling(state, isLoading) {
        state.isDailySyncDisabling = isLoading;
    },
    setLoading(state, isLoading) {
        state.isLoading = isLoading;
    },
    setDailySyncEnabled(state, enabled) {
        state.isDailySyncEnabled = enabled;
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
