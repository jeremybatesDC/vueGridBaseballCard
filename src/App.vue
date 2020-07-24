<template>
  <main>
    <CardBack />
    <CardFront />
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
    this.registerServiceWorker();
  },
  //data
  //should i move data into parent component? Yes, I think so.
};
</script>

<style lang="scss">
//root and body styles canT go in scoped
//so either put those in sep style tag above, and leave below scoped
//or just be clear donT use it

// also look at dunbar and decorvar

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

.baseballCard__wrapper {
  //padding: 3.2rem;
}

.fileInput--fullContainerSize {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
}

.baseballCard__wrapper--inner {
  display: inline-block;
  width: 36rem;
  //yes, hard height here because
  height: 50.4rem;
  background-color: var(--cardbackgroundcolor, #eee);
  color: var(--cardtextcolor, #000);
  // i really don't understand at all why wdth is not working
  margin-bottom: 7.2rem;
  font-variation-settings: "wght" var(--cardtextfontweight),
    "wdth" var(--cardtextfontwidth), "opsz" var(--cardtextfontoptsize),
    "GRAD" var(--cardtextfontgrade), "slnt" var(--cardtextfontslant);

  // slnt
  // some x / y height stuff
  // consider PRESETS

  //https://typetools.typenetwork.com/

  //  "slnt" 0,"XTRA" 468, "XOPQ" 151, "YOPQ" 47, "YTLC" 514, "YTUC" 712, "YTAS" 750, "YTDE" -203, "YTFI" 738;
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
  max-width: 12rem;
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
</style>
