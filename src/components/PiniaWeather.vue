<template>
  <div class="container">
    <div class="weather" v-if="apiData != ''">
      <div class="row">
        <div class="col-4" style="color: #56719a">
          <h4>{{ header }}</h4>
        </div>
        <div class="col-4" style="color: #56719a">
          <h5>{{ apiData.location.country }} {{ apiData.location.name }}</h5>
        </div>
      </div>
      <div class="row py-3">
        <div class="col-10">
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
              v-model="Columns.search"
            />
            <button
              type="button"
              class="btn btn-outline-primary"
              v-on:click="searchCoordinates"
            >
              <magnify-icon fillColor="#FFa1e0" />
            </button>
          </div>
        </div>
        <div class="col-2">
          <button
            type="button"
            class="btn btn-outline-primary"
            v-on:click="locationCoordinates"
          >
            <map-marker-radius-outline-icon fillColor="#FFa1e0" />
          </button>
        </div>
      </div>
      <!-- row-cols-lg-4 g-5 -->
      <div class="row">
        <div class="col-sm-12 col-lg-6">
          <div class="row">
            <div class="col-12">
              <div class="row main">
                <div class="col-6 align-self-center">
                  <img
                    :src="
                      apiData.current.condition.icon.replace('64x64', '128x128')
                    "
                  />
                  <p class="m-0">
                    {{ apiData.current.condition.text }}
                  </p>

                  <p class="m-0">
                    <weather-pouring-icon fillColor="#3a4e72" />
                    {{
                      historyApiData.forecast.forecastday[0].hour[hour]
                        .chance_of_rain
                    }}%
                  </p>
                </div>
                <div class="col-6 align-self-center">
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
            <div class="col-12">
              <div class="row column">
                <div class="col-4 align-self-center">
                  <div><wind-power-outline-icon fillColor="#e3ebfe" /></div>
                  <p class="m-0">{{ apiData.current.wind_kph }} km/h</p>
                </div>
                <div class="col-4 align-self-center">
                  <div><sun-wireless-outline-icon fillColor="#e3ebfe" /></div>
                  <p class="m-0">{{ apiData.current.uv }}mJ/cm2</p>
                </div>
                <div class="col-4 align-self-center">
                  <div><face-mask-outline-icon fillColor="#e3ebfe" /></div>
                  <p class="m-0">
                    {{ apiData.current.air_quality.pm2_5.toFixed(1) }}μg/m3
                  </p>
                </div>
                <div class="col-4 align-self-center">
                  <div><water-percent-icon fillColor="#e3ebfe" /></div>
                  <p class="m-0">{{ apiData.current.humidity }}</p>
                </div>
                <div class="col-4 align-self-center">
                  <div><speedometer-icon fillColor="#e3ebfe" /></div>
                  <p class="m-0">{{ apiData.current.pressure_in }} inHG</p>
                </div>
                <div class="col-4 align-self-center">
                  <div><weather-windy-icon fillColor="#e3ebfe" /></div>
                  <p class="m-0">{{ apiData.current.wind_dir }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-lg-6">
          <div class="row">
            <div class="col-4">
              <div class="row day">
                <p class="m-0">Today AM6:00</p>
                <img
                  :src="
                    historyApiData.forecast.forecastday[0].hour[6].condition
                      .icon
                  "
                />
                <p class="m-0">
                  {{
                    historyApiData.forecast.forecastday[0].hour[6].condition
                      .text
                  }}
                </p>
                <div><weather-pouring-icon fillColor="#3a4e72" /></div>
                <p class="m-0">
                  {{
                    historyApiData.forecast.forecastday[0].hour[6]
                      .chance_of_rain
                  }}%
                </p>
                <div><thermometer-icon fillColor="#3a4e72" /></div>
                <p class="m-0">
                  {{ historyApiData.forecast.forecastday[0].hour[6].temp_c }}°C/
                  {{ historyApiData.forecast.forecastday[0].hour[6].temp_f }}°F
                </p>
              </div>
            </div>
            <div class="col-4">
              <div class="row day">
                <p class="m-0">Today PM6:00</p>
                <img
                  :src="
                    historyApiData.forecast.forecastday[0].hour[18].condition.icon.replace(
                      '64x64',
                      '128x128'
                    )
                  "
                />
                <p class="m-0">
                  {{
                    historyApiData.forecast.forecastday[0].hour[18].condition
                      .text
                  }}
                </p>
                <div><weather-pouring-icon fillColor="#3a4e72" /></div>
                <p class="m-0">
                  {{
                    historyApiData.forecast.forecastday[0].hour[18]
                      .chance_of_rain
                  }}%
                </p>
                <div><thermometer-icon fillColor="#3a4e72" /></div>
                <p class="m-0">
                  {{
                    historyApiData.forecast.forecastday[0].hour[18].temp_c
                  }}°C/
                  {{ historyApiData.forecast.forecastday[0].hour[18].temp_f }}°F
                </p>
              </div>
            </div>
            <div class="col-4">
              <div class="row day">
                <p class="m-0">Tomorrow AM6:00</p>
                <img
                  :src="
                    tomorrowData.forecast.forecastday[0].hour[6].condition.icon.replace(
                      '64x64',
                      '128x128'
                    )
                  "
                />
                <p class="m-0">
                  {{
                    tomorrowData.forecast.forecastday[0].hour[6].condition.text
                  }}
                </p>
                <div><weather-pouring-icon fillColor="#3a4e72" /></div>
                <p class="m-0">
                  {{
                    tomorrowData.forecast.forecastday[0].hour[6].chance_of_rain
                  }}%
                </p>
                <div><thermometer-icon fillColor="#3a4e72" /></div>
                <p class="m-0">
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
</template>

<script>
import moment from 'moment'
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
      history_url_base:
        'https://api.weatherapi.com/v1/history.json?key=424993aae23147a1afb32605222207&q=',
      url_base:
        'https://api.weatherapi.com/v1/current.json?key=424993aae23147a1afb32605222207&q=',
      keyword: '',
      historyApiData: '',
      apiData: '',
      hour: '',
      tomorrowData: '',
      Columns: {
        lat: '',
        lon: '',
        search: ''
      },
      today: '',
      tomorrow: ''
    }
  },

  created() {
    this.today = moment().format('YYYY-MM-DD')
    this.tomorrow = moment().add(1, 'days').format('YYYY-MM-DD')
  },
  async mounted() {
    const position = await this.getCoordinates()
    this.Columns.lat = position.coords.latitude
    this.Columns.lon = position.coords.longitude

    fetch(
      `${this.history_url_base}${this.Columns.lat},${this.Columns.lon}&dt=${this.today}`
    )
      .then((res) => res.json())
      .then((data) => {
        this.historyApiData = data
      })

    fetch(`${this.url_base}${this.Columns.lat},${this.Columns.lon}&aqi=yes`)
      .then((res) => res.json())
      .then((data) => {
        this.apiData = data
        this.hour = data.location.localtime[11] + data.location.localtime[12]
      })

    fetch(
      `${this.history_url_base}${this.Columns.lat},${this.Columns.lon}&dt=${this.tomorrow}`
    )
      .then((res) => res.json())
      .then((data) => {
        this.tomorrowData = data
      })
  },
  methods: {
    getCoordinates() {
      return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject)
      })
    },
    locationCoordinates() {
      fetch(`${this.url_base}${this.Columns.lat},${this.Columns.lon}&aqi=yes`)
        .then((res) => res.json())
        .then((data) => {
          this.apiData = data
        })
      fetch(
        `${this.history_url_base}${this.Columns.lat},${this.Columns.lon}&dt=${this.today}`
      )
        .then((res) => res.json())
        .then((data) => {
          this.historyApiData = data
        })
      fetch(
        `${this.history_url_base}${this.Columns.lat},${this.Columns.lon}&dt=${this.tomorrow}`
      )
        .then((res) => res.json())
        .then((data) => {
          this.tomorrowData = data
        })
    },
    searchCoordinates() {
      fetch(`${this.url_base},${this.Columns.search}&aqi=yes`)
        .then((res) => res.json())
        .then((data) => {
          this.apiData = data
        })
      fetch(`${this.history_url_base},${this.Columns.search}&dt=${this.today}`)
        .then((res) => res.json())
        .then((data) => {
          this.historyApiData = data
        })
      fetch(
        `${this.history_url_base},${this.Columns.search}&dt=${this.tomorrow}`
      )
        .then((res) => res.json())
        .then((data) => {
          this.tomorrowData = data
        })
    }
  }
}
</script>

<style lang="scss">
.weather {
  color: #000000;
  .row.main {
    color: #3a4e72;
    padding: 13px;
    margin-right: 1px;
    margin-bottom: 10px;
    --bs-bg-opacity: 1;
    background-color: #c4d8fd !important;
    border: var(--bs-border-width) var(--bs-border-style) var(--bs-border-color) !important;
    border-radius: var(--bs-border-radius) !important;
  }
  .row.column {
    color: white;
    padding: 13px;
    margin-right: 1px;
    margin-bottom: 10px;
    --bs-bg-opacity: 1;
    background-color: #9fb6e0 !important;
    border: var(--bs-border-width) var(--bs-border-style) var(--bs-border-color) !important;
    border-radius: var(--bs-border-radius) !important;
  }
  .row.day {
    color: #3a4e72;
    padding: 13px;
    margin-right: 1px;
    margin-bottom: 10px;
    --bs-bg-opacity: 1;
    background-color: #d1e2ff !important;
    border: var(--bs-border-width) var(--bs-border-style) var(--bs-border-color) !important;
    border-radius: var(--bs-border-radius) !important;
  }
}
</style>
