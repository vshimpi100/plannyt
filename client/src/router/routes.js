// importing main view component files
import Home from '../components/home/Home.vue'
import Plans from '../components/plans/Plans.vue'
import New from '../components/plans/NewPlan.vue'
import Following from '../components/friends/Following.vue'
import Login from '../components/user/Login.vue'
import Profile from '../components/user/Profile.vue'

// setting router with main views
export const routes = [
  // Home page showing friends' events
  {
    path: '/',
    component: Home
  },
  // User personal plans page
  {
    path: '/plans',
    component: Plans
  },
  // New event form
  {
    path: '/new',
    component: New
  },
  // Friends you are following page
  {
    path: '/following',
    component: Following
  },
  // Login page
  {
    path: '/login',
    component: Login
  },
  // Profile page
  {
    path: '/profile',
    component: Profile
  },
  // Catch-all path, will redirect to home page
  {
    path: '*',
    redirect: '/'
  }
]
