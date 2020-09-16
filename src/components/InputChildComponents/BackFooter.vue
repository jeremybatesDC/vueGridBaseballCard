<template>
  <footer class="" :style="textLineCProps">
    <fieldset class="">
      <!-- <h2>
            <input type="text" v-model="defaultFacts.info.facts[1].headline" />
      </h2>-->
      <textarea
        rows="2"
        class=""
        spellcheck="false"
        v-model="defaultFacts.info.facts[1].text"
      ></textarea>
    </fieldset>
    <div data-show-only-on-interaction hidden>
      <div class="row row--grow space-between row--textControls">
        <label class="rangeUI__label">
          <span>Weight: <output :value="textLineC.fontWeight"></output></span>

          <input
            class="rangeUI__input"
            v-model="textLineC.fontWeight"
            type="range"
            min="150"
            max="800"
          />
        </label>
        <label class="rangeUI__label">
          <span>Width: <output :value="textLineC.fontWidth"></output></span>
          <input
            class="rangeUI__input"
            v-model="textLineC.fontWidth"
            type="range"
            min="35"
            max="100"
          />
        </label>
      </div>
      <div class="row row--grow space-between row--textControls">
        <label class="rangeUI__label">
          <span>Slant: <output :value="textLineC.fontSlant"></output></span>
          <input
            class="rangeUI__input"
            v-model="textLineC.fontSlant"
            type="range"
            min="-10"
            max="0"
          />
        </label>
        <label class="rangeUI__label">
          <span>Grade: <output :value="textLineC.fontGrade"></output></span>
          <input
            class="rangeUI__input"
            v-model="textLineC.fontGrade"
            type="range"
            min="0"
            max="1"
            step=".1"
          />
        </label>
      </div>
    </div>
  </footer>
</template>

<script>
import defaultFacts from "/json/default-facts.json";
//import TextSlider from "../InputChildComponents/TextSlider.vue";
import defaultSettingsBack from "/json/default-settings-back.json";

export default {
  components: {
    //TextSlider,
  },

  data: function () {
    return {
      defaultFacts,
      //TextSlider,
      textLineC: {
        fontWeight: defaultSettingsBack.textLineC.fontWeight,
        fontWidth: defaultSettingsBack.textLineC.fontWidth,
        fontGrade: defaultSettingsBack.textLineC.fontGrade,
        fontSlant: defaultSettingsBack.textLineC.fontSlant,
      },
    };
  },
  computed: {
    textLineCProps() {
      return {
        //"--color": this.textLine1.color,
        "--fontweight": this.textLineC.fontWeight,
        "--fontwidth": this.textLineC.fontWidth,
        "--fontgrade": this.textLineC.fontGrade,
        "--fontslant": this.textLineC.fontSlant,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
footer {
  display: flex;
  flex-direction: column;
  position: relative;
  font-size: 1.6rem;
  padding: 0 1.6rem;
  //background-color: rgba(0, 0, 0, 0.2);

  input[type="text"] {
    padding: 0;
  }
  textarea {
    min-height: var(--min-touch-target-height);
    font-variation-settings: "wght" var(--fontweight), "wdth" var(--fontwidth),
      "opsz" 33, "GRAD" var(--fontgrade), "slnt" var(--fontslant), "YTLC" 500,
      "YTUC" 500, "YTAS" 500;
    line-height: 0.8;
    padding-top: 0.4rem;
  }
  &:focus-within {
    [data-show-only-on-interaction] {
      visibility: visible;
      top: auto;
      bottom: var(--min-touch-target);
    }
  }
}

fieldset {
  display: flex;
  flex-direction: column;
  position: relative;
  border: none;
  box-shadow: none;
  padding: 0.8rem 0 0 0;
  margin: 0;
}
</style>
