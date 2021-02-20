<template>
    <div class="card is-shadowless">
        <div class="card-image">
            <figure class="image is-square">
                <a class="action-item-btn" :href="linkOnSpotify">
                    <img
                        class="is-slightly-rounded is-slightly-shadowed is-release-poster"
                        :src="release.poster"
                        :alt="release.title"
                    />
                </a>
            </figure>
        </div>

        <div class="card-content p-0 pt-2">
            <div class="content">
                <div class="has-ellipsis has-text-weight-bold">
                    <div
                        class="explicit mr-1"
                        v-if="release.explicit"
                        aria-label="Explicit"
                        role="img"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 9 9"
                            class="glyph"
                            aria-hidden="true"
                        >
                            <path
                                d="M3.9 7h1.9c.4 0 .7-.2.7-.5s-.3-.4-.7-.4H4.1V4.9h1.5c.4 0 .7-.1.7-.4 0-.3-.3-.5-.7-.5H4.1V2.9h1.7c.4 0 .7-.2.7-.5 0-.2-.3-.4-.7-.4H3.9c-.6 0-.9.3-.9.7v3.7c0 .3.3.6.9.6zM1.6 0h5.8C8.5 0 9 .5 9 1.6v5.9C9 8.5 8.5 9 7.4 9H1.6C.5 9 0 8.5 0 7.4V1.6C0 .5.5 0 1.6 0z"
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                    </div>
                    <span class="is-release-title">{{ release.title }}</span>
                </div>

                <div class="has-ellipsis is-release-artist">
                    <span class="has-text-weight-light mr-1">by</span>
                    <a class="has-text-weight-medium" href="#">{{
                        release.artist_name
                    }}</a>
                </div>

                <div
                    v-if="showReleaseDate"
                    class="is-release-date has-text-weight-light"
                >
                    <span class="mr-1">on</span>
                    <span>{{ release.released | date }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import moment from "moment";

export default {
    props: {
        release: Object,
        showReleaseDate: Boolean,
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

<style scoped>
.explicit {
    display: inline-block;
    vertical-align: middle;
    line-height: initial;
}

.glyph {
    width: 15px;
    height: 15px;
    vertical-align: baseline;
    fill: rgb(174, 174, 178);
}

.is-slightly-rounded {
    border-radius: 2%;
}

.is-slightly-shadowed {
    box-shadow: 0 0 12px rgba(32, 32, 32, 0.2);
}

.is-release-poster {
    object-fit: cover;
    border-radius: 8px;
    -webkit-transition-duration: 0.1s;
    transition-duration: 0.1s;
    -webkit-transition-property: opacity;
    transition-property: opacity;
    -webkit-transition-timing-function: ease-in;
    transition-timing-function: ease-in;
}

.is-release-poster:hover {
    opacity: 0.7;
}

.is-release-title {
    font-size: 15px;
    color: #4a4a4a;
}

.is-release-artist {
    font-size: 14px;
}

.is-release-date {
    font-size: 13px;
    font-weight: 400;
}

.has-ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
</style>
