<template>
    <div>
        <div class="row">
            <h1 class="heading mx-4">This week</h1>
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
</template>

<script>
import release from '@/components/release.vue'
import releaseMixin from '@/mixins/releases'
import loaderMixin from '@/mixins/infinity-loader'

export default {
    mixins: [releaseMixin, loaderMixin],
    mounted() {
        this.loadWeeklyReleases();
    },
    components: {
        release
    }
}
</script>

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
</style>
