import ApiService from "@/common/api.service";

const SearchService = {
    do(query) {
        return ApiService.query("search", {
            params: {
                query,
            },
        });
    },
};

export default SearchService;
