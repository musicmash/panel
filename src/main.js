import Vue from "vue";
import "bulma/css/bulma.css";
import App from "@/App";
import router from "@/routes";
import store from "@/store";
import UserService from "@/common/user.service";

Vue.config.productionTip = false;

const mountApp = function () {
    const app = new Vue({
        store,
        router,
        render: (h) => h(App),
    });

    app.$mount("#app");
};

UserService.checkAuth()
    .then(() => {
        store.commit("user/setAuthorized", true);
    })
    .catch(() => {
        // catch request error
        store.commit("user/setAuthorized", false);
    })
    .finally(() => {
        store.commit("user/setAuthorizing", false);
        mountApp();
    });
