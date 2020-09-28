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
    <div class="cardFront__controls controls--l2">
      <div class="row space-around height--100">
        <label
          class="colorPicker__label colorPicker__label--textOverlap align-self-center"
        >
          <span>Color</span>
          <input
            class="colorPicker__input"
            type="color"
            v-model="cardBackgroundColor"
          />
        </label>

        <fieldset class="radioBtns__fieldset">
          <legend class="radioBtns__legend text-left">Layout</legend>
          <div class="radioBtns__wrapper--inner">
            <label class="radioBtns__label">
              <input
                type="radio"
                class="radioBtns__input hidden--visually"
                v-model="cardLayout"
                value="one-one"
              />
              <span
                ><svg width="32" height="32" viewBox="0 0 32 32">
                  <use xlink:href="#iconlayoutoneone"></use></svg
              ></span>
            </label>

            <label class="radioBtns__label">
              <input
                type="radio"
                class="radioBtns__input hidden--visually"
                v-model="cardLayout"
                value="zero-two"
              />
              <span
                ><svg viewBox="0 0 32 32" width="32" height="32">
                  <use xlink:href="#iconlayoutzerotwo"></use></svg
              ></span>
            </label>

            <label class="radioBtns__label">
              <input
                type="radio"
                class="radioBtns__input hidden--visually"
                v-model="cardLayout"
                value="two-zero"
              />
              <span
                ><svg viewBox="0 0 32 32" width="32" height="32">
                  <use xlink:href="#iconlayouttwozero"></use></svg
              ></span>
            </label>
          </div>
        </fieldset>

        <label class="rangeUI__label">
          <span
            >Border Curve
            <!-- : <output :value="borderInner.curve"></output> -->
          </span>

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
        <h2 :style="cssTextLine1Props" class="cf__h2">
          <input
            class=""
            v-model="teamName"
            type="text"
            placeholder
            maxlength="42"
            spellcheck="false"
          />

          <div data-soi hidden>
            <div class="row row--grow space-between row--textControls">
              <label class="rangeUI__label">
                <span
                  >Weight: <output :value="textLine1.fontWght"></output
                ></span>

                <input
                  class="rangeUI__input"
                  v-model="textLine1.fontWght"
                  type="range"
                  min="150"
                  max="800"
                />
              </label>
              <label class="rangeUI__label">
                <span
                  >Width: <output :value="textLine1.fontWidth"></output
                ></span>
                <input
                  class="rangeUI__input"
                  v-model="textLine1.fontWidth"
                  type="range"
                  min="35"
                  max="100"
                />
              </label>
            </div>
            <div class="row row--grow space-between row--textControls">
              <label class="rangeUI__label">
                <span
                  >Slant: <output :value="textLine1.fontSlant"></output
                ></span>
                <input
                  class="rangeUI__input"
                  v-model="textLine1.fontSlant"
                  type="range"
                  min="-10"
                  max="0"
                />
              </label>
              <label class="rangeUI__label">
                <span
                  >Grade: <output :value="textLine1.fontGrade"></output
                ></span>
                <input
                  class="rangeUI__input"
                  v-model="textLine1.fontGrade"
                  type="range"
                  min="0"
                  max="1"
                  step=".1"
                />
              </label>
            </div>
          </div>
        </h2>
      </div>
      <div
        :class="`row--middle--forDesign row ${logo.position} ${borderInner.style} ${playerImageFilterEffect}`"
      >
        <figure class="figure--player">
          <label class="figure--player__label" for="inputTriggerFocusUI_0">
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
        <h1 :style="cssTextLine2Props" class="cf__h1">
          <input
            class=""
            v-model="playerName"
            type="text"
            placeholder
            maxlength="48"
            spellcheck="false"
          />
          <div data-soi hidden>
            <div class="row row--grow space-between row--textControls">
              <label class="rangeUI__label">
                <span
                  >Weight: <output :value="textLine2.fontWght"></output
                ></span>

                <input
                  class="rangeUI__input"
                  v-model="textLine2.fontWght"
                  type="range"
                  min="150"
                  max="800"
                />
              </label>
              <label class="rangeUI__label">
                <span
                  >Width: <output :value="textLine2.fontWidth"></output
                ></span>
                <input
                  class="rangeUI__input"
                  v-model="textLine2.fontWidth"
                  type="range"
                  min="35"
                  max="100"
                />
              </label>
            </div>
            <div class="row row--grow space-between row--textControls">
              <label class="rangeUI__label">
                <span
                  >Slant: <output :value="textLine2.fontSlant"></output
                ></span>
                <input
                  class="rangeUI__input"
                  v-model="textLine2.fontSlant"
                  type="range"
                  min="-10"
                  max="0"
                />
              </label>
              <label class="rangeUI__label">
                <span
                  >Grade: <output :value="textLine2.fontGrade"></output
                ></span>
                <input
                  class="rangeUI__input"
                  v-model="textLine2.fontGrade"
                  type="range"
                  min="0"
                  max="1"
                  step=".1"
                />
              </label>
            </div>
          </div>
        </h1>
        <h3 :style="cssTextPlayerPositionProps" class="cf__h3">
          <input
            class=""
            v-model="playerPosition"
            type="text"
            placeholder
            maxlength="48"
            spellcheck="false"
          />
          <div data-soi hidden>
            <div class="row row--grow space-between row--textControls">
              <label class="rangeUI__label">
                <span
                  >Weight: <output :value="textPlayerPosition.fontWght"></output
                ></span>

                <input
                  class="rangeUI__input"
                  v-model="textPlayerPosition.fontWght"
                  type="range"
                  min="150"
                  max="800"
                />
              </label>
              <label class="rangeUI__label">
                <span
                  >Width: <output :value="textPlayerPosition.fontWidth"></output
                ></span>
                <input
                  class="rangeUI__input"
                  v-model="textPlayerPosition.fontWidth"
                  type="range"
                  min="35"
                  max="100"
                />
              </label>
            </div>
            <div class="row row--grow space-between row--textControls">
              <label class="rangeUI__label">
                <span
                  >Slant: <output :value="textPlayerPosition.fontSlant"></output
                ></span>
                <input
                  class="rangeUI__input"
                  v-model="textPlayerPosition.fontSlant"
                  type="range"
                  min="-10"
                  max="0"
                />
              </label>
              <label class="rangeUI__label">
                <span
                  >Grade: <output :value="textPlayerPosition.fontGrade"></output
                ></span>
                <input
                  class="rangeUI__input"
                  v-model="textPlayerPosition.fontGrade"
                  type="range"
                  min="0"
                  max="1"
                  step=".1"
                />
              </label>
            </div>
          </div>
        </h3>
      </div>
      <input
        id="inputTriggerFocusUI_0"
        class="checkbox--forReveal hidden--visually"
        type="checkbox"
      />

      <!-- QuasiModal (heh)-->
      <div class="playerImage__controls" data-soi>
        <div class="col flex-start">
          <div class="row row--full-width">
            <form class="filePicker__form">
              <fieldset class="filePicker__fieldset">
                <!--<legend class="filePicker__legend text-left">
                  Player Image
                </legend>-->
                <div class="filePicker__wrapper">
                  <input
                    id="playerImageFileInput"
                    ref="playerImageFileInput"
                    name="playerImageFileInput"
                    class="hidden--visually filePicker__input"
                    type="file"
                    accept="image/*"
                    @input="encodeImage"
                  />
                  <label
                    for="playerImageFileInput"
                    class="filePicker__label"
                    aria-label="Upload Image"
                  >
                    <svg
                      viewBox="0 0 32 32"
                      width="32"
                      height="32"
                      fill="none"
                      stroke="currentcolor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    >
                      <use xlink:href="#iconportraitadd"></use>
                    </svg>

                    <span>Upload Pic</span>
                  </label>
                </div>
              </fieldset>
              <fieldset class="filePicker__fieldset">
                <!--<legend class="filePicker__legend text-right">Logo</legend>-->
                <div class="filePicker__wrapper">
                  <input
                    id="logoFileInput"
                    ref="logoFileInput"
                    name="logoFileInput"
                    class="hidden--visually filePicker__input"
                    type="file"
                    accept="image/*"
                    @input="encodeImage"
                  />

                  <label
                    for="logoFileInput"
                    class="filePicker__label"
                    aria-label="Upload Logo Image"
                  >
                    <span>Upload Logo</span>
                    <svg
                      viewBox="0 0 32 32"
                      width="32"
                      height="32"
                      fill="none"
                      stroke="currentcolor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    >
                      <use xlink:href="#iconphotoadd"></use></svg
                  ></label>
                </div>
              </fieldset>
            </form>
          </div>
          <div class="row space-between row--full-width">
            <fieldset class="radioBtns__fieldset">
              <legend class="radioBtns__legend">Filters</legend>
              <div class="radioBtns__wrapper--inner">
                <label class="radioBtns__label">
                  <input
                    type="radio"
                    class="radioBtns__input hidden--visually"
                    v-model="playerImageFilterEffect"
                    value="noFilterEffect"
                  />
                  <span>None</span>
                </label>

                <label class="radioBtns__label">
                  <input
                    type="radio"
                    class="radioBtns__input hidden--visually"
                    v-model="playerImageFilterEffect"
                    value="filterbw"
                  />
                  <span>B&amp;W</span>
                </label>

                <label class="radioBtns__label">
                  <input
                    type="radio"
                    class="radioBtns__input hidden--visually"
                    v-model="playerImageFilterEffect"
                    value="filtersepia"
                  />
                  <span>Sepia</span>
                </label>

                <label class="radioBtns__label">
                  <input
                    type="radio"
                    class="radioBtns__input hidden--visually"
                    v-model="playerImageFilterEffect"
                    value="filtervintage"
                  />
                  <span>1920</span>
                </label>
                <label class="radioBtns__label">
                  <input
                    type="radio"
                    class="radioBtns__input hidden--visually"
                    v-model="playerImageFilterEffect"
                    value="filterfaded"
                  />
                  <span>Faded</span>
                </label>
              </div>
            </fieldset>

            <fieldset class="radioBtns__fieldset">
              <legend class="radioBtns__legend">Logo</legend>
              <div class="radioBtns__wrapper--inner">
                <label class="radioBtns__label">
                  <input
                    type="radio"
                    class="radioBtns__input hidden--visually"
                    v-model="logo.position"
                    value="topLeft"
                    aria-label="Top Left"
                  />
                  <span>
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      class="icon__foursquare icon__foursquare--topLeft"
                    >
                      <use xlink:href="#iconlogotopleft"></use>
                    </svg>
                  </span>
                </label>

                <label class="radioBtns__label">
                  <input
                    type="radio"
                    class="radioBtns__input hidden--visually"
                    v-model="logo.position"
                    value="topRight"
                    aria-label="Top Right"
                  />
                  <span
                    ><svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      class="icon__foursquare icon__foursquare--topRight"
                    >
                      <use xlink:href="#iconlogotopright"></use>
                    </svg>
                  </span>
                </label>

                <label class="radioBtns__label">
                  <input
                    type="radio"
                    class="radioBtns__input hidden--visually"
                    v-model="logo.position"
                    value="bottomLeft"
                    aria-label="Bottom Left"
                  />
                  <span
                    ><svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      class="icon__foursquare icon__foursquare--bottomLeft"
                    >
                      <use xlink:href="#iconlogobotleft"></use>
                    </svg>
                  </span>
                </label>

                <label class="radioBtns__label">
                  <input
                    type="radio"
                    class="radioBtns__input hidden--visually"
                    v-model="logo.position"
                    value="bottomRight"
                    aria-label="Bottom Right"
                  />
                  <span
                    ><svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      class="icon__foursquare icon__foursquare--bottomRight"
                    >
                      <use xlink:href="#iconlogobotright"></use>
                    </svg>
                  </span>
                </label>

                <label class="radioBtns__label">
                  <input
                    type="radio"
                    class="radioBtns__input hidden--visually"
                    v-model="logo.position"
                    value="hideLogo"
                    aria-label="Bottom Right"
                  />
                  <span> None </span>
                </label>
              </div>
            </fieldset>
          </div>
          <label
            for="inputTriggerFocusUI_0"
            class="omniClose__label omniClose__label--inside"
          ></label>
        </div>
      </div>
      <!-- end QuasiModal-->
      <label
        class="omniClose__label omniClose__label--outside"
        for="inputTriggerFocusUI_0"
      ></label>
    </div>

    <!-- end card -->
  </div>
