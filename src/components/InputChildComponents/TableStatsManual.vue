<template>
  <div class="stats__wrapper--outer" @focusin="putCursorAtEnd">
    <!--  -->
    <form>
      <table class="">
        <!--<caption>Career Stats</caption>-->
        <thead>
          <tr>
            <th scope="col" data-col="0">
              <label>
                <input type="text" v-model="fields.year" maxlength="9" />
              </label>
            </th>
            <th scope="col" data-col="1">
              <label>
                <input type="text" v-model="fields.homeCity" maxlength="9" />
              </label>
            </th>
            <th scope="col" data-col="2">
              <label>
                <input type="text" v-model="fields.racesCycled" maxlength="9" />
              </label>
            </th>
            <th scope="col" data-col="3">
              <label>
                <input type="text" v-model="fields.milesCycled" maxlength="9" />
              </label>
            </th>
            <th scope="col" data-col="4">
              <label>
                <input type="text" v-model="fields.avgSpeed" maxlength="9" />
              </label>
            </th>
            <th scope="col" data-col="5">
              <label>
                <input type="text" v-model="fields.falls" maxlength="9" />
              </label>
            </th>
            <th scope="col" data-col="6">
              <label>
                <input type="text" v-model="fields.beersTasted" maxlength="9" />
              </label>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="stats-table__tbody__tr">
            <!-- i really don't want to do a loop in a loop, do I? Space/time complexity wise, it's better to loop twice -->
            <!-- this one doesnT expect index until 3rd argument. Is that because itS nested? Maybe itS the kind of object -->

            <!-- making first col a TH scope row -->
            <th
              scope="row"
              class="stats-table__tbody__th"
              data-col="0"
              data-row="0"
            >
              <input
                class="stats-table__tbody__input"
                type="tel"
                inputmode="decimal"
                v-model="seasons.yr1.year"
                size="4"
                maxlength="4"
                data-col="0"
                data-row="0"
              />
            </th>
            <td class="stats-table__tbody__td" data-col="1" data-row="0">
              <input
                class="stats-table__tbody__input"
                type="tel"
                inputmode="decimal"
                v-model="seasons.yr1.homeCity"
                size="4"
                maxlength="4"
                data-col="1"
                data-row="0"
              />
            </td>

            <!-- type number continues to be annoying AF. Trying to move down a cell with an arrow key shouldn't accidentally alter the stats -->

            <!--v-model="season.numericStats[indexInner]"-->
            <!-- :value="theStat" -->
            <td class="stats-table__tbody__td">
              <input
                class="stats-table__tbody__input"
                type="tel"
                inputmode="decimal"
                v-model="seasons.yr1.numericStats.racesCycled"
                size="5"
                maxlength="5"
              />
            </td>

            <td class="stats-table__tbody__td">
              <input
                class="stats-table__tbody__input"
                type="tel"
                inputmode="decimal"
                v-model="seasons.yr1.numericStats.milesCycled"
                size="5"
                maxlength="5"
              />
            </td>
            <td class="stats-table__tbody__td">
              <input
                class="stats-table__tbody__input"
                type="tel"
                inputmode="decimal"
                v-model="seasons.yr1.numericStats.avgSpeed"
                size="5"
                maxlength="5"
              />
            </td>
            <td class="stats-table__tbody__td">
              <input
                class="stats-table__tbody__input"
                type="tel"
                inputmode="decimal"
                v-model="seasons.yr1.numericStats.falls"
                size="5"
                maxlength="5"
              />
            </td>
            <td class="stats-table__tbody__td">
              <input
                class="stats-table__tbody__input"
                type="tel"
                inputmode="decimal"
                v-model="seasons.yr1.numericStats.beersTasted"
                size="5"
                maxlength="5"
              />
            </td>
          </tr>
          <tr class="stats-table__tbody__tr">
            <th
              scope="row"
              class="stats-table__tbody__th"
              data-col="0"
              data-row="0"
            >
              <input
                class="stats-table__tbody__input"
                type="tel"
                inputmode="decimal"
                v-model="seasons.yr2.year"
                size="4"
                maxlength="4"
                data-col="0"
                data-row="0"
              />
            </th>
            <td class="stats-table__tbody__td" data-col="1" data-row="0">
              <input
                class="stats-table__tbody__input"
                type="tel"
                inputmode="decimal"
                v-model="seasons.yr2.homeCity"
                size="4"
                maxlength="4"
                data-col="1"
                data-row="0"
              />
            </td>
            <td class="stats-table__tbody__td">
              <input
                class="stats-table__tbody__input"
                type="tel"
                inputmode="decimal"
                v-model="seasons.yr2.numericStats.racesCycled"
                size="5"
                maxlength="5"
              />
            </td>

            <td class="stats-table__tbody__td">
              <input
                class="stats-table__tbody__input"
                type="tel"
                inputmode="decimal"
                v-model="seasons.yr2.numericStats.milesCycled"
                size="5"
                maxlength="5"
              />
            </td>
            <td class="stats-table__tbody__td">
              <input
                class="stats-table__tbody__input"
                type="tel"
                inputmode="decimal"
                v-model="seasons.yr2.numericStats.avgSpeed"
                size="5"
                maxlength="5"
              />
            </td>
            <td class="stats-table__tbody__td">
              <input
                class="stats-table__tbody__input"
                type="tel"
                inputmode="decimal"
                v-model="seasons.yr2.numericStats.falls"
                size="5"
                maxlength="5"
              />
            </td>
            <td class="stats-table__tbody__td">
              <input
                class="stats-table__tbody__input"
                type="tel"
                inputmode="decimal"
                v-model="seasons.yr2.numericStats.beersTasted"
                size="5"
                maxlength="5"
              />
            </td>
          </tr>
          <tr class="stats-table__tbody__tr">
            <th
              scope="row"
              class="stats-table__tbody__th"
              data-col="0"
              data-row="0"
            >
              <input
                class="stats-table__tbody__input"
                type="tel"
                inputmode="decimal"
                v-model="seasons.yr3.year"
                size="4"
                maxlength="4"
                data-col="0"
                data-row="0"
              />
            </th>
            <td class="stats-table__tbody__td" data-col="1" data-row="0">
              <input
                class="stats-table__tbody__input"
                type="tel"
                inputmode="decimal"
                v-model="seasons.yr3.homeCity"
                size="4"
                maxlength="4"
                data-col="1"
                data-row="0"
              />
            </td>
            <td class="stats-table__tbody__td">
              <input
                class="stats-table__tbody__input"
                type="tel"
                inputmode="decimal"
                v-model="seasons.yr3.numericStats.racesCycled"
                size="5"
                maxlength="5"
              />
            </td>

            <td class="stats-table__tbody__td">
              <input
                class="stats-table__tbody__input"
                type="tel"
                inputmode="decimal"
                v-model="seasons.yr3.numericStats.milesCycled"
                size="5"
                maxlength="5"
              />
            </td>
            <td class="stats-table__tbody__td">
              <input
                class="stats-table__tbody__input"
                type="tel"
                inputmode="decimal"
                v-model="seasons.yr3.numericStats.avgSpeed"
                size="5"
                maxlength="5"
              />
            </td>
            <td class="stats-table__tbody__td">
              <input
                class="stats-table__tbody__input"
                type="tel"
                inputmode="decimal"
                v-model="seasons.yr3.numericStats.falls"
                size="5"
                maxlength="5"
              />
            </td>
            <td class="stats-table__tbody__td">
              <input
                class="stats-table__tbody__input"
                type="tel"
                inputmode="decimal"
                v-model="seasons.yr3.numericStats.beersTasted"
                size="5"
                maxlength="5"
              />
            </td>
          </tr>
          <tr class="stats-table__tbody__tr">
            <th
              scope="row"
              class="stats-table__tbody__th"
              data-col="0"
              data-row="0"
            >
              <input
                class="stats-table__tbody__input"
                type="tel"
                inputmode="decimal"
                v-model="seasons.yr4.year"
                size="4"
                maxlength="4"
                data-col="0"
                data-row="0"
              />
            </th>
            <td class="stats-table__tbody__td" data-col="1" data-row="0">
              <input
                class="stats-table__tbody__input"
                type="tel"
                inputmode="decimal"
                v-model="seasons.yr4.homeCity"
                size="4"
                maxlength="4"
                data-col="1"
                data-row="0"
              />
            </td>
            <td class="stats-table__tbody__td">
              <input
                class="stats-table__tbody__input"
                type="tel"
                inputmode="decimal"
                v-model="seasons.yr4.numericStats.racesCycled"
                size="5"
                maxlength="5"
              />
            </td>

            <td class="stats-table__tbody__td">
              <input
                class="stats-table__tbody__input"
                type="tel"
                inputmode="decimal"
                v-model="seasons.yr4.numericStats.milesCycled"
                size="5"
                maxlength="5"
              />
            </td>
            <td class="stats-table__tbody__td">
              <input
                class="stats-table__tbody__input"
                type="tel"
                inputmode="decimal"
                v-model="seasons.yr4.numericStats.avgSpeed"
                size="5"
                maxlength="5"
              />
            </td>
            <td class="stats-table__tbody__td">
              <input
                class="stats-table__tbody__input"
                type="tel"
                inputmode="decimal"
                v-model="seasons.yr4.numericStats.falls"
                size="5"
                maxlength="5"
              />
            </td>
            <td class="stats-table__tbody__td">
              <input
                class="stats-table__tbody__input"
                type="tel"
                inputmode="decimal"
                v-model="seasons.yr4.numericStats.beersTasted"
                size="5"
                maxlength="5"
              />
            </td>
          </tr>
          <tr class="stats-table__tbody__tr">
            <th
              scope="row"
              class="stats-table__tbody__th"
              data-col="0"
              data-row="0"
            >
              <input
                class="stats-table__tbody__input"
                type="tel"
                inputmode="decimal"
                v-model="seasons.yr5.year"
                size="4"
                maxlength="4"
                data-col="0"
                data-row="0"
              />
            </th>
            <td class="stats-table__tbody__td" data-col="1" data-row="0">
              <input
                class="stats-table__tbody__input"
                type="tel"
                inputmode="decimal"
                v-model="seasons.yr5.homeCity"
                size="4"
                maxlength="4"
                data-col="1"
                data-row="0"
              />
            </td>
            <td class="stats-table__tbody__td">
              <input
                class="stats-table__tbody__input"
                type="tel"
                inputmode="decimal"
                v-model="seasons.yr5.numericStats.racesCycled"
                size="5"
                maxlength="5"
              />
            </td>

            <td class="stats-table__tbody__td">
              <input
                class="stats-table__tbody__input"
                type="tel"
                inputmode="decimal"
                v-model="seasons.yr5.numericStats.milesCycled"
                size="5"
                maxlength="5"
              />
            </td>
            <td class="stats-table__tbody__td">
              <input
                class="stats-table__tbody__input"
                type="tel"
                inputmode="decimal"
                v-model="seasons.yr5.numericStats.avgSpeed"
                size="5"
                maxlength="5"
              />
            </td>
            <td class="stats-table__tbody__td">
              <input
                class="stats-table__tbody__input"
                type="tel"
                inputmode="decimal"
                v-model="seasons.yr5.numericStats.falls"
                size="5"
                maxlength="5"
              />
            </td>
            <td class="stats-table__tbody__td">
              <input
                class="stats-table__tbody__input"
                type="tel"
                inputmode="decimal"
                v-model="seasons.yr5.numericStats.beersTasted"
                size="5"
                maxlength="5"
              />
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th scope="row" data-col="0" colspan="2">TOTALS</th>
            <!--<td data-col="1"></td>-->
            <!-- a bit too imperative but it is good that we are not doing a v-if in a v-for-->
            <td scope="col">
              <output class="tfoot__output--totals">{{
                sumNumericCol("racesCycled")
              }}</output>
            </td>
            <td scope="col">
              <output class="tfoot__output--totals">{{
                sumNumericCol("milesCycled")
              }}</output>
            </td>
            <td scope="col">
              <output class="tfoot__output--totals">{{
                sumNumericCol("avgSpeed")
              }}</output>
            </td>
            <td scope="col">
              <output class="tfoot__output--totals">{{
                sumNumericCol("falls")
              }}</output>
            </td>
            <td scope="col">
              <output class="tfoot__output--totals">{{
                sumNumericCol("beersTasted")
              }}</output>
            </td>
          </tr>
        </tfoot>
      </table>
    </form>
  </div>
