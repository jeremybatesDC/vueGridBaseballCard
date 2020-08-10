<template>
  <div>
    <fieldset>
      <legend>Layout</legend>
      <label>
        <input type="radio" v-model="cardLayout" value="1-1" />
        <span>1-1</span>
      </label>
      <label>
        <input type="radio" v-model="cardLayout" value="0-2" />
        <span>0-2</span>
      </label>
      <label>
        <input type="radio" v-model="cardLayout" value="2-0" />
        <span>2-0</span>
      </label>
    </fieldset>

    <div class="card__container--front">
      <div class="grid__parentElem">
        <!-- <div class="gta--fullSize">image Container</div> -->
        <div class="row1col1 gta">row1col1</div>
        <!-- if a min-content grid cell is empty it appears to indeed correctly not appear -->
        <div class="row1col2 gta"></div>
        <div class="row2col1 gta"></div>
        <div class="row2col2 gta"></div>
        <div class="row3colOnly gta">row3colOnly</div>
        <div class="row4col1 gta"></div>
        <div class="row4col2 gta"></div>
        <div class="row5col1 gta">row5col1</div>
        <div class="row5col2 gta">row5col2</div>
      </div>
    </div>

    <!-- revised grid -->
    <div class="grid__TEST">
      <div v-if="cardLayout != '0-2'">should show top here unless layout is 0-2</div>
      <div v-if="cardLayout != '2-0'">should show bottom here unless layout is 2-0</div>
    </div>

    <!-- end revised grid -->
  </div>
</template>


<style scoped lang="scss">
.card__container--front {
  width: 36rem;
  //yes, hard height here because
  height: 50.4rem;
  margin: 0 auto;
  outline: 1.6rem solid rebeccapurple;
}
.grid__parentElem {
  grid-template-areas:
    "row1col1 row1col2"
    "row2col1 row2col2"
    "row3colOnly row3colOnly"
    "row4col1 row4col2"
    "row5col1 row5col2";
  display: grid;
  /*  is it better to use flex within a row here to more easily adapt to an unknown number of children?*/
  grid-template-columns: auto min-content;
  grid-template-rows: min-content min-content auto min-content min-content;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  height: 100%;
  margin-bottom: var(--touch-target-spacing);
}

.gta {
  &:not(.row3colOnly) {
    background-color: blue;
  }
  &:empty {
    //display: none;
  }
  &--fullSize {
    grid-column-start: 1;
    grid-column-end: span 5;
    grid-row-start: 1;
    grid-row-end: span 5;
  }
}

.row1col2 {
  background-color: red;
  width: min-content;
}

.row3colOnly {
  grid-area: row3colOnly;
}

.grid__TEST {
  display: grid;
  margin-bottom: var(--touch-target-spacing);
}
</style>


<script>
import defaultSettings from "/json/default-settings.json";

export default {
  data: function () {
    return {
      cardLayout: defaultSettings.cardLayout,
    };
  },
};
</script>