</template>

<script>
import opts from "/json/default-settings.json";
//import TextSlider from "./TextSlider.vue";

var webWorkerEncode = new Worker("./workers/web-worker-encode.js", {
  type: "module",
});
//var webWorkerFetch = new Worker("./workers/web-worker-fetch.js", {
//  type: "module",
//});

// any reason not to fire up web worker at the beginning?

// async function submitHandler() {
//   console.log(event);
//   webWorkerFetch.postMessage(opts, this.data);
//   webWorkerFetch.onmessage = function(event) {
//     console.log(
//       event.data,
//       "card front here thanking web worker fetch for its help"
//     );
//   };
// }

// can constrain the ACCEPT attribute  https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file

// async function validateImage(imageFileToValidate) {
//   const maxFileSize = 1;
//   if (imageFileToValidate.size < maxFileSize) {
//     console.log("okay go ahead");
//   } else {
//     console.log("too heavy");
//   }
// }

// need this to encode whatever image is passed to it right?
async function encodeImage(event) {
  let evntTrgtID = event.target.id;
  let filesProp = this.$refs[evntTrgtID].files;
  let usrfile = filesProp[0];

  //validateImage();

  if (filesProp && usrfile) {
    //console.log(this);
    webWorkerEncode.postMessage(usrfile);
    this.$emit("input", usrfile);
    // hard to pass through the refernce
    // REFACTOR
    let testFunction = null;
    if (evntTrgtID === "playerImageFileInput") {
      testFunction = (strng) => {
        this.playerImageURLorDataString = strng;
      };
    } else {
      testFunction = (strng) => {
        this.teamLogoURL = strng;
      };
    }
    webWorkerEncode.onmessage = function (event) {
      testFunction(event.data);
    };
    // END REFACTOR
  }
}

