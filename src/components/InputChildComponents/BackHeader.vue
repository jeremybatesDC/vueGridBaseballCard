<template>
  <header>
    <div class="row row--topmost">
      <!-- i dont think label is necessarily correct here -->
      <label class="backHeader__label--topmost">
        <h1 class="">
          <input
            type="text"
            class=""
            value="WONDER WOMAN"
            placeholder="Firstname Lastname"
            spellcheck="false"
          />
          <div data-show-only-on-interaction hidden>
            <div class="row row--grow space-between row--textControls">
              <label class="rangeUI__label">
                <span
                  >Weight: <output :value="textLineA.fontWeight"></output
                ></span>

                <input
                  class="rangeUI__input"
                  v-model="textLineA.fontWeight"
                  type="range"
                  min="150"
                  max="800"
                />
              </label>
              <label class="rangeUI__label">
                <span
                  >Width: <output :value="textLineA.fontWidth"></output
                ></span>
                <input
                  class="rangeUI__input"
                  v-model="textLineA.fontWidth"
                  type="range"
                  min="35"
                  max="100"
                />
              </label>
            </div>
            <div class="row row--grow space-between row--textControls">
              <label class="rangeUI__label">
                <span
                  >Slant: <output :value="textLineA.fontSlant"></output
                ></span>
                <input
                  class="rangeUI__input"
                  v-model="textLineA.fontSlant"
                  type="range"
                  min="-10"
                  max="0"
                />
              </label>
              <label class="rangeUI__label">
                <span
                  >Grade: <output :value="textLineA.fontGrade"></output
                ></span>
                <input
                  class="rangeUI__input"
                  v-model="textLineA.fontGrade"
                  type="range"
                  min="0"
                  max="1"
                  step=".1"
                />
              </label>
            </div>
          </div>
        </h1>
      </label>
      <label>
        <span>
          <input type="text" v-model="defaultFacts.info.info_3" />
        </span>
      </label>
    </div>

    <!-- hard to loop since distinct lists may help... Although... -->
    <div class="row row--stacked">
      <span class="">
        <!-- nested row -->
        <div class="row row--stripe stripe--dark">
          <label>
            <input class="" type="email" v-model="defaultFacts.info.info_0" />
          </label>

          <label>
            <input class="" type="text" v-model="defaultFacts.info.info_1" />
          </label>
        </div>
        <div class="row row--bottommost">
          <label>
            <input class="" type="text" v-model="defaultFacts.info.info_4" />
          </label>
          <label>
            <input class="" type="text" v-model="defaultFacts.info.info_5" />
          </label>
          <label>
            <input class="" type="text" v-model="defaultFacts.info.info_6" />
          </label>
        </div>
      </span>
    </div>
  </header>
</template>

<script>
import defaultFacts from "/json/default-facts.json";
import defaultSettingsBack from "/json/default-settings-back.json";
//import TextSlider from "../InputChildComponents/TextSlider.vue";
export default {
  components: {
    //TextSlider,
  },

  data: function () {
    return {
      defaultFacts,
      //TextSlider
      textLineA: {
        fontWeight: defaultSettingsBack.textLineA.fontWeight,
        fontWidth: defaultSettingsBack.textLineA.fontWidth,
        fontGrade: defaultSettingsBack.textLineA.fontGrade,
        fontSlant: defaultSettingsBack.textLineA.fontSlant,
      },
    };
  },
};
</script>

<style lang="scss" scoped>
// consider moving this

//preserve heights

.backHeader__label--topmost {
  &:focus-within {
    [data-show-only-on-interaction] {
      visibility: visible;
    }
  }
}

.row--topmost {
  input[type="text"] {
    height: var(--min-touch-target);
  }
}

.row--stripe {
  height: 2.4rem;
}

.row--stacked {
  height: 5.4rem;
}
.row--bottommost {
  height: 3.2rem;
}

// scoped to header

input {
  text-transform: uppercase;
}

header {
  display: flex;
  flex-direction: column;

  padding: 0 1.6rem;
}

h1 {
  display: flex;
  flex-grow: 1;
  font-size: 2.4rem;
  padding-bottom: 0;
  font-variation-settings: "wght" 900, "wdth" 50, "opsz" 25, "GRAD" 1,
    "slnt" -10, "YTLC" 800, "YTUC" 800, "YTAS" 800;
  width: 100%;
  input[type="text"] {
    height: var(--min-touch-target-height);
    font-variation-settings: inherit;
    padding-top: 0;
    padding-bottom: 0;
    width: 100%;
    &:focus {
      background-color: var(--backgroundcolorback);
    }
  }
}

.row {
  justify-content: space-between;
  label {
    display: flex;
    flex-direction: column;
    font-size: 1.6rem;
    font-variation-settings: "wght" 400, "wdth" 25, "opsz" 50, "GRAD" 48,
      "slnt" 0, "YTLC" 200, "YTUC" 200, "YTAS" 700;
    align-items: center;
    justify-content: center;
    &:last-child {
      align-items: flex-end;
      input[type="text"] {
        text-align: right;
        padding-right: 0;
      }
    }
  }
  &--topmost {
    label {
      &--topmost {
        flex-grow: 1;
        h1,
        input[type="text"] {
          display: flex;
          flex-grow: 1;
        }
      }
      + label {
        span {
          display: flex;
        }
      }
    }
    .rangeUI__label {
      span {
        width: 100%;
      }
    }
  }
  &--stacked {
    span {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
    }
    label {
      &:first-child {
        flex-grow: 1;
      }
    }

    input {
      color: inherit;
      width: 100%;
      // can prevent iOS zoom with 16px or higher PRE-FOCUS
      height: calc(var(--min-touch-target-height-half) + 0.8rem);
      font-size: 1.6rem;
      padding: 0;
      // as of july 27, 2020, font-variation settings can be used to achieve desired smaller appearance
      font-variation-settings: "wght" 400, "wdth" 25, "opsz" 50, "GRAD" 48,
        "slnt" 0, "YTLC" 200, "YTUC" 200, "YTAS" 700;
      &:focus {
      }
    }
  }
}

.stripe--dark {
  padding: 0;
  flex-wrap: nowrap;
  //height: var(--min-touch-target-height);
  // iOS wants min height hmmmm
  //min-height: var(--min-touch-target-height);
  background: var(--calcColor);
  color: var(--backgroundcolorback);
  box-shadow: 1.6rem 0 var(--calcColor), -1.6rem 0 var(--calcColor);
  input {
    text-transform: uppercase;
  }
  label {
    //height: var(--min-touch-target-height);
    // iOS wants this explicit
    align-items: center;
    //filter: invert(1);
    input {
      height: calc(var(--min-touch-target-height-half) + 0.8rem);
      width: 100%;
      padding-right: 0;
      padding-left: 0;
    }
    &:first-child {
      flex-grow: 1;
      flex-basis: 50%;
      // why does safari mobile need this input padding to be explicit?
    }
    &:nth-child(2) {
      input {
        text-align: right;
      }
    }
  }
}
</style>
