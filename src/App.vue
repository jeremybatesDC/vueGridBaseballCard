<template>
  <main :style="[colorContrastVarsFront, colorContrastVarsBack]">
    <div class="tabsGood">
      <div role="tablist" aria-label="Card Side">
        <!--<div class="tab__wrapper">-->
        <button
          role="tab"
          aria-selected="true"
          aria-controls="panelCardFront"
          id="triggerFront"
          aria-label="Front"
          @click="chngTbz"
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
            class="colorPicker__label colorPicker__label--front colorPicker__label--textOverlap align-self-center"
          >
            <span>Color</span>
            <input class="colorPicker__input" type="color" v-model="bgcf" />
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
          @click="chngTbz"
        >
          Card Back
        </button>
        <span class="showOnlyForSelectedTab">
          <label
            class="colorPicker__label colorPicker__label--back colorPicker__label--textOverlap"
          >
            <span>Color</span>
            <input
              class="colorPicker__input"
              type="color"
              v-model="bgcb"
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

// i can make this smaller. Also I'm creating side effects. On prupose I guess but be careful
// this can fire so fast that maybe it would be good to have 2 different functions. That way thereS no if fork.
function hexToRGB(hex) {
  return [
    parseInt("0x" + hex[1] + hex[2]),
    parseInt("0x" + hex[3] + hex[4]),
    parseInt("0x" + hex[5] + hex[6]),
  ];
}

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
      hexToRGB,
    };
  },

  data() {
    return {
      frontshowing: true,
      cardBackgroundColor: "#ffffff",
      cardBackgroundColorBack: "#9a8b7c",
      bgcf: "#ffffff",
      bgcb: "#9a8b7c",
    };
  },
  methods: {
    chngTbz(e) {
      document.body
        .querySelector('[aria-selected="true"]')
        .setAttribute("aria-selected", false);
      e.target.setAttribute("aria-selected", true);
      document.body
        .querySelector('[role="tabpanel"]:not([hidden])')
        .setAttribute("hidden", true);
      document
        .getElementById(e.target.getAttribute("aria-controls"))
        .removeAttribute("hidden");
    },
  },
  computed: {
    colorContrastVarsFront() {
      console.log(hexToRGB(this.bgcf));
      let theHex = hexToRGB(this.bgcf);
      return {
        "--bgcf": `rgb(${theHex[0]},${theHex[1]},${theHex[2]})`,
        "--redfront": theHex[0],
        "--greenfront": theHex[1],
        "--bluefront": theHex[2],
      };
    },
    colorContrastVarsBack() {
      let theHex = hexToRGB(this.bgcb);
      return {
        "--bgcb": `rgb(${theHex[0]},${theHex[1]},${theHex[2]})`,
        "--redback": theHex[0],
        "--greenback": theHex[1],
        "--blueback": theHex[2],
      };
    },
  },
};
</script>

<style lang="scss">
#panelCardFront {
}

#panelCardBack {
}

body {
  background-color: #eee;
}

main {
  --rfront: calc(var(--redfront) * 0.2126);
  --gfront: calc(var(--greenfront) * 0.7152);
  --bfront: calc(var(--bluefront) * 0.0722);
  --sumfront: calc(var(--rfront) + var(--gfront) + var(--bfront));
  --perceived-lightness-front: calc(var(--sumfront) / 255);

  --calcColorFront: hsl(
    0,
    0%,
    calc(
      (var(--perceived-lightness-front) - var(--contrast-threshold-for-card)) *
        -10000000%
    )
  );
  --rback: calc(var(--redback) * 0.2126);
  --gback: calc(var(--greenback) * 0.7152);
  --bback: calc(var(--blueback) * 0.0722);
  --sumback: calc(var(--rback) + var(--gback) + var(--bback));
  --perceived-lightness-back: calc(var(--sumback) / 255);

  --calcColorBack: hsl(
    0,
    0%,
    calc(
      (var(--perceived-lightness-back) - var(--contrast-threshold-for-card)) *
        -10000000%
    )
  );

  overflow: hidden;
}

//#panelCardFront{
//
//}
//
//#panelCardBack{
//
//}

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

.colorPicker__label {
  &--front {
    span {
      color: var(--calcColorFront);
    }
  }
  &--back {
    span {
      color: var(--calcColorBack);
    }
  }
}
</style>
