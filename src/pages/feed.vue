<template>
    <div>
        <div class="container-fluid">
            <div class="container">
                <ul class="nav nav-tabs justify-content-center mb-4">
                    <li class="nav-item">
                      <a class="nav-link active" href="#!">Recent</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#!">Daily</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#!">Weekly</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#!">Monthly</a>
                    </li>
                    <!-- <li class="nav-item"> -->
                      <!-- <a class="nav-link disabled" href="#!">Disabled</a> -->
                    <!-- </li> -->
                  </ul>
            </div>
        </div>
        <div class="container">
            <div class="row justify-content-center my-3">
                <release
                    class="mr-3 mb-3 p-0"
                    v-for="release in releases"
                    :release="release"
                    :text="release"
                    :key="release.id"
                >
                </release>
                <observer v-on:intersect="intersected"></observer>
            </div>
        </div>
    </div>
</template>

<script>
import release from "@/components/release";
import observer from "@/components/observer";
import { mapState } from "vuex";

export default {
    computed: mapState({
        releases: (state) => state.releases.batch,
    }),
    components: {
        release,
        observer,
    },
    methods: {
        load: function () {
            this.$store.dispatch("releases/loadNextFeed");
        },
        intersected: function () {
            this.load();
        },
    },
};
</script>

<style>
.nav-tabs {
    border-bottom: 1px solid #e3ebf6;
}
.nav-tabs .nav-item:first-child {
    margin-left: 0;
}
.nav-tabs .nav-item {
    margin-left: .75rem;
    margin-right: .75rem;
}
.nav-tabs .nav-item.show .nav-link, .nav-tabs .nav-link.active {
    color: #12263f;
    background-color: transparent;
    border-color: transparent transparent #2c7be5;
}
.nav-tabs .nav-link {
    padding: 1rem 0;
    border-bottom: 1px solid transparent;
        border-bottom-color: transparent;
    border-left-width: 0;
    border-right-width: 0;
    border-top-width: 0;
}
.nav-tabs .nav-link {
    border: 1px solid transparent;
        border-top-color: transparent;
        border-top-width: 1px;
        border-right-color: transparent;
        border-right-width: 1px;
        border-bottom-color: transparent;
        border-bottom-style: solid;
        border-bottom-width: 1px;
        border-left-color: transparent;
        border-left-width: 1px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;

    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
}
.nav-tabs .nav-link:not(.active) {
    color:#95aac9;
    border: 0px;
}
.nav-tabs .nav-link:not(.active):hover {
    color:#6e84a3;
}
</style>
