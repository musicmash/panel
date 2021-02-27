import UserService from "@/common/user.service";

const state = {
    isAuthorizing: true,
    isAuthorized: false,
};

const getters = {};

const actions = {
    logout() {
        UserService.logout()
            .then(() => {
                window.location.replace("/");
            })
            .catch(() => {
                console.log("logout 40x");
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
