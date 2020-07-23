//typescript works in here out of the box
import "./globalStyles/reset.scss";

import "./globalStyles/grid.scss";

import "./globalStyles/inputs.scss";

let dateTest = new Date().getFullYear();
console.log(dateTest);

import { createApp } from "vue";
import App from "./App.vue";

createApp(App).mount("#app");

/* How Best to Register Service Worker?*/

async function registerServiceWorker() {
  // check if already registered?
  navigator.serviceWorker.register("/public/sw.js");
}

// i dont want to register every page load right? When?
document.addEventListener("DOMContentLoaded", registerServiceWorker);
