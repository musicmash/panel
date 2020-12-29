<template>
    <div class="searchbox">
        <svg
            viewBox="0 0 20 20"
            class="icon mx-4"
            style="width: 1em"
            title="search"
        >
            <path
                d="M18.8 17.6l-4.7-4.6c1-1.3 1.6-2.9 1.6-4.6 0-4.1-3.3-7.4-7.4-7.4-4 0-7.3 3.3-7.3 7.4s3.3 7.4 7.4 7.4c1.7 0 3.3-0.6 4.6-1.6l4.6 4.6c0.2 0.2 0.4 0.2 0.6 0.2s0.4-0.1 0.6-0.2c0.3-0.4 0.3-0.9 0-1.2zM8.4 14.1c-3.2 0-5.7-2.6-5.7-5.7s2.6-5.7 5.7-5.7c3.2 0 5.7 2.6 5.7 5.7s-2.6 5.7-5.7 5.7z"
            ></path>
        </svg>
        <input
            class="input"
            placeholder="Type album title, artist or band"
            autocapitalize="off"
            autocorrect="off"
            type="text"
        />
    </div>
</template>

<script>
export default {
    name: "search",
};
</script>

<style scoped>
.searchbox {
    height: 75px;
    background-color: white;
    display: flex;
    /* box-shadow: 0 4px 20px rgba(0,0,0,.1); */
    /* -webkit-box-shadow: 0 4px 20px rgba(0,0,0,.1); */
    /* outline: 0 none; */
}

.input:focus {
    -webkit-appearance: none;
    box-shadow: none;
    outline: 0;
    border-color: transparent;
}

/* input {
  outline: none
}

input:focus,
input:active {
  border-color: transparent;
  border-bottom: 2px solid red
} */

.icon {
    /* position: absolute; */
    width: 1em;

    /* mui-icon */
    /* display: inline-block; */
    line-height: normal;
    cursor: inherit;
    vertical-align: middle;
    text-align: center;

    /*  mui-icon-search*/
    /* left: 20px; */
    /* top: 27px; */
    font-size: 20px;
    fill: #f63;

    height: 75px;
}

.input {
    height: 100%;
    width: 100%;
    font-size: 25px;
    /* padding-left: 55px; */
    color: #808b96;
    background: transparent;

    border: none;
    /* font-size: 15px;
    font-weight: 400; */
    width: 100%;
    height: 100%;
    /* padding-left: 40px; */
    /* color: inherit; */
    text-transform: inherit;
    font-weight: inherit;
    letter-spacing: inherit;
    /* color: #4e5860; */
}
</style>
