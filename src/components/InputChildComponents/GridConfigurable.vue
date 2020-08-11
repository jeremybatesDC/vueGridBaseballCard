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

    <div class="card__container--front" :class="cardLayout" :style="cssProps">
      <div class="image__line">
        <img loading="lazy" class="image--player" :src="playerImageURLorDataString" alt />
      </div>
      <div class="text__line--secondary row">
        <h2>
          <input v-model="teamName" type="text" placeholder maxlength="42" />
        </h2>
      </div>
      <div class="row--middle--forDesign">designBox</div>
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
      cardLayout: defaultSettings.cardLayout,
      playerImageURLorDataString: defaultSettings.playerImageURLorDataString,
      playerName: defaultSettings.playerName,
      playerPosition: defaultSettings.playerPosition,
      teamName: defaultSettings.teamName,
    };
  },
  computed: {
    cssProps() {
      return {
        "--cardlayout": this.cardLayout,
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
  flex-grow: 1;
  border: 1px solid blue;
}

.image__line {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: var(--cardbackgroundcolor);
  z-index: -1;
}
</style>