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
        </div>
      </div>
      <div class="row py-3">
        <div class="input-group mb-2 input-group-lg-3 maxlength-5">
          <span
            class="input-group-text"
            id="basic-addon1"
            style="background-color: #ffffff"
          >
            {{ apiData.location.localtime }}(
            {{ apiData.location.tz_id }} )</span
          >
          <input
            type="text"
            class="form-control"
            placeholder="city"
            v-model="city"
          />
          <div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-info" v-on:click="searchData">
              <magnify-icon fillColor="#e3ebfe" />
            </button>
            <button
              type="button"
              class="btn btn-info"
              v-on:click="locationCoordinates"
              style="background-color: #13a9c7"
            >
              <map-marker-radius-outline-icon fillColor="#e3ebfe" />
            </button>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 p-2">
          <div class="secondary">
            <div class="row">
              <div class="col-sm-4 col-lg-2">
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
              <div class="col-sm-4 col-lg-2">
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
              <div class="col-sm-4 col-lg-2">
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
              <div class="col-sm-4 col-lg-2">
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
              <div class="col-sm-4 col-lg-2">
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
              <div class="col-sm-4 col-lg-2">
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
import { mapState, mapActions } from 'pinia'
import { useUserStore } from '@/store/weather'

import WeatherPouringIcon from 'vue-material-design-icons/WeatherPouring.vue'
import ThermometerIcon from 'vue-material-design-icons/Thermometer.vue'
import MagnifyIcon from 'vue-material-design-icons/Magnify.vue'
import MapMarkerRadiusOutlineIcon from 'vue-material-design-icons/MapMarkerRadiusOutline.vue'
export default {
  name: 'TodayWeather',
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
      'tomorrowData',
      'search'
    ])
  },
  data() {
    return {
      city: ''
    }
  },
  components: {
    WeatherPouringIcon,
    ThermometerIcon,
    MapMarkerRadiusOutlineIcon,
    MagnifyIcon
  },
  methods: {
    ...mapActions(useUserStore, ['locationCoordinates']),

    ...mapActions(useUserStore, ['searchCoordinates']),
    searchData() {
      this.searchCoordinates()
      const store = useUserStore()
      store.$patch((state) => {
        state.search = this.city
      })
    }
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
