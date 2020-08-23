<template>
  <div>
    <div class="controls">
      <div class="row row--wrap">
        <form>
          <fieldset>
            <details open>
              <summary>
                <legend>Layout</legend>
              </summary>
              <label>
                <input type="radio" v-model="cardLayout" value="one-one" />
                <span>1-1</span>
              </label>
              <label>
                <input type="radio" v-model="cardLayout" value="zero-two" />
                <span>0-2</span>
              </label>
              <label>
                <input type="radio" v-model="cardLayout" value="two-zero" />
                <span>2-0</span>
              </label>
            </details>
          </fieldset>
        </form>

        <form>
          <fieldset>
            <details open>
              <summary>
                <legend>Outer Border</legend>
              </summary>
              <label>
                <input
                  type="radio"
                  v-model="playerImageBleedOrBoxed"
                  value="relative"
                />
                <span>Outer Border</span>
              </label>

              <label>
                <input
                  type="radio"
                  v-model="playerImageBleedOrBoxed"
                  value="static"
                />
                <span>No Outer Border</span>
              </label>
              <label v-show="playerImageBleedOrBoxed === 'relative'">
                <input type="color" v-model="cardBackgroundColor" />
                <span>Outer Border Color </span>
              </label>
            </details>
          </fieldset>
        </form>
        <form>
          <fieldset>
            <details open>
              <summary>
                <legend>Inner Border</legend>
              </summary>
              <label>
                <input type="radio" v-model="borderInner.style" value="solid" />
                <span>Show Inner Border</span>
              </label>
              <label>
                <input type="radio" v-model="borderInner.style" value="none" />
                <span>Hide Inner Border</span>
              </label>

              <div class="row" v-show="borderInner.style !== 'none'">
                <label>
                  Border Color:
                  <input v-model="borderInner.color" type="color" />
                </label>

                <label>
                  Border Opacity (Fix):
                  <output :value="borderInner.opacity"></output>
                  <input
                    type="range"
                    min="10"
                    max="99"
                    v-model="borderInner.opacity"
                  />
                </label>
                <label>
                  Border Curve: <output :value="borderInner.curve"></output>
                  <input
                    v-model="borderInner.curve"
                    type="range"
                    min="0"
                    max="24"
                  />
                </label>
                <label>
                  Border Width: <output :value="borderInner.width"></output>
                  <input
                    v-model="borderInner.width"
                    type="range"
                    min="1"
                    max="8"
                  />
                </label>
              </div>
            </details>
          </fieldset>
        </form>
      </div>
    </div>
    <!-- end controls-->
    <div
      class="card__container--front"
      :class="[cardLayout, playerImageBleedOrBoxed]"
      :style="cssCardDesignProps"
    >
      <div class="text__line--first row">
        <h2 :style="cssTextLine1Props">
          <input v-model="teamName" type="text" placeholder maxlength="42" />
        </h2>
      </div>
      <div
        :class="`${logo.position} ${borderInner.style} row--middle--forDesign row`"
        :style="[cssLogoProps, cssBorderInnerProps]"
      >
        <figure class="figure--player">
          <img
            loading="lazy"
            class="image--player"
            :src="playerImageURLorDataString"
            alt
          />
        </figure>

        <!-- make rounded corner optional -->
        <!-- using css filter drop shadow could work -->
        <figure class="figure--logo" v-show="logo.showing">
          <img
            loading="lazy"
            class="image--logo"
            :src="teamLogoURL"
            alt
            width="72"
            height="72"
          />
        </figure>
      </div>
      <div class="text__line--second row">
        <h1 :style="cssTextLine2Props">
          <input v-model="playerName" type="text" placeholder maxlength="48" />
        </h1>
        <h3>
          <input
            v-model="playerPosition"
            type="text"
            placeholder
            maxlength="48"
          />
        </h3>
      </div>
    </div>
    <form>
      <fieldset>
        <legend>Player Image</legend>
        <div class="row">
          <label>
            Player Image (URL or upload):
            <input
              v-model="playerImageURLorDataString"
              type="text"
              placeholder
            />
          </label>
        </div>
        <div class="row">
          <div class="filePicker__wrapper">
            <input
              id="filePicker_0"
              class="hidden--visually filePicker__input"
              type="file"
              accept="image/*"
            />
            <label for="filePicker_0" class="filePicker__label"
              >Upload
              <i class="filePicker__icon">⬆️</i>
              Image</label
            >
          </div>

          <div class="filePicker__wrapper">
            <input
              id="filePicker_1"
              class="hidden--visually filePicker__input"
              type="file"
              capture="user"
              accept="image/*"
            />
            <label for="filePicker_1" class="filePicker__label"
              >Take
              <i class="filePicker__icon">📷</i>
              Selfie</label
            >
          </div>

          <label>
            <!-- need to scope reset -->
            <button type="reset">Delete image</button>
          </label>
        </div>

        <div class="row">
          <label>
            Brightness: <output :value="cardBrightness"></output>
            <input
              v-model="cardBrightness"
              type="range"
              min="1"
              max="1.3"
              step="0.01"
            />
          </label>
          <label>
            Sepia: <output :value="cardSepia"></output>
            <input v-model="cardSepia" type="range" min="0" max="50" />
          </label>
          <label>
            Greyscale: <output :value="cardGrayScale"></output>
            <input v-model="cardGrayScale" type="range" min="0" max="100" />
          </label>
        </div>
      </fieldset>
    </form>
    <form>
      <fieldset>
        <legend>Logo Image</legend>
        <div class="row">
          <p>round/square, border)</p>
        </div>
        <div class="row">
          <label>
            <span>Show Logo</span>
            <input type="radio" v-model="logo.showing" :value="true" />
          </label>
          <label>
            <span>Hide Logo</span>
            <input type="radio" v-model="logo.showing" :value="false" />
          </label>
        </div>
        <div class="row" v-show="logo.showing">
          <span>
            <div class="row">
              <label>
                Team Logo Image (URL):
                <input v-model="teamLogoURL" type="url " placeholder />
                <!-- <input type="file" id="logoFileInput" name="logoFileInput" accept="image/*" /> -->
              </label>
            </div>

            <div class="row">
              <label>
                <input type="radio" v-model="logo.borderRadius" value="50" />
                <span>Round</span>
              </label>
              <label>
                <input type="radio" v-model="logo.borderRadius" value="0" />
                <span>Square</span>
              </label>
            </div>

            <div class="control--fourSquare">
              <div class="row">
                <div class="col">
                  <label for="logoPostTL">Top</label>
                  <input
                    id="logoPostTL"
                    type="radio"
                    v-model="logo.position"
                    value="topLeft"
                    aria-label="Top Left"
                  />
                  <label for="logoPostTL">Left</label>
                </div>
                <div class="col">
                  <label for="logoPostTR">Top</label>
                  <input
                    id="logoPostTR"
                    type="radio"
                    v-model="logo.position"
                    value="topRight"
                    aria-label="Top Right"
                  />
                  <label for="logoPostTR">Right</label>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <label for="logoPostBL">Left</label>
                  <input
                    id="logoPostBL"
                    type="radio"
                    v-model="logo.position"
                    value="bottomLeft"
                    aria-label="Bottom Left"
                  />
                  <label for="logoPostBL">Bottom</label>
                </div>
                <div class="col">
                  <label for="logoPostBR">Right</label>
                  <input
                    id="logoPostBR"
                    type="radio"
                    v-model="logo.position"
                    value="bottomRight"
                    aria-label="Bottom Right"
                  />
                  <label for="logoPostBR">Bottom</label>
                </div>
              </div>
            </div>
          </span>
        </div>
      </fieldset>
    </form>
  </div>