</template>
<script>
import defaultStats from "/json/default-stats.json";

// can use COMPUTED to "filter" or "mask" out unwanted valuesbundleRenderer.renderToStream https://v3.https://www.vuemastery.com/conferences/vueconf-us-2019/building-fast-and-semantic-input-masks-in-vuejs/

function putCursorAtEnd(event) {
  event.target.setSelectionRange(99, 99);
  console.log(event.target, "place cursor");
}

export default {
  setup() {
    return { putCursorAtEnd };
  },
  data() {
    return {
      defaultStats,
      fields: {
        year: "Year",
        homeCity: "City",
        racesCycled: "Races",
        milesCycled: "Miles",
        avgSpeed: "Speed",
        falls: "Falls",
        beersTasted: "Beers",
      },
      seasons: {
        yr1: {
          year: "2015",
          homeCity: "DC",
          numericStats: {
            racesCycled: 11,
            milesCycled: 905,
            avgSpeed: 29,
            falls: 12,
            beersTasted: 112,
          },
        },
        yr2: {
          year: "2016",
          homeCity: "NYC",
          numericStats: {
            racesCycled: 25,
            milesCycled: 1005,
            avgSpeed: 28.5,
            falls: 6,
            beersTasted: 118,
          },
        },
        yr3: {
          year: "2017",
          homeCity: "SF",
          numericStats: {
            racesCycled: 1,
            milesCycled: 4,
            avgSpeed: 8.5,
            falls: 1,
            beersTasted: 398,
          },
        },
        yr4: {
          year: "2018",
          homeCity: "SF",
          numericStats: {
            racesCycled: 102,
            milesCycled: 9876,
            avgSpeed: 42,
            falls: 11,
            beersTasted: 77,
          },
        },
        yr5: {
          year: "2019",
          homeCity: "LA",
          numericStats: {
            racesCycled: 29,
            milesCycled: 3201,
            avgSpeed: 101,
            falls: 0,
            beersTasted: 27,
          },
        },
      },
    };
  },
  // using a method instead of computerd MIGHT allow me to pass in the column-number...
  methods: {
    sumNumericCol(statCol) {
      const rdcrSum = (acum, curVal) => {
        return parseFloat(acum) + parseFloat(curVal);
      };
      let colNumsArray = [];
      for (let i = 0; i < 5; i++) {
        let yrString = `yr${i + 1}`;
        colNumsArray.push(this.seasons[yrString].numericStats[statCol]);
      }
      return colNumsArray.reduce(rdcrSum);
    },
  },
  computed: {},
};
</script>

