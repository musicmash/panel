import ApiService from "@/common/api.service";

const ReleasesService = {
    get(params) {
        return ApiService.query("releases", {
            params,
        });
    },
};

export default ReleasesService;
