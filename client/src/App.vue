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
.full {
  min-height: 100vh;
}
</style>
