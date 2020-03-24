<template>
    <div>
        <div class="row">
            <div class="col-sm-12 col-lg-12">
                <h1 class="heading">Last 30 days</h1>
            </div>
        </div>
        <div class="row">
            <release
                v-for="release in releasesWithoutVideos"
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
        this.loadPastMonthReleases();
        this.subscribeOnScroll((offset, limit) => {
            this.loadNextReleases(offset, limit);
        })
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
