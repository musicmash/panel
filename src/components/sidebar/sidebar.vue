<template>
    <nav class="sidebar" :class="{ active: isActive }">
        <div class="sidebar-header">
            <span>Filter releases</span>
        </div>

        <ul class="list-unstyled components">
            <li class="active">
                <a
                    class="dropdown-toggle"
                    data-toggle="collapse"
                    href="#when-dropdown"
                    role="button"
                    aria-expanded="false"
                    aria-controls="when-dropdown"
                >
                    When
                </a>
                <ul class="collapse list-unstyled show" id="when-dropdown">
                    <li>
                        <a href="#" :class="{ active: filterType=='last-30-days'}" v-on:click="getPastMonthReleases()" class="mt-2">
                            Last 30 days
                        </a>
                    </li>
                    <li>
                        <a href="#" :class="{ active: filterType=='this-week'}" v-on:click="getWeeklyReleases()">
                            This week
                        </a>
                    </li>
                    <li>
                        <a href="#" :class="{ active: filterType=='next-week'}" v-on:click="getNextWeekReleases()">
                            Next week
                        </a>
                    </li>
                    <li>
                        <router-link to="/discover/release-calendar">Calendar</router-link>
                    </li>
                </ul>
            </li>
            <li class="active mt-3">
                <a
                    class="dropdown-toggle"
                    data-toggle="collapse"
                    href="#type-dropdown"
                    role="button"
                    aria-expanded="false"
                    aria-controls="type-dropdown"
                >
                    Type
                </a>
                <ul class="collapse list-unstyled show" id="type-dropdown">
                    <li>
                        <a href="#" class="mt-2">Albums</a>
                    </li>
                    <li>
                        <a href="#">Music videos</a>
                    </li>
                </ul>
            </li>
        </ul>
    </nav>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: "sidebar",
    data() {
        return {
            isActive: false,
        }
    },
    computed: mapState({
        filterType: state => state.releases.filterType,
    }),
    methods: {
        // view
        collapse: function() {
            this.isActive = !this.isActive;
        },

        // api
        getPastMonthReleases: function() {
            this.$store.dispatch("releases/getPastMonthReleases");
        },
        getWeeklyReleases: function() {
            this.$store.dispatch("releases/getWeeklyReleases");
        },
        getNextWeekReleases: function() {
            this.$store.dispatch("releases/getNextWeekReleases");
        },
    }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sidebar {
    min-width: 250px;
    max-width: 250px;
    background: #1A1B1C;
    color: #C3BEB5;
    transition: all 0.3s;
}
.sidebar.active {
    margin-left: -250px;
}
.sidebar .sidebar-header {
    font-size: 17px;
    font-weight: bold;
    text-transform: uppercase;
    padding: .5rem 1rem;
    background: inherit;
    color: #C3BEB5;
}
.sidebar ul.components {
    padding: .5rem 1rem;
}
.sidebar ul li a {
    color: rgb(186, 181, 171);
    font-size: 16px;
    font-weight: 550;
    display: block;
    transition: none;
    text-decoration: none;
}
.sidebar ul li a:hover {
    color: #FFFFFF;
    background: #191A1B;
}
.sidebar .active {
    color: #FFFFFF;
    font-weight: 700;
    background: #191A1B;
}
.sidebar .active:hover {
    cursor: default;
}
.sidebar ul li.active>a, a[aria-expanded="true"] {
    background: inherit;
}
a[data-toggle="collapse"] {
    position: relative;
}
.dropdown-toggle::after {
    display: block;
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
}

ul ul a {
    height: 32px;
    line-height: 32px;
    font-size: 14px;
    margin-left: 20px !important;
    background: inherit;
}

@media (max-width: 768px) {
    .sidebar {
        margin-left: -250px;
    }
    .sidebar.active {
        margin-left: 0;
    }
    .sidebarCollapse span {
        display: none;
    }
}
</style>
