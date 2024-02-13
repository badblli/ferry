import './assets/main.css'
import 'preline/preline'
import 'vue-tel-input/vue-tel-input.css';
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.mount('#app')