</template>





<script>
import defaultSettings from "/json/default-settings.json";

export default {
  data: function () {
    return {
      cardBackgroundColor: defaultSettings.cardBackgroundColor,
      cardBrightness: defaultSettings.cardBrightness,
      cardSepia: defaultSettings.cardSepia,
      cardGrayScale: defaultSettings.cardGrayScale,
      cardLayout: defaultSettings.cardLayout,
      teamLogoURL: defaultSettings.teamLogoURL,
      playerImageURLorDataString: defaultSettings.playerImageURLorDataString,
      playerImageBleedOrBoxed: defaultSettings.playerImageBleedOrBoxed,
      playerName: defaultSettings.playerName,
      playerPosition: defaultSettings.playerPosition,
      teamName: defaultSettings.teamName,
      borderInner: {
        color: defaultSettings.borderInner.color,
        curve: defaultSettings.borderInner.curve,
        style: defaultSettings.borderInner.style,
        opacity: defaultSettings.borderInner.opacity,
        width: defaultSettings.borderInner.width,
      },
      logo: {
        showing: defaultSettings.logo.showing,
        borderRadius: defaultSettings.logo.borderRadius,
        position: defaultSettings.logo.position,
      },
      textLine1: {
        fontWeight: defaultSettings.textLine1.fontWeight,
        fontWidth: defaultSettings.textLine1.fontWidth,
        color: defaultSettings.textLine1.color,
        fontGrade: defaultSettings.textLine1.fontGrade,
        fontSlant: defaultSettings.textLine1.fontSlant,
      },
      textLine2: {
        fontWeight: defaultSettings.textLine2.fontWeight,
        fontWidth: defaultSettings.textLine2.fontWidth,
        color: defaultSettings.textLine2.color,
        fontGrade: defaultSettings.textLine2.fontGrade,
        fontSlant: defaultSettings.textLine2.fontSlant,
      },
    };
  },
  computed: {
    cssCardDesignProps() {
      return {
        "--cardbackgroundcolor": this.cardBackgroundColor,
        "--cardsepia": `${this.cardSepia}%`,
        "--cardbrightness": this.cardBrightness,
        "--cardgrayscale": `${this.cardGrayScale}%`,
        "--cardlayout": this.cardLayout,
        "--playerimagebleedorboxed": this.playerImageBleedOrBoxed,
      };
    },
    cssTextLine1Props() {
      return {
        "--color": this.textLine1.color,
        "--fontweight": this.textLine1.fontWeight,
        "--fontwidth": this.textLine1.fontWidth,
        "--fontgrade": this.textLine1.fontGrade,
        "--fontslant": this.textLine1.fontSlant,
      };
    },
    cssTextLine2Props() {
      return {
        "--color": this.textLine2.color,
        "--fontweight": this.textLine2.fontWeight,
        "--fontwidth": this.textLine2.fontWidth,
        "--fontgrade": this.textLine2.fontGrade,
        "--fontslant": this.textLine2.fontSlant,
      };
    },
    cssLogoProps() {
      return {
        "--logoposition": this.logo.position,
        "--logoborderradius": `${this.logo.borderRadius}%`,
      };
    },
    cssBorderInnerProps() {
      return {
        "--borderinnercurve": `${this.borderInner.curve}px`,
        "--borderinnerstyle": this.borderInner.style,
        "--borderinneropacity": this.borderInner.opacity,
        "--borderinnerhexplusalpha": `${this.borderInner.color}${this.borderInner.opacity}`,
        "--borderinnerwidth": `${this.borderInner.width}px`,
      };
    },
  },
};
</script>


