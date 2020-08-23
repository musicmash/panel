<template>
    <div class="text-center">
        <img
            alt="No content available"
            class="empty"
            src="@/assets/empty.png"
        />
        <h4>{{ text }}</h4>
    </div>
</template>

<script>
export default {
    props: {
        text: String,
    },
};
</script>

<style scoped>
.empty {
    max-width: 300px;
    min-height: 225px;
}
</style>
