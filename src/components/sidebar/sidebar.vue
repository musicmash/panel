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
                        <a href="#" class="mt-2">Last 30 days</a>
                    </li>
                    <li>
                        <a href="#">This week</a>
                    </li>
                    <li>
                        <a href="#">Next week</a>
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
export default {
    name: "sidebar",
    data() {
        return {
            isActive: false,
        }
    },
    methods: {
        collapse: function() {
            this.isActive = !this.isActive;
        }
    }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sidebar {
    min-width: 250px;
    max-width: 250px;
    background: #7386D5;
    color: #fff;
    transition: all 0.3s;
}
.sidebar.active {
    margin-left: -250px;
}
.sidebar .sidebar-header {
    padding: 20px;
    background: #6d7fcc;
}
.sidebar ul.components {
    padding: 20px 0;
}
.sidebar ul p {
    color: #fff;
    padding: 10px;
}
.sidebar ul li a {
    padding: 10px;
    font-size: 1.1em;
    display: block;
}
.sidebar ul li a:hover {
    color: #7386D5;
    background: #fff;
}
.sidebar ul li.active>a, a[aria-expanded="true"] {
    color: #fff;
    background: #6d7fcc;
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
    font-size: 0.9em !important;
    padding-left: 30px !important;
    background: #6d7fcc;
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
