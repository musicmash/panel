<template>
<nav class="navbar navbar-expand-lg navbar-dark">
    <div class="container-fluid justify-content-between p-0">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav mr-auto">
                <li class="mr-3">
                    <router-link class="nav-button" to="/discover/last-30-days" active-class="active">Releases</router-link>
                </li>
                <li>
                    <router-link class="nav-button" to="/browse/subscriptions" active-class="active">Subscriptions</router-link>
                </li>
            </ul>

            <searchbox/>

            <ul class="navbar-nav ml-auto invisible">
                <li class="mr-3">
                    <router-link class="nav-button" to="#" active-class="active">Login</router-link>
                </li>
                <li>
                    <router-link class="nav-button" to="#" active-class="active">Register</router-link>
                </li>
            </ul>
        </div>
    </div>
</nav>
</template>

<script>
import searchbox from '@/components/navbar/searchbox'

export default {
    name: "navbar",
    components: {
        searchbox
    }
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
