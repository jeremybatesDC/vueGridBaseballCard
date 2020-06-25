import { createApp } from "vue";
import App from "./App.vue";
import "./ts_test";

navigator.serviceWorker.register("/sw.js");
//import './index.css'

createApp(App).mount("#app");
