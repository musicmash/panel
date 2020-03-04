<template>
    <div class="col-lg-3 col-md-4 col-6 mb-4 release">
        <div class="release-poster">
            <img class="release-poster-img" :src="release.poster|resizeImage('264x264')" alt="">
            <img class="release-poster-blur" :src="release.poster|resizeImage('76x76')" alt="">
        </div>
        <div class="release-details">
            <div class="release-date">
                <span>{{release.released | formatDate}}</span>
            </div>
            <div class="release-explicit" v-if="release.explicit">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 9"><path d="M3.9 7h1.9c.4 0 .7-.2.7-.5s-.3-.4-.7-.4H4.1V4.9h1.5c.4 0 .7-.1.7-.4 0-.3-.3-.5-.7-.5H4.1V2.9h1.7c.4 0 .7-.2.7-.5 0-.2-.3-.4-.7-.4H3.9c-.6 0-.9.3-.9.7v3.7c0 .3.3.6.9.6zM1.6 0h5.8C8.5 0 9 .5 9 1.6v5.9C9 8.5 8.5 9 7.4 9H1.6C.5 9 0 8.5 0 7.4V1.6C0 .5.5 0 1.6 0z" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
            </div>
            <div class="release-title">
                <span>{{release.title}}</span>
            </div>
            <span class="release-info-prefix">by</span>&nbsp;<a class="release-artist" href="#">{{release.artist_name}}</a>
            <div class="release-link">
                <span class="release-info-prefix">Listen on&nbsp;</span>
                <a v-if="release.itunes_id.length != ''" :href="'itmss://music.apple.com/us/' + release.type + '/' + release.itunes_id"><i class="fab fa-apple"></i></a>
                <a v-if="release.spotify_id.length != ''" :href="'spotify:album:' + release.spotify_id"><i class="fab fa-apple"></i></a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'release',
  props: {
    release: Object
  },
  filters: {
    resizeImage(value, to) {
        return value.replace("500x500", to);
    },
    formatDate(value) {
        return new Date(value).toLocaleDateString();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.release {
    box-sizing: border-box;
    max-width: 264px;
    max-height: auto;
}
.release:hover {
    max-height: 400px;
    position: relative;
    z-index: 1;
}
.release-poster {
    width: 249px;
    height: 249px;
    max-width: inherit;
    max-height: inherit;
    border-radius: 4px;
    display: inline-block;
    transition: transform .2s;
    transform: scale(1);
}
.release-poster-blur {
    margin-top:-300px;
    width:249px;
    height:249px;
    z-index: -1;
    visibility: hidden;
}
.release-poster-img {
    width: 234px;
    height: 234px;
    margin: 7px;
    border-radius: 4px;
    overflow: hidden;
    position: relative;
    -webkit-transform: translateZ(0);
            transform: translateZ(0);
    vertical-align: top;
    transition: transform .2s;
    z-index: 1;
}
.release-poster:hover {
    transition: transform .2s;
    transform: scale(1.03);
}
.release-poster:hover .release-poster-blur {
    transform: scale(.90) translateY(calc(4% + 14px)) translateZ(0);
    -webkit-filter: blur(30px) brightness(130%);
    filter: blur(30px) brightness(130%);
    opacity: .55;
    visibility: visible;
}
.release-details {
    margin-top: -15px;
    margin-left: 6px;
}
.release-info-prefix {
    color: #9DA2A4;
}
.release-explicit {
    fill: #fff;
    background-color: #151515;
    width: 12px;
    margin-bottom: 3px;
}
.release-title {
    font-weight: 700;
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: var(--text-primary);
    width: 240px;
}
.release-artist {
    line-height: 17px;
    font-size: 12px;
}
.release-date {
    color: #9DA2A4;
}
.release-link {
    color: var(--text-primary);
    text-decoration: none;
}
</style>