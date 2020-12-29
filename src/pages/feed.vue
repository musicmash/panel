<template>
    <div>
        <navbar />

        <b-tabs class="block" position="is-centered">
            <!-- <b-tab-item label="Feed"></b-tab-item> -->
            <!-- <b-tab-item label="Subscriptions"></b-tab-item> -->
            <!-- <b-tab-item label="Settings"></b-tab-item> -->
        </b-tabs>

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

        <a class="btn-scroll-top show" href="#top" data-scroll="">
            <span class="btn-scroll-top-tooltip text-muted font-size-sm mr-2"
                >Top</span
            >
            <i class="btn-scroll-top-icon fe-arrow-up">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-arrow-up"
                >
                    <line x1="12" y1="19" x2="12" y2="5"></line>
                    <polyline points="5 12 12 5 19 12"></polyline>
                </svg>
            </i>
        </a>
    </div>
</template>

<script>
import NavBar from "@/components/navbar/NavBar";
import release from "@/components/release";
import observer from "@/components/observer";
import { mapState } from "vuex";

export default {
    computed: mapState({
        releases: (state) => state.releases.batch,
    }),
    components: {
        navbar: NavBar,
        release,
        observer,
    },
    methods: {
        load() {
            this.$store.dispatch("releases/loadNextFeed");
        },
        intersected() {
            this.load();
        },
    },
};
</script>

<style>
.btn-scroll-top.show {
    right: 1.25rem;
    opacity: 1;
}
.btn-scroll-top {
    display: block;
    position: fixed;
    right: -4.125rem;
    bottom: 1.25rem;
    width: 2.75rem;
    height: 2.75rem;
    transition: right 400ms cubic-bezier(0.68, -0.55, 0.265, 1.55), opacity 0.3s,
        background-color 0.25s ease-in-out;
    border-radius: 0.75rem;
    background-color: rgba(55, 56, 78, 0.25);
    color: #fff;
    text-align: center;
    opacity: 0;
    z-index: 1025;
}
.btn-scroll-top .btn-scroll-top-tooltip {
    position: absolute;
    top: 50%;
    right: 100%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    transition: opacity 0.25s ease-in-out, visibility 0.25s ease-in-out;
    visibility: hidden;
    opacity: 0;
}
.font-size-sm {
    font-size: 0.875rem !important;
}
.text-muted {
    color: #9e9fb4 !important;
}
.btn-scroll-top > .btn-scroll-top-icon {
    font-size: 1.125rem;
    font-weight: bold;
    line-height: 2.625rem;
}
[class^="fe-"],
[class*=" fe-"] {
    display: inline-block;
    font-family: "feather" !important;
    speak: none;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    vertical-align: middle;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>
