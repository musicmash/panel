import ApiService from "@/common/api.service";

const UserService = {
    checkAuth() {
        return ApiService.get("user/info");
    },
};

export default UserService;
