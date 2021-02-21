import Vue from "vue";
import VueRouter from "vue-router";
import ReleasesPage from "@/views/Releases";
import SubscriptionsPage from "@/views/Subscriptions";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        redirect: "/releases",
    },
    {
        path: "/releases",
        component: ReleasesPage,
    },
    {
        path: "/subscriptions",
        component: SubscriptionsPage,
    },
];

const router = new VueRouter({
    routes,
    mode: "history",
});

export default router;
