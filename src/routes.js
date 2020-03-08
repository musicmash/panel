import VueRouter from 'vue-router'
// discover
import LastThirtyDays from './pages/discover/last-30-days'
import CurrentWeek from './pages/discover/this-week'
import NextWeek from './pages/discover/next-week'
import ReleaseCalendar from './pages/discover/release-calendar'
import ReleaseCalendarDetails from './pages/discover/release-calendar/details'
// browse
import Artists from './pages/browse/artists'
import Subscriptions from './pages/browse/subscriptions'
import Releases from './pages/browse/releases'
import MusicVideos from './pages/browse/music-videos'
// without group
import Home from './pages/home'
import AllReleases from './pages/all-releases'

export default new VueRouter({
  routes: [
    // without group
    {
      path: "",
      component: Home
    },
    // discover
    {
      path: "/all-releases",
      component: AllReleases
    },
    {
      path: "/discover/last-30-days",
      component: LastThirtyDays
    },
    {
      path: "/discover/this-week",
      component: CurrentWeek
    },
    {
      path: "/discover/next-week",
      component: NextWeek
    },
    {
      path: "/discover/release-calendar",
      component: ReleaseCalendar,
      redirect: "/discover/release-calendar/jan",
      children: [
        {
          path: ":month",
          component: ReleaseCalendarDetails
        }
      ]
    },
    // browse
    {
      path: "/browse/artists",
      component: Artists
    },
    {
      path: "/browse/subscriptions",
      component: Subscriptions
    },
    {
      path: "/browse/releases",
      component: Releases
    },
    {
      path: "/browse/music-videos",
      component: MusicVideos
    }
  ],
  mode: "history"
})