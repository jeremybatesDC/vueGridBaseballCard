<template>
  <div
    class="cf__wrapper--outermost"
    :style="[
      cssColorContrastProps,
      cssCardDesignProps,
      cssLogoProps,
      cssBorderInnerProps,
    ]"
  >
    <div class="cf__controls controls--l2">
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
                  <use xlink:href="#oneone"></use></svg
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
                  <use xlink:href="#zerotwo"></use></svg
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
                  <use xlink:href="#twozero"></use></svg
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
                  >Weight: <output :value="textLine1.fontWeight"></output
                ></span>

                <input
                  class="rangeUI__input"
                  v-model="textLine1.fontWeight"
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
        :class="`row--hasImgs row ${logo.position} ${borderInner.style} ${playerImageFilterEffect}`"
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
                  >Weight: <output :value="textLine2.fontWeight"></output
                ></span>

                <input
                  class="rangeUI__input"
                  v-model="textLine2.fontWeight"
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
                  >Weight:
                  <output :value="textPlayerPosition.fontWeight"></output
                ></span>

                <input
                  class="rangeUI__input"
                  v-model="textPlayerPosition.fontWeight"
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
                    id="playerImageURLorDataString"
                    ref="playerImageURLorDataString"
                    name="playerImageURLorDataString"
                    class="hidden--visually filePicker__input"
                    type="file"
                    accept="image/*"
                    @input="encodeImage"
                  />
                  <label
                    for="playerImageURLorDataString"
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
                    id="teamLogoURL"
                    ref="teamLogoURL"
                    name="teamLogoURL"
                    class="hidden--visually filePicker__input"
                    type="file"
                    accept="image/*"
                    @input="encodeImage"
                  />

                  <label
                    for="teamLogoURL"
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
                    <svg width="32" height="32" viewBox="0 0 32 32">
                      <use xlink:href="#squaretopleft"></use>
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
                    ><svg width="32" height="32" viewBox="0 0 32 32">
                      <use xlink:href="#squaretopright"></use>
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
                    ><svg width="32" height="32" viewBox="0 0 32 32">
                      <use xlink:href="#squarebotleft"></use>
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
                    ><svg width="32" height="32" viewBox="0 0 32 32">
                      <use xlink:href="#squarebotright"></use>
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

export default {
  // writing sytax of 'setup()' was giving me a prob with 'this'
  setup: function () {
    var webWorkerEncode = new Worker("./workers/web-worker-encode.js", {
      type: "module",
    });

    async function encodeImage(event) {
      let theField = event.target.id;
      let filesProp = event.target.files;
      let usrfile = filesProp[0];
      //validateImage();
      let insertImgFunc = (strng, theField) => {
        this[theField] = strng;
      };
      // can i use optional chaining here?
      if (filesProp && usrfile) {
        webWorkerEncode.postMessage(usrfile);
        this.$emit("input", usrfile);
        webWorkerEncode.onmessage = (theMessage) => {
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
        fontWeight: opts.textLine1.fontWeight,
        fontWidth: opts.textLine1.fontWidth,
        fontGrade: opts.textLine1.fontGrade,
        fontSlant: opts.textLine1.fontSlant,
      },
      textLine2: {
        fontWeight: opts.textLine2.fontWeight,
        fontWidth: opts.textLine2.fontWidth,
        fontGrade: opts.textLine2.fontGrade,
        fontSlant: opts.textLine2.fontSlant,
      },
      textPlayerPosition: {
        fontWeight: opts.textPlayerPosition.fontWeight,
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
      };
    },
    cssTextLine1Props() {
      return {
        "--fontweight": this.textLine1.fontWeight,
        "--fontwidth": this.textLine1.fontWidth,
        "--fontgrade": this.textLine1.fontGrade,
        "--fontslant": this.textLine1.fontSlant,
      };
    },
    cssTextLine2Props() {
      return {
        "--fontweight": this.textLine2.fontWeight,
        "--fontwidth": this.textLine2.fontWidth,
        "--fontgrade": this.textLine2.fontGrade,
        "--fontslant": this.textLine2.fontSlant,
      };
    },
    cssTextPlayerPositionProps() {
      return {
        "--fontweight": this.textPlayerPosition.fontWeight,
        "--fontwidth": this.textPlayerPosition.fontWidth,
        "--fontgrade": this.textPlayerPosition.fontGrade,
        "--fontslant": this.textPlayerPosition.fontSlant,
      };
    },
    cssLogoProps() {
      return {
        "--logoposition": this.logo.position,
        //"--logoborderradius": `${this.logo.borderRadius}%`,
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

<style lang="scss">
.cf__wrapper--outermost {
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

.cf__controls {
  position: relative;
  //padding: 0.8rem 0;
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
  .row--hasImgs {
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
  .row--hasImgs {
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
  .row--hasImgs {
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

.row--hasImgs {
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
  h1 {
    width: 66.6666%;
  }
  h3 {
    width: 33.3333%;
  }
}

.cf__h1,
.cf__h2,
.cf__h3 {
  color: var(--color);
  font-variation-settings: "wght" var(--fontweight), "wdth" var(--fontwidth),
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

  pointer-events: none;
}

.image--logo {
  border-radius: var(--logoborderradius);
}
</style>
