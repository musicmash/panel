import SearchService from "@/common/search.service";

const state = {
    isLoading: false,
    artists: [],
    releases: [],
};

const getters = {};

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
