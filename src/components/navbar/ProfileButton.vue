<template>
    <div
        class="navbar-item has-dropdown"
        @click="toggleMenu()"
        v-bind:class="{ 'is-active': isActive }"
    >
        <a class="navbar-link">
            <figure class="image">
                <img
                    class="is-rounded"
                    src="https://bulma.io/images/placeholders/32x32.png"
                />
            </figure>
        </a>

        <div class="navbar-dropdown is-right">
            <a class="navbar-item is-red" @click="logout()">Logout</a>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isActive: false,
        };
    },
    methods: {
        toggleMenu() {
            this.isActive = !this.isActive;
        },
        logout() {
            this.$store.dispatch("user/logout");
        },
    },
};
</script>

<style scoped>
.company {
    display: -webkit-box;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;
    text-decoration: none;
    padding-left: 0.75rem;
}

.companyName {
    color: black;
    font-size: 20px;
    letter-spacing: 0.03em;
    font-weight: 600;
    margin: 0 15px 0 0;
}
</style>
