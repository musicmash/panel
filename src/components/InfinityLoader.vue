<template>
    <div></div>
</template>

<script>
export default {
    mounted() {
        window.onscroll = () => {
            const currentScrollPosition =
                document.documentElement.scrollTop + window.innerHeight;
            const viewHeight = document.documentElement.offsetHeight;

            // when currentScrollPosition will less that than X of viewHeight
            // we'll emit the callback.
            //
            // why 500? just for fun cause seems to be the optimal value.
            const offsetToLoad = 500; // px?

            if (currentScrollPosition >= viewHeight - offsetToLoad)
                this.$emit("intersect");
        };
    },
};
</script>
