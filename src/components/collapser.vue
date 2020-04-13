<template>
    <button
        class="btn btn-link p-0 collapser"
        type="button"
        v-on:click="$emit('click')"
    >
        <svg
            class="svg-icon"
            width="100%"
            height="100%"
            version="1.1"
            viewBox="0 0 25 25"
            x="0px"
            y="0px"
        >
            <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
        </svg>
    </button>
</template>

<script>
export default {
    name: "colapser",
};
</script>

<style scoped>
.collapser {
    width: 40px;
    height: 40px;
    min-width: 40px;
    min-height: 40px;
    display: block;
    background-color: #191a1b;
}
.collapser:hover {
    background-color: #404040;
}
.svg-icon {
    width: 20px;
    height: 20px;
    fill: white;
}
</style>
