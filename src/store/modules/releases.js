import ReleasesService from "@/common/releases.service";
import moment from "moment";
import { parse, isToday, isYesterday, isThisWeek, isThisMonth } from "date-fns";

const state = {
    isLoading: false,
    items: [],
    itemIds: new Set([]),

    todayReleases: [],
    yesterdayReleases: [],
    thisWeekReleases: [],
    thisMonthReleases: [],
    recentlyReleases: [],
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
            const released = parse(release.released, "yyyy-MM-dd", new Date());

            if (isToday(released)) {
                state.todayReleases.push(release);
                return;
            }

            if (isYesterday(released)) {
                state.yesterdayReleases.push(release);
                return;
            }

            if (isThisWeek(released, { weekStartsOn: 1 })) {
                state.thisWeekReleases.push(release);
                return;
            }

            if (isThisMonth(released)) {
                state.thisMonthReleases.push(release);
                return;
            }

            state.recentlyReleases.push(release);
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
