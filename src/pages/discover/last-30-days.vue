<template>
    <div>
        <div class="row">
            <div class="col-sm-12 col-lg-12">
                <h1 class="heading">Last 30 days</h1>
            </div>
        </div>
        <div class="row">
            <release
                :release="release"
            ></release>
        </div>
    </div>
</template>

<script>
import release from '../../components/release.vue'

export default {
    data() {
        return {
            "release": {
                "spotify_id": "",
                "deezer_id": "",
                "title": "All That Matters (feat. John Harris)",
                "type": "album",
                "released": "2020-03-06T00:00:00Z",
                "itunes_id": "1499647989",
                "id": 7002643,
                "artist_name": "Frontliner",
                "explicit": false,
                "poster": "https://is2-ssl.mzstatic.com/image/thumb/Music124/v4/2d/03/52/2d035219-1233-6319-84c1-a05790f28d22/8718857967682.png/500x500bb.jpeg",
                "artist_id": 227062
            }
        }
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
