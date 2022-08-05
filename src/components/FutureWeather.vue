<template>
  <div class="container">
    <div class="Future">
      <div class="row">
        <div class="col-4" style="color: #56719a">
          <h5>{{ header }}</h5>
        </div>
        <div class="col-4" style="color: #56719a">
          <h5>{{ apiData.location.country }} {{ apiData.location.name }}</h5>
        </div>

        <div class="col-12 p-2">
          <div class="main">
            <p class="m-3">
              {{ tomorrowData.forecast.forecastday[0].hour[6].condition.text }}
            </p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 p-2"><div class="secondary">7</div></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'pinia'
import { useUserStore } from '@/store/user'
export default {
  computed: {
    ...mapState(useUserStore, [
      'history_url_base',
      'url_base',
      'lat',
      'lon',
      'hour',
      'historyApiData',
      'today',
      'tomorrow',
      'apiData',
      'tomorrowData'
    ])
  },
  data() {
    return {
      header: 'Weather Forecast'
    }
  }
}
</script>
fetch( `${state.history_url_base}${state.lat},${state.lon}&dt=${state.tomorrow}`
) .then((res) => res.json()) .then((data) => { state.historyApiData = data })
<style>
.main {
  background: white;
  min-height: 30vh;
}
.secondary {
  background: white;
  min-height: 30vh;
}
</style>
