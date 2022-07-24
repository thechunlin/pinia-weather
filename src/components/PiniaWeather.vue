<template>
  <div class="weather">
    <div class="col-sm2">
      <h1>{{ header }}</h1>
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
      <p>{{ location.country }}</p>
      <p>{{ location.name }}</p>
      <p>{{ location.maxwind_kph }}</p>
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

      location: {
        lat: '',
        lon: '',
        searchlat: '',
        searchlon: '',
        name: '',
        country: '',
        search: '',
        maxwind_kph: ''
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
        this.location.name = data.location.name
        this.location.country = data.location.country
        this.location.maxwind_kph = data.forecast.forecastday[0].day.maxwind_kph
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
  color: #f1f2b5;
}
</style>
