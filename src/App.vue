<template>
  <main>
    <div class="tabsGood">
      <div role="tablist" aria-label="Card Side">
        <!--<div class="tab__wrapper">-->
        <button
          disabled
          role="tab"
          aria-selected="true"
          aria-controls="panelCardFront"
          id="triggerFront"
          tabindex="0"
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
          tabindex="-1"
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
      <div
        id="panelCardFront"
        role="tabpanel"
        tabindex="0"
        aria-labelledby="triggerFront"
      >
        <CardFront />
      </div>
      <div
        id="panelCardBack"
        role="tabpanel"
        tabindex="0"
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
// import { onMounted } from "vue";

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
    return { registerServiceWorker, checkForLocalData };
  },

  data() {
    return {
      frontshowing: true,
      cardBackgroundColor: "#ffffff",
      cardBackgroundColorBack: "#9a8b7c",
    };
  },
  methods: {
    async changeTabs(event) {
      // move where these variables somewhere they can be collected once and only once...   Mounted?
      const tabsWrap = document.querySelector(".tabsGood");
      const tabs = [...tabsWrap.querySelectorAll('[role="tab"]')];
      const tabPanels = [...tabsWrap.querySelectorAll('[role="tabpanel"]')];

      const targetBtn = event.target;
      const idOfTargetPanel = targetBtn.getAttribute("aria-controls");

      tabs.map((tab) => {
        tab.setAttribute("aria-selected", false);
        tab.removeAttribute("disabled");
      });
      tabPanels.map((panel) => panel.setAttribute("hidden", true));
      targetBtn.setAttribute("aria-selected", true);
      targetBtn.setAttribute("disabled", true);
      document.getElementById(`${idOfTargetPanel}`).removeAttribute("hidden");
    },
  },
};

// ok now factor-in.
// there are 2. And there are meant to be 2. Loop might be silly.
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
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    color: inherit;
    display: inherit;
    width: 100%;
    background: inherit;
    border: inherit;
    box-shadow: inherit;
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
  background-color: var(--grey-for-controls);
}
//
//.tab__wrapper {
//  font-size: 1.6rem;
//  display: flex;
//  flex-direction: row;
//  &:last-of-type {
//    flex-direction: row-reverse;
//  }
//}

[role="tab"] {
  font-size: 1.6rem;
  font-variation-settings: var(--text-big-bold);
  display: flex;
  flex-grow: 1;
  align-items: stretch;
  justify-content: center;
  height: var(--min-touch-target);
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
  [aria-selected="true"] + & {
    display: flex;
  }
}
</style>
