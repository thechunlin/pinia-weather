<template>
  <div class="row">
    <div class="col-6">
      <div class="d-flex border bg-light">
        <div class="col-sm">
          <img :src="apiData.current.condition.icon" class="img-thumbnail" />
          <div>
            {{ apiData.current.condition.text }}
          </div>
        </div>
        <div class="col-sm">
          <div>
            <h1>{{ apiData.current.temp_c }} °C</h1>
          </div>
          <h7>Feellike :</h7>
          {{ apiData.current.feelslike_c }}°C
        </div>
      </div>
      <div class="col-sm-3 g-2 border bg-light">
        平均溫度 {{ apiData.current.temp_c }} °C
        <br />
        平均溫度 {{ apiData.current.temp_f }} °F
      </div>
    </div>
    <div class="col-6">
      <div class="row">
        <div class="col-sm-3">
          <div class="d-flex border bg-light">
            風速 {{ apiData.current.wind_kph }} km/h
          </div>
        </div>
        <div class="col-sm-3">
          <div class="d-flex border bg-light">
            濕度 {{ apiData.current.humidity }}
          </div>
        </div>
        <div class="col-sm-3">
          <div class="d-flex border bg-light">
            濕度 {{ apiData.current.humidity }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
