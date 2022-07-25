<template>
  <div class="container">
    <div class="weather" v-if="apiData != ''">
      <div class="row">
        <div class="col-4">
          <h3>{{ apiData.location.localtime }}</h3>
        </div>
        <div class="col-4">
          <h1>{{ header }}</h1>
        </div>
        <div class="col-4">
          <div><h4>天氣狀況</h4></div>
          <img :src="apiData.current.condition.icon" class="img-thumbnail" />
        </div>
      </div>
      <div class="input-group mb-3 input-group-lg px-5 py-3">
        <span class="input-group-text" id="basic-addon1">city</span>
        <input
          type="text"
          class="form-control"
          placeholder="cityname"
          v-model="Columns.search"
          v-on:keypress="searchCoordinates"
        />
      </div>
      <div class="row row-cols-2 row-cols-lg-4 g-2 g-l g-4">
        <div class="col">
          <div class="p-3 border bg-light">
            國家 {{ apiData.location.country }}
          </div>
        </div>
        <div class="col">
          <div class="p-3 border bg-light">
            地區 {{ apiData.location.name }}
          </div>
        </div>
        <div class="col">
          <div class="p-1 border bg-light">
            平均溫度 {{ apiData.current.temp_c }} °C
            <br />
            平均溫度 {{ apiData.current.temp_f }} °F
          </div>
        </div>
        <div class="col">
          <div class="p-3 border bg-light">
            最大風速 {{ apiData.current.wind_kph }} km/h
          </div>
        </div>
        <div class="col">
          <div class="p-3 border bg-light">
            濕度 {{ apiData.current.humidity }}
          </div>
        </div>
        <div class="col">
          <div class="p-3 border bg-light value.slice(0,value.index0f('.'+4))">
            懸浮微粒 {{ apiData.current.air_quality.pm2_5.toFixed(2) }}
          </div>
        </div>
        <div class="col">
          <div class="p-3 border bg-light">紫外線 {{ apiData.current.uv }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
    searchCoordinates() {
      fetch(`${this.url_base},${this.Columns.search}&aqi=yes`)
        .then((res) => res.json())
        .then((data) => {
          this.apiData = data
          console.table(data)
        })
    }
  }
}
</script>

<style lang="scss">
.weather {
  color: #000000;
}
</style>
