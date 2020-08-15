<template>
  <main>
    <div role="tablist">
      <label role="tab" aria-selected aria-controls id>
        <input type="radio" v-model="frontshowing" :value="true" />
        <span>FRONT</span>
      </label>
      <label role="tab" aria-selected aria-controls id>
        <input type="radio" v-model="frontshowing" :value="false" />
        <span>BACK</span>
      </label>
    </div>
    <div>
      <div role="tabpanel" id aria-labelledby v-show="frontshowing">
        <CardFront />
      </div>
      <div role="tabpanel" id aria-labelledby v-show="!frontshowing">
        <CardBack />
      </div>
    </div>
  </main>
</template>

<script>
// learning about async components...
// import { defineAsyncComponent } from "vue";
import CardFront from "./components/CardFront.vue";
import CardBack from "./components/CardBack.vue";

async function registerServiceWorker() {
  navigator.serviceWorker.register("/sw.js");
}

export default {
  setup: function () {
    return { registerServiceWorker };
  },
  components: {
    CardFront,
    CardBack,
  },
  mounted: function () {
    //registerServiceWorker();
    console.log(
      "remember to uncomment this service worker. Also, work on an envar"
    );
  },
  data: function () {
    return {
      frontshowing: true,
    };
  },
  //data
  //should i move data into parent component? Yes, I think so.
};
</script>

<style lang="scss">
//not working as expected
//$minTouchTargetHeight: 4.4rem;
// vite is really setup to use CSS custom props instead of CSS vars

:root {
  // having trouble this morning with calc and scss math with variable and didn't want to get too stuck
  // wtaf ?
  --unit: 1.6rem;
  --min-touch-target-height: 4.4rem;
  --min-touch-target-width: var(--min-touch-target-height);
  --min-touch-target-height-half: 2.2rem;
  --min-touch-target-height-double: 8.8rem;
  --touch-target-spacing: 3.2rem;
  --text-short-wide: "wght" 400, "wdth" 25, "opsz" 25, "GRAD" 1, "slnt" 0,
    "YTLC" 400, "YTUC" 400, "YTFI" 400;
  --logoborderradius: "50%";
  //--cmyk-misalign: 1px 0 0 cyan, -1px 0 0 magenta, 0 1px 0 yellow;
}

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

// .baseballCard__wrapper {
// }

.fileInput--fullContainerSize {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
}

.baseballCard__wrapper--mid {
  // display: flex;
  // justify-content: center;
}

// there are some hard to iron out differences between filters when they are overtop of images
.svg--textureOverlay {
  //z-index: -1;
}

.masthead--center {
  font-size: 1.2rem;
  align-self: center;
}
.image__container {
  display: flex;
  position: relative;
  border: 3px solid var(--cardbordercolor, #000);
  border-radius: var(--cardbordercurve, 0);
}
.footer--playerName {
  font-size: 1.6rem;
  align-self: center;
}
.footer--playerPosition {
  align-self: center;

  h3,
  input {
    text-align: right;
  }
  input {
    font-size: 1.6rem;
  }
}

.form--cardDesign {
}
details {
  padding: 1rem;
}
summary {
  display: flex;
}
fieldset {
  padding: 0;
  margin-bottom: 1.6rem;
}
legend {
  font-family: inherit;
  //font-weight: bold;
  text-align: center;
  padding: 0 0.4rem;
  font-size: 1.6rem;
}
label {
  //display: block;
  font-family: inherit;

  input {
    //display: block;
    font-family: inherit;
    font-size: inherit;
    // &:not([type="color"]) {
    //   width: 100%;
    // }
  }
  select {
    display: block;
    font-family: inherit;
    font-size: 1.6rem;
  }
  .baseballCard__wrapper & {
    margin-bottom: 1.6rem;
  }
}

[role="tablist"] {
  display: flex;
  margin-bottom: 1.6rem;
  background: rgba(0, 0, 0, 0.1);
}

[role="tab"] {
  font-size: 1.8rem;
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  min-height: var(--min-touch-target-height);
  padding: 0.2rem 1.6rem;
  // in case ever have more than just 2 tabs
  &:not(:first-child) {
    box-shadow: -1px 0 #000;
  }
  [type="radio"] {
    min-height: inherit;
    min-width: var(--min-touch-target-width);
    margin-right: 1.6rem;
  }
}
</style>
