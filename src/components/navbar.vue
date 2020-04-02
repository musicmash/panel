<template>
<nav class="navbar navbar-expand-lg navbar-dark">
    <div class="container-fluid justify-content-between p-0">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <button type="button" class="btn btn-primary">Releases</button>
                </li>
                <li class="nav-item">
                    <button type="button" class="btn btn-primary disabled">Subscriptions</button>
                </li>
            </ul>

            <form class="form-inline">
                <input class="form-control mr-sm-" type="search" placeholder="Search artist, band or release" aria-label="Search">
                <button class="btn btn-outline-light" type="submit">Search</button>
            </form>

            <div class="login_register ml-auto">
                <ul class="navbar-nav invisible">
                    <li class="nav-item active">
                        <button type="button" class="btn btn-primary">Login</button>
                    </li>
                    <li class="nav-item active">
                        <button type="button" class="btn btn-primary">Register</button>
                    </li>
                </ul>
            </div>

            <ul class="navbar-nav invisible">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    </a>
                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#">Use light-theme</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">Log out</a>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</nav>
</template>

<script>
export default {
    name: "navbar",
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
