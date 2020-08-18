<template>
    <input
        type="search"
        style="width: 100%; min-height: 40px;"
        class="form-control sb-input mx-3"
        placeholder="Search artist or release"
        aria-label="Search artist or release"
        aria-describedby="button-addon2"
        autocapitalize="off"
        autocorrect="off"
        maxlength="150"
        spellcheck="false"
        v-on:keyup.enter="doSearch"
        v-model="query"
    />
</template>

<script>
export default {
    data() {
        return {
            query: this.$route.query.query,
        };
    },
    methods: {
        doSearch() {
            // vuejs can't navigate to duplicated router
            if (this.query !== this.$route.query.query)
                this.$router.push({
                    path: "/search",
                    query: { query: this.query },
                });
        },
    },
};
</script>
