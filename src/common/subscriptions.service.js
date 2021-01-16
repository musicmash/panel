import ApiService from "@/common/api.service";

const SubscriptionService = {
    get(limit = 24, offset = 0) {
        return ApiService.query("subscriptions", {
            params: {
                limit,
                offset,
            },
        });
    },
};

export default SubscriptionService;
