<template>
  <CardFront />
</template>

<script>
import CardFront from "./components/card-front.vue";

export default {
  components: {
    CardFront
  }
};
</script>

<style lang="scss">
//root and body styles canT go in scoped
//so either put those in sep style tag above, and leave below scoped
//or just be clear donT use it

@font-face {
  font-family: "AmstelvarAlpha";
  //font-display: swap;
  src: url("./AmstelvarAlpha-VF.ttf");
}

:root {
  box-sizing: border-box;
  font-size: 10px;
  //--cardbackgroundcolor: #000;
  font-family: "AmstelvarAlpha", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", "Helvetica", Arial,
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

body {
  margin: 0;
  padding: 0;
}

.hidden {
  position: absolute;
  top: -9999px;
  left: -9999px;
  width: 1px;
  height: 1px;
  overflow: hidden;
  opacity: 0;
}

//root and body styles canT go in scoped
//so either put those in sep style tag above, and leave below scoped
//or just be clear donT use it

h1,
h2,
h3 {
  input {
    font: inherit;
    color: inherit;
    display: inherit;
    width: 100%;
    background: inherit;
    border: inherit;
    box-shadow: inherit;
  }
}

.baseballCard__wrapper {
  padding: 3.2rem;
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
  width: 32rem;
  //yes, hard height here because
  height: 44.8rem;
  background-color: var(--cardbackgroundcolor, #eee);
  color: var(--cardtextcolor, #000);
  // i really don't understand at all why wdth is not working
  font-variation-settings: "wght" var(--cardtextfontweight),
    "wdth" var(--cardtextfontwidth), "opsz" var(--cardtextfontoptsize);
}

.gridParent {
  display: grid;
  grid-template-columns: 2.4rem 1fr 1fr 1fr 1fr 2.4rem;
  grid-template-rows: 4.8rem 1fr 7.2rem;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  height: 100%;
}
.corner--top--left {
  grid-area: 1 / 1 / 2 / 2;
}
.masthead--center {
  grid-area: 1 / 2 / 2 / 6;
}
.corner--top--right {
  grid-area: 1 / 6 / 2 / 7;
}
.sidebar--left {
  grid-area: 2 / 1 / 3 / 2;
}
.image__container {
  grid-area: 2 / 2 / 3 / 6;
}
.sidebar--right {
  grid-area: 2 / 6 / 3 / 7;
}
.corner--bottom--left {
  grid-area: 3 / 1 / 4 / 2;
}
.footer--playerName {
  grid-area: 3 / 2 / 4 / 5;
}
.footer--playerPosition {
  grid-area: 3 / 5 / 4 / 6;
}
.footer--teamLogo {
  /*overlap*/
  grid-area: 2 / 5 / 3 / 6;
  text-align: right;
  position: relative;
}
.corner--bottom--right {
  grid-area: 3 / 6 / 4 / 7;
}
.svg--textureOverlay {
  grid-area: 1 / 1 / 4 / 7;
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
  text-align: right;
}
.footer--teamLogo {
  display: flex;
  justify-content: flex-end;
}
.image--teamLogo {
  // object-fit: cover;
  width: 4.8rem;
  border-radius: 50%;
  align-self: flex-end;
  justify-self: flex-end;
  z-index: 1;
}

.image--player {
  object-fit: cover;
  object-position: 0 50%;
  width: 100%;
  height: auto;
  max-height: 32rem;
  border: 3px solid var(--cardbordercolor, #000);
  border-radius: var(--cardbordercurve, 0);
  filter: #{"grayscale(var(--cardgrayscale, 0))"} brightness(
      var(--cardbrightness, 1)
    ) sepia(var(--cardsepia, 0));
}

.form--cardDesign {
  display: inline-block;
  vertical-align: top;
  width: 32rem;
  padding-left: 3.2rem;
}

fieldset {
  margin-bottom: 1.6rem;
  padding: 1rem 1rem 0 1rem;
}
legend {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", "Helvetica", Arial,
    sans-serif;
  //font-weight: bold;
  text-align: center;
  padding: 0 0.4rem;
  font-size: 1.6rem;
}
label {
  display: block;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", "Helvetica", Arial,
    sans-serif;
  font-weight: bold;
  margin-bottom: 1.6rem;

  input,
  select {
    display: block;
    font-family: inherit;
    font-size: 1.2rem;
    &:not([type="color"]) {
      width: 100%;
    }
  }
}

.row {
  display: flex;
  label {
    + label {
      margin-left: 1rem;
    }
  }
}
</style>
