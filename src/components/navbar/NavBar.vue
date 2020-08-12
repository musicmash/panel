<template>
    <div class="container">
        <div class="d-flex justify-content-between pt-2">
            <nav-home-button />
            <nav-search-box />
            <nav-menu-button />
        </div>
    </div>
</template>

<script>
import HomeButton from "@/components/navbar/HomeButton";
import MenuButton from "@/components/navbar/MenuButton";
import SearchBox from "@/components/navbar/SearchBox";

export default {
    name: "navbar",
    components: {
        "nav-home-button": HomeButton,
        "nav-menu-button": MenuButton,
        "nav-search-box": SearchBox,
    },
};
</script>
