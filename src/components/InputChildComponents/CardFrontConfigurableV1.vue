<template>
  <div
    class="cardFront__wrapper--outermost"
    :style="[
      cssColorContrastProps,
      cssCardDesignProps,
      cssLogoProps,
      cssBorderInnerProps,
    ]"
  >
    <div class="cardFront__controls">
      <div class="row space-around align-center">
        <label
          v-show="playerImageBleedOrBoxed !== 'static'"
          class="colorPicker__label colorPicker__label--textOverlap"
        >
          <span>Color</span>
          <input
            class="colorPicker__input"
            type="color"
            v-model="cardBackgroundColor"
          />
        </label>

        <fieldset class="radioUI__fieldset">
          <legend class="radioUI__legend">Layout</legend>

          <label class="radioUI__label">
            <input
              type="radio"
              class="radioUI__input"
              v-model="cardLayout"
              value="one-one"
            />
            <span>1-1</span>
          </label>

          <label class="radioUI__label">
            <input
              type="radio"
              class="radioUI__input"
              v-model="cardLayout"
              value="zero-two"
            />
            <span>0-2</span>
          </label>

          <label class="radioUI__label">
            <input
              type="radio"
              class="radioUI__input"
              v-model="cardLayout"
              value="two-zero"
            />
            <span>2-0</span>
          </label>
        </fieldset>

        <label class="rangeUI__label">
          <span>Curve: <output :value="borderInner.curve"></output></span>

          <input
            class="rangeUI__input"
            v-model="borderInner.curve"
            type="range"
            min="0"
            max="24"
          />
        </label>
      </div>
    </div>
    <!-- end controls-->
    <div
      class="card__container--front"
      :class="[cardLayout, playerImageBleedOrBoxed]"
    >
      <div class="text__line--first row">
        <h2 :style="cssTextLine1Props">
          <input v-model="teamName" type="text" placeholder maxlength="42" />
        </h2>
      </div>
      <div
        :class="`row--middle--forDesign row ${logo.position} ${borderInner.style} ${playerImageFilterEffect}`"
      >
        <figure class="figure--player">
          <label for="inputTriggerFocusUI_0">
            <img
              loading="lazy"
              class="image--player"
              :src="playerImageURLorDataString"
              alt
            />
          </label>
        </figure>

        <!-- make rounded corner optional -->
        <!-- using css filter drop shadow could work -->
        <figure
          class="figure--logo"
          v-show="logo.showing && logo.position !== 'hideLogo'"
        >
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
      <input
        id="inputTriggerFocusUI_0"
        class="checkbox--forReveal hidden--visually"
        type="checkbox"
      />

      <!-- QuasiModal (heh)-->
      <div class="playerImage__controls" data-show-only-on-interaction>
        <div class="col">
          <div class="row row--grow">
            <form class="filePicker__form">
              <!--<fieldset class="filePicker__fieldset">-->
              <div class="filePicker__wrapper">
                <input
                  id="filePicker_0"
                  class="hidden--visually filePicker__input"
                  type="file"
                  accept="image/*"
                />
                <label for="filePicker_0" class="filePicker__label"
                  >Upload Image</label
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
                  <!--<i class="filePicker__icon">📷</i>-->
                  Selfie</label
                >
              </div>
              <div class="filePicker__wrapper">
                <input
                  id="filePicker_2"
                  class="hidden--visually filePicker__input"
                  type="file"
                  accept="image/*"
                />
                <label for="filePicker_2" class="filePicker__label"
                  >Upload Logo Img</label
                >
              </div>

              <div class="filePicker__wrapper">
                <input
                  id="filePicker_3"
                  class="hidden--visually filePicker__input"
                  type="file"
                  capture="user"
                  accept="image/*"
                />
                <label for="filePicker_3" class="filePicker__label"
                  >Logo Selfie</label
                >
              </div>
              <div class="filePicker__wrapper">
                <label>
                  <!-- need to scope reset -->
                  <input type="reset" value="Delete Image" />
                </label>
              </div>
              <!--</fieldset>-->
            </form>
          </div>
          <div class="row row--grow space-between">
            <fieldset class="radioUI__fieldset radioUI__fieldset--textAbove">
              <legend class="radioUI__legend">Filters</legend>
              <div class="">
                <label class="radioUI__label">
                  <input
                    type="radio"
                    class="radioUI__input"
                    v-model="playerImageFilterEffect"
                    value="noFilterEffect"
                  />
                  <span>Orig</span>
                </label>

                <label class="radioUI__label">
                  <input
                    type="radio"
                    class="radioUI__input"
                    v-model="playerImageFilterEffect"
                    value="filtersepia"
                  />
                  <span>Sepia</span>
                </label>

                <label class="radioUI__label">
                  <input
                    type="radio"
                    class="radioUI__input"
                    v-model="playerImageFilterEffect"
                    value="filterbw"
                  />
                  <span>B&amp;W</span>
                </label>
                <label class="radioUI__label">
                  <input
                    type="radio"
                    class="radioUI__input"
                    v-model="playerImageFilterEffect"
                    value="filtervintage"
                  />
                  <span>Vintage</span>
                </label>
              </div>
            </fieldset>
            <fieldset class="radioUI__fieldset radioUI__fieldset--textAbove">
              <legend class="radioUI__legend">Logo</legend>
              <div class="">
                <label class="radioUI__label">
                  <span>Top</span>
                  <input
                    type="radio"
                    class="radioUI__input"
                    v-model="logo.position"
                    value="topLeft"
                    aria-label="Top Left"
                  />
                  <span>Left</span>
                </label>

                <label class="radioUI__label">
                  <span>Top</span>
                  <input
                    type="radio"
                    class="radioUI__input"
                    v-model="logo.position"
                    value="topRight"
                    aria-label="Top Right"
                  />
                  <span>Right</span>
                </label>

                <label class="radioUI__label">
                  <span>Bottom</span>
                  <input
                    type="radio"
                    class="radioUI__input"
                    v-model="logo.position"
                    value="bottomLeft"
                    aria-label="Bottom Left"
                  />
                  <span>Left</span>
                </label>

                <label class="radioUI__label">
                  <span>Bottom</span>
                  <input
                    type="radio"
                    class="radioUI__input"
                    v-model="logo.position"
                    value="bottomRight"
                    aria-label="Bottom Right"
                  />
                  <span>
                    Right
                  </span>
                </label>

                <label class="radioUI__label">
                  <span>Hide</span>
                  <input
                    type="radio"
                    class="radioUI__input"
                    v-model="logo.position"
                    value="hideLogo"
                    aria-label="Bottom Right"
                  />
                  <span>
                    Logo
                  </span>
                </label>
              </div>
            </fieldset>
          </div>
          <div class="row row--grow">
            <label for="inputTriggerFocusUI_0">CLOSE</label>
          </div>
        </div>
      </div>
      <!-- end QuasiModal-->
    </div>

    <!-- end card -->

    <details>
      <summary>
        Focus UI controls
      </summary>
      <div>
        <form>
          <fieldset>
            <div class=""></div>
          </fieldset>
        </form>
        <form>
          <fieldset>
            <legend>Logo Image</legend>

            <!--<div class="row">
              <label>
                <span>Show Logo</span>
                <input type="radio" v-model="logo.showing" :value="true" />
              </label>
              <label>
                <span>Hide Logo</span>
                <input type="radio" v-model="logo.showing" :value="false" />
              </label>
            </div>-->
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
                    <input
                      type="radio"
                      v-model="logo.borderRadius"
                      value="50"
                    />
                    <span>Round</span>
                  </label>
                  <label>
                    <input type="radio" v-model="logo.borderRadius" value="0" />
                    <span>Square</span>
                  </label>
                </div>
              </span>
            </div>
          </fieldset>
        </form>

        <form>
          <fieldset>
            <legend>Typography (field specific)</legend>
            <div class="row">
              <label class="rangeUI__label">
                <span>Font Weight: <output value="999"></output></span>

                <input
                  class="rangeUI__input"
                  v-model="cardTextFontWeight"
                  type="range"
                  min="100"
                  max="900"
                />
              </label>
              <label class="rangeUI__label">
                <span>Font Width: <output value="999"></output></span>
                <input
                  class="rangeUI__input"
                  v-model="cardTextFontWidth"
                  type="range"
                  min="35"
                  max="100"
                />
              </label>

              <label class="rangeUI__label">
                <span>Font Slant: <output value="999"></output></span>
                <input
                  class="rangeUI__input"
                  v-model="cardTextFontSlant"
                  type="range"
                  min="-10"
                  max="0"
                />
              </label>
              <label class="rangeUI__label">
                <span>Font Grade: <output value="999"></output></span>
                <input
                  class="rangeUI__input"
                  v-model="cardTextFontGrade"
                  type="range"
                  min="0"
                  max="48"
                />
              </label>
            </div>
          </fieldset>
        </form>
      </div>
    </details>
  </div>
