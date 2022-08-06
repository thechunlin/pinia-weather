<template>
  <div class="container">
    <div
      class="TodayWeather"
      v-if="
        apiData != '' ||
        tomorrowData != '' ||
        historyApiData.forecast.forecastday != ''
      "
    >
      <div class="row">
        <div class="col-4" style="color: #56719a">
          <h5>{{ header }}</h5>
        </div>
        <div class="col-4" style="color: #56719a">
          <h5>
            {{ tomorrowData.location.country }} {{ tomorrowData.location.name }}
          </h5>
        </div>
        <div class="col-12 p-2">
          <div class="main">
            <div class="row">
              <div class="col-6 align-self-center">
                <img
                  :src="
                    tomorrowData.forecast.forecastday[0].day.condition.icon.replace(
                      '64x64',
                      '128x128'
                    )
                  "
                  style="align-self: center"
                />
                <p class="m-0">
                  {{ tomorrowData.forecast.forecastday[0].day.condition.text }}
                </p>
              </div>
              <div class="col-6 align-self-center">
                <h3 class="m-0">
                  <weather-pouring-icon fillColor="#3a4e72" :size="48" />
                  {{
                    tomorrowData.forecast.forecastday[0].hour[12]
                      .chance_of_rain
                  }}%
                </h3>
                <h2>
                  {{ tomorrowData.forecast.forecastday[0].day.avgtemp_c }}°C/{{
                    tomorrowData.forecast.forecastday[0].day.avgtemp_f
                  }}°F
                </h2>
                <p class="m-0">
                  MaxTemp :
                  {{ tomorrowData.forecast.forecastday[0].day.maxtemp_c }}°C/{{
                    tomorrowData.forecast.forecastday[0].day.maxtemp_f
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
              <div class="col-2"></div>
              <div class="col-2"></div>
              <div class="col-2"></div>
              <div class="col-2"></div>
              <div class="col-2"></div>
              <div class="col-2"></div>
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
      header: 'Weather Forecast'
    }
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
