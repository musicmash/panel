<template>
    <div class="wrapper">
        <sidebar ref="sidebar" />
        <div class="content">
            <nav class="navbar navbar-expand-lg navbar-dark p-0">
                <div class="navbar-content">
                    <button
                        class="btn btn-info"
                        type="button"
                        v-on:click="$refs.sidebar.collapse()"
                    >
                        Toggle Filters
                    </button>
                </div>
            </nav>

            <div class="releases">
                <div class="row">
                    <h1 class="heading mx-4">Last 30 days</h1>
                </div>
                <div class="row">
                    <release
                        class="col-3 mx-4 mb-4 p-0"
                        v-for="release in releases"
                        :release="release"
                        :key="release.id"
                    ></release>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import sidebar from '@/components/sidebar/sidebar'
import release from '@/components/release'
import { mapState } from 'vuex'

export default {
    computed: mapState({
        releases: state => state.releases.all,
    }),
    components: {
        sidebar,
        release
    },
    created() {
        this.$store.dispatch("releases/getPastMonthReleases");
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapper {
    display: flex;
    width: 100%;
    align-items: stretch;
}

.content {
    width: 100%;
    min-height: 100vh;
    transition: all 0.3s;
}

.navbar-content {
    padding-left: 1rem;
}

.releases {
    padding: .5rem 1rem;
}
</style>
