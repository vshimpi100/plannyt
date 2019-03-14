<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light text-center">
    <ul class="nav justify-content-center navbar-light bg-light">
      <router-link to="/" activeClass="active" tag="li" class="nav-item">
        <a class="nav-link">
          <i class="fas fa-globe"></i> Events
        </a>
      </router-link>
      <router-link to="/plans" activeClass="active" tag="li" class="nav-item">
        <a class="nav-link">
          <i class="far fa-calendar-alt"></i> Plans
        </a>
      </router-link>
      <router-link to="/new" activeClass="active" tag="li" class="nav-item">
        <a class="nav-link">
          <i class="far fa-calendar-plus"></i> New Plan
        </a>
      </router-link>
      <!-- <router-link to="/friends" activeClass="active" tag="li" class="nav-item">
        <a class="nav-link">
          <i class="fas fa-bell"></i> Notifications
        </a>
      </router-link> -->
      <router-link to="/following" activeClass="active" tag="li" class="nav-item">
        <a class="nav-link">
          <i class="fas fa-users"></i> Following
        </a>
      </router-link>
      <!-- will load only if user is not authenticated -->
      <router-link to="/login" tag="li" v-if="!auth">
        <a class="nav-link">
          <i class="far fa-user"></i> Login
        </a>
      </router-link>
        <li
          v-else
          class="dropdown"
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
        </li>
    </ul>
  </nav>
</template>

<script>
export default {}
</script>

<style>
</style>
