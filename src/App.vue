<template>
  <main>
    <div class="tabsGood">
      <div role="tablist" aria-label="Card Side">
        <!--<div class="tab__wrapper">-->
        <button
          role="tab"
          aria-selected="true"
          aria-controls="panelCardFront"
          id="triggerFront"
          aria-label="Front"
          @click="changeTabs"
        >
          Card Front
        </button>
        <span class="showOnlyForSelectedTab">
          <label
            for="playerPic"
            class="filePicker__label"
            aria-label="Upload Image"
          >
            <span> Add Pic</span>
          </label>
          <label
            for="logoPic"
            class="filePicker__label"
            aria-label="Upload Logo Image"
          >
            <span>Add Logo</span>
          </label>
          <label
            class="colorPicker__label colorPicker__label--textOverlap align-self-center"
          >
            <span>Color</span>
            <input
              class="colorPicker__input"
              type="color"
              v-model="cardBackgroundColor"
            />
          </label>
        </span>
        <!--</div>
        <div class="tab__wrapper">-->
        <button
          role="tab"
          aria-selected="false"
          aria-controls="panelCardBack"
          id="triggerBack"
          aria-label="Back"
          @click="changeTabs"
        >
          Card Back
        </button>
        <span class="showOnlyForSelectedTab">
          <label class="colorPicker__label colorPicker__label--textOverlap">
            <span>Color</span>
            <input
              class="colorPicker__input"
              type="color"
              v-model="cardBackgroundColorBack"
            /> </label
        ></span>
        <!--</div>-->
      </div>
      <div id="panelCardFront" role="tabpanel" aria-labelledby="triggerFront">
        <CardFront />
      </div>
      <div
        id="panelCardBack"
        role="tabpanel"
        aria-labelledby="triggerBack"
        hidden
      >
        <CardBack />
      </div>
    </div>
  </main>
</template>

<script>
import { get } from "idb-keyval";

import CardFront from "./components/CardFront.vue";
import CardBack from "./components/CardBack.vue";
//import { onMounted } from "vue";

async function registerServiceWorker() {
  console.log("restore service worker");
  //navigator.serviceWorker.register("/sw.js");
}

async function checkForLocalData() {
  // missing val undfined
  get("testFieldFromWebWorker2").then((val) => {
    if (val) {
      console.log(
        "yes there is local data to use so pull those values into vm instance ok using setFunc?"
      );
    } else {
      console.log(
        "no, thereS no local data to use, so load defaults importing from json"
      );
    }
  });
}

// this can be made like 2 lines of code...espec since only 2

export default {
  components: {
    CardFront,
    CardBack,
  },
  setup() {
    registerServiceWorker();
    checkForLocalData();
    //setFunc();
    return {
      registerServiceWorker,
      checkForLocalData,
    };
  },

  data() {
    return {
      frontshowing: true,
      cardBackgroundColor: "#ffffff",
      cardBackgroundColorBack: "#9a8b7c",
    };
  },
  methods: {
    // removed async attr - reasoning us that user would expect nothing else to be prioritzed over their desired action of switching tabs ( i think )
    changeTabs(event) {
      const targetBtn = event.target;
      document.body
        .querySelector('[aria-selected="true"]')
        .setAttribute("aria-selected", false);
      targetBtn.setAttribute("aria-selected", true);
      document.body
        .querySelector('[role="tabpanel"]:not([hidden])')
        .setAttribute("hidden", true);
      document
        .getElementById(targetBtn.getAttribute("aria-controls"))
        .removeAttribute("hidden");
    },
  },
  //mounted() {
  //
  //},
};
</script>

<style lang="scss">
body {
  background-color: #eee;
}

main {
  //height: 100vh;
  overflow: hidden;
}

h1,
h2,
h3 {
  input {
    width: 100%;
  }
}

.controls--l2 {
  height: 7.2rem;
}

legend {
  font-family: inherit;
  text-align: center;
  font-size: 1.6rem;
}

[role="tablist"] {
  display: flex;
  justify-content: space-between;
  background-color: var(--grey-for-controls);
}

[role="tab"] {
  font-size: 1.6rem;
  font-variation-settings: var(--text-big-bold);
  display: flex;

  //flex-grow: 1;

  align-items: stretch;
  justify-content: center;
  width: var(--touch-target-large);
  height: var(--touch-target-large);
  padding: 0;
  text-transform: uppercase;
  // in case ever have more than just 2 tabs
  &:not(:first-child) {
    box-shadow: -1px 0 #000;
    order: 99;
  }
  &[aria-selected="true"] {
    background: royalblue;
    color: #fff;
    pointer-events: none;
  }
}

.showOnlyForSelectedTab {
  display: none;
  //flex-shrink: 0;
  // after flex-grow 1 OR width 100% here, there is some gap thatS letting a tap click through and zoom on iOS... grrr
  //flex-grow: 1;
  //width: 100%;
  background-color: royalblue;
  [aria-selected="true"] + & {
    display: flex;
  }
}
</style>
