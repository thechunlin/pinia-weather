<template>
  <div class="weather">
    <div class="col-sm2">
      <h1>{{ header }}</h1>
      <div class="input-group mb-3 input-group-lg px-5">
        <span class="input-group-text" id="basic-addon1">city</span>
        <input type="text" class="form-control" placeholder="cityname" />
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
      location: {
        lat: '',
        lon: ''
      }
    }
  },
  created() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.location.lat = position.coords.latitude
        this.location.lon = position.coords.longitude
        console.log(this.location.lat)
        console.log(this.location.lon)
      },
      (error) => {
        console.log(error.message)
      }
    )
  },

  mounted() {
    fetch(
      'https://api.weatherapi.com/v1/history.json?key=424993aae23147a1afb32605222207&q= 48.8567,2.3508&dt=2022-07-22'
    ).then((res) => {
      console.log(res.json())
    })
  }
}
</script>

<style lang="scss">
.weather {
  color: #f1f2b5;
}
</style>
