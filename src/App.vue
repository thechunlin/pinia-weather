<template>
  <nav>
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <hr /> -->

    <div class="row">
      <div class="col-sm-12 col-lg-4"></div>
      <div class="col-sm-12 col-lg-4">
        <router-link to="/">PiniaWeather</router-link>|
        <router-link to="/Today">TodayWeather</router-link>
      </div>
    </div>
  </nav>
  <router-view />
  <footer-component />
</template>

<script>
import { mapState } from 'pinia'
import { useUserStore } from '@/store/user'
import FooterComponent from './components/FooterComponent.vue'
import moment from 'moment'

export default {
  components: {
    FooterComponent
  },
  computed: {
    ...mapState(useUserStore, [
      'history_url_base',
      'url_base',
      'lat',
      'lon',
      'hour',
      'historyApiData',
      'today',
      'tomorrow',
      'apiData',
      'tomorrowData'
    ])
  },
  data() {
    return {
      search: ''
    }
  },

  async mounted() {
    const position = await this.getCoordinates()

    const store = useUserStore()
    store.$patch((state) => {
      state.lat = position.coords.latitude
      state.lon = position.coords.longitude
      state.today = moment().format('YYYY-MM-DD')
      state.tomorrow = moment().add(1, 'days').format('YYYY-MM-DD')

      fetch(
        `${state.history_url_base}${state.lat},${state.lon}&dt=${state.today}`
      )
        .then((res) => res.json())
        .then((data) => {
          state.historyApiData = data
        })

      fetch(`${state.url_base}${state.lat},${state.lon}&aqi=yes`)
        .then((res) => res.json())
        .then((data) => {
          state.apiData = data
          state.hour = data.location.localtime.substr(11, 2)
        })

      fetch(
        `${state.history_url_base}${state.lat},${state.lon}&dt=${state.tomorrow}`
      )
        .then((res) => res.json())
        .then((data) => {
          state.tomorrowData = data
        })
    })
  },

  methods: {
    getCoordinates() {
      return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject)
      })
    }
  }
}
</script>

<style lang="scss">
#app {
  background-color: #e3ebfe;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.container {
  min-height: 85vh;
}
</style>
