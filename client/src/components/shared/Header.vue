<template>
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
      <li v-if="auth" @click="logout()" class="nav-item col">
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
export default {
  data() {
    return {
      auth: false
    };
  },
  methods: {
    login() {
      // authentication code goes here
      this.auth = true;
    },
    logout() {
      if (confirm("Are you sure you want to log out?")) {
        this.auth = false;
        // logout code goes here
      }
    }
  }
};
</script>

<style>
.navbar-brand {
  font-weight: bold;
  color: blue;
  display: block;
}
</style>
