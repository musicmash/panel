<template>
  <div class="sidebar">
    <div class="row">
      <div class="sidebar__menu">
         <a class="sidebar__title" href="#">Home</a>
      </div>
    </div>
    <div class="row">
      <div class="sidebar__menu">
         <span class="sidebar__title">New Releases</span>
         <ul class="sidebar__list">
            <li class="sidebar__item">
               <div class="sidebar__link sidebar__link">
                  <span class="SVGInline sidebar__icon">
                     <svg class="SVGInline-svg sidebar__icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path fill="#FFF" d="M23.48 10.876a1.84 1.84 0 00.435-1.841c-.205-.656-.737-1.124-1.39-1.223l-5.811-.881a.762.762 0 01-.572-.434L13.544 1C13.252.384 12.66 0 12 0s-1.251.384-1.543 1.001L7.86 6.497a.763.763 0 01-.573.434l-5.81.882C.821 7.91.29 8.38.085 9.035a1.84 1.84 0 00.435 1.842l4.204 4.278c.18.182.262.445.22.702l-.992 6.04a1.814 1.814 0 00.375 1.457 1.69 1.69 0 002.122.437l5.197-2.852a.749.749 0 01.707 0l5.197 2.852c.253.139.523.209.8.209.509 0 .99-.236 1.322-.646.33-.408.463-.926.375-1.457l-.992-6.04a.816.816 0 01.219-.702l4.204-4.279z"></path>
                     </svg>
                  </span>
                  <span class="sidebar__label">Last 30 days</span>
               </div>
            </li>
            <li class="sidebar__item">
               <a class="sidebar__link" href="#">
                  <span class="SVGInline sidebar__icon">
                     <svg class="SVGInline-svg sidebar__icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 26">
                        <path fill="#FFF" d="M4.929 25.819C1.783 16.36 8.43 12.909 8.43 12.909c-.465 5.046 2.679 8.977 2.679 8.977 1.156-.318 3.363-1.805 3.363-1.805 0 1.805-1.165 5.735-1.165 5.735s4.077-2.875 5.36-7.65c1.281-4.776-2.441-9.57-2.441-9.57.224 3.38-1.03 6.704-3.485 9.244.123-.13.226-.273.305-.43.441-.804 1.15-2.896.735-7.741C13.197 2.868 6.442 0 6.442 0 7.024 4.144 5.28 5.098 1.19 12.964c-4.09 7.864 3.74 12.855 3.74 12.855z"></path>
                     </svg>
                  </span>
                  <span class="sidebar__link">This week</span>
               </a>
            </li>
            <li class="sidebar__item">
               <a class="sidebar__link" href="#">
                  <span class="SVGInline sidebar__icon sidebar__icon_next">
                     <svg class="SVGInline-svg sidebar__icon-svg sidebar__icon_next-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 16">
                        <path fill="#FFF" d="M19.788.212a.712.712 0 00-.503-.197h-1.428a.712.712 0 00-.502.197.619.619 0 00-.212.468v7.05a.669.669 0 00-.146-.198L9.073.15c-.141-.132-.26-.177-.357-.135-.097.042-.145.152-.145.333V7.73a.668.668 0 00-.145-.198L.502.15C.361.018.242-.027.145.015.048.057 0 .167 0 .348v15.304c0 .18.049.291.145.333.097.042.216-.004.357-.135l7.924-7.382a.906.906 0 00.145-.198v7.382c0 .18.049.291.145.333.097.041.216-.004.357-.136l7.924-7.381a.909.909 0 00.146-.198v7.05c0 .18.07.335.212.467a.712.712 0 00.502.197h1.429c.193 0 .36-.065.502-.197a.62.62 0 00.212-.468V.68a.62.62 0 00-.212-.468z"></path>
                     </svg>
                  </span>
                  <span class="sidebar__label">Next week</span>
               </a>
            </li>
            <li class="sidebar__item">
               <a class="sidebar__link" href="#">
                  <span class="SVGInline sidebar__icon sidebar__icon_calendar">
                     <svg class="SVGInline-svg sidebar__icon-svg sidebar__icon_calendar-svg" width="19" height="14" viewBox="0 0 19 14" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.736 8.017V5.688h1.65c1.145 0 1.9-.635 1.9-1.601 0-.967-.736-1.565-1.929-1.565-1.174 0-1.966.69-2.003 1.73H.252C.298 1.657 2.31 0 5.432 0c2.982 0 5.031 1.482 5.031 3.627 0 1.528-1.034 2.733-2.543 3.01v.174c1.854.194 3.037 1.4 3.037 3.111 0 2.403-2.292 4.078-5.58 4.078C2.236 14 .12 12.306 0 9.702h3.261c.047 1.012.876 1.638 2.171 1.638 1.211 0 2.05-.681 2.05-1.675 0-1.022-.792-1.648-2.097-1.648H3.736zm11.845 5.624V3.406h-.177L12.16 5.569V2.66l3.421-2.3H19v13.282h-3.42z" fill="#FFF" opacity=".9"></path>
                     </svg>
                  </span>
                  <span class="sidebar__label">Release calendar</span>
               </a>
            </li>
         </ul>
      </div>
    </div>
    <div class="row">
      <div class="sidebar__menu">
         <span class="sidebar__title">Browse</span>
         <ul class="sidebar__list">
            <li class="sidebar__item">
               <a class="sidebar__link" href="#">
                  <span class="SVGInline sidebar__icon">
                     <svg class="SVGInline-svg sidebar__icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 16">
                        <path fill="#FFF" d="M6.067.006c-2.012 0-3.65 1.787-3.65 3.983s1.638 3.983 3.65 3.983c2.013 0 3.651-1.787 3.651-3.983S8.08.006 6.068.006zm8.3.57h-.025c-.845.007-1.634.374-2.222 1.033a3.556 3.556 0 00-.884 2.407c.007.904.335 1.753.923 2.39.592.643 1.377.996 2.213.996h.025c.845-.007 1.634-.374 2.222-1.033a3.556 3.556 0 00.884-2.407C17.488 2.09 16.083.576 14.367.576zm.154 7.479h-.303c-1.412 0-2.7.552-3.673 1.457a7.251 7.251 0 012.206 2.936c.32.78.504 1.6.546 2.446H20v-1.201c0-3.109-2.458-5.638-5.479-5.638zm-2.398 6.839a6.096 6.096 0 00-2.36-4.478A5.749 5.749 0 006.25 9.219h-.365C2.635 9.219 0 11.93 0 15.275v.72h12.135v-.72c0-.128-.004-.255-.012-.381z"></path>
                     </svg>
                  </span>
                  <span class="sidebar__link">Artists</span>
               </a>
            </li>
            <li class="sidebar__item">
               <a class="sidebar__link" href="#">
                  <span class="SVGInline sidebar__icon">
                     <svg class="SVGInline-svg sidebar__icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 26">
                        <path fill="#FFF" d="M4.929 25.819C1.783 16.36 8.43 12.909 8.43 12.909c-.465 5.046 2.679 8.977 2.679 8.977 1.156-.318 3.363-1.805 3.363-1.805 0 1.805-1.165 5.735-1.165 5.735s4.077-2.875 5.36-7.65c1.281-4.776-2.441-9.57-2.441-9.57.224 3.38-1.03 6.704-3.485 9.244.123-.13.226-.273.305-.43.441-.804 1.15-2.896.735-7.741C13.197 2.868 6.442 0 6.442 0 7.024 4.144 5.28 5.098 1.19 12.964c-4.09 7.864 3.74 12.855 3.74 12.855z"></path>
                     </svg>
                  </span>
                  <span class="sidebar__link">Subscriptions</span>
               </a>
            </li>
            <li class="sidebar__item">
               <a class="sidebar__link" href="#">
                  <span class="SVGInline sidebar__icon sidebar__icon_next">
                     <svg class="SVGInline-svg sidebar__icon-svg sidebar__icon_next-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 16">
                        <path fill="#FFF" d="M19.788.212a.712.712 0 00-.503-.197h-1.428a.712.712 0 00-.502.197.619.619 0 00-.212.468v7.05a.669.669 0 00-.146-.198L9.073.15c-.141-.132-.26-.177-.357-.135-.097.042-.145.152-.145.333V7.73a.668.668 0 00-.145-.198L.502.15C.361.018.242-.027.145.015.048.057 0 .167 0 .348v15.304c0 .18.049.291.145.333.097.042.216-.004.357-.135l7.924-7.382a.906.906 0 00.145-.198v7.382c0 .18.049.291.145.333.097.041.216-.004.357-.136l7.924-7.381a.909.909 0 00.146-.198v7.05c0 .18.07.335.212.467a.712.712 0 00.502.197h1.429c.193 0 .36-.065.502-.197a.62.62 0 00.212-.468V.68a.62.62 0 00-.212-.468z"></path>
                     </svg>
                  </span>
                  <span class="sidebar__label">Releases</span>
               </a>
            </li>
            <li class="sidebar__item">
               <a class="sidebar__link" href="#">
                  <span class="SVGInline sidebar__icon sidebar__icon_next">
                     <svg class="SVGInline-svg sidebar__icon-svg sidebar__icon_next-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 16">
                        <path fill="#FFF" d="M19.788.212a.712.712 0 00-.503-.197h-1.428a.712.712 0 00-.502.197.619.619 0 00-.212.468v7.05a.669.669 0 00-.146-.198L9.073.15c-.141-.132-.26-.177-.357-.135-.097.042-.145.152-.145.333V7.73a.668.668 0 00-.145-.198L.502.15C.361.018.242-.027.145.015.048.057 0 .167 0 .348v15.304c0 .18.049.291.145.333.097.042.216-.004.357-.135l7.924-7.382a.906.906 0 00.145-.198v7.382c0 .18.049.291.145.333.097.041.216-.004.357-.136l7.924-7.381a.909.909 0 00.146-.198v7.05c0 .18.07.335.212.467a.712.712 0 00.502.197h1.429c.193 0 .36-.065.502-.197a.62.62 0 00.212-.468V.68a.62.62 0 00-.212-.468z"></path>
                     </svg>
                  </span>
                  <span class="sidebar__label">Music Videos</span>
               </a>
            </li>
         </ul>
      </div>
    </div>
    <div class="row">
      <div class="sidebar__menu">
         <a class="sidebar__title" href="#">All releases</a>
         <ul class="sidebar__list"></ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sidebar',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sidebar {
    padding: 40px 40px;
}
.sidebar__title {
    background-image: none;
    font-size: 24px;
    line-height: 28px;
    font-weight: 400;
    display: block;
    margin-bottom: 16px;
    font-weight: 700;
}
.sidebar__list {
    margin: 0 0 24px;
    padding: 0;
    list-style: none;
}
.sidebar__item:not(:last-child) {
    margin-bottom: 8px;
}
.sidebar__link {
    background-image: none;
    font-size: 16px;
    line-height: normal;
    font-weight: 400;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 0;
    -webkit-flex: 0 1 auto;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: start;
    -webkit-justify-content: flex-start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-transition: all .3s;
    transition: all .3s;
}
.sidebar__link_active {
    color: #fff;
    -webkit-transition: all .3s;
    transition: all .3s;
    font-weight: 700;
}
.sidebar__link:hover {
    color: #fff;
    -webkit-transition: all .3s;
    transition: all .3s;
}
.sidebar__link.sidebar__link_toggle {
    cursor: pointer;
    -webkit-transition: -webkit-transform .3s;
    transition: -webkit-transform .3s;
    transition: transform .3s;
    transition: transform .3s,-webkit-transform .3s;
    opacity: .4;
}
.sidebar__link.sidebar__link_toggle .sidebar__icon-svg {
    width: 8px;
}
.sidebar__icon, .sidebar__image {
    width: 32px;
    min-width: 32px;
    height: 32px;
    margin-right: 8px;
    border-radius: 6px;
    -o-object-fit: cover;
    object-fit: cover;
}
.sidebar__icon {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 0;
    -webkit-flex: 0 1 auto;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    background-color: hsla(0,0%,100%,.1);
    -webkit-transition: all .3s;
    transition: all .3s;
}
.sidebar__icon-svg {
    width: 18px;
    height: 18px;
}
.sidebar__icon-svg, .sidebar__icon-svg path {
    fill:#fff;
}
</style>
