import Vue from "vue";
import "bulma/css/bulma.css";
import App from "@/App";
import router from "@/routes";
import store from "@/store";

Vue.config.productionTip = false;

new Vue({
    store,
    router,
    render: (h) => h(App),
}).$mount("#app");
