<template>
  <div class="container">
    <div class="row" v-for="day in currentWeek" v-bind:key="day">
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      currentWeek: [],
      maxQuotes: 10
    }
  }
}
</script>

<style scoped>
</style>
