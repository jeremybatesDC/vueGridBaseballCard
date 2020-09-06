<template>
  <div class="cardBack__wrapper--outermost" :style="cssCardBackProps">
    <div class="cardBack__controls">
      <div class="row space-around align-center">
        <div class="col">
          <fieldset class="cardBack__fieldset colorPicker__fieldset">
            <!--<legend>Background</legend>-->

            <label class="colorPicker__label colorPicker__label--textOverlap">
              <span>Color</span>
              <input
                class="colorPicker__input"
                type="color"
                v-model="defaultSettingsBack.backgroundColor"
              />
            </label>
            <!--<small class="helperText colorPicker__helperText"
              >Text color adjusts to maintain contrast</small
            >-->
          </fieldset>
        </div>
        <div class="col">
          <fieldset
            class="cardBack__fieldset radioUI__fieldset radioUI__fieldset--toggleStyle"
          >
            <legend class="radioUI__legend">Gum Stain</legend>

            <label class="radioUI__label">
              <input
                class="radioUI__input"
                type="radio"
                name="gumradio"
                v-model="defaultSettingsBack.gumShowing"
                value="gumShowing"
              />
              <span>Show</span>
            </label>

            <label class="radioUI__label">
              <input
                class="radioUI__input"
                type="radio"
                name="gumradio"
                v-model="defaultSettingsBack.gumShowing"
                value="gumHidden"
              />
              <span>Hide</span>
            </label>
          </fieldset>
        </div>
      </div>
    </div>

    <div class="card-back">
      <article :class="defaultSettingsBack.gumShowing">
        <BackHeader />

        <section>
          <!-- columns: min 2, max 6? -->
          <!-- tbody rows: min 0 (leaving only tfoot totals), max 10? -->

          <TableStats />

          <AsideFacts />
        </section>
        <BackFooter />
      </article>
    </div>
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

        redVal: 200,
        greenVal: 60,
        blueVal: 255,
        gumShowing: defaultSettingsBack.gumShowing,
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
      let redVal = 0;
      let greenVal = 0;
      let blueVal = 0;
      function hexToDesiredColorSpace(hex) {
        redVal = parseInt("0x" + hex[1] + hex[2]);
        greenVal = parseInt("0x" + hex[3] + hex[4]);
        blueVal = parseInt("0x" + hex[5] + hex[6]);
        return `rgb(${redVal},${greenVal},${blueVal})`;
      }

      return {
        "--backgroundcolorback": hexToDesiredColorSpace(
          this.defaultSettingsBack.backgroundColor
        ),

        "--red": redVal,
        "--green": greenVal,
        "--blue": blueVal,
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

.cardBack__wrapper--outermost {
  --r: calc(var(--red) * 0.2126);
  --g: calc(var(--green) * 0.7152);
  --b: calc(var(--blue) * 0.0722);
  --sum: calc(var(--r) + var(--g) + var(--b));
  --perceived-lightness: calc(var(--sum) / 255);
  --border-alpha: calc(
    (var(--perceived-lightness) - var(--border-threshold)) * 100
  );
  --colorinrgb: rgb(var(--red), var(--green), var(--blue));
  --calcColor: hsl(
    0,
    0%,
    calc(
      (var(--perceived-lightness) - var(--contrast-threshold-for-card)) *
        -10000000%
    )
  );
}

.cardBack__controls {
  padding: 0.4rem 0;
}

// cheat
.colorPicker__label--textOverlap {
  color: var(--calcColor);
}

.card-back {
  display: flex;
  //flex-direction: column;
  position: relative;
  //background-color: var(--backgroundcolorback);
  background-color: var(--colorinrgb);
  flex-basis: 100%;
  width: 100%;
  max-width: 50.4rem;
  height: 36rem;
  // i detest top margins but
  margin: 1.6rem auto 3.2rem auto;

  // wondering whether should we move this into computed methods?

  color: hsl(
    0,
    0%,
    calc(
      (var(--perceived-lightness) - var(--contrast-threshold-for-card)) *
        -10000000%
    )
  );
  filter: drop-shadow(0 1px 0 #000) drop-shadow(0 -1px 0 #000)
    drop-shadow(1px 0 0 #000) drop-shadow(-1px 0 0 #000);
}

article {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: space-between;
  position: relative;

  //background-color: rgba(#9c2c1a, 0.25);
  // using outline here so that it'll just be clipped on small devices automatically
  outline: 1.6rem solid
    hsl(
      0,
      0%,
      calc(
        (var(--perceived-lightness) - var(--contrast-threshold-for-card)) *
          -10000000%
      )
    );
  overflow: hidden;

  // need to figure this out -- prob need another wrapper

  &.gumShowing {
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
      pointer-events: none;
    }
  }
  &.has-crease {
  }

  //crease consider svg
  /*&:before {
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
    //outline: 1px dashed rgba(0, 0, 0, 0.25);
    box-shadow: 1px 0 rgba(0, 0, 0, 1);
    //border-image:url();
  }*/
  //gum
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
  flex-wrap: wrap-reverse;
  padding: 0;
  background: rgba(0, 0, 0, 0.1);
}

// rather imperative here, but having table as child of flex element was kinda odd... ooooh

//
</style>
