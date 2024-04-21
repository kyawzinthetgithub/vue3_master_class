import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "@/router";
import AppDate from "@/components/AppDate.vue";
const app = createApp(App);
app.use(router);
app.component("AppDate", AppDate);
app.mount("#app");