<style scoped lang="scss">
.card__container--front {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 36rem;
  //yes, hard height here because
  height: 50.4rem;
  margin: 0 auto 10rem auto;
  padding: 0 1.6rem;
  background-color: var(--cardbackgroundcolor);

  border: 1px solid rgba(0, 0, 0, 0.3333);
  overflow: hidden;

  z-index: 0;

  &:focus-within {
    &:before {
      content: "edit mode";
      position: fixed;
      top: 0;
      right: 0;
    }
  }
}

.one-one {
  justify-content: space-between;
  .row--middle--forDesign {
    order: 0;
  }
}
.zero-two {
  justify-content: flex-end;
  padding-top: 1.6rem;
  padding-bottom: 0;
  .row--middle--forDesign {
    order: -1;
  }
  .text__line--first {
    padding-top: 0.8rem;
  }
  .text__line--second {
    padding-bottom: 0.8rem;
  }
}
.two-zero {
  justify-content: flex-start;
  padding-top: 0;
  padding-bottom: 1.6rem;
  .row--middle--forDesign {
    order: 1;
  }
  .text__line--first {
    padding-top: 0.8rem;
  }
  .text__line--second {
    padding-bottom: 0.8rem;
  }
}

input {
  &[type="text"] {
    .one-one & {
      height: var(--min-touch-target-height);
    }
    //reason that iM ok here with less than 44px is that when they are next to each other, focus UI makes it less of a huge deal if user taps the adjascent box. Not ideal but also still clickable
    .two-zero & {
      height: 2.4rem;
    }
    .zero-two & {
      height: 2.4rem;
    }
  }
}

