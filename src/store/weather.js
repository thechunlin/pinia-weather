import { defineStore } from 'pinia'

export const useUserStore = defineStore('main', {
  state: () => {
    return {
      search: '',
      historyApiData: '',
      apiData: '',
      tomorrowData: '',
      history_url_base:
        'https://api.weatherapi.com/v1/history.json?key=424993aae23147a1afb32605222207&q=',
      url_base:
        'https://api.weatherapi.com/v1/current.json?key=424993aae23147a1afb32605222207&q=',
      lat: '',
      lon: '',
      hour: '',
      today: '',
      tomorrow: ''
    }
  },
  getters: {},
  actions: {
    locationCoordinates() {
      fetch(`${this.url_base}${this.lat},${this.lon}&aqi=yes`)
        .then((res) => res.json())
        .then((data) => {
          this.apiData = data
        })
      fetch(`${this.history_url_base}${this.lat},${this.lon}&dt=${this.today}`)
        .then((res) => res.json())
        .then((data) => {
          this.historyApiData = data
        })
      fetch(
        `${this.history_url_base}${this.lat},${this.lon}&dt=${this.tomorrow}`
      )
        .then((res) => res.json())
        .then((data) => {
          this.tomorrowData = data
        })
    },
    searchCoordinates() {
      fetch(`${this.url_base},${this.search}&aqi=yes`)
        .then((res) => res.json())
        .then((data) => {
          this.apiData = data
        })
      fetch(`${this.history_url_base},${this.search}&dt=${this.today}`)
        .then((res) => res.json())
        .then((data) => {
          this.historyApiData = data
        })
      fetch(`${this.history_url_base},${this.search}&dt=${this.tomorrow}`)
        .then((res) => res.json())
        .then((data) => {
          this.tomorrowData = data
        })
    }
  }
})
