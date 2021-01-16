import ApiService from "@/common/api.service";

const UserService = {
    checkAuth() {
        return ApiService.get("user/info");
    },
    logout() {
        return ApiService.post("user/logout");
    },
};

export default UserService;