.row--middle--forDesign {
  display: flex;
  position: var(--playerimagebleedorboxed);
  flex-grow: 1;
  //border: 1px solid blue;
  // make configurable
  border-width: var(--borderinnerwidth);
  border-style: var(--borderinnerstyle);
  border-color: var(--borderinnerhexplusalpha);
  border-radius: var(--borderinnercurve);
  // trying a trick

  overflow: hidden;
  // imperative way of handling full bleed
  //filter: drop-shadow(10px 10px red) sepia(100) grayscale(100);

  &.topLeft {
    justify-content: flex-start;
    align-items: flex-start;
  }
  &.topRight {
    justify-content: flex-end;

    align-items: flex-start;
  }
  &.bottomLeft {
    justify-content: flex-start;
    align-items: flex-end;
  }
  &.bottomRight {
    justify-content: flex-end;
    align-items: flex-end;
  }
}

.text__line--second {
  justify-content: space-between;
  align-items: center;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  color: var(--color);
  font-variation-settings: "wght" var(--fontweight), "wdth" var(--fontwidth),
    "GRAD" var(--fontgrade), "slnt" var(--fontslant);
}

h2 {
  font-size: 1.8rem;
  input[type="text"] {
    // still mulling this over
    //text-shadow: 1px 0 0 rgba(black, 0.5), 1px 0 0 rgba(cyan, 0.8),
    //1px 0 0 rgba(magenta, 0.8), 1px 0 0 rgba(yellow, 0.8);

    //filter: drop-shadow(1px 1px 1px 1px cyan),drop-shadow(1px 1px 1px 1px magenta), drop-shadow(1px 1px 1px 1px yellow);
  }
}

h3 {
  text-align: right;

  input {
    text-align: inherit;
  }
}

.figure--player {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  //background-color: var(--cardbackgroundcolor);
  border-radius: var(--borderinnercurve);
  // donT override all the other filters here
  filter: #{"grayscale(var(--cardgrayscale))"} brightness(var(--cardbrightness))
    sepia(var(--cardsepia));

  .static & {
    border-radius: 0;
    z-index: -1;
  }
}

.image--player {
  // depending on layout might want to make object-position managable yarh
  object-position: 0 50%;
  width: 100%;
  // donT think i need this height value but
  height: 100%;
}

.figure--logo {
  position: absolute;
  display: flex;
  filter: #{"grayscale(var(--cardgrayscale))"} brightness(var(--cardbrightness))
    sepia(var(--cardsepia));
}

.image--logo {
  border-radius: var(--logoborderradius);
}

.control {
  &--fourSquare {
    // width should be touch targets with adequate space
    width: fit-content;
    border: 1px solid blue;
    .row {
      justify-content: space-between;
      padding: var(--touch-target-spacing);
      &:first-child {
        padding-bottom: var(--unit);
      }
      &:last-child {
        padding-top: var(--unit);
        label {
          //justify-content: flex-end;
        }
      }
    }
    .col {
      width: min-content;
      &:not(:first-child) {
        margin-left: var(--touch-target-spacing);
        //text-align: right;
      }
      // in case i ever add more
      &:last-child {
        align-items: flex-end;
      }
    }
    label {
      //display: flex;
      //flex-direction: column;
      position: relative;
      //width: var(--touch-target-large);
      //height: var(--touch-target-large);
      //border: 1px solid blue;
      // in case i ever add more
    }
    input {
      &[type="radio"],
      &[type="checkmark"] {
        //position: absolute;
        //top: 50%;
        width: var(--min-touch-target-width);
        height: var(--min-touch-target-height);
        //left: 50%;
        //transform: translateY(-50%);
        display: flex;
        align-self: center;
        justify-self: center;
        &:checked {
          + label {
            background-color: pink;
          }
        }
      }
    }
  }
}
</style>