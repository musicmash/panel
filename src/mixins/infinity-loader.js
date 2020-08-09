export default {
    data() {
        return {
            loader: {
                // current items count
                offset: 0,

                // how many items will be loaded
                limit: 24,
            },
        };
    },
    mounted() {
        this.resetLoader();
    },
    methods: {
        subscribeOnScroll(callback) {
            window.onscroll = () => {
                const bottomOfWindow =
                    document.documentElement.scrollTop + window.innerHeight ===
                    document.documentElement.offsetHeight;

                if (bottomOfWindow) {
                    this.loader.offset += this.loader.limit;
                    callback(this.loader.offset, this.loader.limit);
                }
            };
        },
        resetLoader() {
            // reset loader offset value between pages.
            // this may be rewritten with uniq in-memory object
            this.loader.offset = 0;
        },
    },
};
