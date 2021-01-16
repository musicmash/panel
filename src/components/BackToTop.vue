<template>
    <transition name="back-to-top-fade">
        <button
            class="vue-back-to-top button is-success is-rounded is-primary is-light"
            v-show="visible"
            @click="backToTop"
        >
            Back to top
        </button>
    </transition>
</template>

<script>
export default {
    data() {
        return {
            visible: false,
        };
    },
    mounted() {
        window.smoothscroll = () => {
            const currentScroll =
                document.documentElement.scrollTop || document.body.scrollTop;
            if (currentScroll > 0) {
                window.requestAnimationFrame(window.smoothscroll);
                window.scrollTo(
                    0,
                    Math.floor(currentScroll - currentScroll / 5)
                );
            }
        };
        window.addEventListener("scroll", this.catchScroll);
    },
    destroyed() {
        window.removeEventListener("scroll", this.catchScroll);
    },
    methods: {
        catchScroll() {
            const visibleoffset = 600; // px
            const pastTopOffset = window.pageYOffset > visibleoffset;
            this.visible = pastTopOffset;
            this.scrollFn(this);
        },
        backToTop() {
            window.smoothscroll();
        },
        scrollFn() {
            const diff = this.scrollHeight - window.pageYOffset;
            this.isBackTopFooter = diff < this.scrollIndentBackTop - 40 - 15;
        },
    },
};
</script>

<style>
.back-to-top-fade-enter-active,
.back-to-top-fade-leave-active {
    transition: opacity 0.7s;
}
.back-to-top-fade-enter,
.back-to-top-fade-leave-to {
    opacity: 0;
}

.vue-back-to-top {
    cursor: pointer;
    position: fixed;
    z-index: 1000;
    bottom: 35px;
    right: 35px;
}
</style>
