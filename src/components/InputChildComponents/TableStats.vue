<template>
  <div class="fui__wrap stats__wrapper--outer">
    <table class="fui__mid">
      <!--<caption>Career Stats</caption>-->
      <thead>
        <tr>
          <th
            v-for="(value, name, index) in defaultStats.fields"
            :key="value"
            scope="col"
            :data-col="index"
          >
            <span>
              <textarea wrap="hard" rows="2" spellcheck="false" :value="value"></textarea>
            </span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="stats-table__tbody__tr"
          v-for="(season, index) in defaultStats.seasons"
          :key="season"
          :data-row="index"
        >
          <!-- i really don't want to do a loop in a loop, do I? Space/time complexity wise, it's better to loop twice -->
          <!-- this one doesnT expect index until 3rd argument. Is that because itS nested? Maybe itS the kind of object -->

          <!-- making first col a TH scope row -->
          <th scope="row" class="stats-table__tbody__th" :data-col="0" :data-row="index">
            <input
              class="stats-table__tbody__input fui__formElem"
              type="tel"
              :value="season.year"
              size="4"
              maxlength="4"
              :data-column-name="name"
              :data-col="0"
              :data-row="index"
            />
          </th>
          <td class="stats-table__tbody__td" :data-col="1" :data-row="index">
            <input
              class="stats-table__tbody__input fui__formElem"
              type="tel"
              :value="season.homeCity"
              size="4"
              maxlength="4"
              :data-column-name="name"
              :data-col="1"
              :data-row="index"
            />
          </td>

          <td
            class="stats-table__tbody__td"
            v-for="(value, name, index) in season.numericStats"
            :key="value"
            :data-column-name="name"
            :data-col="index + 2"
            :data-row="index"
          >
            <input
              class="stats-table__tbody__input fui__formElem"
              type="tel"
              :value="value"
              size="5"
              maxlength="5"
              :data-column-name="name"
              :data-col="index + 2"
              :data-row="index"
            />
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th scope="row" :data-col="0">TOT</th>
          <td :data-col="1"></td>
          <!-- a bit too imperative but it is good that we are not doing a v-if in a v-for-->
          <td v-for="x in 5" :key="x" scope="col" :data-total-for-column-index="x + 1">
            <label>
              <output class="tfoot__output--totals" :data-total-for-column-index="x + 1">SUM</output>
            </label>
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>
<script>
// THIS COMPONENT SHOULD RECEIVE STATS AS PROPS
// SLOTS MAY ALSO HELP HERE
import defaultStats from "/json/default-stats.json";

// can use COMPUTED to "filter" or "mask" out unwanted valuesbundleRenderer.renderToStreamhttps://v3.https://www.vuemastery.com/conferences/vueconf-us-2019/building-fast-and-semantic-input-masks-in-vuejs/

export default {
  data: function () {
    return {
      defaultStats,
    };
  },
};
</script>

<style scoped lang="scss">
.stats__wrapper--outer {
  display: flex;
  flex-grow: 1;
  align-items: center;
  // this needs to be put in a variable duh
  //width: 30rem;
  min-width: 30rem;
  //padding-right: 1.6rem;
}

table {
  width: 100%;
  max-width: calc(100vw - 3.2rem);
  margin: 0 auto;
  font-size: 1.6rem;
  line-height: 1;
  font-family: inherit;
  font-variant-numeric: lining-nums tabular-nums;
  text-align: right;

  // need to address making this fit on portrait
  //overflow: hidden;
  &:focus-within {
    input[type="tel"],
    input[type="text"],
    textarea {
      font-size: 1.8rem;
    }
    th {
      span {
        //transform: none;
        textarea {
          //position: initial;
          color: #fff;
        }
      }
    }
  }
}
caption {
  //background: rgba(#9c2c1a, 0.25);
  text-align: left;
  padding: 0.5rem;
  // learned something new
  //caption-side: bottom;
}
thead {
  background: rgba(0, 0, 0, 0.05);
  //box-shadow: 0 1px #000;
  th {
    position: relative;
    height: 3.2rem;
    span {
      margin-left: 3.2rem;
      //height: inherit;
      //position: relative;
    }
  }
}
th {
  //padding: 3.2rem 0 0 0;

  //text-align: right;

  span {
    display: flex;
    //padding-left: 1rem;
    transform: rotate(-40deg);
    //transform-origin: 0 0;
    //margin-top: -2.4rem;
    //margin-left: 1rem;
    //margin-right: 1rem;
    textarea {
      font-variation-settings: "wght" 175, "wdth" 25, "opsz" 35, "GRAD" 1,
        "slnt" 0, "YTLC" 500, "YTUC" 500, "YTFI" 500;
      line-height: 0.65;
      display: flex;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      //height: 100%;
      //min-width: 0.4rem;
      min-width: 4.4rem;
      white-space: pre-wrap;
      word-break: break-word;
      //text-align: left;
      text-transform: uppercase;
      text-indent: -1rem;
      padding-left: 1rem;
      //z-index: 1;

      // safari mobile seems to struggle with first-line
      // &::first-line {
      //   color: red;
      // }
    }
  }
  &:first-child,
  &:nth-child(2) {
    span {
      margin-left: 0;
    }
  }
}
tbody {
  //box-shadow: 0 1px #000;
  font-variation-settings: "wght" 100, "wdth" 25, "opsz" 35, "GRAD" 0.5,
    "slnt" 0, "XTRA" 500, "YTLC" 500, "YTUC" 500, "YTFI" 500;
  background: rgba(255, 255, 255, 0.1);

  td,
  th {
    padding: 0;
    box-shadow: 0 1px rgba(0, 0, 0, 0.25);
    //width: 0.1px;
    //max-width: 0.1px;
    white-space: nowrap;
    &:first-child,
    &:nth-child(2) {
      text-align: left;

      input {
        text-align: left;
      }
    }

    input {
      //display: block;
      padding: 0;
      text-align: right;
    }
  }
}
tfoot {
  font-variation-settings: "wght" 200, "wdth" 25, "opsz" 30, "GRAD" 1, "slnt" 0,
    "YTLC" 500, "YTUC" 500, "YTFI" 500;
  background: rgba(0, 0, 0, 0.05);
  //box-shadow: 0 1px #000, 1px 0 #000, -1px 0 #000;
  td,
  th {
    padding: 0.1rem 0 0.1rem 0.1rem;
    &:first-child {
      text-align: left;
    }
  }
  //box-shadow: 0 1px #000;
}

[data-col="1"] {
  width: 3ch;
  white-space: nowrap;
  overflow: visible;
}
</style>
