import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PiniaWeather from '../components/PiniaWeather.vue'
import FutureWeather from '../components/FutureWeather.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',

    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/Weather',
    name: 'Weather',
    component: PiniaWeather
  },
  {
    path: '/Future',
    name: 'Future',
    component: FutureWeather
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
