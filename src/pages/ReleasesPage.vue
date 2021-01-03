.
<template>
    <div>
        <releases-onboarding-banner />

        <div class="container">
            <h1>this is releases</h1>
        </div>
    </div>
</template>

<script>
import ReleasesOnboardingBanner from "@/components/ReleasesOnboardingBanner";

export default {
    mounted() {
        console.log(this.$store.state.releases.items);
    },
    components: {
        "releases-onboarding-banner": ReleasesOnboardingBanner,
    },
};
</script>
