<template>
  <details class="controls" open>
    <summary>Back Controls</summary>
    <form>
      <label>
        Card Back Outer Border Color
        <input type="color" v-model="defaultSettingsBack.backgroundColor" />
      </label>
      <fieldset>
        <legend>Gum</legend>
        <div class="row">
          <label>
            Hide Gum Stain

            <input type="radio" name="gumradio" value="nogum" />
          </label>
          <label>
            Show Gum Stain

            <input type="radio" name="gumradio" value="gum front" />
          </label>
        </div>
        <div class="row">
          <label>
            Gum Stain Darkness
            <input type="range" value />
          </label>
          <label>
            Gum angle
            <input type="range" value />
          </label>
          <label>
            Gum placement horz
            <select>
              <option>left</option>
              <option>center</option>
              <option>right</option>
            </select>
          </label>
          <label>
            Gum placement vert
            <select>
              <option>top</option>
              <option>middle</option>
              <option>bottom</option>
            </select>
          </label>
        </div>
      </fieldset>
    </form>
  </details>

  <div class="card-back" :style="cssCardBackProps">
    <article>
      <BackHeader />

      <section>
        <!-- columns: min 2, max 6? -->
        <!-- tbody rows: min 0 (leaving only tfoot totals), max 10? -->

        <TableStats />

        <AsideFacts />
      </section>
      <BackFooter />
    </article>
    <aside class="sliders">
      <input
        type="range"
        id="red"
        min="0"
        max="255"
        v-model="defaultSettingsBack.red"
        step="1"
      />
      <input
        type="range"
        id="green"
        min="0"
        max="255"
        v-model="defaultSettingsBack.green"
        step="1"
      />
      <input
        type="range"
        id="blue"
        min="0"
        max="255"
        v-model="defaultSettingsBack.blue"
        step="1"
      />
    </aside>
  </div>
</template>

<script lang="ts">
import defaultFacts from "/json/default-facts.json";
import defaultSettingsBack from "/json/default-settings-back.json";
import { set } from "idb-keyval";
//import TextSlider from "./InputChildComponents/TextSlider.vue";
import TableStats from "./InputChildComponents/TableStats.vue";
import BackHeader from "./InputChildComponents/BackHeader.vue";
import BackFooter from "./InputChildComponents/BackFooter.vue";
import AsideFacts from "./InputChildComponents/AsideFacts.vue";

const webWorkerCardBack = new Worker("./workers/web-worker-idb.js", {
  type: "module",
});

async function setFunc() {
  // loop here over keys
  webWorkerCardBack.postMessage(this.aside.fontGrade);
  webWorkerCardBack.onmessage = function (event) {
    console.log("received message here is ", event.data);
  };

  set("footerFontWeight", this.footer.fontWeight)
    .then(() => console.log("woohoo!"))
    .catch((err) => console.log("doh!", err));
}

export default {
  // intentionally avoiding arrow functions here
  setup: function () {
    return { setFunc };
  },

  // do I nest props to send to child components in here?
  components: {
    //TextSlider,
    TableStats,
    BackHeader,
    BackFooter,
    AsideFacts,
  },

  data: function () {
    return {
      defaultFacts,
      defaultSettingsBack: {
        backgroundColor: defaultSettingsBack.backgroundColor,
        red: 200,
        green: 60,
        blue: 255,
      },
      // would love to be equally declarative with footer and aside stuff too...
      // move these footer defaults to json
      footer: {
        fontWeight: 400,
        fontWidth: 100,
        fontSlant: 5,
        fontGrade: 24,
      },
      aside: {
        fontWeight: 400,
        fontWidth: 100,
        fontSlant: 5,
        fontGrade: 24,
      },
    };
  },
  mounted: function () {
    this.setFunc();
  },
  computed: {
    cssCardBackProps() {
      return {
        "--backgroundcolorback": this.defaultSettingsBack.backgroundColor,
        "--red": this.defaultSettingsBack.red,
        "--green": this.defaultSettingsBack.green,
        "--blue": this.defaultSettingsBack.blue,
      };
    },
    cssFooterProps() {
      return {
        "--fontweight": this.footer.fontWeight,
        "--fontwidth": this.footer.fontWidth,
        "--fontslant": this.footer.fontSlant,
        "--fontgrade": this.footer.fontGrade,
      };
    },
    cssAsideProps() {
      return {
        "--fontweight": this.aside.fontWeight,
        "--fontwidth": this.aside.fontWidth,
        "--fontslant": this.aside.fontSlant,
        "--fontgrade": this.aside.fontGrade,
      };
    },
  },
};
</script>

