<template>
  <div class="container">
    <div class="weather">
      <div class="row">
        <div class="col-4">
          <h3>{{ Columns.time }}</h3>
        </div>
        <div class="col-4">
          <h1>{{ header }}</h1>
        </div>
        <div class="col-4">
          <div><h4>天氣狀況</h4></div>
          <img :src="Columns.icon" class="img-thumbnail" />
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
          <div class="p-3 border bg-light">國家 {{ Columns.country }}</div>
        </div>
        <div class="col">
          <div class="p-3 border bg-light">地區 {{ Columns.name }}</div>
        </div>
        <div class="col">
          <div class="p-1 border bg-light">
            平均溫度 {{ Columns.avgtempC }} °C
            <br />
            平均溫度 {{ Columns.avgtempF }} °F
          </div>
        </div>
        <div class="col">
          <div class="p-3 border bg-light">
            最大風速 {{ Columns.maxwind_kph }} km/h
          </div>
        </div>
        <div class="col">
          <div class="p-3 border bg-light">濕度 {{ Columns.avghumidity }}</div>
        </div>
        <div class="col">
          <div class="p-3 border bg-light">Row column</div>
        </div>
        <div class="col">
          <div class="p-3 border bg-light">Row column</div>
        </div>
        <div class="col">
          <div class="p-3 border bg-light">Row column</div>
        </div>
        <div class="col">
          <div class="p-3 border bg-light">Row column</div>
        </div>
        <div class="col">
          <div class="p-3 border bg-light">Row column</div>
        </div>
      </div>
      <p>{{ Columns.country }}</p>
      <p>{{ Columns.name }}</p>
      <p>{{ Columns.search }}</p>
      <p>{{ Columns.searchlat }}</p>
      <p>{{ Columns.searchlon }}</p>
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
        time: '',
        searchlat: '',
        searchlon: '',
        name: '',
        country: '',
        search: '',
        maxwind_kph: '',
        avghumidity: '',
        avgtempC: '',
        avgtempF: '',
        icon: ''
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
        this.Columns.name = data.location.name
        this.Columns.time = data.location.localtime
        this.Columns.country = data.location.country
        this.Columns.maxwind_kph = data.forecast.forecastday[0].day.maxwind_kph
        this.Columns.avghumidity = data.forecast.forecastday[0].day.avghumidity
        this.Columns.avgtempC = data.forecast.forecastday[0].day.avgtemp_c
        this.Columns.avgtempF = data.forecast.forecastday[0].day.avgtemp_f
        this.Columns.icon = data.forecast.forecastday[0].day.condition.icon
        console.log(data)
      })
  },
  methods: {
    getCoordinates() {
      return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject)
      })
    },
    searchCoordinates() {
      // fetch(`${this.search_url_base}`)
      fetch(`${this.url_base},${this.Columns.search}&aqi=yes`)
        .then((res) => res.json())
        .then((data) => {
          this.Columns.searchlat = data.location.lat
          this.Columns.searchlon = data.location.lon
          console.table(data)
          console.log(1)
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
