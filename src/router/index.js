import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import PiniaWeather from '../components/PiniaWeather.vue'
import TodayWeather from '../components/TodayWeather.vue'

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  // {
  //   path: '/about',
  //   name: 'about',

  //   component: () =>
  //     import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // },
  {
    path: '/',
    name: 'Weather',
    component: PiniaWeather
  },
  {
    path: '/Today',
    name: 'TodayWeather',
    component: TodayWeather
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
