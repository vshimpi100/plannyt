// importing main view component files
import Home from '../components/home/Home.vue'
import Friends from '../components/friends/Friends.vue'
import Login from '../components/user/Login.vue'
import Profile from '../components/user/Profile.vue'

// setting router with main views
export const routes = [
  // Home page showing friends' events
  {
    path: '/',
    component: Home
  },
  // Friends you are following page
  {
    path: '/friends',
    component: Friends
  },
  // Login page
  {
    path: '/login',
    component: Login
  },
  {
    path: '/profile/:username',
    name: 'profile',
    component: Profile
  },
  // Catch-all path, will redirect to home page
  {
    path: '*',
    redirect: '/'
  }
]
