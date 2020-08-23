import SearchService from "@/common/search.service";

// initial state
const state = {
    isLoading: false,
    artists: [],
    releases: [],
};

// getters
const getters = {};

// actions
const actions = {
    doSearch({ state, commit }, query) {
        state.isLoading = true;
        SearchService.do(query)
            .then((resp) => resp.data)
            .then((result) => {
                state.isLoading = false;
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
