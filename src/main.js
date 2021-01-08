import Vue from "vue";
import "bulma/css/bulma.css";
import App from "@/App";
import router from "@/routes";
import store from "@/store";

Vue.config.productionTip = false;

// Vue.http.headers.common["x-user-name"] = "objque@gmail.com";

new Vue({
    store,
    router,
    render: (h) => h(App),
}).$mount("#app");
