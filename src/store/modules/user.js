import UserService from "@/common/user.service";

const state = {
    isAuthorizing: true,
    isAuthorized: false,
};

const getters = {};

const actions = {
    checkAuth({ commit }) {
        commit("setAuthorizing", true);
        UserService.checkAuth()
            .then(() => {
                commit("setAuthorized", true);
            })
            .catch(() => {
                // catch request error
                commit("setAuthorized", false);
            })
            .finally(() => {
                commit("setAuthorizing", false);
            });
    },
};

const mutations = {
    setAuthorizing(state, isAuthorizing) {
        state.isAuthorizing = isAuthorizing;
    },
    setAuthorized(state, isAuthorized) {
        state.isAuthorized = isAuthorized;
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
