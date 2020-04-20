<template>
    <div class="wrapper">
        <div class="content">
            <div class="d-flex flex-column flex-md-row align-items-center">
                <h1 class="header ml-3">My subscriptions</h1>
                <h1 class="sub-header ml-2">
                    ({{ subscriptionsAll.length }} results)
                </h1>
            </div>

            <div class="subscriptions">
                <div class="row d-flex flex-row align-items-center">
                    <subscription
                        class="col-3 mx-3 mb-4 p-0"
                        v-for="subscription in subscriptionsBatch"
                        :subscription="subscription"
                        :key="subscription.id"
                    ></subscription>
                    <observer v-on:intersect="intersected"></observer>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import subscription from '@/components/subscription'
import observer from "@/components/observer";
import { mapState } from "vuex";

export default {
    computed: mapState({
        subscriptionsBatch: (state) => state.subscriptions.batch,
        subscriptionsAll: (state) => state.subscriptions.all,
    }),
    components: {
        subscription,
        observer,
    },
    created() {
        this.$store.dispatch("subscriptions/getSubscriptions");
    },
    methods: {
        load: function () {
            this.$store.dispatch("subscriptions/loadNextBatch");
        },
        intersected: function () {
            this.load();
        },
    },
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapper {
    display: flex;
    width: 100%;
    align-items: stretch;
}

.content {
    width: 100%;
    min-height: 100vh;
    transition: all 0.3s;
}

.navbar-content {
    padding-left: 1rem;
}

.subscriptions {
    padding: 0.5rem 1rem;
}

.header {
    font-size: 50px;
    font-weight: 700;
}
.sub-header {
    font-size: 40px;
    font-weight: 700;
    color: #7a7a7a;
}
</style>
