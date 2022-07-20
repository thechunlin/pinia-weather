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
      header: 'Weather Forecast'
    }
  },
  methods: {
    locatorButtonPressed() {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log(position.coords.latitude)
          console.log(position.coords.longitude)
        },
        (error) => {
          console.log(error.message)
        }
      )
    }
  }
}
</script>

<style lang="scss">
.weather {
  color: #f1f2b5;
}
</style>
