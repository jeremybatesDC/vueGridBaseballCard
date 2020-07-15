//typescript works in here out of the box
import "./globalStyles/reset.scss";

import "./globalStyles/grid.scss";

import "./globalStyles/inputs.scss";

let dateTest = new Date().getFullYear();
console.log(dateTest);

import { createApp } from "vue";
import App from "./App.vue";

async function registerServiceWorker() {
  // check if already registered?
  navigator.serviceWorker.register("./sw.js");
}

// i dont want to register every page load right? When?
//document.addEventListener("DOMContentLoaded", registerServiceWorker);

createApp(App).mount("#app");
