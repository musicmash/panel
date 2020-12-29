<template>
    <router-link class="company" to="/feed">
        <div class="logo">
            <div class="companyName">musicmash</div>
        </div>
    </router-link>
</template>

<script>
export default {};
</script>

<style scoped>
.company {
    display: -webkit-box;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;
    text-decoration: none;
    padding-left: 15px;
}

.companyName {
    color: black;
    font-size: 20px;
    letter-spacing: 0.03em;
    font-weight: 600;
    margin: 0 15px 0 0;
}
</style>
