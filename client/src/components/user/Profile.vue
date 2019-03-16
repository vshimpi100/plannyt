<template>
  <div class="text-center container">
    <app-calendar username="username"></app-calendar>
  </div>
</template>

<script>
import Calendar from '../home/Calendar.vue'
export default {
  data () {
    return {
      username: "username"
    }
  },
  components: {
    appCalendar: Calendar
  }
};
</script>

<style>

</style>
