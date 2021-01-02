<template>
    <div class="container">
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <nav-home-button />
            </div>

            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="buttons">
                        <a class="button is-primary">
                            <strong>Sign up</strong>
                        </a>
                        <a class="button is-light"> Log in </a>
                    </div>
                </div>
            </div>
        </nav>

        <div class="tabs is-centered">
            <ul>
                <li class="is-active"><a>Releases</a></li>
                <li><a>Subscriptions</a></li>
                <li><a>Settings</a></li>
            </ul>
        </div>
    </div>
</template>

<script>
import HomeButton from "@/components/navbar/HomeButton";

export default {
    name: "navbar",
    components: {
        "nav-home-button": HomeButton,
    },
};
</script>
