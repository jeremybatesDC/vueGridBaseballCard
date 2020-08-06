<template>
  <main>
    <div role="tablist">
      <label role="tab" aria-selected aria-controls id>
        <input type="radio" v-model="frontshowing" :value="true" />
        <span>FRONT</span>
      </label>
      <label role="tab" aria-selected aria-controls id>
        <input type="radio" v-model="frontshowing" :value="false" />
        <span>BACK</span>
      </label>
    </div>
    <div>
      <div role="tabpanel" id aria-labelledby v-show="frontshowing">
        <CardFront />
      </div>
      <div role="tabpanel" id aria-labelledby v-show="!frontshowing">
        <CardBack />
      </div>
    </div>
  </main>
</template>

<script>
import CardFront from "./components/CardFront.vue";
import CardBack from "./components/CardBack.vue";

export default {
  setup: function () {
    async function registerServiceWorker() {
      navigator.serviceWorker.register("/sw.js");
    }
    return { registerServiceWorker };
  },
  components: {
    CardFront,
    CardBack,
  },
  mounted: function () {
    //this.registerServiceWorker();
    console.log(
      "remember to uncomment this service worker. Also, work on an envar"
    );
  },
  data: function () {
    return {
      frontshowing: true,
    };
  },
  //data
  //should i move data into parent component? Yes, I think so.
};
</script>

<style lang="scss">
:root {
  // having trouble this morning with calc and scss math with variable and didn't want to get too stuck
  // wtaf ?
  --min-touch-target-height: 4.4rem;
  --min-touch-target-width: var(--min-touch-target-height);
  --min-touch-target-height-half: 2.2rem;
  --min-touch-target-height-double: 8.8rem;
  --text-short-wide: "wght" 400, "wdth" 25, "opsz" 25, "GRAD" 1, "slnt" 0,
    "YTLC" 400, "YTUC" 400, "YTFI" 400;
  --cmyk-misalign: 1px 0 0 cyan, -1px 0 0 magenta, 0 1px 0 yellow;
}

h1,
h2,
h3 {
  input {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    color: inherit;
    display: inherit;
    width: 100%;
    background: inherit;
    border: inherit;
    box-shadow: inherit;
  }
}

// .baseballCard__wrapper {
// }

.fileInput--fullContainerSize {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
}

.baseballCard__wrapper--mid {
  display: flex;
  justify-content: center;
}

.baseballCard__wrapper--inner {
  display: inline-block;
  position: relative;
  width: 36rem;
  //yes, hard height here because
  //height: 50.4rem;
  background-color: var(--cardbackgroundcolor, #eee);
  color: var(--cardtextcolor, #000);
  // i really don't understand at all why wdth is not working
  margin-bottom: 7.2rem;
  font-variation-settings: "wght" var(--cardtextfontweight),
    "wdth" var(--cardtextfontwidth), "opsz" var(--cardtextfontoptsize),
    "GRAD" var(--cardtextfontgrade), "slnt" var(--cardtextfontslant);
  overflow: hidden;

  // slnt
  // some x / y height stuff
  // consider PRESETS

  //https://typetools.typenetwork.com/

  //  "slnt" 0,"XTRA" 468, "XOPQ" 151, "YOPQ" 47, "YTLC" 514, "YTUC" 712, "YTAS" 750, "YTDE" -203, "YTFI" 738;

  &.has-misalign {
  }
  &.has-gum {
  }
  &.has-crease {
  }
  // mislaign
  * {
    text-shadow: var(--cmyk-misalign);
  }
  //crease
  &:before {
    // svg crease image maybe
    content: "";
    position: absolute;
    top: 0;
    right: -100px;
    height: 2px;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.25);
    transform: rotate(45deg) scaleX(2);
    //transform-origin: center top;
    z-index: 1;
    //tfoutline: 1px dashed rgba(0, 0, 0, 0.25);
    box-shadow: 1px 0 rgba(0, 0, 0, 1);
    //border-image:url();
  }
  //gum
  // svg gum image maybe
  // &:after {
  //   content: "";
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   width: 10rem;
  //   height: 30rem;
  //   background-color: rgba(0, 0, 0, 0.1);
  //   border-radius: 3px 4px 5px 6px;
  //   transform: rotate(18deg) translateX(100%) translateY(20%);
  //   mix-blend-mode: darken;
  // }
}

// there are some hard to iron out differences between filters when they are overtop of images
.svg--textureOverlay {
  z-index: -1;
}

.masthead--center {
  font-size: 1.2rem;
  align-self: center;
}
.image__container {
  display: flex;
  position: relative;
}
.footer--playerName {
  font-size: 1.6rem;
  align-self: center;
}
.footer--playerPosition {
  align-self: center;

  h3,
  input {
    text-align: right;
  }
  input {
    font-size: 1.6rem;
  }
}
.footer--teamLogo {
  display: flex;
  justify-content: flex-end;
}
.image--teamLogo {
  object-fit: cover;
  width: 7.2rem;
  height: 7.2rem;
  border-radius: 50%;
  align-self: var(--logoPosition);
  //justify-self: flex-end;
  z-index: 1;
}

.image--player {
  object-fit: cover;
  object-position: 0 50%;
  //width: 100%;
  //height: auto;
  //max-height: 38.4rem;
  border: 3px solid var(--cardbordercolor, #000);
  border-radius: var(--cardbordercurve, 0);
  filter: #{"grayscale(var(--cardgrayscale, 0))"} brightness(
      var(--cardbrightness, 1)
    ) sepia(var(--cardsepia, 0));
}

.form--cardDesign {
  display: inline-block;
  vertical-align: top;
  // temporary arbitrary value
  max-width: 18rem;
  padding-left: 1rem;
  overflow: hidden;
}
details {
  padding: 1rem;
}
summary {
  display: flex;
}
fieldset {
  padding: 0;
  margin-bottom: 1.6rem;
}
legend {
  font-family: inherit;
  //font-weight: bold;
  text-align: center;
  padding: 0 0.4rem;
  font-size: 1.6rem;
}
label {
  //display: block;
  font-family: inherit;

  input {
    //display: block;
    font-family: inherit;
    font-size: inherit;
    // &:not([type="color"]) {
    //   width: 100%;
    // }
  }
  select {
    display: block;
    font-family: inherit;
    font-size: 1.6rem;
  }
  .baseballCard__wrapper & {
    margin-bottom: 1.6rem;
  }
}

[role="tablist"] {
  display: flex;
  margin-bottom: 1.6rem;
  background: rgba(0, 0, 0, 0.1);
}

[role="tab"] {
  font-size: 1.8rem;
  display: flex;
  flex-grow: 1;
  align-items: center;
  min-height: var(--min-touch-target-height);
  padding: 0 1.6rem;
  // in case ever have more than just 2 tabs
  &:not(:first-child) {
    box-shadow: -1px 0 #000;
  }
  [type="radio"] {
    min-height: inherit;
    min-width: var(--min-touch-target-width);
    margin-right: 1.6rem;
  }
}
</style>
