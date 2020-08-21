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
    <aside class="sliders">
      <input type="range" id="red" min="0" max="255" v-model="red" step="1" />
      <input
        type="range"
        id="green"
        min="0"
        max="255"
        v-model="green"
        step="1"
      />
      <input type="range" id="blue" min="0" max="255" v-model="blue" step="1" />
    </aside>
    <div :style="cssColorContrastProps">
      <button class="btn">Contast Test</button>
      <!--<button class="btn btn--secondary">Secondary Color</button>-->
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
      red: 200,
      green: 60,
      blue: 255,
    };
  },
  computed: {
    cssColorContrastProps() {
      return {
        "--red": this.red,
        "--green": this.green,
        "--blue": this.blue,
      };
    },
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
  --logoborderradius: "50%";
  //--cmyk-misalign: 1px 0 0 cyan, -1px 0 0 magenta, 0 1px 0 yellow;

  /* theme color variables to use in RGB declarations */
  --red: 200;
  --green: 60;
  --blue: 255;
  /*the threshold at which colors are considered "light". 
Range: decimals from 0 to 1,
recommended 0.5 - 0.6*/
  --threshold: 0.5;
  /*the threshold at which a darker border will be applied.
Range: decimals from 0 to 1,
recommended 0.8+*/
  --border-threshold: 0.8;
}

.btn {
  /*sets the background for the base class*/
  background: rgb(var(--red), var(--green), var(--blue));
  --r: calc(var(--red) * 0.2126);
  --g: calc(var(--green) * 0.7152);
  --b: calc(var(--blue) * 0.0722);
  --sum: calc(var(--r) + var(--g) + var(--b));
  --perceived-lightness: calc(var(--sum) / 255);
  color: hsl(
    0,
    0%,
    calc((var(--perceived-lightness) - var(--threshold)) * -10000000%)
  );

  --border-alpha: calc(
    (var(--perceived-lightness) - var(--border-threshold)) * 100
  );

  border-width: 2px;
  border-style: solid;
  border-color: rgba(
    calc(var(--red) - 50),
    calc(var(--green) - 50),
    calc(var(--blue) - 50),
    var(--border-alpha)
  );
}
//
//.btn--secondary {
//  filter: hue-rotate(60deg);
//}

input[id="red"]::after {
  counter-reset: red var(--red);
  content: counter(red);
}

input[id="green"]::after {
  counter-reset: green var(--green);
  content: counter(green);
}

input[id="blue"]::after {
  counter-reset: blue var(--blue);
  content: counter(blue);
}

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
    //margin-bottom: 1.6rem;
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
