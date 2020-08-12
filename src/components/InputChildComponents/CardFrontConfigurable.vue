<template>
  <div>
    <fieldset>
      <legend>Layout</legend>
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
    </fieldset>
    <fieldset>
      <legend>Player Image Bleed or Boxed</legend>
      <label>
        <input type="radio" v-model="playerImageBleedOrBoxed" value="relative" />
        <span>Boxed</span>
      </label>
      <label>
        <input type="radio" v-model="playerImageBleedOrBoxed" value="static" />
        <span>Full Bleed</span>
      </label>
    </fieldset>
    <fieldset>
      <legend>Logo Position</legend>
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
    </fieldset>
    <fieldset>
      <legend>Border Styles</legend>
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
    </fieldset>
    <div
      class="card__container--front"
      :class="[cardLayout, playerImageBleedOrBoxed]"
      :style="cssProps"
    >
      <div class="text__line--secondary row">
        <h2>
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
      <div class="text__line--primary row">
        <h1>
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
      cardLayout: defaultSettings.cardLayout,
      logoPosition: defaultSettings.logoPosition,
      logoPositionVertical: defaultSettings.logoPositionVertical,
      teamLogoURL: defaultSettings.teamLogoURL,
      playerImageURLorDataString: defaultSettings.playerImageURLorDataString,
      playerImageBleedOrBoxed: defaultSettings.playerImageBleedOrBoxed,
      playerName: defaultSettings.playerName,
      playerPosition: defaultSettings.playerPosition,

      teamName: defaultSettings.teamName,
    };
  },
  computed: {
    cssProps() {
      return {
        "--cardbackgroundcolor": this.cardBackgroundColor,
        "--cardbordercolor": this.cardBorderColor,
        "--cardbordercurve": `${this.cardBorderCurve}px`,
        "--cardlayout": this.cardLayout,
        "--logoposition": this.logoPosition,
        "--logopositionvertical": this.logoPositionVertical,
        "--playerimagebleedorboxed": this.playerImageBleedOrBoxed,
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
  overflow: hidden;

  // probs with z-index -- better to color in backgrounds and use outline oooh
  //background-color: var(--cardbackgroundcolor);

  border: 1px solid rgba(0, 0, 0, 0.3333);

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
  // imperative way of handling full bleed
}

h2 {
  input[type="text"] {
    color: rgba(0, 0, 0, 0.8);
    // still mulling this over
    text-shadow: 1px 0 0 rgba(black, 0.5), 1px 0 0 rgba(cyan, 0.8),
      1px 0 0 rgba(magenta, 0.8), 1px 0 0 rgba(yellow, 0.8);
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
  //filter: drop-shadow(10px 10px red);
  .static & {
    border-radius: 0;
  }
  z-index: -1;
}

.image--player {
}

.figure--logo {
  position: absolute;
  display: flex;
  //top: auto;
  //right: 1.6rem;
  //bottom: auto;
  //left: auto;
}

.image--logo {
  border-radius: 50%;
}
</style>