</template>






<script>
import defaultSettings from "/json/default-settings.json";

export default {
  data: function () {
    return {
      cardBackgroundColor: defaultSettings.cardBackgroundColor,
      cardTextColor: defaultSettings.cardTextColor,
      cardBrightness: defaultSettings.cardBrightness,
      cardSepia: defaultSettings.cardSepia,
      cardGrayScale: defaultSettings.cardGrayScale,
      cardLayout: defaultSettings.cardLayout,
      teamLogoURL: defaultSettings.teamLogoURL,
      playerImageURLorDataString: defaultSettings.playerImageURLorDataString,
      playerImageBleedOrBoxed: defaultSettings.playerImageBleedOrBoxed,
      playerImageFilterEffect: defaultSettings.playerImageFilterEffect,
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
        fontGrade: defaultSettings.textLine1.fontGrade,
        fontSlant: defaultSettings.textLine1.fontSlant,
      },
      textLine2: {
        fontWeight: defaultSettings.textLine2.fontWeight,
        fontWidth: defaultSettings.textLine2.fontWidth,
        fontGrade: defaultSettings.textLine2.fontGrade,
        fontSlant: defaultSettings.textLine2.fontSlant,
      },
    };
  },
  computed: {
    cssColorContrastProps() {
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
          this.cardBackgroundColor
        ),

        "--red": redVal,
        "--green": greenVal,
        "--blue": blueVal,
      };
    },
    cssCardDesignProps() {
      return {
        "--cardbackgroundcolor": this.cardBackgroundColor,
        "--cardTextColor": this.cardTextColor,
        "--cardsepia": `${this.cardSepia}%`,
        "--cardbrightness": this.cardBrightness,
        "--cardgrayscale": `${this.cardGrayScale}%`,
        "--cardlayout": this.cardLayout,
        "--playerimagebleedorboxed": this.playerImageBleedOrBoxed,
        //"--playerimagefiltereffect": this.playerImageFilterEffect,
      };
    },
    cssTextLine1Props() {
      return {
        //"--color": this.textLine1.color,
        "--fontweight": this.textLine1.fontWeight,
        "--fontwidth": this.textLine1.fontWidth,
        "--fontgrade": this.textLine1.fontGrade,
        "--fontslant": this.textLine1.fontSlant,
      };
    },
    cssTextLine2Props() {
      return {
        //"--color": this.textLine2.color,
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
        "--borderinnercolor": this.borderInner.color,
        //"--borderinnerhexplusalpha": `${this.borderInner.color}${this.borderInner.opacity}`,
        "--borderinnerwidth": `${this.borderInner.width}px`,
      };
    },
  },
};
</script>


