<template>
    <div class="release">
        <div class="release-poster">
            <img
                class="release-poster-img"
                :src="release.poster"
                alt=""
            />
            <ul class="action">
                <li class="action-item">
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
import moment from "moment";

export default {
    name: "release",
    props: {
        release: Object,
    },
    computed: {
        linkOnSpotify() {
            return `spotify:album:${this.release.spotify_id}`;
        },
    },
    filters: {
        date(date) {
            return moment(date).format("MMMM D, YYYY");
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
