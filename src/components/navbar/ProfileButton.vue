<template>
    <div class="navbar-item pr-0">
        <div class="buttons">
            <a class="button is-ghost p-0" @click="logout()"> Log out </a>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
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
