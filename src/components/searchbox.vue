<template>
    <div class="input-group" style="width: unset;">
        <input
            type="text"
            class="form-control sb-input"
            placeholder="Search artist or release"
            aria-label="Search artist or release"
            aria-describedby="button-addon2"
        >
        <div class="input-group-append ml-0">
            <button class="sb-button-search" type="submit">
                <svg class="sb-button-search-svg" width="100%" height="100%" version="1.1" viewBox="0 0 20 20" x="0px" y="0px">
                    <path fill-rule="evenodd" d="M13.192 14.606a7 7 0 111.414-1.414l3.101 3.1-1.414 1.415-3.1-3.1zM14 9A5 5 0 114 9a5 5 0 0110 0z" clip-rule="evenodd"></path>
                </svg>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: "searchbox",
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sb-input {
    border: var(--border-width-input) solid var(--color-border-input);

    color: white;
    font-size: 16px;
    font-weight: 430;

    background-color: rgba(255, 255, 255, 0.15);
    border-bottom-left-radius: 6px;
    border-top-left-radius: 6px;
    /* border: 1px solid rgba(255, 255, 255, 0.15); */
    border-left: 1px solid rgba(255, 255, 255, 0.15);
    border-top: 1px solid rgba(255, 255, 255, 0.15);
    border-bottom: 1px solid rgba(255, 255, 255, 0.15);
}
.sb-input:focus {
    background-color: black;
    box-shadow: none;
    outline: 0 none;
    /* border: 1px solid rgba(255, 255, 255, 0.15); */
    /* border-left: 1px solid rgba(255, 255, 255, 0.15);
    border-top: 1px solid rgba(255, 255, 255, 0.15);
    border-bottom: 1px solid rgba(255, 255, 255, 0.15); */
    transition: none;
}
.sb-input::-moz-selection { color: red}
.sb-input::selection { color: red; }
.sb-button-search {
    background-clip: padding-box;
    border: var(--border-width-input) solid var(--color-border-input);

    background-color: rgba(255, 255, 255, 0.15);
    border-bottom-right-radius: 6px;
    border-top-right-radius: 6px;
    border: 1px solid rgba(255, 255, 255, 0.15);
}
.sb-button-search-svg {
    width: 24px;
    color: rgb(239, 239, 241);
    fill: rgb(239, 239, 241);
}
</style>
