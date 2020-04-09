<template>
    <div class="wrapper">
        <sidebar ref="sidebar" />
        <div class="content">
            <div class="mx-3 p-0 d-md-none">
                <button
                    class="btn btn-info"
                    type="button"
                    v-on:click="$refs.sidebar.toggle()"
                >
                    Toggle Filters
                </button>
            </div>

            <div class="p-0">
                <h1 class="header ml-3 d-inline">{{ filter }}</h1>
                <h1 class="sub-header ml-2 d-inline align-center">({{ releases.length }} results)</h1>
            </div>

            <div class="releases">
                <div class="row">
                    <release
                        class="col-3 mx-3 mb-4 p-0"
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
        filter: state => state.releases.filter,
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

.header {
    font-size: 50px;
    font-weight: 700;
}
.sub-header {
    color: #7a7a7a;
    font-size: 35px;
    font-weight: 700;
}
</style>
