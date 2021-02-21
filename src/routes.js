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

    // FIXME:
    //   If user has valid auth cookie and opens path that requires authentication
    //   then he will be redirected to the home (releases) page,
    //   instead of desired page.
    //
    //   To fix this we should wait until store's user.isAuthorizing property
    //   will be changed to false. (e.g with promise)
    next({ path: "/releases" });
});

export default router;
