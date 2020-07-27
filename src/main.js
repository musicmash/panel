import Vue from "vue";
import VueResource from "vue-resource";
import App from "@/App";
import router from "@/routes";
import DateFilter from "@/filters/date";
import store from "@/store";
import firebase from "firebase/app";
import "firebase/auth";

Vue.config.productionTip = false;
Vue.use(VueResource);
Vue.filter("date", DateFilter);

Vue.http.headers.common["x-user-name"] = "objque@gmail.com";

const firebaseConfig = {
    apiKey: "AIzaSyDZRrYAaQ7NtIqPbHL-HGS08oMv_RDetb8",
    authDomain: "musicmash-1547666786685.firebaseapp.com",
    databaseURL: "https://musicmash-1547666786685.firebaseio.com",
    projectId: "musicmash-1547666786685",
    storageBucket: "musicmash-1547666786685.appspot.com",
    messagingSenderId: "298417745757",
    appId: "1:298417745757:web:3725debd2fd3ab78f7c2b4"
};

firebase.initializeApp(firebaseConfig);

// replace with mutex if it's possible
let app;
firebase.auth().onAuthStateChanged(() => {
    if (!app) {
        app = new Vue({
            render: (h) => h(App),
            router: router,
            store: store,
        }).$mount("#app");
    }
});