<style scoped lang="scss">
.cardFront__wrapper--outermost {
  --r: calc(var(--red) * 0.2126);
  --g: calc(var(--green) * 0.7152);
  --b: calc(var(--blue) * 0.0722);
  --sum: calc(var(--r) + var(--g) + var(--b));
  --perceived-lightness: calc(var(--sum) / 255);
  --border-alpha: calc(
    (var(--perceived-lightness) - var(--border-threshold)) * 100
  );
}

.card__container--front {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 36rem;
  //yes, hard height here because
  height: 50.4rem;
  margin: 0 auto 10rem auto;
  padding: 0 1.6rem;
  color: hsl(
    0,
    0%,
    calc(
      (var(--perceived-lightness) - var(--contrast-threshold-for-card)) *
        -10000000%
    )
  );
  background-color: var(--cardbackgroundcolor);

  border: 1px solid rgba(0, 0, 0, 0.3333);
  overflow: hidden;

  z-index: 0;
}

.cardFront__controls {
  position: relative;
  padding: 0.8rem 0;
  .colorPicker__label--textOverlap {
    span {
      color: hsl(
        0,
        0%,
        calc(
          (var(--perceived-lightness) - var(--contrast-threshold-for-card)) *
            -10000000%
        )
      );
    }
  }
}

.playerImage__controls {
  height: 100%;
  .radioUI__fieldset {
    background-color: var(--background-for-overlay-controls);
  }
  .radioUI__label {
    display: flex;
    flex-direction: column;
    flex-grow: 0;
    flex-wrap: nowrap;
    padding: 0;
    color: #000;
    span {
      columns: inherit;
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

  //border-color: var(--borderinnercolor);
  border-color: hsl(
    0,
    0%,
    calc(
      (var(--perceived-lightness) - var(--contrast-threshold-for-card)) *
        -10000000%
    )
  );

  border-radius: var(--borderinnercurve);
  // trying a trick

  overflow: hidden;
  // imperative way of handling full bleed
  //filter: var(--playerimagefiltereffect);
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

.playerImage__fieldset {
  flex-grow: 1;
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