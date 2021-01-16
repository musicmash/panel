import axios from "axios";

const client = axios.create({
    baseURL: "/v1/",
    withCredentials: true,
});

const ApiService = {
    query(resource, params) {
        return client.get(resource, params);
    },

    get(resource) {
        return client.get(`${resource}`);
    },

    post(resource, params) {
        return client.post(`${resource}`, params);
    },

    update(resource, slug, params) {
        return client.put(`${resource}/${slug}`, params);
    },

    put(resource, params) {
        return client.put(`${resource}`, params);
    },

    delete(resource) {
        return client.delete(resource);
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
