// importing main view component files
import Events from '../components/events/Events.vue'
import Friends from '../components/friends/Friends.vue'
import Profile from '../components/profile/Profile.vue'
import Login from '../components/forms/Login.vue'

// setting router with main views
export const routes = [
  // Home page
  { path: '/', component: Events },
  // User profile page
  { path: '/friends', component: Friends },
  // Event view page
  { path: '/profile', component: Profile },
  // Login page
  { path: '/login', component: Login },
  // Catch-all path, will redirect to home page
  { path: '*', redirect: '/' }
]
