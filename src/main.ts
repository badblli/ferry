import './assets/main.css'
import 'preline/preline' // Assuming a pre-line library
import 'vue-tel-input/vue-tel-input.css'; // Assuming a phone input library
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import i18nPlugin from './plugins/i18n'; // Import the i18n plugin

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18nPlugin); // Use the i18n plugin
app.mount('#app')
