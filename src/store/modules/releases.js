import api from "@/api"

// initial state
const state = {
    filter: "All releases",
    all: [],
}

// getters
const getters = {}

// actions
const actions = {
    getPastMonthReleases({ commit }) {
        api.getPastMonthReleases(releases => {
            commit("setFilter", "Last 30 days");
            commit("setReleases", releases);
        })
    },
    getWeeklyReleases({ commit }) {
        api.getWeeklyReleases(releases => {
            commit("setFilter", "This week");
            commit("setReleases", releases);
        })
    },
    getNextWeekReleases({ commit }) {
        api.getNextWeekReleases(releases => {
            commit("setFilter", "Next week");
            commit("setReleases", releases);
        })
    },
}

// mutations
const mutations = {
    setReleases(state, Releases) {
        state.all = Releases
    },
    setFilter(state, value) {
        state.filter = value;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
