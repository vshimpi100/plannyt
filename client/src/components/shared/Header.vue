<template>

  <nav class="navbar navbar-light nav-pills">
    <router-link to="/" class="navbar-brand w-100">
      <a class="navbar-brand" href="#">
        <img src="../../assets/images/greenyellow.png" width="15%" height="15%" alt>
      </a>
    </router-link>
    <ul class="nav navbar-light container text-center">

  <nav class="navbar navbar-light nav-pills bg-light justify-content-center text-center">
    <router-link tag="span" to="/" class="navbar-brand w-100">
      <a>Plannyt</a>
    </router-link>
    <hr>
    <ul class="nav navbar-light bg-light container-fluid text-center justify-content-center">

      <router-link to="/" activeClass="active" tag="li" class="nav-item col">
        <a class="nav-link">
          <i class="far fa-calendar"></i> Calendar
        </a>
      </router-link>
      <router-link to="/friends" activeClass="active" tag="li" class="nav-item col">
        <a class="nav-link">
          <i class="fas fa-users"></i> Friends
        </a>
      </router-link>

      <!-- <router-link to="/new" activeClass="active" tag="li" class="nav-item col">
        <a class="nav-link">
          <i class="far fa-calendar-plus"></i> New Plan
        </a>
      </router-link>-->
      <!-- <router-link to="/friends" activeClass="active" tag="li" class="nav-item">
        <a class="nav-link">
          <i class="fas fa-bell"></i> Notifications
        </a>
      </router-link>-->
      <!-- <router-link to="/following" activeClass="active" tag="li" class="nav-item col">
        <a class="nav-link">
          <i class="fas fa-users"></i> Friends
        </a>
      </router-link>-->
      <!-- will load only if user is not authenticated -->
      <router-link to="/login" tag="li" v-if="!auth" class="nav-item col">
        <a class="nav-link">
          <i class="far fa-user"></i> Login
        </a>
      </router-link>
      <li
        v-else
        class="dropdown nav-item col"
        :class="{open: isDropdownOpen}"
        @click="isDropdownOpen = !isDropdownOpen"
      >
        <a
          href="#"
          class="dropdown-toggle"
          data-toggle="dropdown"
          role="button"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <!-- NEED TO ADD USERNAME -->
          {{ username }}
          <span class="caret"></span>
        </a>
        <ul class="dropdown-menu">
          <!-- FIX USERNAME HERE -->
          <router-link to="/profile" tag="li">
            <a class="nav-link">
              <i class="far fa-user"></i> Profile
            </a>
          </router-link>
          <!-- NEED TO CREATE LOG OUT METHOD -->
          <li @click="logout()">
            <a class="nav-link">
              <i class="far fa-user"></i> Logout
            </a>
          </li>
        </ul>

      <li v-if="isAuthenticated" @click="logout()" class="nav-item col">
        <a class="nav-link" href="#">
          <i class="fas fa-users"></i> Logout
        </a>
      </li>
      <li v-else @click="login()" class="nav-item col">
        <a class="nav-link" href="#">
          <i class="fas fa-users"></i> Login
        </a>

      </li>
    </ul>
  </nav>
</template>

<script>

export default {};
export default {
  data() {
    return {
      auth: false,
      profile: {},
      isAuthenticated: false
    };
  },
  methods: {
    login() {
      this.$auth.login();
    },
    logout() {
      this.$auth.logOut();
      this.$router.push({ path: "/" });
    },
    handleLoginEvent(data) {
      this.isAuthenticated = data.loggedIn;
      this.profile = data.profile;
    }
  },
  mounted(){
    console.log(this.profile)
  }
};
</script>

<style>
.nav .navbar-light{
  background-color: #F2F2F2;
}
.nav-link {
  color: #C6E2E9;
}
.nav-item :hover {
  color: #BDBBB6;
}
.navbar-brand {
  font-weight: bold;
  color: blue;
  display: inline-block;
}
</style>
