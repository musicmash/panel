import SearchService from "@/common/search.service";

// initial state
const state = {
    artists: [],
    releases: [],
};

// getters
const getters = {};

// actions
const actions = {
    doSearch({ commit }, query) {
        SearchService.do(query)
            .then((resp) => resp.data)
            .then((result) => {
                commit("set", result);
            });
    },
};

// mutations
const mutations = {
    set(state, result) {
        state.artists = result.artists;
        state.releases = result.releases;
    },
    reset(state) {
        state.artists = [];
        state.releases = [];
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
