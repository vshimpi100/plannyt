<template>
  <div>
    <br>
    <div class="container">
      <div class="row">
        <div v-if="!auth" class="col-sm-12 text-center">
          <h3>Log in or Sign up to get started!</h3>
        </div>
        <div v-else-if="!friends[0]" class="col-sm-12 text-center">
          <h3>Add a friend to see their events!</h3>
        </div>
        <div v-else-if="!events[0]" class="col-sm-12 text-center">
          <h3>Awkward, there aren't any events coming up!</h3>
        </div>
        <!-- username will be passed as a prop to pick which user to get profile from -->
        <app-calendar v-else username="user"></app-calendar>
      </div>
    </div>
  </div>
</template>

<script>
import Calendar from "./Calendar.vue";
import axios from "axios";

export default {
  data() {
    return {
      user: "user",
      auth: true,
      friends: ["ralph"],
      events: ["1"],
      profile: this.$auth.profile
    };
  },
  methods: {
    async handleLoginEvent(data) {
      this.profile = await data.profile;
      // once the user has logged in and their profile is up, get their user events
      this.getEvents(this.profile.email);
    }
  },
  components: {
    appCalendar: Calendar
  },
  mounted() {
    let url = "http://localhost:8080/api/u/" + this.profile.nickname; //nickname is google username
    axios.get(url).then((req, res) => {
      // GET USER'S EVENTS HERE
      console.log(JSON.stringify(res));
      console.log("Now here is where we put the events");
    });
  }
};
</script>

<style>
</style>
