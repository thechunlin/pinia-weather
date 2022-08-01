import { createApp } from 'vue'
import App from './App.vue'

import { createPinia } from 'pinia'
import router from './router'
const pinia = createPinia
const app = createApp(App).use(router)
app.use(pinia)

app.mount('#app')
