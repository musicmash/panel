import Vue from "vue";
import "bulma/css/bulma.css";
// import VueResource from "vue-resource";
import App from "@/App";
import router from "@/routes";
import DateFilter from "@/filters/date";
import store from "@/store";

Vue.config.productionTip = false;
// Vue.use(VueResource);
Vue.filter("date", DateFilter);

// Vue.http.headers.common["x-user-name"] = "objque@gmail.com";

new Vue({
    store,
    router,
    render: (h) => h(App),
}).$mount("#app");
