<template>
    <div class="card is-shadowless">
        <div class="card-image">
            <figure class="image">
                <a class="action-item-btn" :href="linkOnSpotify">
                    <img
                        class="is-slightly-rounded"
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
                    <span class="is-size-6">{{ release.title }}</span>
                </div>

                <div class="has-ellipsis">
                    <span class="has-text-weight-light is-size-7 mr-1">by</span>
                    <a class="has-text-weight-medium is-size-6" href="#">{{
                        release.artist_name
                    }}</a>
                </div>

                <div v-if="showReleaseDate">
                    <span class="has-text-weight-light is-size-7 mr-1">on</span>
                    <span class="has-text-weight-medium is-size-6">{{
                        release.released | date
                    }}</span>
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

.has-ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
</style>
