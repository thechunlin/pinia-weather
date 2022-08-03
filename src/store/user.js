import { defineStore } from 'pinia'

export const useUserStore = defineStore('main', {
  state: () => {
    return {
      header: 'Weather Forecast'
    }
  },
  getters: {},
  actions: {}
})
