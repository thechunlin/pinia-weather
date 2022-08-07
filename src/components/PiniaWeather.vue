<template>
  <div class="container">
    <div
      class="Weather"
      v-if="apiData != '' || tomorrowData != '' || tomorrowData != ''"
    >
      <div class="row">
        <div class="col-4" style="color: #56719a">
          <h5>{{ header }}</h5>
        </div>
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
            >
              <map-marker-radius-outline-icon fillColor="#e3ebfe" />
            </button>
          </div>
        </div>
      </div>
      <!-- row-cols-lg-4 g-5 -->
      <div class="row">
        <div class="col-sm-12 col-lg-6">
          <div class="row p-1">
            <div class="col-12">
              <div>
                <div class="row main">
                  <div class="col-6 align-self-center">
                    <img
                      :src="
                        apiData.current.condition.icon.replace(
                          '64x64',
                          '128x128'
                        )
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
                      {{ apiData.current.temp_c }}°C/{{
                        apiData.current.temp_f
                      }}°F
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
          <div class="row p-1">
            <div class="col-12">
              <div>
                <div class="row column">
                  <div class="col-4 align-self-center">
                    <div>
                      <wind-power-outline-icon fillColor="#e3ebfe" :size="64" />
                    </div>
                    <p class="m-0">{{ apiData.current.wind_kph }} km/h</p>
                  </div>
                  <div class="col-4 align-self-center">
                    <div>
                      <sun-wireless-outline-icon
                        fillColor="#e3ebfe"
                        :size="64"
                      />
                    </div>
                    <p class="m-0">{{ apiData.current.uv }}mJ/cm2</p>
                  </div>
                  <div class="col-4 align-self-center">
                    <div>
                      <face-mask-outline-icon fillColor="#e3ebfe" :size="64" />
                    </div>
                    <p class="m-0">
                      {{ apiData.current.air_quality.pm2_5.toFixed(1) }}μg/m3
                    </p>
                  </div>
                  <div class="col-4 align-self-center">
                    <div>
                      <water-percent-icon fillColor="#e3ebfe" :size="64" />
                    </div>
                    <p class="m-0">{{ apiData.current.humidity }}</p>
                  </div>
                  <div class="col-4 align-self-center">
                    <div>
                      <speedometer-icon fillColor="#e3ebfe" :size="64" />
                    </div>
                    <p class="m-0">{{ apiData.current.pressure_in }} inHG</p>
                  </div>
                  <div class="col-4 align-self-center">
                    <div>
                      <weather-windy-icon fillColor="#e3ebfe" :size="64" />
                    </div>
                    <p class="m-0">{{ apiData.current.wind_dir }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-lg-6">
          <div class="row">
            <div class="col-4">
              <div class="row day p-1">
                <div>
                  <p class="m-3">Today AM6:00</p>
                  <img
                    :src="
                      historyApiData.forecast.forecastday[0].hour[6].condition.icon.replace(
                        '64x64',
                        '128x128'
                      )
                    "
                    style="align-self: center"
                  />
                  <p class="m-3">
                    {{
                      historyApiData.forecast.forecastday[0].hour[6].condition
                        .text
                    }}
                  </p>
                  <weather-pouring-icon fillColor="#3a4e72" :size="64" />

                  <p class="m-3">
                    {{
                      historyApiData.forecast.forecastday[0].hour[6]
                        .chance_of_rain
                    }}%
                  </p>
                  <thermometer-icon fillColor="#3a4e72" :size="64" />

                  <p class="m-3">
                    {{
                      historyApiData.forecast.forecastday[0].hour[6].temp_c
                    }}°C/
                    {{
                      historyApiData.forecast.forecastday[0].hour[6].temp_f
                    }}°F
                  </p>
                </div>
              </div>
            </div>
            <div class="col-4">
              <div class="row day p-1">
                <div>
                  <p class="m-3">Today PM6:00</p>
                  <img
                    :src="
                      historyApiData.forecast.forecastday[0].hour[18].condition.icon.replace(
                        '64x64',
                        '128x128'
                      )
                    "
                    style="align-self: center"
                  />
                  <p class="m-3">
                    {{
                      historyApiData.forecast.forecastday[0].hour[18].condition
                        .text
                    }}
                  </p>
                  <weather-pouring-icon fillColor="#3a4e72" :size="64" />

                  <p class="m-3">
                    {{
                      historyApiData.forecast.forecastday[0].hour[18]
                        .chance_of_rain
                    }}%
                  </p>
                  <thermometer-icon fillColor="#3a4e72" :size="64" />

                  <p class="m-3">
                    {{
                      historyApiData.forecast.forecastday[0].hour[18].temp_c
                    }}°C/
                    {{
                      historyApiData.forecast.forecastday[0].hour[18].temp_f
                    }}°F
                  </p>
                </div>
              </div>
            </div>
            <div class="col-4">
              <div class="row day p-1">
                <div>
                  <p class="m-3">Tomorrow AM6:00</p>
                  <img
                    :src="
                      tomorrowData.forecast.forecastday[0].hour[6].condition.icon.replace(
                        '64x64',
                        '128x128'
                      )
                    "
                    style="align-self: center"
                  />
                  <p class="m-3">
                    {{
                      tomorrowData.forecast.forecastday[0].hour[6].condition
                        .text
                    }}
                  </p>
                  <weather-pouring-icon fillColor="#3a4e72" :size="64" />

                  <p class="m-3">
                    {{
                      tomorrowData.forecast.forecastday[0].hour[6]
                        .chance_of_rain
                    }}%
                  </p>
                  <thermometer-icon fillColor="#3a4e72" :size="64" />

                  <p class="m-3">
                    {{ tomorrowData.forecast.forecastday[0].hour[6].temp_c }}°C/
                    {{ tomorrowData.forecast.forecastday[0].hour[6].temp_f }}°F
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <p>{{ city }}</p>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import { useUserStore } from '@/store/user'

import SunWirelessOutlineIcon from 'vue-material-design-icons/SunWirelessOutline.vue'
import WeatherWindyIcon from 'vue-material-design-icons/WeatherWindy.vue'
import FaceMaskOutlineIcon from 'vue-material-design-icons/FaceMaskOutline.vue'
import WaterPercentIcon from 'vue-material-design-icons/WaterPercent.vue'
import SpeedometerIcon from 'vue-material-design-icons/Speedometer.vue'
import WindPowerOutlineIcon from 'vue-material-design-icons/WindPowerOutline.vue'
import MagnifyIcon from 'vue-material-design-icons/Magnify.vue'
import MapMarkerRadiusOutlineIcon from 'vue-material-design-icons/MapMarkerRadiusOutline.vue'
import WeatherPouringIcon from 'vue-material-design-icons/WeatherPouring.vue'
import ThermometerIcon from 'vue-material-design-icons/Thermometer.vue'

export default {
  // setup() {
  //   const store = useUserStore()
  //   store.$patch((state) => {
  //     const { city } = storeToRefs(store)
  //     return {
  //       city
  //     }
  //   })
  // },
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
  components: {
    WeatherWindyIcon,
    SunWirelessOutlineIcon,
    FaceMaskOutlineIcon,
    WaterPercentIcon,
    SpeedometerIcon,
    WindPowerOutlineIcon,
    MagnifyIcon,
    MapMarkerRadiusOutlineIcon,
    WeatherPouringIcon,
    ThermometerIcon
  },
  name: 'PiniaWeather',
  data() {
    return {
      header: 'Weather Forecast',
      city: ''
    }
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

<style lang="scss">
.Weather {
  color: #000000;
  .row.main {
    min-height: 250px;
    color: #3a4e72;
    --bs-bg-opacity: 1;
    background-color: #c4d8fd !important;
    border: var(--bs-border-width) var(--bs-border-style) var(--bs-border-color) !important;
    border-radius: var(--bs-border-radius) !important;
  }
  .row.column {
    color: white;
    min-height: 250px;
    --bs-bg-opacity: 1;
    background-color: #7393ce !important;
    border: var(--bs-border-width) var(--bs-border-style) var(--bs-border-color) !important;
    border-radius: var(--bs-border-radius) !important;
  }
  .row.day.p-1 div {
    color: #3a4e72;
    min-height: 510px;
    --bs-bg-opacity: 1;
    background-color: #d1e2ff !important;
    border: var(--bs-border-width) var(--bs-border-style) var(--bs-border-color) !important;
    border-radius: var(--bs-border-radius) !important;
  }
}
</style>
