<template>
  <div class="weather">
    <h1>{{ header }}</h1>
    <div class="row input-row">
      <button
        class="btn btn-primary"
        type="submit"
        @click="locatorButtonPressed"
      >
        Button
      </button>
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
.btn-primary {
  width: min-content;
}
</style>
