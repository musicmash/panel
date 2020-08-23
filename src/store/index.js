import Vue from "vue";
import Vuex from "vuex";
import releases from "@/store/modules/releases";
import subscriptions from "@/store/modules/subscriptions";
import search from "@/store/modules/search";

Vue.use(Vuex);

const debug = false;

export default new Vuex.Store({
    modules: {
        releases,
        subscriptions,
        search,
    },
    strict: debug,
});
