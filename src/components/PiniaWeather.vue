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
      <div class="input-group mb-2 input-group-lg-3 px-5 py-3 maxlength-5">
        <span class="input-group-text" id="basic-addon1">
          {{ apiData.location.localtime }}( {{ apiData.location.tz_id }} )</span
        >
        <input
          type="text"
          class="form-control"
          placeholder="cityname"
          v-model="Columns.search"
          v-on:keypress="searchCoordinates"
        /><button
          type="button"
          class="btn btn-outline-primary"
          v-on:click="locationCoordinates"
        >
          <sun-wireless-icon fillColor="#FFa1e0" />
        </button>
      </div>
      <!-- row-cols-lg-4 g-5 -->
      <div class="row">
        <div class="col-6">
          <div class="row">
            <div class="col-12">
              <div class="row column">
                <div class="col-6">天氣圖</div>
                <div class="col-6">當下氣溫</div>
              </div>
            </div>
            <div class="col-12">
              <div class="row column">
                <div class="col-4">風速</div>
                <div class="col-4">紫外線</div>
                <div class="col-4">PM2.5</div>
                <div class="col-4">濕度</div>
                <div class="col-4">氣壓</div>
                <div class="col-4">風向</div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-6">
          <div class="row">
            <div class="col-4">
              <div class="row column">
                <div class="col-12">Today AM6:00</div>
                <div class="col-12">紫外線</div>
                <div class="col-12">PM2.5</div>
                <div class="col-12">溫度</div>
              </div>
            </div>
            <div class="col-4">
              <div class="row column">
                <div class="col-12">Today AM6:00</div>
                <div class="col-12">紫外線</div>
                <div class="col-12">PM2.5</div>
                <div class="col-12">溫度</div>
              </div>
            </div>
            <div class="col-4">
              <div class="row column">
                <div class="col-12">Today AM6:00</div>
                <div class="col-12">紫外線</div>
                <div class="col-12">PM2.5</div>
                <div class="col-12">溫度</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SunWirelessIcon from 'vue-material-design-icons/SunWireless.vue'
export default {
  components: {
    SunWirelessIcon
  },
  name: 'PiniaWeather',
  data() {
    return {
      header: 'Weather Forecast',
      url_base:
        'https://api.weatherapi.com/v1/current.json?key=424993aae23147a1afb32605222207&q=',
      keyword: '',
      apiData: '',
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
          this.apiData = data
        })
    },
    searchCoordinates() {
      fetch(`${this.url_base},${this.Columns.search}&aqi=yes`)
        .then((res) => res.json())
        .then((data) => {
          this.apiData = data
        })
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
  }
}
</style>
