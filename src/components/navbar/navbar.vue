<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-5 col-lg-4 mt-3">
                <navbutton class="mr-4" to="/all-releases" text="Releases" />
                <navbutton to="/browse/subscriptions" text="Subscriptions" />
            </div>
            <div class="col-sm-7 col-lg-4 my-3">
                <searchbox />
            </div>
        </div>
    </div>
</template>

<script>
import searchbox from "@/components/navbar/searchbox";
import navbutton from "@/components/navbar/navbutton";

export default {
    name: "navbar",
    components: {
        searchbox,
        navbutton,
    },
};
</script>
