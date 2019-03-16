<template>
  <div>
    <!-- header will be on every page -->
    <app-header></app-header>
    <!-- will import our router view based on current route from route.js -->
    <div class="full">
      <router-view></router-view>
    </div>
    <!-- footer will be on every page-->
    <app-footer></app-footer>
  </div>
</template>

<script>
// import components
import Header from "./components/shared/Header.vue";
import Footer from "./components/shared/Footer.vue";

export default {
  components: {
    appHeader: Header,
    appFooter: Footer
  },
  async created() {
      await this.$auth.renewTokens();
  }
};
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
  background-color: #FFF9FB;
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
.full {
  min-height: 100vh;
}
</style>
