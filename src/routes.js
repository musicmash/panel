import Vue from "vue";
import VueRouter from "vue-router";
import "firebase/auth";
import ReleasesPage from "@/pages/ReleasesPage";

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
];

const router = new VueRouter({
    routes,
    mode: "history",
});

export default router;
