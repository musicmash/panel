<template>
    <router-link
        class="nav-button"
        :to="to"
        active-class="active"
    >
        {{text}}
    </router-link>
</template>

<script>
export default {
    name: "navbutton",
    props: ["to", "text"]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav-button {
    cursor: pointer;
    display: inline-block;
    transition: none;

    padding-top: 7px;
    padding-bottom: 12px;

    color: white;
    text-decoration: none;
    font-size: 17px;
    font-weight: bold;

    background-image: none;
    border-bottom: 4px solid transparent;
}
.nav-button:hover {
    border-bottom: 4px solid rgb(197, 0, 33);
}
.active {
    border-bottom: 4px solid rgb(197, 0, 33);
}
</style>
