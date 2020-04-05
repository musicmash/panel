import api from "@/api"

// initial state
const state = {
    filter: "",
    filterType: "",
    all: [],
}

// getters
const getters = {}

// actions
const actions = {
    getPastMonthReleases({ commit }) {
        api.getPastMonthReleases(releases => {
            commit("setFilterType", "last-30-days");
            commit("setReleases", releases);
        })
    },
    getWeeklyReleases({ commit }) {
        api.getWeeklyReleases(releases => {
            commit("setFilterType", "this-week");
            commit("setReleases", releases);
        })
    },
    getNextWeekReleases({ commit }) {
        api.getNextWeekReleases(releases => {
            commit("setFilterType", "next-week");
            commit("setReleases", releases);
        })
    },
}

// mutations
const mutations = {
    setReleases(state, Releases) {
        state.all = Releases
    },
    setFilterType(state, type) {
        state.filter = "Last 30 days"
        if (type == "this-week")
            state.filter = "This week";
        if (type == "next-week")
            state.filter = "Next week";
        state.filterType = type;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
