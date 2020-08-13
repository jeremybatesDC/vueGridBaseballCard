<template>
  <div>
    <details class="controls">
      <summary>Front Controls</summary>
      <fieldset>
        <details>
          <summary>
            <legend>Layout</legend>
          </summary>
          <!-- try just by ordering image -->
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

      <fieldset>
        <details>
          <summary>
            <legend>Bleed or Border</legend>
          </summary>
          <label>
            <input type="radio" v-model="playerImageBleedOrBoxed" value="relative" />
            <span>Border</span>
          </label>
          <label>
            <input type="radio" v-model="playerImageBleedOrBoxed" value="static" />
            <span>Full Bleed</span>
          </label>
        </details>
      </fieldset>
      <fieldset>
        <details>
          <summary>
            <legend>Logo (make Optional and add options for round and border)</legend>
          </summary>
          <div class="row">
            <label>
              <input type="radio" v-model="logoPosition" value="flex-start" />
              <span>Left</span>
            </label>
            <label>
              <input type="radio" v-model="logoPosition" value="flex-end" />
              <span>Right</span>
            </label>
          </div>
          <div class="row">
            <label>
              <input type="radio" v-model="logoPositionVertical" value="flex-start" />
              <span>Top</span>
            </label>
            <label>
              <input type="radio" v-model="logoPositionVertical" value="flex-end" />
              <span>Bottom</span>
            </label>
          </div>
        </details>
      </fieldset>
      <fieldset>
        <details>
          <summary>
            <legend>Border (make Optional)</legend>
          </summary>
          <label>
            Border Color
            <input v-model="cardBorderColor" type="color" />
          </label>
          <label>
            Border Curve
            <input v-model="cardBorderCurve" type="range" min="0" max="24" />
          </label>
          <label>
            Border Width
            <input type="range" min="0" max="5" />
          </label>

          <label>
            Border Styles: NONE, (Double? Or better to use outline or FILTER drop shadow for 2nd element?)
            <input
              type="range"
              min="0"
              max="5"
            />
          </label>
        </details>
      </fieldset>

      <fieldset>
        <details>
          <summary>
            <legend>Image Filters</legend>
          </summary>
          <label>
            Brightness
            <input v-model="cardBrightness" type="range" min="1" max="1.3" step="0.01" />
          </label>
          <label>
            Sepia
            <input v-model="cardSepia" type="range" min="0" max="50" />
          </label>
          <label>
            Greyscale
            <input v-model="cardGrayScale" type="range" min="0" max="100" />
          </label>
        </details>
      </fieldset>
      <fieldset>
        <details>
          <summary>
            <legend>Superlatives</legend>
          </summary>

          <div>
            <p>All Star, Rookie of the Year, MVP, Arbitrary</p>
            <p>circle border or open (maybe no circle border since it would look maybe ugh)</p>
            <p>img for superlative? Or just pizzaz (star, trophy, banner, (other?) none)</p>
          </div>
        </details>
      </fieldset>
    </details>
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
      <div class="row--middle--forDesign row">
        <figure class="figure--player">
          <img loading="lazy" class="image--player" :src="playerImageURLorDataString" alt />
        </figure>

        <!-- make rounded corner optional -->
        <!-- using css filter drop shadow could work -->
        <figure class="figure--logo">
          <img loading="lazy" class="image--logo" :src="teamLogoURL" alt width="72" height="72" />
        </figure>
      </div>
      <div class="text__line--second row">
        <h1 :style="cssTextLine2Props">
          <input v-model="playerName" type="text" placeholder maxlength="48" />
        </h1>
        <h3>
          <input v-model="playerPosition" type="text" placeholder maxlength="48" />
        </h3>
      </div>
    </div>
  </div>
</template>





<script>
import defaultSettings from "/json/default-settings.json";

export default {
  data: function () {
    return {
      cardBackgroundColor: defaultSettings.cardBackgroundColor,
      cardBorderColor: defaultSettings.cardBorderColor,
      cardBorderCurve: defaultSettings.cardBorderCurve,
      cardBrightness: defaultSettings.cardBrightness,
      cardSepia: defaultSettings.cardSepia,
      cardGrayScale: defaultSettings.cardGrayScale,
      cardLayout: defaultSettings.cardLayout,
      logoPosition: defaultSettings.logoPosition,
      logoPositionVertical: defaultSettings.logoPositionVertical,
      teamLogoURL: defaultSettings.teamLogoURL,
      playerImageURLorDataString: defaultSettings.playerImageURLorDataString,
      playerImageBleedOrBoxed: defaultSettings.playerImageBleedOrBoxed,
      playerName: defaultSettings.playerName,
      playerPosition: defaultSettings.playerPosition,
      teamName: defaultSettings.teamName,

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
        "--cardbordercolor": this.cardBorderColor,
        "--cardbordercurve": `${this.cardBorderCurve}px`,
        "--cardsepia": `${this.cardSepia}%`,
        "--cardbrightness": this.cardBrightness,
        "--cardgrayscale": `${this.cardGrayScale}%`,
        "--cardlayout": this.cardLayout,
        "--logoposition": this.logoPosition,
        "--logopositionvertical": this.logoPositionVertical,
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
  padding: 1.6rem;
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
  .row--middle--forDesign {
    order: -1;
  }
}
.two-zero {
  justify-content: flex-start;
  .row--middle--forDesign {
    order: 1;
  }
}

.row--middle--forDesign {
  position: var(--playerimagebleedorboxed);
  flex-grow: 1;
  //border: 1px solid blue;
  // make configurable
  border-width: 3px;
  border-style: solid;
  border-color: var(--cardbordercolor);
  border-radius: var(--cardbordercurve);
  justify-content: var(--logoposition);
  align-items: var(--logopositionvertical);
  overflow: hidden;
  // imperative way of handling full bleed
  //filter: drop-shadow(10px 10px red) sepia(100) grayscale(100);
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
  border-radius: var(--cardbordercurve);
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
  border-radius: 50%;
}
</style>