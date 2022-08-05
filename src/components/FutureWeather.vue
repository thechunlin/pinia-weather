<template>
  <div class="container">
    <div class="Future">
      <div class="row">
        <div class="col-4" style="color: #56719a">
          <h5>{{ header }}</h5>
        </div>
        <div class="col-4" style="color: #56719a">
          <h5>{{ apiData.location.country }} {{ apiData.location.name }}</h5>
        </div>
        <div class="col-12 p-2">
          <div class="main">
            <div class="row">
              <div class="col-6 align-self-center">
                <img
                  :src="
                    apiData.current.condition.icon.replace('64x64', '128x128')
                  "
                  style="align-self: center"
                />
                <p class="m-0">
                  {{ apiData.current.condition.text }}
                </p>
              </div>
              <div class="col-6 align-self-center">
                <h3 class="m-0">
                  <weather-pouring-icon fillColor="#3a4e72" :size="48" />
                  {{
                    historyApiData.forecast.forecastday[0].hour[hour]
                      .chance_of_rain
                  }}%
                </h3>
                <h2>
                  {{ apiData.current.temp_c }}°C/{{ apiData.current.temp_f }}°F
                </h2>
                <p class="m-0">
                  Feellike : {{ apiData.current.feelslike_c }}°C/{{
                    apiData.current.feelslike_f
                  }}°F
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 p-2">
          <div class="secondary">
            <div class="row">
              <div class="col-2">{{ thirdDay }}</div>
              <div class="col-2">{{ fourthDay }}</div>
              <div class="col-2">{{ fifthDay }}</div>
              <div class="col-2">{{ sixthDay }}</div>
              <div class="col-2">{{ seventhDay }}</div>
              <div class="col-2">{{ eigthDay }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'pinia'
import { useUserStore } from '@/store/user'

import moment from 'moment'

import WeatherPouringIcon from 'vue-material-design-icons/WeatherPouring.vue'
export default {
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
  components: {
    WeatherPouringIcon
  },
  data() {
    return {
      header: 'Weather Forecast',
      thirdDay: '',
      fourthDay: '',
      fifthDay: '',
      sixthDay: '',
      seventhDay: '',
      eigthDay: ''
    }
  },

  async mounted() {
    this.thirdDay = moment().add(2, 'days').format('YYYY-MM-DD')
    this.fourthDay = moment().add(3, 'days').format('YYYY-MM-DD')
    this.fifthDay = moment().add(4, 'days').format('YYYY-MM-DD')
    this.sixthDay = moment().add(5, 'days').format('YYYY-MM-DD')
    this.seventhDay = moment().add(6, 'days').format('YYYY-MM-DD')
    this.eigthDay = moment().add(7, 'days').format('YYYY-MM-DD')

    const store = useUserStore()
    store.$patch((state) => {
      fetch(
        `${state.history_url_base}${state.lat},${state.lon}&dt=${this.thirdDay}`
      )
        .then((res) => res.json())
        .then((data) => {
          state.historyApiData = data
        })

      fetch(
        `${state.history_url_base}${state.lat},${state.lon}&dt=${this.fourthDay}`
      )
        .then((res) => res.json())
        .then((data) => {
          state.historyApiData = data
        })

      fetch(
        `${state.history_url_base}${state.lat},${state.lon}&dt=${this.fifthDay}`
      )
        .then((res) => res.json())
        .then((data) => {
          state.historyApiData = data
        })

      fetch(
        `${state.history_url_base}${state.lat},${state.lon}&dt=${this.sixthDay}`
      )
        .then((res) => res.json())
        .then((data) => {
          state.historyApiData = data
        })

      fetch(
        `${state.history_url_base}${state.lat},${state.lon}&dt=${this.seventhDay}`
      )
        .then((res) => res.json())
        .then((data) => {
          state.historyApiData = data
        })

      fetch(
        `${state.history_url_base}${state.lat},${state.lon}&dt=${this.eigthDay}`
      )
        .then((res) => res.json())
        .then((data) => {
          state.historyApiData = data
        })
    })
  }
}
</script>

<style>
.main {
  background: white;
  min-height: 30vh;
}
.secondary {
  background: white;
  min-height: 30vh;
}
</style>
