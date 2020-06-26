import "./grid.scss";

import { createApp } from "vue";
import App from "./App.vue";
import "./ts_test";

navigator.serviceWorker.register("/sw.js");

createApp(App).mount("#app");
