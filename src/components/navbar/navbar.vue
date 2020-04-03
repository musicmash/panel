<template>
<nav class="navbar navbar-expand-lg navbar-dark">
    <div class="container-fluid justify-content-between p-0">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav mr-auto">
                <li class="mr-3">
                    <navbutton to="/discover/last-30-days" text="Releases"></navbutton>
                </li>
                <li>
                    <navbutton to="/browse/subscriptions" text="Subscriptions"></navbutton>
                </li>
            </ul>

            <searchbox/>

            <ul class="navbar-nav ml-auto invisible">
                <li class="mr-3">
                    <navbutton to="#" text="Login"></navbutton>
                </li>
                <li>
                    <navbutton to="#" text="Register"></navbutton>
                </li>
            </ul>
        </div>
    </div>
</nav>
</template>

<script>
import searchbox from '@/components/navbar/searchbox'
import navbutton from '@/components/navbar/navbutton'

export default {
    name: "navbar",
    components: {
        searchbox,
        navbutton
    }
}
</script>
