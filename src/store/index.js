import Vue from "vue";
import Vuex from "vuex";
import releases from "@/store/modules/releases";
import subscriptions from "@/store/modules/subscriptions";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
    modules: {
        releases,
        subscriptions,
    },
    strict: debug,
});
