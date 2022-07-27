<template>
  <div class="container">
    <div class="weather" v-if="apiData != ''">
      <div class="row">
        <div class="col-4">
          <h4>{{ header }}</h4>
        </div>
        <div class="col-4">
          <h5>{{ apiData.location.country }} {{ apiData.location.name }}</h5>
        </div>
      </div>
      <div class="row py-3">
        <div class="col-10">
          <div class="input-group mb-2 input-group-lg-3 maxlength-5">
            <span class="input-group-text" id="basic-addon1">
              {{ apiData.location.localtime }}(
              {{ apiData.location.tz_id }} )</span
            >
            <input
              type="text"
              class="form-control"
              placeholder="cityname"
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
        <div class="col-6">
          <div class="row">
            <div class="col-12">
              <div class="row column">
                <div class="col-6 align-self-center">
                  <img
                    :src="apiData.current.condition.icon"
                    class="img-thumbnail"
                  />
                  <p class="m-0">
                    {{ apiData.current.condition.text }}
                  </p>
                </div>
                <div class="col-6 align-self-center">
                  <p>{{ change.aa }}</p>
                  <h1>{{ change.nowTemp }} {{ change.unit }}</h1>
                  <p class="m-0">
                    Feellike : {{ change.feelTemp }}{{ change.unit }}
                  </p>
                  <button
                    type="button"
                    class="btn btn-outline-primary"
                    v-on:click="changeTemp"
                  >
                    <map-marker-radius-outline-icon fillColor="#FFa1e0" />
                  </button>
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="row column">
                <div class="col-4 align-self-center">
                  <div><wind-power-outline-icon fillColor="#FFa1e0" /></div>
                  <p class="m-0">{{ apiData.current.wind_kph }} km/h</p>
                  <div>Wind</div>
                </div>
                <div class="col-4 align-self-center">
                  <div><sun-wireless-outline-icon fillColor="#FFa1e0" /></div>
                  <p class="m-0">{{ apiData.current.uv }}</p>
                  <div><p class="m-0">UV</p></div>
                </div>
                <div class="col-4 align-self-center">
                  <div><face-mask-outline-icon fillColor="#FFa1e0" /></div>
                  <p class="m-0">
                    {{ apiData.current.air_quality.pm2_5.toFixed(1) }}
                  </p>
                  <p class="m-0">PM2.5</p>
                </div>
                <div class="col-4 align-self-center">
                  <div><water-percent-icon fillColor="#FFa1e0" /></div>
                  <p class="m-0">{{ apiData.current.humidity }}</p>
                  <div><p class="m-0">Humidity</p></div>
                </div>
                <div class="col-4 align-self-center">
                  <div><speedometer-icon fillColor="#FFa1e0" /></div>
                  <p class="m-0">{{ apiData.current.pressure_mb }} mb</p>
                  <div>Pressure</div>
                </div>
                <div class="col-4 align-self-center">
                  <div><weather-windy-icon fillColor="#FFa1e0" /></div>
                  <p class="m-0">{{ apiData.current.wind_dir }}</p>
                  <div><p class="m-0">Wind Direction</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-6">
          <div class="row">
            <div class="col-4">
              <div class="row column">
                <p class="m-0">Today AM6:00</p>
                <div><sun-wireless-outline-icon fillColor="#FFa1e0" /></div>
                <p class="m-0">紫外線</p>
                <div><face-mask-outline-icon fillColor="#FFa1e0" /></div>
                <p class="m-0">PM2.5</p>
                <p class="m-0">溫度</p>
              </div>
            </div>
            <div class="col-4">
              <div class="row column">
                <p class="m-0">Today PM6:00</p>
                <div><sun-wireless-outline-icon fillColor="#FFa1e0" /></div>
                <p class="m-0">紫外線</p>
                <div><face-mask-outline-icon fillColor="#FFa1e0" /></div>
                <p class="m-0">PM2.5</p>
                <p class="m-0">溫度</p>
              </div>
            </div>
            <div class="col-4">
              <div class="row column">
                <p class="m-0">Tomorrow</p>
                <div><sun-wireless-outline-icon fillColor="#FFa1e0" /></div>
                <p class="m-0">紫外線</p>
                <div><face-mask-outline-icon fillColor="#FFa1e0" /></div>
                <p class="m-0">PM2.5</p>
                <p class="m-0">溫度</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SunWirelessOutlineIcon from 'vue-material-design-icons/SunWirelessOutline.vue'
