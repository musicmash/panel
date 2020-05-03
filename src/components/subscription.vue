<template>
    <div class="subscription">
        <div class="subscription-poster">
            <img class="subscription-poster-img" :src="subscription.artist_poster" alt="">
            <ul class="action d-flex justify-content-center">
                <li class="action-item">
                    <button class="action-item-btn">
                        <svg
                            focusable="false"
                            height="1em"
                            width="1em"
                            viewBox="0 0 12 12"
                            aria-hidden="true"
                            class="svg-icon"
                            :class="{ 'svg-icon-active': this.isSubscribed }"
                        >
                            <path class="svg-path" fill="none" stroke-width="1.2" d="M6 10.77a26.815 26.815 0 0 0 2.595-2.087c.996-.913 1.78-1.8 2.267-2.612.356-.594.538-1.124.538-1.571 0-1.734-1.207-2.9-2.65-2.9-.616 0-1.17.229-1.656.619a3.006 3.006 0 0 0-.595.614L6 3.582l-.5-.75a3.006 3.006 0 0 0-.593-.613C4.42 1.829 3.867 1.6 3.25 1.6 1.807 1.6.6 2.766.6 4.5c0 .447.182.977.538 1.571.488.812 1.271 1.699 2.267 2.612A26.815 26.815 0 0 0 6 10.77z"></path>
                        </svg>
                    </button>
                </li>
            </ul>
        </div>
        <div class="subscription-details d-flex justify-content-center">
            <div class="subscription-name">
                <a href="#" class="subscription-link">{{subscription.artist_name}}</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'subscription',
  props: {
    subscription: Object,
  },
  data() {
    return {
        isSubscribed: true,
    }
  },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.subscription {
    max-width: 264px;
    max-height: auto;
    width: 264px;
}
.subscription-poster {
    height: 264px;
    width: 264px;
    opacity: 1;
    background-color: rgba(0,0,0, 1);
    cursor: pointer;
    border-radius: 50%;
}
.subscription-poster-img {
    width: inherit;
    height: inherit;
    object-fit: cover;
    border-radius: inherit;
    -webkit-transition-duration: .1s;
    transition-duration: .1s;
    -webkit-transition-property: opacity;
    transition-property: opacity;
    -webkit-transition-timing-function: ease-in;
    transition-timing-function: ease-in
}
ul {
    list-style: none;
    margin: 0;
    padding: 0;
}
.action {
    opacity: 1;
    line-height: 1;
    position: relative;
    bottom: 51px;
    -webkit-transition-duration: .15s;
    transition-duration: .15s;
    -webkit-transition-property: opacity;
    transition-property: opacity;
}
.action-item {
    opacity: 0;
    -webkit-transition-duration: .15s;
    transition-duration: .15s;
    -webkit-transition-property: opacity,-webkit-transform;
    transition-property: opacity,-webkit-transform;
    transition-property: opacity,transform;
    transition-property: opacity,transform,-webkit-transform;
}
.action-item-btn {
    opacity: 1;
    background-color: #fff;
    border: none;
    border-radius: 50%;
    box-shadow: 0 3px 6px 0 rgba(0,0,0,.25);
    -webkit-box-shadow: 0 3px 6px 0 rgba(0,0,0,.25);
    cursor: pointer;
    font-size: 12px;
    height: 36px;
    width: 36px;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    justify-content: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    -webkit-transition-duration: .15s;
    transition-duration: .15s;
    -webkit-transition-property: opacity,-webkit-transform;
    transition-property: opacity,-webkit-transform;
    transition-property: opacity,transform;
    transition-property: opacity,transform,-webkit-transform;
    z-index: 1;
}
.subscription > .subscription-poster:hover > .subscription-poster-img {
    opacity: 0.7;
    cursor: pointer;
}
.subscription > .subscription-poster > .action > .action-item > .action-item-btn:hover {
    cursor: pointer;
    transform: scale3d(1.2,1.2,1.2);
    -webkit-transform: scale3d(1.2,1.2,1.2);
}
.subscription > .subscription-poster:hover > .action > .action-item {
    opacity: 1;
    -webkit-transition-duration: .15s;
    transition-duration: .15s;
    -webkit-transition-property: opacity,-webkit-transform;
    transition-property: opacity,-webkit-transform;
    transition-property: opacity,transform;
    transition-property: opacity,transform,-webkit-transform;
}
.svg-icon {
    /* fill: currentColor; */
    stroke: currentColor;
}
.svg-icon-active {
    color: #ef5466;
}
.svg-path {
    /* fill: currentColor; */
    stroke: currentColor;
    fill-rule: nonzero;
}
.svg-icon-active .svg-path {
    fill: currentColor;
    stroke: currentColor;
    fill-rule: nonzero;
}
.subscription-details {
    height: inherit;
    width: inherit;
    margin-top: 8px;
}
.subscription-name {
    color: white;
    margin-top: 3px;

    font-size: 15px;
    font-weight: 500;
    line-height: 17px;
    white-space: normal;

    overflow: hidden;
    text-overflow: ellipsis;
}
.subscription-link {
    color: white;
    background-image: none;
}
.subscription-link:hover {
    color: white;
    text-decoration: underline;
}
</style>