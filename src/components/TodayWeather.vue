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
        <div class="col-4" style="color: #56719a"></div>
        <div class="col-4" style="color: #56719a">
          <h5>{{ apiData.location.country }} {{ apiData.location.name }}</h5>
          <h4 style="margin: 1%">
            LocalTime: {{ apiData.location.localtime }}
          </h4>
        </div>
      </div>
      <div class="row">
        <div class="col-12 p-2">
          <div class="secondary">
            <div class="row">
              <div class="col-2">
                <p class="m-3">AM 0:00</p>
                <img
                  :src="
                    historyApiData.forecast.forecastday[0].hour[0].condition.icon.replace(
                      '64x64',
                      '128x128'
                    )
                  "
                  style="align-self: center"
                />
                <p class="m-3">
                  {{
                    historyApiData.forecast.forecastday[0].hour[0].condition
                      .text
                  }}
                </p>
                <weather-pouring-icon fillColor="#3a4e72" :size="64" />
                <p class="m-3">
                  {{
                    historyApiData.forecast.forecastday[0].hour[0]
                      .chance_of_rain
                  }}%
                </p>
                <thermometer-icon fillColor="#3a4e72" :size="64" />

                <p class="m-3">
                  {{ historyApiData.forecast.forecastday[0].hour[0].temp_c }}°C/
                  {{ historyApiData.forecast.forecastday[0].hour[0].temp_f }}°F
                </p>
              </div>
              <div class="col-2">
                <p class="m-3">AM 4:00</p>
                <img
                  :src="
                    historyApiData.forecast.forecastday[0].hour[4].condition.icon.replace(
                      '64x64',
                      '128x128'
                    )
                  "
                  style="align-self: center"
                />
                <p class="m-3">
                  {{
                    historyApiData.forecast.forecastday[0].hour[4].condition
                      .text
                  }}
                </p>

                <weather-pouring-icon fillColor="#3a4e72" :size="64" />
                <p class="m-3">
                  {{
                    historyApiData.forecast.forecastday[0].hour[4]
                      .chance_of_rain
                  }}%
                </p>
                <thermometer-icon fillColor="#3a4e72" :size="64" />

                <p class="m-3">
                  {{ historyApiData.forecast.forecastday[0].hour[4].temp_c }}°C/
                  {{ historyApiData.forecast.forecastday[0].hour[4].temp_f }}°F
                </p>
              </div>
              <div class="col-2">
                <p class="m-3">AM 8:00</p>
                <img
                  :src="
                    historyApiData.forecast.forecastday[0].hour[8].condition.icon.replace(
                      '64x64',
                      '128x128'
                    )
                  "
                  style="align-self: center"
                />
                <p class="m-3">
                  {{
                    historyApiData.forecast.forecastday[0].hour[8].condition
                      .text
                  }}
                </p>
                <weather-pouring-icon fillColor="#3a4e72" :size="64" />
                <p class="m-3">
                  {{
                    historyApiData.forecast.forecastday[0].hour[8]
                      .chance_of_rain
                  }}%
                </p>
                <thermometer-icon fillColor="#3a4e72" :size="64" />

                <p class="m-3">
                  {{ historyApiData.forecast.forecastday[0].hour[8].temp_c }}°C/
                  {{ historyApiData.forecast.forecastday[0].hour[8].temp_f }}°F
                </p>
              </div>
              <div class="col-2">
                <p class="m-3">PM 12:00</p>
                <img
                  :src="
                    historyApiData.forecast.forecastday[0].hour[12].condition.icon.replace(
                      '64x64',
                      '128x128'
                    )
                  "
                  style="align-self: center"
                />
                <p class="m-3">
                  {{
                    historyApiData.forecast.forecastday[0].hour[12].condition
                      .text
                  }}
                </p>
                <weather-pouring-icon fillColor="#3a4e72" :size="64" />
                <p class="m-3">
                  {{
                    historyApiData.forecast.forecastday[0].hour[12]
                      .chance_of_rain
                  }}%
                </p>
                <thermometer-icon fillColor="#3a4e72" :size="64" />

                <p class="m-3">
                  {{
                    historyApiData.forecast.forecastday[0].hour[12].temp_c
                  }}°C/
                  {{ historyApiData.forecast.forecastday[0].hour[12].temp_f }}°F
                </p>
              </div>
              <div class="col-2">
                <p class="m-3">PM 4:00</p>
                <img
                  :src="
                    historyApiData.forecast.forecastday[0].hour[16].condition.icon.replace(
                      '64x64',
                      '128x128'
                    )
                  "
                  style="align-self: center"
                />
                <p class="m-3">
                  {{
                    historyApiData.forecast.forecastday[0].hour[16].condition
                      .text
                  }}
                </p>
                <weather-pouring-icon fillColor="#3a4e72" :size="64" />
                <p class="m-3">
                  {{
                    historyApiData.forecast.forecastday[0].hour[16]
                      .chance_of_rain
                  }}%
                </p>
                <thermometer-icon fillColor="#3a4e72" :size="64" />

                <p class="m-3">
                  {{
                    historyApiData.forecast.forecastday[0].hour[16].temp_c
                  }}°C/
                  {{ historyApiData.forecast.forecastday[0].hour[16].temp_f }}°F
                </p>
              </div>
              <div class="col-2">
                <p class="m-3">PM 8:00</p>
                <img
                  :src="
                    historyApiData.forecast.forecastday[0].hour[20].condition.icon.replace(
                      '64x64',
                      '128x128'
                    )
                  "
                  style="align-self: center"
                />
                <p class="m-3">
                  {{
                    historyApiData.forecast.forecastday[0].hour[20].condition
                      .text
                  }}
                </p>
                <weather-pouring-icon fillColor="#3a4e72" :size="64" />
                <p class="m-3">
                  {{
                    historyApiData.forecast.forecastday[0].hour[20]
                      .chance_of_rain
                  }}%
                </p>
                <thermometer-icon fillColor="#3a4e72" :size="64" />

                <p class="m-3">
                  {{
                    historyApiData.forecast.forecastday[0].hour[20].temp_c
                  }}°C/
                  {{ historyApiData.forecast.forecastday[0].hour[20].temp_f }}°F
                </p>
              </div>
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
import ThermometerIcon from 'vue-material-design-icons/Thermometer.vue'
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
    WeatherPouringIcon,
    ThermometerIcon
  }
}
</script>

<style>
.main {
  background-color: #c3cef0da !important;
  border: var(--bs-border-width) var(--bs-border-style) var(--bs-border-color) !important;
  border-radius: var(--bs-border-radius) !important;

  min-height: 25vh;
}
.secondary {
  background-color: #a9c3f3 !important;
  border: var(--bs-border-width) var(--bs-border-style) var(--bs-border-color) !important;
  border-radius: var(--bs-border-radius) !important;
  min-height: 50vh;
}
</style>
