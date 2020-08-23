<template>
    <div
        class="dropdown"
        style="min-width: 40px; min-height: 40px;"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
    >
        <img
            class="rounded-circle"
            style="
                width: 40px;
                height: 40px;
                background-color: black;
                cursor: pointer;
            "
            src="https://prium.github.io/falcon/v2.7.1/default/assets/img/team/3-thumb.png"
        />
        <div
            class="dropdown-menu dropdown-menu-right"
            aria-labelledby="dropdownMenuButton"
            style="font-size: 14px;"
        >
            <router-link class="dropdown-item" to="/subscriptions"
                >My subscriptions</router-link
            >
            <div class="dropdown-divider"></div>
            <router-link class="dropdown-item disabled" to="/subscriptions"
                >Settings</router-link
            >
            <a class="dropdown-item" href="#" @click="signOut">Sign out</a>
        </div>
    </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";

export default {
    methods: {
        moveToLogin() {
            // todo: extract into service.js?
            this.$store.commit("releases/reset");
            this.$store.commit("subscriptions/reset");
            this.$store.commit("search/reset");
            this.$router.replace({ name: "login" });
        },
        signOut() {
            firebase
                .auth()
                .signOut()
                .then(this.moveToLogin)
                .catch(function (error) {
                    console.log(error);
                });
        },
    },
};
</script>
