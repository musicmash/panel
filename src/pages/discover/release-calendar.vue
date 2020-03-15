<template>
    <div>
        <div class="row">
            <div class="col-sm-12 col-lg-12">
                <h1 class="heading">Release calendar</h1>
            </div>
        </div>
        <div class="row">
            <nav class="navbar navbar-expand p-0 pb-4">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link
                            class="nav-link calendar-month p-0 ml-3"
                            active-class="calendar-month-active"
                            to="/discover/release-calendar/jan"
                        >Jan</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link
                            class="nav-link calendar-month p-0"
                            active-class="calendar-month-active"
                            to="/discover/release-calendar/feb"
                        >Feb</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link
                            class="nav-link calendar-month p-0"
                            active-class="calendar-month-active"
                            to="/discover/release-calendar/mar"
                        >Mar</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link
                            class="nav-link calendar-month p-0"
                            active-class="calendar-month-active"
                            to="/discover/release-calendar/apr"
                        >Apr</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link
                            class="nav-link calendar-month p-0"
                            active-class="calendar-month-active"
                            to="/discover/release-calendar/may"
                        >May</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link
                            class="nav-link calendar-month p-0"
                            active-class="calendar-month-active"
                            to="/discover/release-calendar/jun"
                        >Jun</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link
                            class="nav-link calendar-month p-0"
                            active-class="calendar-month-active"
                            to="/discover/release-calendar/jul"
                        >Jul</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link
                            class="nav-link calendar-month p-0"
                            active-class="calendar-month-active"
                            to="/discover/release-calendar/aug"
                        >Aug</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link
                            class="nav-link calendar-month p-0"
                            active-class="calendar-month-active"
                            to="/discover/release-calendar/sep"
                        >Sep</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link
                            class="nav-link calendar-month p-0"
                            active-class="calendar-month-active"
                            to="/discover/release-calendar/oct"
                        >Oct</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link
                            class="nav-link calendar-month p-0"
                            active-class="calendar-month-active"
                            to="/discover/release-calendar/nov"
                        >Nov</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link
                            class="nav-link calendar-month p-0"
                            active-class="calendar-month-active"
                            to="/discover/release-calendar/dec"
                        >Dec</router-link>
                    </li>
                </ul>
            </nav>
        </div>
        <router-view></router-view>
    </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.heading {
    margin-top: 20px;
    margin-bottom: 20px;
    box-sizing: border-box;
    font-size: 72px;
    line-height: 74px;
    font-weight: 700;
}
.calendar {
    width: 100%;
}
.calendar-month {
    font-size: 18px;
    line-height: normal;
    font-weight: 400;
    width: auto;
    padding-bottom: 1px;
    margin-right: 16px;
    border-bottom: 1px solid transparent;
    color: hsla(0,0%,100%,.4);
    cursor: pointer;
    -webkit-transition: all .3s; transition: all .3s;
}
.calendar-month:hover {
    border-color: #fff;
}
.calendar-month-active {
    color: #fff;
    border-color: #fff;
    cursor: default;
}
</style>
