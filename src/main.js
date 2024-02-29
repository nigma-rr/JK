import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import api from "./api";
import { store } from "./store";

const app = createApp(App);

app.use(store);
app.provide("api", api);
app.mount("#app");