<style scoped lang="scss">
.stats__wrapper--outer {
  --tablewrapheight: 100%;
  --tableheight: 100%;
  @media (min-width: 400px) {
    --tablewrapheight: calc(100% - 6.4rem);
    --tableheight: 100%;
  }
}

thead,
tbody {
  [data-col="0"] {
    width: 4ch;
  }
  [data-col="1"] {
    width: 4ch;
    white-space: nowrap;
    overflow: visible;
  }
}

.stats__wrapper--outer {
  display: flex;
  flex-grow: 1;
  align-items: center;
  // this needs to be put in a variable duh
  //width: 30rem;
  min-width: 30rem;
  padding: 0 1.6rem;
  //padding-right: 1.6rem;
}

form {
  width: 100%;
  height: var(--tablewrapheight);
}

table {
  width: 100%;
  max-width: calc(100vw - 3.2rem);
  height: var(--tableheight);
  margin: 0 auto;
  font-size: 1.6rem;
  // i just learned that line-height of exactly 1 gets rejected by brower on inputs and then falls back on a larger value of normal (1.2 i think)
  // so, a value of 1.1 actually results in a shorter line height than 1
  line-height: 1.1;
  font-family: inherit;
  font-variant-numeric: lining-nums tabular-nums;
  text-align: right;

  // need to address making this fit on portrait
  //overflow: hidden;
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
    height: 2.4rem;
    padding: 0;
    vertical-align: middle;
    label {
      height: 2.4rem;
      position: relative;
    }
    input {
      height: 2.4rem;
      //max-width: 4.5rem;
      text-align: right;
    }
    &:first-child,
    &:nth-child(2) {
      input {
        text-align: left;
      }
    }
  }
}
// some ths are in tbody and tfoot
th {
  //padding: 3.2rem 0 0 0;

  //text-align: right;

  label {
    display: flex;

    input[type="text"] {
      font-variation-settings: "wght" 300, "wdth" 25, "opsz" 35, "GRAD" 1,
        "slnt" 0, "YTLC" 500, "YTUC" 500, "YTFI" 500;
      line-height: 1.1;
      display: flex;

      // removing this absolute positioinig has bad effects on iOS (didn't see in chrome dev tools)
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      //min-width: 4.4rem;
      // might need min height to prevent cutoff after editing
      //min-height: 2.4rem;
      //white-space: pre-wrap;
      //word-break: break-word;
      text-transform: uppercase;
      //transform: rotate(-40deg);

      //text-indent: -1rem;
      //padding-left: 1rem;

      // safari mobile seems to struggle with first-line
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
</style>
