import Vue from "vue";
import Vuex from "vuex";
import user from "@/store/modules/user";
import releases from "@/store/modules/releases";
import subscriptions from "@/store/modules/subscriptions";
import search from "@/store/modules/search";
import sync from "@/store/modules/sync";

Vue.use(Vuex);

const debug = false;

export default new Vuex.Store({
    modules: {
        user,
        releases,
        subscriptions,
        search,
        sync,
    },
    strict: debug,
});
