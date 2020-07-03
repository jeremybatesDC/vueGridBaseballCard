//typescript works in here out of the box
import "./grid.scss";

import { createApp } from "vue";
import App from "./App.vue";

async function registerServiceWorker() {
  navigator.serviceWorker.register("./sw.js");
}
document.addEventListener("DOMContentLoaded", registerServiceWorker);

createApp(App).mount("#app");
