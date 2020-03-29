<template>
    <div>
        <div class="row">
            <div class="col-sm-12 col-lg-12">
                <h1 class="heading">This week</h1>
            </div>
        </div>
        <div class="row">
            <release
                class="col-3 mr-5 mb-5"
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
