import { createApp } from "vue";
import { createPinia } from "pinia";
import * as globalHelper from '@/utils/globalHelper';

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
Object.keys(globalHelper).forEach((key) => {
    app.config.globalProperties[`$${key}`] = globalHelper[key];
});

app.mount("#app");
