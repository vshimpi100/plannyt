<template>
  <div>

    <!-- <div class="row">
      <div class="col-md-12">
        <ul class="nav nav-pills nav-fill justify-content-center">
          <li class="nav-item">
            <a class="nav-link active" href="#">Friends</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Niches</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Nearby</a>
          </li>
        </ul>
      </div>
    </div>-->

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

      events: ["1"]

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
