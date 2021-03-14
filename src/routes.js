import Vue from "vue";
import VueRouter from "vue-router";
import ReleasesPage from "@/views/Releases";
import SubscriptionsPage from "@/views/Subscriptions";
import store from "@/store";

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
        meta: {
            requiresAuth: true,
        },
    },
];

const router = new VueRouter({
    routes,
    mode: "history",
});

router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
    if (!requiresAuth || store.state.user.isAuthorized) {
        next();
        return;
    }

    next({ path: "/releases" });
});

export default router;
