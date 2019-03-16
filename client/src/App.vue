<template>
  <div>
    <!-- header will be on every page -->
    <app-header></app-header>
    <!-- will import our router view based on current route from route.js -->
    <router-view></router-view>
    <!-- footer will be on every page-->
    <app-footer></app-footer>
  </div>
</template>

<script>
// import components
import Header from './components/shared/Header.vue'
import Footer from './components/shared/Footer.vue'

export default {
  components: {
    appHeader: Header,
    appFooter: Footer
  }
  // created() {
  //   this.$store.dispatch("initStocks");
  // }
}
</script>

<style>
body {
  font-size: 14px;
  font-family: "Quicksand", "Open Sans", sans-serif;
  line-height: 1.4;
  color: #4d5055;
  word-wrap: break-word;
  word-break: break-word;
  display: block;
}
nav {
  background-color: #56666B;
}

div {
  display: block;
}

*,
::after,
::before {
  box-sizing: border-box;
}
</style>
