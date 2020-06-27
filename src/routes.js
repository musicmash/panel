import Vue from "vue";
import VueRouter from "vue-router";
import ReleaseCalendar from "@/pages/discover/release-calendar";
import ReleaseCalendarDetails from "@/pages/discover/release-calendar/details";
import Subscriptions from "@/pages/browse/subscriptions";
import AllReleases from "@/pages/all-releases";
import MainPage from "@/pages/main";
import FeedPage from "@/pages/feed";
import LoginPage from "@/pages/login"
import JoinPage from "@/pages/join"
import ResetPage from "@/pages/reset"
import * as firebase from "firebase/app";
import "firebase/auth";

Vue.use(VueRouter);

const routes = [
    {
        path: "",
        component: MainPage,
        meta: {
            showFeedIfAuth: true,
        }
    },
    {
        name: "login",
        path: "/login",
        component: LoginPage,
        meta: {
            showFeedIfAuth: true,
        }
    },
    {
        name: "join",
        path: "/join",
        component: JoinPage,
        meta: {
            showFeedIfAuth: true,
        }
    },
    {
        name: "reset",
        path: "/reset",
        component: ResetPage,
        meta: {
            showFeedIfAuth: true,
        }
    },
    {
        name: "feed",
        path: "/feed",
        component: FeedPage,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/all-releases",
        component: AllReleases,
    },
    {
        path: "/discover/release-calendar",
        component: ReleaseCalendar,
        redirect: "/discover/release-calendar/jan",
        children: [{
            path: ":month",
            component: ReleaseCalendarDetails,
        }],
    },
    {
        path: "/browse/subscriptions",
        component: Subscriptions,
    },
]

const router =  new VueRouter({
    routes,
    mode: "history",
});

router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    const showFeedIfAuth = to.matched.some(record => record.meta.showFeedIfAuth);
    const isAuthenticated = firebase.auth().currentUser;
    if (requiresAuth && !isAuthenticated)
        next("/login");
    else if (showFeedIfAuth && isAuthenticated)
        next("/feed");
    else
        next();
});

export default router;
