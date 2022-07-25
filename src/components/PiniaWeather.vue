<template>
  <div class="container">
    <div class="weather">
      <div class="row">
        <div class="col-4">
          <h3>{{ location.time }}</h3>
        </div>
        <div class="col-4">
          <h1>{{ header }}</h1>
        </div>
      </div>
      <div class="input-group mb-3 input-group-lg px-5">
        <span class="input-group-text" id="basic-addon1">city</span>
        <input
          type="text"
          class="form-control"
          placeholder="cityname"
          v-model="location.search"
          v-on:keypress="searchCoordinates"
        />
      </div>
      <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
        <div class="col">
          <div class="p-3 border bg-light">
            <div>天氣狀況</div>
            <img :src="location.icon" class="img-thumbnail" />
          </div>
        </div>
        <div class="col">
          <div class="p-3 border bg-light">濕度 {{ location.avghumidity }}</div>
        </div>
        <div class="col">
          <div class="p-3 border bg-light">
            最大風速 {{ location.maxwind_kph }} km/h
          </div>
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
        <div class="col">
          <div class="p-3 border bg-light">Row column</div>
        </div>
        <div class="col">
          <div class="p-3 border bg-light">Row column</div>
        </div>
      </div>

      <p>{{ location.country }}</p>
      <p>{{ location.name }}</p>
      <p>{{ location.search }}</p>
      <p>{{ location.searchlat }}</p>
      <p>{{ location.searchlon }}</p>
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
        'https://api.weatherapi.com/v1/history.json?key=424993aae23147a1afb32605222207&',
      search_url_base:
        'https://api.weatherapi.com/v1/current.json?key=424993aae23147a1afb32605222207&q=',
      keyword: '',
      location: {
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
    this.location.lat = position.coords.latitude
    this.location.lon = position.coords.longitude

    fetch(
      `${this.url_base}q=${this.location.lat},${this.location.lon}&dt=${this.today}`
    )
      .then((res) => res.json())
      .then((data) => {
        this.apiData = data
        this.location.name = data.location.name
        this.location.time = data.location.localtime
        this.location.country = data.location.country
        this.location.maxwind_kph = data.forecast.forecastday[0].day.maxwind_kph
        this.location.avghumidity = data.forecast.forecastday[0].day.avghumidity
        this.location.icon = data.forecast.forecastday[0].day.condition.icon
        console.table(data.forecast.forecastday)
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
      fetch(`${this.search_url_base},${this.location.search}&aqi=yes`)
        .then((res) => res.json())
        .then((data) => {
          this.location.searchlat = data.location.lat
          this.location.searchlon = data.location.lon
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
