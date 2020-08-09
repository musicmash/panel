import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import AuthService from "@/common/auth.service";

const ApiService = {
    init() {
        Vue.use(VueAxios, axios);
        Vue.axios.defaults.baseURL = "/v1/";
        AuthService.getToken().then((token) => {
            Vue.axios.defaults.headers.common[
                "x-musicmash-access-token"
            ] = token;
        });
    },

    query(resource, params) {
        return Vue.axios.get(resource, params).catch((error) => {
            throw new Error(`ApiService ${error}`);
        });
    },

    get(resource, slug = "") {
        return Vue.axios.get(`${resource}/${slug}`).catch((error) => {
            throw new Error(`ApiService ${error}`);
        });
    },

    post(resource, params) {
        return Vue.axios.post(`${resource}`, params);
    },

    update(resource, slug, params) {
        return Vue.axios.put(`${resource}/${slug}`, params);
    },

    put(resource, params) {
        return Vue.axios.put(`${resource}`, params);
    },

    delete(resource) {
        return Vue.axios.delete(resource).catch((error) => {
            throw new Error(`ApiService ${error}`);
        });
    },
};

export default ApiService;

export const SubscriptionService = {
    get(limit = 24, offset = 0) {
        return ApiService.query("subscriptions", {
            params: {
                limit: limit,
                offset: offset,
            },
        });
    },
};
