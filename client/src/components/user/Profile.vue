<template>
  <div class="text-center container">
    <app-calendar username="username" events="events"></app-calendar>
  </div>
</template>

<script>
import Calendar from "../home/Calendar.vue";
export default {
  data() {
    return {
      username: "username",
      events: []
    };
  },
  mounted: function() {
    axios.get("http://localhost:8081/e/" + this.username).then(result => {
      this.events = result.events;
    });
  },
  components: {
    appCalendar: Calendar
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