<style scoped lang="scss">
// if can keep square stats table, will allow switch between vert and horz

// color contast functions: https://css-tricks.com/switch-font-color-for-different-backgrounds-with-css/
:root {
}

.btn {
  /*sets the background for the base class*/
  //background: rgb(var(--red), var(--green), var(--blue));

  //border-width: 2px;
  //border-style: solid;
  //border-color: rgba(
  //  calc(var(--red) - 50),
  //  calc(var(--green) - 50),
  //  calc(var(--blue) - 50),
  //  var(--border-alpha)
  //);
}
//
//.btn--secondary {
//  filter: hue-rotate(60deg);
//}

.sliders {
  position: absolute;
  bottom: -200px;
  left: 0;
}
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

.card-back {
  display: flex;
  //flex-direction: column;
  position: relative;
  //background-color: var(--backgroundcolorback);
  background-color: rgb(var(--red), var(--green), var(--blue));
  flex-basis: 100%;
  width: 100%;
  max-width: 50.4rem;
  height: 36rem;
  // i detest top margins but
  margin: 3.2rem auto;
  --threshold: 0.5;
  /* theme color variables to use in RGB declarations */

  /*the threshold at which colors are considered "light". 
Range: decimals from 0 to 1,
recommended 0.5 - 0.6*/
  /*the threshold at which a darker border will be applied.
Range: decimals from 0 to 1,
recommended 0.8+*/
  --border-threshold: 0.8;
  //padding: 1.6rem;
  // cannot do overflow hidden here because it chops the outline
  //overflow: hidden;
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
}

article {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: space-between;
  position: relative;

  background-color: rgba(#9c2c1a, 0.25);
  // using outline here so that it'll just be clipped on small devices automatically
  outline: 1.6rem solid var(--backgroundcolorback);
  overflow: hidden;

  // need to figure this out -- prob need another wrapper

  &.has-gum {
  }
  &.has-crease {
  }

  //crease
  &:before {
    // svg crease image maybe
    content: "";
    position: absolute;
    bottom: 0;
    left: -200px;
    height: 2px;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.25);
    transform: rotate(45deg) scaleX(2);
    //transform-origin: center top;
    z-index: 1;
    //tfoutline: 1px dashed rgba(0, 0, 0, 0.25);
    box-shadow: 1px 0 rgba(0, 0, 0, 1);
    //border-image:url();
  }
  //gum
  &:after {
    // svg gum image maybe
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 10rem;
    height: 30rem;
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 3px 5px 7px 9px;
    transform: rotate(-33deg) translateX(-8rem) translateY(-4rem);
    mix-blend-mode: darken;
    filter: blur(2px);
  }
}

h2 {
  font-size: 1.6rem;
  line-height: var(--min-touch-target-height);
  padding-bottom: 0;
  font-variation-settings: "slnt" -10;
}

// set EXPLICIT font variation settings for the table
section {
  // if this part is restricted to vert width, then it'll definitely fit on horz
  display: flex;
  flex-grow: 1;
  align-items: stretch;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0;
  background: rgba(0, 0, 0, 0.1);
}

// rather imperative here, but having table as child of flex element was kinda odd... ooooh

//
</style>
