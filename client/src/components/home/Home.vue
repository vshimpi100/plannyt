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
        <div v-else class="col-12 row">
          <div class="col-md-8">
            <form>
              <input
                class="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              >
            </form>
          </div>
          <div class="col-md-4">
            <nav aria-label="Page navigation example">
              <ul class="pagination justify-content-end">
                <li class="page-item active">
                  <a
                    class="page-link"
                    href="#"
                    tabindex="-1"
                    aria-label="Previous"
                    aria-disabled="true"
                  >
                    Week
                    <i class="fas fa-calendar-week"></i>
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#" aria-label="Next">
                    Month
                    <i class="far fa-calendar-alt"></i>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <app-calendar></app-calendar>
        </div>
      </div>
    </div>
    <Profile></Profile>
    <br>
    <Profile></Profile>
  </div>
</template>

<script>
import Calendar from './Calendar.vue'

export default {
  data () {
    return {
      auth: true,
      friends: ['john'],
      events: ['event'],
      curr: new Date(),
    }
  },
  components: {
    appCalendar: Calendar
  },
  computed: {
    formattedDate() {
      return dateFns.format(this.curr, 'MM/DD/YYYY');
    }
  },
}
</script>

<style>
</style>
