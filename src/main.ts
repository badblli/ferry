import 'preline/preline'
import './assets/main.css'
import 'vue-tel-input/vue-tel-input.css' // Assuming a phone input library
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'
import router from './router'
import i18nPlugin from './plugins/i18n' // Import the i18n plugin
import { createHead } from '@vueuse/head';

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const head = createHead()

app.use(head)
app.use(pinia)
app.use(router)
app.use(i18nPlugin)
app.mount('#app')