<template>
  <header class="cb__header" :style="textLineAProps">
    <div class="row row--topmost space-between">
      <!-- i dont think label is necessarily correct here -->
      <label class="backHeader__label--topmost">
        <h1 class="cb__h1">
          <input
            type="text"
            class=""
            value="WONDER WOMAN"
            placeholder="Firstname Lastname"
            spellcheck="false"
          />
          <div data-soi hidden>
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
      <label class="backHeader__label--topmost">
        <span>
          <input type="text" v-model="defaultFacts.info.info_3" />
        </span>
      </label>
    </div>

    <!-- hard to loop since distinct lists may help... Although... -->
    <div class="row row--stacked space-between">
      <span class="">
        <!-- nested row -->
        <div class="row row--stripe stripe--dark space-between">
          <label>
            <input class="" type="email" v-model="defaultFacts.info.info_0" />
          </label>

          <label>
            <input class="" type="text" v-model="defaultFacts.info.info_1" />
          </label>
        </div>
        <div class="row row--bottommost space-between">
          <label>
            <input class="" type="text" v-model="defaultFacts.info.info_4" />
          </label>
          <label>
            <input
              class="text-center"
              type="text"
              v-model="defaultFacts.info.info_5"
            />
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
import optsBack from "/json/default-settings-back.json";
export default {
  data() {
    return {
      defaultFacts,
      textLineA: {
        fontWeight: optsBack.textLineA.fontWeight,
        fontWidth: optsBack.textLineA.fontWidth,
        fontGrade: optsBack.textLineA.fontGrade,
        fontSlant: optsBack.textLineA.fontSlant,
      },
    };
  },
  computed: {
    textLineAProps() {
      return {
        "--fontweight": this.textLineA.fontWeight,
        "--fontwidth": this.textLineA.fontWidth,
        "--fontgrade": this.textLineA.fontGrade,
        "--fontslant": this.textLineA.fontSlant,
      };
    },
  },
};
</script>

<style lang="scss">
.backHeader__label--topmost {
  input {
    text-transform: uppercase;
  }
  &:first-of-type {
    width: 66.6666%;
    &:focus-within {
      [data-soi] {
        visibility: visible;
      }
    }
  }
  &:nth-of-type(2) {
    width: 33.3333%;
    input {
      // not sure why iOS was haing trouble with this
      width: 100%;
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

.cb__header {
  display: flex;
  flex-direction: column;

  padding: 0 1.6rem;
  .row {
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
          h1,
          input[type="text"] {
            display: flex;
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
        flex-grow: 1;
      }

      input {
        color: inherit;
        width: 100%;
        height: calc(var(--min-touch-target-height-half) + 0.8rem);
        font-size: 1.6rem;
        padding: 0;
        font-variation-settings: "wght" 400, "wdth" 25, "opsz" 50, "GRAD" 48,
          "slnt" 0, "YTLC" 200, "YTUC" 200, "YTAS" 700;
        &:focus {
        }
      }
    }
    &.stripe--dark {
      padding: 0;
      flex-wrap: nowrap;

      background: var(--calcColor);
      color: var(--backgroundcolorback);
      box-shadow: 1.6rem 0 var(--calcColor), -1.6rem 0 var(--calcColor);
      input {
        text-transform: uppercase;
      }
      label {
        align-items: center;
        input {
          height: calc(var(--min-touch-target-height-half) + 0.8rem);
          width: 100%;
          padding-right: 0;
          padding-left: 0;
        }
        &:first-child {
          flex-grow: 1;
          flex-basis: 50%;
        }
        &:nth-child(2) {
          input {
            text-align: right;
          }
        }
      }
    }
  }
}

.cb__h1 {
  display: flex;
  flex-grow: 1;
  font-size: 2.4rem;
  padding-bottom: 0;
  font-variation-settings: "wght" var(--fontweight), "wdth" var(--fontwidth),
    "opsz" 25, "GRAD" var(--fontgrade), "slnt" var(--fontslant), "YTLC" 800,
    "YTUC" 800, "YTAS" 800;

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
</style>
