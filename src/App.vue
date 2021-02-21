<template>
    <div>
        <navbar />
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
import NavBar from "@/components/navbar/NavBar";

export default {
    components: {
        navbar: NavBar,
    },
};
</script>

<style>
* {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif;
    letter-spacing: 0;
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
    -moz-font-feature-settings: "liga" on;
}
</style>