import WeatherWindyIcon from 'vue-material-design-icons/WeatherWindy.vue'
import FaceMaskOutlineIcon from 'vue-material-design-icons/FaceMaskOutline.vue'
import WaterPercentIcon from 'vue-material-design-icons/WaterPercent.vue'
import SpeedometerIcon from 'vue-material-design-icons/Speedometer.vue'
import WindPowerOutlineIcon from 'vue-material-design-icons/WindPowerOutline.vue'
import MagnifyIcon from 'vue-material-design-icons/Magnify.vue'
import MapMarkerRadiusOutlineIcon from 'vue-material-design-icons/MapMarkerRadiusOutline.vue'
export default {
  components: {
    WeatherWindyIcon,
    SunWirelessOutlineIcon,
    FaceMaskOutlineIcon,
    WaterPercentIcon,
    SpeedometerIcon,
    WindPowerOutlineIcon,
    MagnifyIcon,
    MapMarkerRadiusOutlineIcon
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
      apiData: '',
      change: {
        nowTemp: '',
        feelTemp: '',
        unit: '°C'
      },
      Columns: {
        lat: '',
        lon: '',
        search: ''
      },
      today: ''
    }
  },
  created() {
    this.today = new Date().toISOString().slice(0, 10)
  },
  async mounted() {
    const position = await this.getCoordinates()
    this.Columns.lat = position.coords.latitude
    this.Columns.lon = position.coords.longitude

    fetch(`${this.url_base}${this.Columns.lat},${this.Columns.lon}&aqi=yes`)
      .then((res) => res.json())
      .then((data) => {
        this.change.nowTemp = data.current.temp_c
        this.change.feelTemp = data.current.feelslike_c
        this.apiData = data
      })

    fetch(`${this.url_base}${this.Columns.lat},${this.Columns.lon}&aqi=yes`)
      .then((res) => res.json())
      .then((data) => {
        this.change.nowTemp = data.current.temp_c
        this.change.feelTemp = data.current.feelslike_c
        this.apiData = data
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
          this.change.nowTemp = data.current.temp_c
          this.change.feelTemp = data.current.feelslike_c
          this.apiData = data
        })
    },
    searchCoordinates() {
      fetch(`${this.url_base},${this.Columns.search}&aqi=yes`)
        .then((res) => res.json())
        .then((data) => {
          this.change.nowTemp = data.current.temp_c
          this.change.feelTemp = data.current.feelslike_c
          this.apiData = data
        })
    },
    changeTemp() {
      if (this.change.nowTemp === this.apiData.current.temp_c) {
        return (
          (this.change.nowTemp = this.apiData.current.temp_f),
          (this.change.unit = '°F'),
          (this.change.feelTemp = this.apiData.current.feelslike_f)
        )
      } else {
        return (
          (this.change.nowTemp = this.apiData.current.temp_c),
          (this.change.unit = '°C'),
          (this.change.feelTemp = this.apiData.current.feelslike_c)
        )
      }
    }
  }
}
</script>

<style lang="scss">
.weather {
  color: #000000;
  .row.column {
    padding: 13px;
    margin-right: 1px;
    margin-bottom: 10px;
    --bs-bg-opacity: 1;
    background-color: rgba(
      var(--bs-light-rgb),
      var(--bs-bg-opacity)
    ) !important;
    border: var(--bs-border-width) var(--bs-border-style) var(--bs-border-color) !important;
    border-radius: var(--bs-border-radius) !important;
  }
}
</style>
