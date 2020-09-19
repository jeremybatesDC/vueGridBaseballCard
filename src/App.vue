<template>
  <main>
    <div class="tabs">
      <div role="tablist">
        <fieldset class="checkRadioButtons__fieldset width--100">
          <div class="checkRadioButtons__wrapper--inner row">
            <label
              class="checkRadioButtons__label align-items-stretch"
              role="tab"
              aria-selected
              aria-controls
              id
            >
              <input
                type="radio"
                class="checkRadioButtons__input hidden--visually"
                v-model="frontshowing"
                :value="true"
              />
              <span>Front</span>
            </label>

            <label
              class="checkRadioButtons__label align-items-stretch"
              role="tab"
              aria-selected
              aria-controls
              id
            >
              <input
                type="radio"
                class="checkRadioButtons__input hidden--visually"
                v-model="frontshowing"
                :value="false"
              />
              <span>Back</span>
            </label>
          </div>
        </fieldset>
      </div>
      <div>
        <div role="tabpanel" id aria-labelledby v-show="frontshowing">
          <CardFront />
        </div>
        <div role="tabpanel" id aria-labelledby v-show="!frontshowing">
          <CardBack />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import CardFront from "./components/CardFront.vue";
import CardBack from "./components/CardBack.vue";
import { onMounted } from "vue";

async function registerServiceWorker() {
  navigator.serviceWorker.register("/sw.js");
}

export default {
  components: {
    CardFront,
    CardBack,
  },
  setup() {
    onMounted(() => {
      registerServiceWorker();
    });
    return { registerServiceWorker };
  },

  data() {
    return {
      frontshowing: true,
    };
  },
};
</script>

<style lang="scss">
:root {
  --unit: 1.6rem;
  --min-touch-target: 4.4rem;
  --min-touch-target-half: 2.2rem;
  --min-touch-target-height: 4.4rem;
  --min-touch-target-width: var(--min-touch-target-height);
  --min-touch-target-height-half: 2.2rem;
  --min-touch-target-height-double: 8.8rem;
  --touch-target-48: 4.8rem;
  --touch-target-large: 6rem;
  --touch-target-spacing: 3.2rem;
  --touch-target-spacing-small: 2.4rem;
  --text-short-wide: "wght" 400, "wdth" 25, "opsz" 25, "GRAD" 1, "slnt" 0,
    "YTLC" 400, "YTUC" 400, "YTFI" 400;
  --text-shortest-wide: "wght" 400, "wdth" 30, "opsz" 30, "GRAD" 1, "slnt" 0,
    "YTLC" 100, "YTUC" 100, "YTFI" 100;
  --text-squeeze: "wght" 175, "wdth" 1, "opsz" 27, "GRAD" 1, "slnt" 0,
    "YTLC" 600, "YTUC" 600, "YTFI" 600;
  --text-tall-narrow: "wght" 200, "wdth" 1, "opsz" 25, "GRAD" 0, "slnt" 0,
    "YTLC" 400, "YTUC" 400, "YTFI" 400;
  --text-tall-narrow-active: "wght" 200, "wdth" 1, "opsz" 25, "GRAD" 1, "slnt" 0,
    "YTLC" 400, "YTUC" 400, "YTFI" 400;
  --text-big-bold: "wght" 400, "wdth" 75, "opsz" 1, "GRAD" 1, "slnt" 0;

  --logoborderradius: "50%";
  //--cmyk-misalign: 1px 0 0 cyan, -1px 0 0 magenta, 0 1px 0 yellow;
  --contrast-threshold-for-card: 0.4;
  --contrast-threshold-for-controls: 0.9;
  --border-threshold: 0.8;
  --grey-for-controls: #c7c7c7;
  --background-for-overlay: rgba(0, 0, 0, 0.75);
  --background-for-overlay-controls: rgba(175, 175, 175, 0.9);
  --color-for-svgs: #000;
  --active-color-for-svgs: #fff;
  --transparent-for-svgs: none;
}
/* theme color variables to use in RGB declarations */

//

body {
  background-color: #eee;
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

//details {
//  padding: 1rem;
//}
//summary {
//  display: flex;
//}

legend {
  font-family: inherit;
  text-align: center;
  font-size: 1.6rem;
}
label {
  font-family: inherit;

  input {
    font-family: inherit;
    font-size: inherit;
  }
  select {
    display: block;
    font-family: inherit;
    font-size: 1.6rem;
  }
}

[role="tablist"] {
  display: flex;
  //margin-bottom: 1.6rem;
  background-color: var(--grey-for-controls);
}

[role="tab"] {
  font-size: 1.6rem;
  display: flex;
  flex-grow: 1;
  align-items: stretch;
  justify-content: center;
  height: var(--min-touch-target);
  padding: 0;
  // in case ever have more than just 2 tabs
  &:not(:first-child) {
    box-shadow: -1px 0 #000;
  }
  [type="radio"] {
    margin-right: 1rem;
  }
}
</style>
