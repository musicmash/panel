import api from "@/api"

// initial state
const state = {
    all: []
}

// getters
const getters = {}

// actions
const actions = {
    getPastMonthReleases({ commit }) {
        api.getPastMonthReleases(releases => {
            commit("setReleases", releases);
        })
    },
    getWeeklyReleases({ commit }) {
        api.getWeeklyReleases(releases => {
            commit("setReleases", releases);
        })
    },
    getNextWeekReleases({ commit }) {
        api.getNextWeekReleases(releases => {
            commit("setReleases", releases);
        })
    },
}

// mutations
const mutations = {
    setReleases(state, Releases) {
        state.all = Releases
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
