<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  <PiniaWeatherVue />
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import PiniaWeatherVue from '@/components/PiniaWeather.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
    PiniaWeatherVue
  }
}
</script>

<style lang="scss">
body {
  background-color: #baf5d1;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
