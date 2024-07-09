import 'preline/preline'
import './assets/main.css'
import 'vue-tel-input/vue-tel-input.css' // Assuming a phone input library
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'
import router from './router'
import i18nPlugin from './plugins/i18n' // Import the i18n plugin

const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
pinia.use(piniaPluginPersistedstate)

app.use(router)
app.use(i18nPlugin) // Use the i18n plugin
app.mount('#app')
