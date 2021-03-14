import ApiService from "@/common/api.service";

const SyncService = {
    getDailySyncInfo() {
        return ApiService.get("artists/sync/daily");
    },
    disableDailySync() {
        return ApiService.delete("artists/sync/daily");
    },
    getLatestSyncInfo() {
        return ApiService.get("artists/sync/latest");
    },
};

export default SyncService;