export default {
  setup() {
    return {
      encodeImage,
      webWorkerEncode,
      //webWorkerFetch,
    };
  },
  data() {
    return {
      cardBackgroundColor: opts.cardBackgroundColor,
      cardTextColor: opts.cardTextColor,
      cardBrightness: opts.cardBrightness,
      cardSepia: opts.cardSepia,
      cardGrayScale: opts.cardGrayScale,
      cardLayout: opts.cardLayout,
      teamLogoURL: opts.teamLogoURL,
      playerImageURLorDataString: opts.playerImageURLorDataString,
      playerImageBleedOrBoxed: opts.playerImageBleedOrBoxed,
      playerImageFilterEffect: opts.playerImageFilterEffect,
      playerName: opts.playerName,
      playerPosition: opts.playerPosition,
      teamName: opts.teamName,
      borderInner: {
        color: opts.borderInner.color,
        curve: opts.borderInner.curve,
        style: opts.borderInner.style,
        opacity: opts.borderInner.opacity,
        width: opts.borderInner.width,
      },
      logo: {
        showing: opts.logo.showing,
        borderRadius: opts.logo.borderRadius,
        position: opts.logo.position,
      },
      textLine1: {
        fontWght: opts.textLine1.fontWght,
        fontWidth: opts.textLine1.fontWidth,
        fontGrade: opts.textLine1.fontGrade,
        fontSlant: opts.textLine1.fontSlant,
      },
      textLine2: {
        fontWght: opts.textLine2.fontWght,
        fontWidth: opts.textLine2.fontWidth,
        fontGrade: opts.textLine2.fontGrade,
        fontSlant: opts.textLine2.fontSlant,
      },
      textPlayerPosition: {
        fontWght: opts.textPlayerPosition.fontWght,
        fontWidth: opts.textPlayerPosition.fontWidth,
        fontGrade: opts.textPlayerPosition.fontGrade,
        fontSlant: opts.textPlayerPosition.fontSlant,
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
        "--fontwght": this.textLine1.fontWght,
        "--fontwidth": this.textLine1.fontWidth,
        "--fontgrade": this.textLine1.fontGrade,
        "--fontslant": this.textLine1.fontSlant,
      };
    },
    cssTextLine2Props() {
      return {
        //"--color": this.textLine2.color,
        "--fontwght": this.textLine2.fontWght,
        "--fontwidth": this.textLine2.fontWidth,
        "--fontgrade": this.textLine2.fontGrade,
        "--fontslant": this.textLine2.fontSlant,
      };
    },
    cssTextPlayerPositionProps() {
      return {
        //"--color": this.textLine2.color,
        "--fontwght": this.textPlayerPosition.fontWght,
        "--fontwidth": this.textPlayerPosition.fontWidth,
        "--fontgrade": this.textPlayerPosition.fontGrade,
        "--fontslant": this.textPlayerPosition.fontSlant,
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
  --calcColor: hsl(
    0,
    0%,
    calc(
      (var(--perceived-lightness) - var(--contrast-threshold-for-card)) *
        -10000000%
    )
  );

  overflow: hidden;
}

.card__container--front {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 36rem;
  //yes, hard height here because
  height: 50.4rem;
  margin: 0 auto;
  padding: 0 1.6rem;
  color: var(--calcColor);
  background-color: var(--cardbackgroundcolor);

  border: 1px solid rgba(0, 0, 0, 0.3333);

  // may need this again...
  //overflow: hidden;

  z-index: 0;
}

.cardFront__controls {
  position: relative;
  //padding: 0.8rem 0;
  .colorPicker__label--textOverlap {
    span {
      color: var(--calcColor);
    }
  }
}

.playerImage__controls {
  height: 100%;
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

  border-width: var(--borderinnerwidth);
  border-style: var(--borderinnerstyle);

  border-color: var(--calcColor);

  border-radius: var(--borderinnercurve);

  &.topLeft {
    justify-content: flex-start;
    align-items: flex-start;
    .figure--logo {
      transform: translate(
        calc(var(--borderinnercurve) / -3.6666),
        calc(var(--borderinnercurve) / -3.6666)
      );
    }
  }
  &.topRight {
    justify-content: flex-end;

    align-items: flex-start;
    .figure--logo {
      transform: translate(
        calc(var(--borderinnercurve) / 3.6666),
        calc(var(--borderinnercurve) / -3.6666)
      );
    }
  }
  &.bottomLeft {
    justify-content: flex-start;
    align-items: flex-end;
    .figure--logo {
      transform: translate(
        calc(var(--borderinnercurve) / -3.6666),
        calc(var(--borderinnercurve) / 3.6666)
      );
    }
  }
  &.bottomRight {
    justify-content: flex-end;
    align-items: flex-end;
    .figure--logo {
      transform: translate(
        calc(var(--borderinnercurve) / 3.6666),
        calc(var(--borderinnercurve) / 3.6666)
      );
    }
  }
}

.text__line--second {
  justify-content: space-between;
  align-items: center;
  .cf__h1 {
    width: 66.6666%;
  }
  .cf__h3 {
    width: 33.3333%;
  }
}

h1,
h2,
h3,
h4,
h5,
h6 {
  color: var(--color);
  font-variation-settings: "wght" var(--fontwght), "wdth" var(--fontwidth),
    "GRAD" var(--fontgrade), "slnt" var(--fontslant);
}
.cf__h1,
.cf__h2,
.cf__h3 {
  &:focus-within {
    [data-soi] {
      visibility: visible;
    }
  }
}

.one-one {
  .text__line--first {
    [data-soi] {
      top: var(--min-touch-target);
      bottom: auto;
    }
  }

  .text__line--second {
    [data-soi] {
      top: auto;
      bottom: var(--min-touch-target);
    }
  }
}

.zero-two {
  .text__line--first {
    [data-soi] {
      top: auto;
      bottom: 6.4rem;
    }
  }
  .text__line--second {
    [data-soi] {
      top: auto;
      bottom: 6.4rem;
    }
  }
}

.two-zero {
  .text__line--first {
    [data-soi] {
      top: 6.4rem;
      bottom: auto;
    }
  }
  .text__line--second {
    [data-soi] {
      top: 6.4rem;
      bottom: auto;
    }
  }
}

.cf__h2 {
  font-size: 1.8rem;
  display: flex;
  flex-grow: 1;
}

.cf__h3 {
  font-size: 1.6rem;

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
  //.static & {
  //  border-radius: 0;
  //  z-index: -1;
  //}
  .figure--player__label {
    flex-grow: 1;
  }
}

.image--player {
  background-color: #fff;
  // depending on layout might want to make object-position managable yarh
  object-position: 0 50%;
  width: 100%;
  // donT think i need this height value but
  height: 100%;
  border-radius: calc(var(--borderinnercurve) - var(--borderinnerwidth));
}

.playerImage__fieldset {
  flex-grow: 1;
}

.figure--logo {
  position: absolute;
  display: flex;
  filter: #{"grayscale(var(--cardgrayscale))"} brightness(var(--cardbrightness))
    sepia(var(--cardsepia));
  pointer-events: none;
}

.image--logo {
  border-radius: var(--logoborderradius);
}
</style>
