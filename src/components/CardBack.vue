<template>
  <div class="cardBack__wrapper--outermost" :style="cssCardBackProps">
    <div class="cardBack__controls controls--l2">
      <div class="row space-around height--100">
        <fieldset
          class="cardBack__fieldset colorPicker__fieldset align-self-center"
        >
          <label class="colorPicker__label colorPicker__label--textOverlap">
            <span>Color</span>
            <input
              class="colorPicker__input"
              type="color"
              v-model="defaultSettingsBack.backgroundColor"
            />
          </label>
        </fieldset>
        <fieldset class="radioBtns__fieldset">
          <legend class="radioBtns__legend text-left">Gum Stain</legend>
          <div class="radioBtns__wrapper--inner">
            <label class="radioBtns__label">
              <input
                type="radio"
                class="radioBtns__input hidden--visually"
                name="gumradio"
                v-model="defaultSettingsBack.gumShowing"
                value="gumShowing"
              />
              <span>Show</span>
            </label>

            <label class="radioBtns__label">
              <input
                type="radio"
                class="radioBtns__input hidden--visually"
                name="gumradio"
                v-model="defaultSettingsBack.gumShowing"
                value="gumHidden"
              />
              <span>Hide</span>
            </label>
          </div>
        </fieldset>
      </div>
    </div>

    <div class="card-back">
      <article
        :data-gum="defaultSettingsBack.gumShowing"
        class="card-back__article"
      >
        <BackHeader />
        <section class="card-back__section">
          <TableStatsManual />
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
//import { set } from "idb-keyval";
//import TextSlider from "./InputChildComponents/TextSlider.vue";
import TableStatsManual from "./InputChildComponents/TableStatsManual.vue";
import BackHeader from "./InputChildComponents/BackHeader.vue";
import BackFooter from "./InputChildComponents/BackFooter.vue";
import AsideFacts from "./InputChildComponents/AsideFacts.vue";

export default {
  // do I nest props to send to child components in here?
  components: {
    //TextSlider,
    TableStatsManual,
    BackHeader,
    BackFooter,
    AsideFacts,
  },

  data() {
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

<style lang="scss">
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

  color: var(--calcColor);
  filter: drop-shadow(0 1px 0 #000) drop-shadow(0 -1px 0 #000)
    drop-shadow(1px 0 0 #000) drop-shadow(-1px 0 0 #000);
  &__section {
    // if this part is restricted to vert width, then it'll definitely fit on horz
    display: flex;
    flex-grow: 1;
    align-items: stretch;
    flex-direction: row;
    flex-wrap: wrap-reverse;
    padding: 0;
    background: rgba(0, 0, 0, 0.1);
  }
  &__article {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    justify-content: space-between;
    position: relative;

    //background-color: rgba(#9c2c1a, 0.25);
    // using outline here so that it'll just be clipped on small devices automatically
    outline: 1.6rem solid var(--calcColor);
    overflow: hidden;

    // need to figure this out -- prob need another wrapper
  }
}

[data-gum="gumShowing"] {
  &:after {
    // svg gum image maybe
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 10rem;
    height: 30rem;
    background-color: var(--calcColor);
    opacity: 0.15;
    border-radius: 3px 5px 7px 9px;
    transform: rotate(-33deg) translateX(-8rem) translateY(-4rem);
    //mix-blend-mode: hard-light;
    filter: blur(2px);
    pointer-events: none;
  }
}
</style>
