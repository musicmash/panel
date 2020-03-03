<template>
  <div id="app" class="container-fluid">
    <div class="row">
      <div class="col-sm-3 col-lg-2">
        <sidebar/>
      </div>
      <div class="col-sm-10 col-lg-10">
        <div class="row">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sidebar from './components/sidebar.vue'

export default {
  name: 'App',
  components: {
    sidebar
  }
}
</script>

<style>
body {
    background-color: #151515;
    color: #fff;
    font-size: 14px;
    line-height: normal;
    font-weight: 400;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif;
    letter-spacing: 0;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -moz-font-feature-settings: "liga" on;
}
a {
    background-image: linear-gradient(0deg,hsla(0,0%,100%,0) 0,hsla(0,0%,100%,.4) 0,hsla(0,0%,100%,.4) 1px,hsla(0,0%,100%,0) 0);
    color: #fff;
    text-decoration: none;
    -webkit-transition: all .2s ease-out;
    transition: all .2s ease-out
}
a:hover {
    color: hsla(0,0%,100%,.4);
    background-image: linear-gradient(0deg,transparent 0,rgba(0,0,0,.2) 0,rgba(0,0,0,.2) 1px,transparent 0);
}
</style>
