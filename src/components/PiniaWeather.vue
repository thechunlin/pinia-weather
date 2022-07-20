<template>
  <div class="weather">
    <div class="col-sm2">
      <h1>{{ header }}</h1>
      <div class="input-group mb-3 input-group-lg px-5">
        <span class="input-group-text" id="basic-addon1">city</span>
        <input type="text" class="form-control" placeholder="cityname" />
        <button
          type="button"
          class="btn btn-info"
          v-on:click="locatorButtonPressed"
        >
          位置
        </button>
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
  created() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude
        const longitude = position.coords.longitude
        console.log(latitude)
        console.log(longitude)
        this.$store.commit('addloaction', this.inputValue)
      },
      (error) => {
        console.log(error.message)
      }
    )
  },

  methods: {}
}
</script>

<style lang="scss">
.weather {
  color: #f1f2b5;
}
</style>
