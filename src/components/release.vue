<template>
    <div class="release">
        <div class="release-poster">
            <img class="release-poster-img" :src="release.poster|resizeImage('264x264')" alt="">
            <ul class="action">
                <li class="action-item" v-if="releaseExistsOnAppleMusic">
                    <a class="action-item-btn" :href="linkOnAppleMusic">
                        <svg class="svg-icon svg-icon-play" focusable="false" height="1em" width="1em" viewBox="0 0 12 12" aria-hidden="true">
                            <path fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M2.5.5v11l9-5.5z"></path>
                        </svg>
                    </a>
                </li>
                <li class="action-item" v-if="releaseExistsOnSpotify">
                    <a class="action-item-btn" :href="linkOnSpotify">
                        <svg focusable="false" aria-hidden="true" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                            <path d="M19.098 10.638c-3.868-2.297-10.248-2.508-13.941-1.387-.593.18-1.22-.155-1.399-.748-.18-.593.154-1.22.748-1.4 4.239-1.287 11.285-1.038 15.738 1.605.533.317.708 1.005.392 1.538-.316.533-1.005.709-1.538.392zm-.126 3.403c-.272.44-.847.578-1.287.308-3.225-1.982-8.142-2.557-11.958-1.399-.494.15-1.017-.129-1.167-.623-.149-.495.13-1.016.624-1.167 4.358-1.322 9.776-.682 13.48 1.595.44.27.578.847.308 1.286zm-1.469 3.267c-.215.354-.676.465-1.028.249-2.818-1.722-6.365-2.111-10.542-1.157-.402.092-.803-.16-.895-.562-.092-.403.159-.804.562-.896 4.571-1.045 8.492-.595 11.655 1.338.353.215.464.676.248 1.028zm-5.503-17.308c-6.627 0-12 5.373-12 12 0 6.628 5.373 12 12 12 6.628 0 12-5.372 12-12 0-6.627-5.372-12-12-12z"/>
                        </svg>
                    </a>
                </li>
                <li class="action-item" v-if="releaseExistsOnSpotify">
                    <a class="action-item-btn" :href="linkOnSpotify">
                        <svg class="svg-icon svg-icon-play" focusable="false" height="1em" width="1em" viewBox="0 0 12 12" aria-hidden="true">
                            <path fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M2.5.5v11l9-5.5z"></path>
                        </svg>
                    </a>
                </li>
            </ul>
            <!-- <img class="release-poster-blur" :src="release.poster|resizeImage('76x76')" alt=""> -->
        </div>
        <div class="release-details">
            <div class="release-title">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 9 9"
                    class="release-explicit"
                    v-if="release.explicit"
                >
                    <path d="M3.9 7h1.9c.4 0 .7-.2.7-.5s-.3-.4-.7-.4H4.1V4.9h1.5c.4 0 .7-.1.7-.4 0-.3-.3-.5-.7-.5H4.1V2.9h1.7c.4 0 .7-.2.7-.5 0-.2-.3-.4-.7-.4H3.9c-.6 0-.9.3-.9.7v3.7c0 .3.3.6.9.6zM1.6 0h5.8C8.5 0 9 .5 9 1.6v5.9C9 8.5 8.5 9 7.4 9H1.6C.5 9 0 8.5 0 7.4V1.6C0 .5.5 0 1.6 0z" fill-rule="evenodd" clip-rule="evenodd"></path>
                </svg>
                <span>{{release.title}}</span>
            </div>
            <div class="release-artist">
                <span>by&nbsp;</span>
                <a href="#" class="release-artist-link">{{release.artist_name}}</a>
            </div>
            <!-- <div class="release-link">
                <span class="release-info-prefix">Listen on&nbsp;</span>
                <a v-if="release.itunes_id.length != ''" :href="'itmss://music.apple.com/us/' + release.type + '/' + release.itunes_id"><i class="fab fa-apple"></i></a>
                <a v-if="release.spotify_id.length != ''" :href="'spotify:album:' + release.spotify_id"><i class="fab fa-spotify"></i></a>
            </div> -->
            <div class="release-date">
                <span>on&nbsp;</span>
                <span>{{release.released | date}}</span>
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
  computed: {
        releaseExistsOnAppleMusic: function() {
            return this.release.itunes_id != "";
        },
        linkOnAppleMusic: function() {
            return `itmss://music.apple.com/us/${this.release.type}/${this.release.itunes_id}`;
        },
        releaseExistsOnSpotify: function() {
            return this.release.spotify_id != "";
        },
        linkOnSpotify: function() {
            return `spotify:album:${this.release.spotify_id}`;
        }
  },
  filters: {
    resizeImage(value, to) {
        return value.replace("500x500", to);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.release {
    min-width: 300px;
    max-width: 300px;
    width: 300px;
    height: 370px;
}
.release-poster {
    height: 264px;
    width: 264px;
    opacity: 1;
    background-color: rgba(0,0,0, 1);
    cursor: pointer;
}
.release-poster-img {
    border-radius: 4px;
    -webkit-transition-duration:.1s;
    transition-duration:.1s;
    -webkit-transition-property:opacity;
    transition-property:opacity;
    -webkit-transition-timing-function:ease-in;
    transition-timing-function:ease-in
}
ul {
    list-style: none;
    margin: 0;
    padding: 0;
}
.action {
    opacity: 1;
    line-height: 1;
    position: relative;
    left: 15px;
    bottom: 51px;
    -webkit-transition-duration: .15s;
    transition-duration: .15s;
    -webkit-transition-property: opacity;
    transition-property: opacity;
}
.action-item {
    opacity: 1;
    display: inline-block;
    vertical-align: top;
}
.action-item-btn {
    opacity: 1;
    background-color: #fff;
    border: none;
    border-radius: 50%;
    box-shadow: 0 3px 6px 0 rgba(0,0,0,.25);
    -webkit-box-shadow: 0 3px 6px 0 rgba(0,0,0,.25);
    cursor: pointer;
    font-size: 12px;
    height: 36px;
    width: 36px;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    justify-content: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    -webkit-transition-duration:.15s;
    transition-duration:.15s;
    -webkit-transition-property:opacity,-webkit-transform;
    transition-property:opacity,-webkit-transform;
    transition-property:opacity,transform;
    transition-property:opacity,transform,-webkit-transform;
    z-index: 1;
}
.release > .release-poster:hover > .release-poster-img {
    opacity: 0.7;
    cursor: pointer;
}
.release > .release-poster > .action > .action-item > .action-item-btn:hover {
    cursor: pointer;
    transform: scale3d(1.2,1.2,1.2);
    -webkit-transform: scale3d(1.2,1.2,1.2);
}
.svg-icon {
    fill: black;
    stroke: black;
}
.release-details {
    height: inherit;
    width: inherit;
    padding-top: 8px;
}
.release-explicit {
    fill: #fff;
    background-color: #151515;
    width: 12px;
    height: 15px;
    margin-bottom: 2px;
    margin-right: 5px;
}
.release-title {
    font-size: 15px;
    font-weight: 600;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 264px;
}
.release-artist {
    font-size: 13px;
    font-weight: 500;
    line-height: 17px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 264px;
    color: #9DA2A4;
    margin-top: 3px;
}
.release-artist-link {
    color: white;
    background-image: none;
}
.release-artist-link:hover {
    color: white;
    text-decoration: underline;
}
.release-date {
    font-size: 13px;
    font-weight: 500;
    line-height: 17px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 264px;
    color: #9DA2A4;
    margin-top: 3px;
}
/* .release {
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
} */
</style>