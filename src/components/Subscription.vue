<template>
    <div class="card is-shadowless">
        <figure class="image is-1by1">
            <a href="#">
                <img
                    class="is-rounded is-slightly-shadowed is-subscription-poster"
                    :src="subscription.artist_poster"
                    :alt="subscription.artist_name"
                />
            </a>
        </figure>

        <div class="card-content p-0 pt-2">
            <div class="content">
                <div
                    class="has-ellipsis has-text-centered is-subscription-artist"
                >
                    <a class="has-text-weight-medium" href="#">
                        {{ subscription.artist_name }}
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "subscription",
    props: {
        subscription: Object,
    },
};
</script>

<style scoped>
.is-subscription-artist {
    font-size: 14px;
}

.is-slightly-shadowed {
    box-shadow: 0 0 12px rgba(32, 32, 32, 0.2);
}

.is-subscription-poster {
    object-fit: cover;
    -webkit-transition-duration: 0.1s;
    transition-duration: 0.1s;
    -webkit-transition-property: opacity;
    transition-property: opacity;
    -webkit-transition-timing-function: ease-in;
    transition-timing-function: ease-in;
}

.is-subscription-poster:hover {
    opacity: 0.7;
}
</style>
