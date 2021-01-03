<template>
    <div class="release">
        <div class="release-poster">
            <img
                class="release-poster-img"
                :src="release.poster | resizeImage('264x264')"
                alt=""
            />
            <ul class="action">
                <li class="action-item" v-if="releaseExistsOnAppleMusic">
                    <a class="action-item-btn" :href="linkOnAppleMusic">
                        <svg
                            class="svg-icon svg-icon-play"
                            focusable="false"
                            height="1em"
                            width="1em"
                            viewBox="0 0 12 12"
                            aria-hidden="true"
                        >
                            <path
                                fill-rule="evenodd"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="1"
                                d="M2.5.5v11l9-5.5z"
                            ></path>
                        </svg>
                    </a>
                </li>
                <li class="action-item" v-if="releaseExistsOnSpotify">
                    <a class="action-item-btn" :href="linkOnSpotify">
                        <svg
                            focusable="false"
                            aria-hidden="true"
                            width="24"
                            height="24"
                            xmlns="http://www.w3.org/2000/svg"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                        >
                            <path
                                d="M19.098 10.638c-3.868-2.297-10.248-2.508-13.941-1.387-.593.18-1.22-.155-1.399-.748-.18-.593.154-1.22.748-1.4 4.239-1.287 11.285-1.038 15.738 1.605.533.317.708 1.005.392 1.538-.316.533-1.005.709-1.538.392zm-.126 3.403c-.272.44-.847.578-1.287.308-3.225-1.982-8.142-2.557-11.958-1.399-.494.15-1.017-.129-1.167-.623-.149-.495.13-1.016.624-1.167 4.358-1.322 9.776-.682 13.48 1.595.44.27.578.847.308 1.286zm-1.469 3.267c-.215.354-.676.465-1.028.249-2.818-1.722-6.365-2.111-10.542-1.157-.402.092-.803-.16-.895-.562-.092-.403.159-.804.562-.896 4.571-1.045 8.492-.595 11.655 1.338.353.215.464.676.248 1.028zm-5.503-17.308c-6.627 0-12 5.373-12 12 0 6.628 5.373 12 12 12 6.628 0 12-5.372 12-12 0-6.627-5.372-12-12-12z"
                            />
                        </svg>
                    </a>
                </li>
                <li class="action-item" v-if="releaseExistsOnSpotify">
                    <a class="action-item-btn" :href="linkOnSpotify">
                        <svg
                            class="svg-icon svg-icon-play"
                            focusable="false"
                            height="1em"
                            width="1em"
                            viewBox="0 0 12 12"
                            aria-hidden="true"
                        >
                            <path
                                fill-rule="evenodd"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="1"
                                d="M2.5.5v11l9-5.5z"
                            ></path>
                        </svg>
                    </a>
                </li>
                <li class="action-item" v-if="releaseExistsOnDeezer">
                    <a class="action-item-btn" :href="linkOnDeezer">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            width="12pt"
                            height="12pt"
                            viewBox="0 0 12 12"
                            version="1.1"
                        >
                            <path
                                style="
                                    stroke: none;
                                    fill-rule: nonzero;
                                    fill: rgb(0%, 0%, 0%);
                                    fill-opacity: 1;
                                "
                                d="M 9 1.5 L 9 2.25 L 10.5 2.25 L 10.5 1.5 Z M 5.25 2.625 L 5.25 3.375 L 6.75 3.375 L 6.75 2.625 Z M 9 2.625 L 9 3.375 L 10.5 3.375 L 10.5 2.625 Z M 5.25 3.75 L 5.25 4.5 L 6.75 4.5 L 6.75 3.75 Z M 9 3.75 L 9 4.5 L 10.5 4.5 L 10.5 3.75 Z M 5.25 4.875 L 5.25 5.625 L 6.75 5.625 L 6.75 4.875 Z M 9 4.875 L 9 5.625 L 10.5 5.625 L 10.5 4.875 Z M 1.5 6 L 1.5 6.75 L 3 6.75 L 3 6 Z M 5.25 6 L 5.25 6.75 L 6.75 6.75 L 6.75 6 Z M 7.125 6 L 7.125 6.75 L 8.625 6.75 L 8.625 6 Z M 9 6 L 9 6.75 L 10.5 6.75 L 10.5 6 Z M 1.5 7.125 L 1.5 7.875 L 3 7.875 L 3 7.125 Z M 3.375 7.125 L 3.375 7.875 L 4.875 7.875 L 4.875 7.125 Z M 5.25 7.125 L 5.25 7.875 L 6.75 7.875 L 6.75 7.125 Z M 7.125 7.125 L 7.125 7.875 L 8.625 7.875 L 8.625 7.125 Z M 9 7.125 L 9 7.875 L 10.5 7.875 L 10.5 7.125 Z M 1.5 8.25 L 1.5 9 L 3 9 L 3 8.25 Z M 3.375 8.25 L 3.375 9 L 4.875 9 L 4.875 8.25 Z M 5.25 8.25 L 5.25 9 L 6.75 9 L 6.75 8.25 Z M 7.125 8.25 L 7.125 9 L 8.625 9 L 8.625 8.25 Z M 9 8.25 L 9 9 L 10.5 9 L 10.5 8.25 Z M 1.5 9.375 L 1.5 10.125 L 3 10.125 L 3 9.375 Z M 3.375 9.375 L 3.375 10.125 L 4.875 10.125 L 4.875 9.375 Z M 5.25 9.375 L 5.25 10.125 L 6.75 10.125 L 6.75 9.375 Z M 7.125 9.375 L 7.125 10.125 L 8.625 10.125 L 8.625 9.375 Z M 9 9.375 L 9 10.125 L 10.5 10.125 L 10.5 9.375 Z M 9 9.375 "
                            />
                        </svg>
                    </a>
                </li>
            </ul>
        </div>
        <div class="release-details">
            <div class="release-title">
                <span v-if="release.explicit">🅴&nbsp;</span>
                <span>{{ release.title }}</span>
            </div>
            <div class="release-artist">
                <span>by&nbsp;</span>
                <a href="#" class="release-artist-link">{{
                    release.artist_name
                }}</a>
            </div>
            <div class="release-date">
                <span>on&nbsp;</span>
                <span>{{ release.released | date }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "release",
    props: {
        release: Object,
    },
    computed: {
        releaseExistsOnAppleMusic() {
            return this.release.itunes_id != null;
        },
        linkOnAppleMusic() {
            return `itmss://music.apple.com/us/${this.release.type}/${this.release.itunes_id}`;
        },
        releaseExistsOnSpotify() {
            return this.release.spotify_id != null;
        },
        linkOnSpotify() {
            return `spotify:album:${this.release.spotify_id}`;
        },
        releaseExistsOnDeezer() {
            return this.release.deezer_id != null;
        },
        linkOnDeezer() {
            return `https://deezer.com/en/${this.release.type}/${this.release.deezer_id}`;
        },
    },
    filters: {
        resizeImage(value, to) {
            return value.replace("500x500", to);
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.release {
    /* max-width: 264px; */
    /* max-height: auto; */
    width: 295px;
}
.release-poster {
    height: 264px;
    width: 264px;
    box-shadow: rgba(32, 32, 32, 0.2) 0px 0px 15px;
    opacity: 1;
    cursor: pointer;
}
.release-poster-img {
    height: 264px;
    width: 264px;
    object-fit: cover;
    border-radius: 8px;
    -webkit-transition-duration: 0.1s;
    transition-duration: 0.1s;
    -webkit-transition-property: opacity;
    transition-property: opacity;
    -webkit-transition-timing-function: ease-in;
    transition-timing-function: ease-in;
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
    -webkit-transition-duration: 0.15s;
    transition-duration: 0.15s;
    -webkit-transition-property: opacity;
    transition-property: opacity;
}
.action-item {
    opacity: 1;
    display: inline-block;
    vertical-align: top;
}
.action-item:nth-child(1n + 2) {
    margin-left: 10px;
    opacity: 0;
    -webkit-transition-duration: 0.15s;
    transition-duration: 0.15s;
    -webkit-transition-property: opacity, -webkit-transform;
    transition-property: opacity, -webkit-transform;
    transition-property: opacity, transform;
    transition-property: opacity, transform, -webkit-transform;
}
.action-item-btn {
    opacity: 1;
    background-color: #fff;
    border: none;
    border-radius: 50%;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.25);
    -webkit-box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.25);
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
    -webkit-transition-duration: 0.15s;
    transition-duration: 0.15s;
    -webkit-transition-property: opacity, -webkit-transform;
    transition-property: opacity, -webkit-transform;
    transition-property: opacity, transform;
    transition-property: opacity, transform, -webkit-transform;
    z-index: 1;
}
.release > .release-poster:hover > .release-poster-img {
    opacity: 0.7;
    cursor: pointer;
}
.release > .release-poster > .action > .action-item > .action-item-btn:hover {
    cursor: pointer;
    transform: scale3d(1.2, 1.2, 1.2);
    -webkit-transform: scale3d(1.2, 1.2, 1.2);
}
.release > .release-poster:hover > .action > .action-item:nth-child(1n + 2) {
    opacity: 1;
    -webkit-transition-duration: 0.15s;
    transition-duration: 0.15s;
    -webkit-transition-property: opacity, -webkit-transform;
    transition-property: opacity, -webkit-transform;
    transition-property: opacity, transform;
    transition-property: opacity, transform, -webkit-transform;
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
    color: #9da2a4;
    margin-top: 3px;
}
.release-artist-link {
    background-image: none;
}
.release-artist-link:hover {
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
    color: #9da2a4;
    margin-top: 3px;
}
</style>
