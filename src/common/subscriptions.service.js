import ApiService from "@/common/api.service";

const SubscriptionService = {
    get(params) {
        return ApiService.query("subscriptions", {
            params,
        });
    },
};

export default SubscriptionService;
