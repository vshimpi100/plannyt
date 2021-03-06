// importing main view component files
import Home from '../components/home/Home.vue'
import Friends from '../components/friends/Friends.vue'
import Profile from '../components/user/Profile.vue'
import Callback from '../components/shared/Callback.vue'

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
  {
    path: '/profile/:username',
    name: 'profile',
    component: Profile,
    props: true
  },
  {
    path: '/callback',
    component: Callback
  }
  // Catch-all path, will redirect to home page
  // {
  //   path: '*',
  //   redirect: '/'
  // }
]
