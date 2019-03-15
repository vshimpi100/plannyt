<template>
  <div>
    <div class="row">
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
    </div>
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      auth: true,
      friends: ['john'],
      events: []
    }
  }
}
</script>

<style>
</style>
