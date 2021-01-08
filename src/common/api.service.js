import axios from "axios";

const ApiService = {
    init() {
        axios.defaults.baseURL = "/v1/";
        axios.defaults.withCredentials = true;
    },

    query(resource, params) {
        return axios.get(resource, params).catch((error) => {
            throw new Error(`ApiService ${error}`);
        });
    },

    get(resource, slug = "") {
        return axios.get(`${resource}/${slug}`).catch((error) => {
            throw new Error(`ApiService ${error}`);
        });
    },

    post(resource, params) {
        return axios.post(`${resource}`, params);
    },

    update(resource, slug, params) {
        return axios.put(`${resource}/${slug}`, params);
    },

    put(resource, params) {
        return axios.put(`${resource}`, params);
    },

    delete(resource) {
        return axios.delete(resource).catch((error) => {
            throw new Error(`ApiService ${error}`);
        });
    },
};

export default ApiService;

export const SubscriptionService = {
    get(limit = 24, offset = 0) {
        return ApiService.query("subscriptions", {
            params: {
                limit,
                offset,
            },
        });
    },
};
