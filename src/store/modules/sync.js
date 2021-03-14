import SyncService from "@/common/sync.service";
import { parse, format } from "date-fns";

const state = {
    // represents state when we wait daily sync state response
    isLoading: false,

    // represents state is daily sync enabled for user
    isDailySyncEnabled: false,

    // represents state when we wait disable daily sync response
    isDailySyncDisabling: false,

    // represents date when was last success sync
    lastSyncDate: "",
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

    getLastSyncDate({ commit }) {
        SyncService.getLatestSyncInfo()
            .then((resp) => resp.data)
            .then((info) => {
                const latestSync = parse(
                    info.latest,
                    "yyyy-MM-dd HH:mm:ss",
                    new Date()
                );
                const date = format(latestSync, "MMMM d, yyyy", {
                    weekStartsOn: 1,
                });
                const time = format(latestSync, "HH:mm:ss", {
                    weekStartsOn: 1,
                });

                commit("setLastSyncDate", `${date} at ${time}`);
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
    setLastSyncDate(state, date) {
        state.lastSyncDate = date;
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
