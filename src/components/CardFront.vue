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
            v-model="cardDesign.cardBackgroundColor"
          />
        </label>

        <fieldset class="radioBtns__fieldset">
          <legend class="radioBtns__legend text-left">Layout</legend>
          <div class="radioBtns__wrapper--inner">
            <label class="radioBtns__label">
              <input
                type="radio"
                class="radioBtns__input hidden--visually"
                v-model="cardDesign.cardLayout"
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
                v-model="cardDesign.cardLayout"
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
                v-model="cardDesign.cardLayout"
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
            <!-- : <output :value="""></output> -->
          </span>

          <input
            class="rangeUI__input"
            v-model.number="cardDesign.borderInnerCurve"
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
      :class="[cardDesign.cardLayout, cardDesign.playerImageBleedOrBoxed]"
    >
      <div class="text__line--first row">
        <h2 :style="cssTextLine1Props" class="cf__h2">
          <input
            class=""
            v-model="cardText.textLine1.teamName"
            type="text"
            placeholder
            maxlength="42"
            spellcheck="false"
          />

          <div data-soi hidden>
            <div class="row row--grow space-between row--textControls">
              <label class="rangeUI__label">
                <span
                  >Weight: <output :value="cardText.textLine1.fontWght"></output
                ></span>

                <input
                  class="rangeUI__input"
                  v-model.number="cardText.textLine1.fontWght"
                  type="range"
                  min="150"
                  max="800"
                />
              </label>
              <label class="rangeUI__label">
                <span
                  >Width: <output :value="cardText.textLine1.fontWidth"></output
                ></span>
                <input
                  class="rangeUI__input"
                  v-model.number="cardText.textLine1.fontWidth"
                  type="range"
                  min="35"
                  max="100"
                />
              </label>
            </div>
            <div class="row row--grow space-between row--textControls">
              <label class="rangeUI__label">
                <span
                  >Slant: <output :value="cardText.textLine1.fontSlant"></output
                ></span>
                <input
                  class="rangeUI__input"
                  v-model.number="cardText.textLine1.fontSlant"
                  type="range"
                  min="-10"
                  max="0"
                />
              </label>
              <label class="rangeUI__label">
                <span
                  >Grade: <output :value="cardText.textLine1.fontGrade"></output
                ></span>
                <input
                  class="rangeUI__input"
                  v-model.number="cardText.textLine1.fontGrade"
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
        :class="`row--middle--forDesign row ${cardDesign.logo.position} ${cardDesign.playerImageFilterEffect}`"
      >
        <figure class="figure--player">
          <label class="figure--player__label" for="inputTriggerFocusUI_0">
            <!--  width="320"  height="408"-->
            <img
              loading="lazy"
              class="image--player"
              :src="images.playerPic"
              alt
            />
          </label>
        </figure>

        <!-- make rounded corner optional -->
        <!-- using css filter drop shadow could work -->
        <figure
          class="figure--logo"
          v-show="cardDesign.logo.position !== 'hideLogo'"
        >
          <img
            loading="lazy"
            class="image--logo"
            :src="images.logoPic"
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
            v-model="cardText.textLine2.playerName"
            type="text"
            placeholder
            maxlength="48"
            spellcheck="false"
          />
          <div data-soi hidden>
            <div class="row row--grow space-between row--textControls">
              <label class="rangeUI__label">
                <span
                  >Weight: <output :value="cardText.textLine2.fontWght"></output
                ></span>

                <input
                  class="rangeUI__input"
                  v-model.number="cardText.textLine2.fontWght"
                  type="range"
                  min="150"
                  max="800"
                />
              </label>
              <label class="rangeUI__label">
                <span
                  >Width: <output :value="cardText.textLine2.fontWidth"></output
                ></span>
                <input
                  class="rangeUI__input"
                  v-model.number="cardText.textLine2.fontWidth"
                  type="range"
                  min="35"
                  max="100"
                />
              </label>
            </div>
            <div class="row row--grow space-between row--textControls">
              <label class="rangeUI__label">
                <span
                  >Slant: <output :value="cardText.textLine2.fontSlant"></output
                ></span>
                <input
                  class="rangeUI__input"
                  v-model.number="cardText.textLine2.fontSlant"
                  type="range"
                  min="-10"
                  max="0"
                />
              </label>
              <label class="rangeUI__label">
                <span
                  >Grade: <output :value="cardText.textLine2.fontGrade"></output
                ></span>
                <input
                  class="rangeUI__input"
                  v-model.number="cardText.textLine2.fontGrade"
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
            v-model="cardText.textPlayerPosition.playerPosition"
            type="text"
            placeholder
            maxlength="48"
            spellcheck="false"
          />
          <div data-soi hidden>
            <div class="row row--grow space-between row--textControls">
              <label class="rangeUI__label">
                <span
                  >Weight:
                  <output :value="cardText.textPlayerPosition.fontWght"></output
                ></span>

                <input
                  class="rangeUI__input"
                  v-model.number="cardText.textPlayerPosition.fontWght"
                  type="range"
                  min="150"
                  max="800"
                />
              </label>
              <label class="rangeUI__label">
                <span
                  >Width:
                  <output
                    :value="cardText.textPlayerPosition.fontWidth"
                  ></output
                ></span>
                <input
                  class="rangeUI__input"
                  v-model.number="cardText.textPlayerPosition.fontWidth"
                  type="range"
                  min="35"
                  max="100"
                />
              </label>
            </div>
            <div class="row row--grow space-between row--textControls">
              <label class="rangeUI__label">
                <span
                  >Slant:
                  <output
                    :value="cardText.textPlayerPosition.fontSlant"
                  ></output
                ></span>
                <input
                  class="rangeUI__input"
                  v-model.number="cardText.textPlayerPosition.fontSlant"
                  type="range"
                  min="-10"
                  max="0"
                />
              </label>
              <label class="rangeUI__label">
                <span
                  >Grade:
                  <output
                    :value="cardText.textPlayerPosition.fontGrade"
                  ></output
                ></span>
                <input
                  class="rangeUI__input"
                  v-model.number="cardText.textPlayerPosition.fontGrade"
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
                    id="playerPic"
                    ref="playerPic"
                    name="playerPic"
                    class="hidden--visually filePicker__input"
                    type="file"
                    accept="image/*"
                    @input="encodeImage"
                  />
                  <label
                    for="playerPic"
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
                    id="logoPic"
                    ref="logoPic"
                    name="logoPic"
                    class="hidden--visually filePicker__input"
                    type="file"
                    accept="image/*"
                    @input="encodeImage"
                  />

                  <label
                    for="logoPic"
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
                    v-model="cardDesign.playerImageFilterEffect"
                    value="noFilterEffect"
                  />
                  <span>None</span>
                </label>

                <label class="radioBtns__label">
                  <input
                    type="radio"
                    class="radioBtns__input hidden--visually"
                    v-model="cardDesign.playerImageFilterEffect"
                    value="filterbw"
                  />
                  <span>B&amp;W</span>
                </label>

                <label class="radioBtns__label">
                  <input
                    type="radio"
                    class="radioBtns__input hidden--visually"
                    v-model="cardDesign.playerImageFilterEffect"
                    value="filtersepia"
                  />
                  <span>Sepia</span>
                </label>

                <label class="radioBtns__label">
                  <input
                    type="radio"
                    class="radioBtns__input hidden--visually"
                    v-model="cardDesign.playerImageFilterEffect"
                    value="filtervintage"
                  />
                  <span>1920</span>
                </label>
                <label class="radioBtns__label">
                  <input
                    type="radio"
                    class="radioBtns__input hidden--visually"
                    v-model="cardDesign.playerImageFilterEffect"
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
                    v-model="cardDesign.logo.position"
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
                    v-model="cardDesign.logo.position"
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
                    v-model="cardDesign.logo.position"
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
                    v-model="cardDesign.logo.position"
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
                    v-model="cardDesign.logo.position"
                    value="hideLogo"
                    aria-label="Bottom Right"
                  />
                  <span> HIDE </span>
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

export default {
  setup: function () {
    const webWorkerEncode = new Worker("./workers/web-worker-encode.js", {
      type: "module",
    });

    async function encodeImage(event) {
      let theField = event.target.id;
      let filesProp = event.target.files;
      let usrfile = filesProp[0];
      //validateImage();
      let insertImgFunc = (strng, theField) => {
        this.images[theField] = strng;
      };
      // can i use optional chaining here?
      if (filesProp && usrfile) {
        console.log(usrfile);

        webWorkerEncode.postMessage(usrfile);
        this.$emit("input", usrfile);
        webWorkerEncode.onmessage = function (theMessage) {
          insertImgFunc(theMessage.data, theField);
        };
      }
    }
    return {
      encodeImage,
      webWorkerEncode,
      //webWorkerFetch,
    };
  },
  data() {
    return {
      images: {
        playerPic: opts.playerPic,
        logoPic: opts.teamLogoURL,
      },
      cardDesign: {
        playerImageBleedOrBoxed: opts.playerImageBleedOrBoxed,
        cardBackgroundColor: opts.cardBackgroundColor,
        cardLayout: opts.cardLayout,
        cardBrightness: opts.cardBrightness,
        cardSepia: opts.cardSepia,
        cardGrayScale: opts.cardGrayScale,
        playerImageFilterEffect: opts.playerImageFilterEffect,
        borderInnerCurve: opts.borderInner.curve,
        borderInnerWidth: opts.borderInner.width,
        logo: {
          borderRadius: opts.logo.borderRadius,
          position: opts.logo.position,
        },
      },

      cardText: {
        textLine1: {
          teamName: opts.teamName,
          fontWght: opts.textLine1.fontWght,
          fontWidth: opts.textLine1.fontWidth,
          fontGrade: opts.textLine1.fontGrade,
          fontSlant: opts.textLine1.fontSlant,
        },
        textLine2: {
          playerName: opts.playerName,
          fontWght: opts.textLine2.fontWght,
          fontWidth: opts.textLine2.fontWidth,
          fontGrade: opts.textLine2.fontGrade,
          fontSlant: opts.textLine2.fontSlant,
        },
        textPlayerPosition: {
          playerPosition: opts.playerPosition,
          fontWght: opts.textPlayerPosition.fontWght,
          fontWidth: opts.textPlayerPosition.fontWidth,
          fontGrade: opts.textPlayerPosition.fontGrade,
          fontSlant: opts.textPlayerPosition.fontSlant,
        },
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
          this.cardDesign.cardBackgroundColor
        ),

        "--red": redVal,
        "--green": greenVal,
        "--blue": blueVal,
      };
    },
    cssCardDesignProps() {
      return {
        "--cardbackgroundcolor": this.cardDesign.cardBackgroundColor,
        "--cardsepia": `${this.cardDesign.cardSepia}%`,
        "--cardbrightness": this.cardDesign.cardBrightness,
        "--cardgrayscale": `${this.cardDesign.cardGrayScale}%`,
        "--cardlayout": this.cardDesign.cardLayout,
        "--playerimagebleedorboxed": this.cardDesign.playerImageBleedOrBoxed,
      };
    },
    cssTextLine1Props() {
      return {
        "--fontwght": this.cardText.textLine1.fontWght,
        "--fontwidth": this.cardText.textLine1.fontWidth,
        "--fontgrade": this.cardText.textLine1.fontGrade,
        "--fontslant": this.cardText.textLine1.fontSlant,
      };
    },
    cssTextLine2Props() {
      return {
        "--fontwght": this.cardText.textLine2.fontWght,
        "--fontwidth": this.cardText.textLine2.fontWidth,
        "--fontgrade": this.cardText.textLine2.fontGrade,
        "--fontslant": this.cardText.textLine2.fontSlant,
      };
    },
    cssTextPlayerPositionProps() {
      return {
        "--fontwght": this.cardText.textPlayerPosition.fontWght,
        "--fontwidth": this.cardText.textPlayerPosition.fontWidth,
        "--fontgrade": this.cardText.textPlayerPosition.fontGrade,
        "--fontslant": this.cardText.textPlayerPosition.fontSlant,
      };
    },
    cssLogoProps() {
      return {
        "--logoposition": this.cardDesign.logo.position,
        "--logoborderradius": `${this.cardDesign.logo.borderRadius}%`,
      };
    },
    cssBorderInnerProps() {
      return {
        "--borderinnercurve": `${this.cardDesign.borderInnerCurve}px`,
        "--borderinnerwidth": `${this.cardDesign.borderInnerWidth}px`,
      };
    },
  },

  created() {
    // presently watching everything except the image uploaders
    this.$watch(
      "cardText",
      () => {
        console.log("yo");
      },
      {
        deep: true,
      }
    );
    this.$watch(
      "cardDesign",
      () => {
        console.log("hey");
      },
      {
        deep: true,
      }
    );
    this.$watch(
      "images",
      () => {
        console.log("um");
      },
      {
        deep: true,
      }
    );
  },
};
</script>

<style lang="scss">
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
  input {
    &[type="text"] {
      height: var(--min-touch-target-height);
    }
  }
  .row--middle--forDesign {
    order: 0;
  }
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
  justify-content: flex-end;
  padding-top: 1.6rem;
  padding-bottom: 0;
  input {
    &[type="text"] {
      height: 2.4rem;
    }
  }
  .row--middle--forDesign {
    order: -1;
  }

  .text__line--first {
    padding-top: 0.8rem;
    [data-soi] {
      top: auto;
      bottom: 6.4rem;
    }
  }
  .text__line--second {
    padding-bottom: 0.8rem;
    [data-soi] {
      top: auto;
      bottom: 6.4rem;
    }
  }
}
.two-zero {
  justify-content: flex-start;
  padding-top: 0;
  padding-bottom: 1.6rem;
  input {
    &[type="text"] {
      height: 2.4rem;
    }
  }
  .row--middle--forDesign {
    order: 1;
  }

  .text__line--first {
    padding-top: 0.8rem;
    [data-soi] {
      top: 6.4rem;
      bottom: auto;
    }
  }
  .text__line--second {
    padding-bottom: 0.8rem;
    [data-soi] {
      top: 6.4rem;
      bottom: auto;
    }
  }
}

.row--middle--forDesign {
  display: flex;
  position: var(--playerimagebleedorboxed);
  flex-grow: 1;
  border-width: var(--borderinnerwidth);
  border-style: solid;
  border-color: var(--calcColor);
  border-radius: var(--borderinnercurve);

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
  .cf__h1 {
    width: 66.6666%;
  }
  .cf__h3 {
    width: 33.3333%;
  }
}

.cf__h1,
.cf__h2,
.cf__h3 {
  color: var(--color);
  font-variation-settings: "wght" var(--fontwght), "wdth" var(--fontwidth),
    "GRAD" var(--fontgrade), "slnt" var(--fontslant);
  &:focus-within {
    [data-soi] {
      visibility: visible;
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
  pointer-events: none;
}

.image--logo {
  border-radius: var(--logoborderradius);
  .topLeft & {
    transform: translate(
      calc(var(--borderinnercurve) / -3.6666),
      calc(var(--borderinnercurve) / -3.6666)
    );
  }
  .topRight & {
    transform: translate(
      calc(var(--borderinnercurve) / 3.6666),
      calc(var(--borderinnercurve) / -3.6666)
    );
  }
  .bottomLeft & {
    transform: translate(
      calc(var(--borderinnercurve) / -3.6666),
      calc(var(--borderinnercurve) / 3.6666)
    );
  }
  .bottomRight & {
    transform: translate(
      calc(var(--borderinnercurve) / 3.6666),
      calc(var(--borderinnercurve) / 3.6666)
    );
  }
}
</style>
