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
  actions: {}
})
