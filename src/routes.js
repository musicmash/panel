import VueRouter from "vue-router";
import ReleaseCalendar from "@/pages/discover/release-calendar";
import ReleaseCalendarDetails from "@/pages/discover/release-calendar/details";
import Subscriptions from "@/pages/browse/subscriptions";
import AllReleases from "@/pages/all-releases";
import MainPage from "@/pages/main";
import FeedPage from "@/pages/feed";

export default new VueRouter({
    routes: [
        {
            path: "",
            component: MainPage,
        },
        {
            path: "/feed",
            component: FeedPage,
        },
        {
            path: "/all-releases",
            component: AllReleases,
        },
        {
            path: "/discover/release-calendar",
            component: ReleaseCalendar,
            redirect: "/discover/release-calendar/jan",
            children: [
                {
                    path: ":month",
                    component: ReleaseCalendarDetails,
                },
            ],
        },
        {
            path: "/browse/subscriptions",
            component: Subscriptions,
        },
    ],
    mode: "history",
});
