//typescript works in here out of the box
import "./globalStyles/reset.scss";

import "./globalStyles/grid.scss";

import "./globalStyles/inputs.scss";

import "./globalStyles/animation.scss";

let dateTest = new Date().getFullYear();
console.log(dateTest);

import { createApp } from "vue";
import App from "./App.vue";

createApp(App).mount("#app");
