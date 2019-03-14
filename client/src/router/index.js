// import Vue from 'vue'
// import Router from 'vue-router'
// import Home from '@/components/home'
// import User from '@/components/user'
// import Events from '@/components/events'
// import Niche from '@/components/niche'


// Vue.use(Router)

// export default new Router({
//   mode: 'history',
//   routes: [
//     {
//       path: '@/components/home',
//       name: 'home',
//       component: homePage
//     },
//       {
//       path: '@/components/niche',
//       name: 'user',
//       component: userData
//     },
//     {
//       path: '@/components/events',
//       name: 'event',
//       component: event
//     },
//     {
//       path: '@/components/user',
//       name: 'user',
//       component: user,
//       beforeEnter: (to, from, next) => {
//         if (auth0Client.isAuthenticated()) {
//           return next()
//         }
//         next('/')
//       }
//     }
//   ]
// })