import ReleasesService from "@/common/releases.service";
import moment from "moment";

const state = {
    filter: "",
    filterType: "",
    all: [],

    batchSize: 24,
    batch: [],

    isLoading: false,
    items: [],
    itemIds: new Set([]),
};

const getters = {};

const actions = {
    fetch({ state, commit }) {
        // api returns releases that released < till.
        // so, to get releases for current day, we should request
        // releases until next day.
        const till = moment().add(1, "day").format("YYYY-MM-DD");
        const params = {
            till,
            limit: 24,
        };

        // use pagination if we've already load some releases
        if (state.items.length > 0) {
            const latestRelease = state.items[state.items.length - 1];

            params.before = latestRelease.id;
        }

        commit("setLoading", true);

        ReleasesService.get(params)
            .then((resp) => resp.data)
            .then((releases) => {
                const uniqueReleases = [];
                releases.forEach((release) => {
                    if (!state.itemIds.has(release.id))
                        uniqueReleases.push(release);
                });

                return uniqueReleases;
            })
            .then((releases) => {
                commit("setLoading", false);
                commit("appendItems", releases);
            });
    },
};

const mutations = {
    setReleases(state, Releases) {
        state.all = Releases;
    },
    setFilterType(state, type) {
        state.filter = "Last 30 days";
        if (type === "this-week") state.filter = "This week";
        if (type === "next-week") state.filter = "Next week";
        state.filterType = type;
    },
    append(state, releases) {
        state.batch = state.batch.concat(releases);
    },
    reset(state) {
        state.batch = [];
    },

    setLoading(state, isLoading) {
        state.isLoading = isLoading;
    },
    setLoaded(state, isLoaded) {
        state.isLoaded = isLoaded;
    },
    appendItems(state, releases) {
        state.items = state.items.concat(releases);

        releases.forEach((release) => {
            state.itemIds.add(release.id);
        });
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
