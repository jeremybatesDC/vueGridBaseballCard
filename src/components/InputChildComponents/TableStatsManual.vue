<template>
  <div class="stats__wrapper--outer" @focusin="putCursorAtEnd">
    <form class="stats__form">
      <table class="stats__table">
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
                <input type="text" v-model="fields.field0" maxlength="9" />
              </label>
            </th>
            <th scope="col" data-col="3">
              <label>
                <input type="text" v-model="fields.field1" maxlength="9" />
              </label>
            </th>
            <th scope="col" data-col="4">
              <label>
                <input type="text" v-model="fields.field2" maxlength="9" />
              </label>
            </th>
            <th scope="col" data-col="5">
              <label>
                <input type="text" v-model="fields.field3" maxlength="9" />
              </label>
            </th>
            <th scope="col" data-col="6">
              <label>
                <input type="text" v-model="fields.field4" maxlength="9" />
              </label>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <!-- making first col a TH scope row -->
            <th scope="row" data-col="0">
              <input
                type="tel"
                inputmode="decimal"
                v-model="seasons.yr0.year"
                size="4"
                maxlength="4"
                data-col="0"
              />
            </th>
            <td data-col="1">
              <input
                type="tel"
                inputmode="decimal"
                v-model="seasons.yr0.homeCity"
                size="4"
                maxlength="4"
                data-col="1"
              />
            </td>
            <td>
              <input
                type="tel"
                inputmode="decimal"
                v-model="seasons.yr0.stats.stat0"
                size="5"
                maxlength="5"
                placeholder="0"
              />
            </td>

            <td>
              <input
                type="tel"
                inputmode="decimal"
                v-model="seasons.yr0.stats.stat1"
                size="5"
                maxlength="5"
                placeholder="0"
              />
            </td>
            <td>
              <input
                type="tel"
                inputmode="decimal"
                v-model="seasons.yr0.stats.stat2"
                size="5"
                maxlength="5"
                placeholder="0"
              />
            </td>
            <td>
              <input
                type="tel"
                inputmode="decimal"
                v-model="seasons.yr0.stats.stat3"
                size="5"
                maxlength="5"
                placeholder="0"
              />
            </td>
            <td>
              <input
                type="tel"
                inputmode="decimal"
                v-model="seasons.yr0.stats.stat4"
                size="5"
                maxlength="5"
                placeholder="0"
              />
            </td>
          </tr>
          <tr>
            <th scope="row" data-col="0">
              <input
                type="tel"
                inputmode="decimal"
                v-model="seasons.yr1.year"
                size="4"
                maxlength="4"
                data-col="0"
              />
            </th>
            <td data-col="1">
              <input
                type="tel"
                inputmode="decimal"
                v-model="seasons.yr1.homeCity"
                size="4"
                maxlength="4"
                data-col="1"
              />
            </td>
            <td>
              <input
                type="tel"
                inputmode="decimal"
                v-model="seasons.yr1.stats.stat0"
                size="5"
                maxlength="5"
                placeholder="0"
              />
            </td>

            <td>
              <input
                type="tel"
                inputmode="decimal"
                v-model="seasons.yr1.stats.stat1"
                size="5"
                maxlength="5"
                placeholder="0"
              />
            </td>
            <td>
              <input
                type="tel"
                inputmode="decimal"
                v-model="seasons.yr1.stats.stat2"
                size="5"
                maxlength="5"
                placeholder="0"
              />
            </td>
            <td>
              <input
                type="tel"
                inputmode="decimal"
                v-model="seasons.yr1.stats.stat3"
                size="5"
                maxlength="5"
                placeholder="0"
              />
            </td>
            <td>
              <input
                type="tel"
                inputmode="decimal"
                v-model="seasons.yr1.stats.stat4"
                size="5"
                maxlength="5"
                placeholder="0"
              />
            </td>
          </tr>
          <tr>
            <th scope="row" data-col="0">
              <input
                type="tel"
                inputmode="decimal"
                v-model="seasons.yr2.year"
                size="4"
                maxlength="4"
                data-col="0"
              />
            </th>
            <td data-col="1">
              <input
                type="tel"
                inputmode="decimal"
                v-model="seasons.yr2.homeCity"
                size="4"
                maxlength="4"
                data-col="1"
              />
            </td>
            <td>
              <input
                type="tel"
                inputmode="decimal"
                v-model="seasons.yr2.stats.stat0"
                size="5"
                maxlength="5"
                placeholder="0"
              />
            </td>

            <td>
              <input
                type="tel"
                inputmode="decimal"
                v-model="seasons.yr2.stats.stat1"
                size="5"
                maxlength="5"
                placeholder="0"
              />
            </td>
            <td>
              <input
                type="tel"
                inputmode="decimal"
                v-model="seasons.yr2.stats.stat2"
                size="5"
                maxlength="5"
                placeholder="0"
              />
            </td>
            <td>
              <input
                type="tel"
                inputmode="decimal"
                v-model="seasons.yr2.stats.stat3"
                size="5"
                maxlength="5"
                placeholder="0"
              />
            </td>
            <td>
              <input
                type="tel"
                inputmode="decimal"
                v-model="seasons.yr2.stats.stat4"
                size="5"
                maxlength="5"
                placeholder="0"
              />
            </td>
          </tr>
          <tr>
            <th scope="row" data-col="0">
              <input
                type="tel"
                inputmode="decimal"
                v-model="seasons.yr3.year"
                size="4"
                maxlength="4"
                data-col="0"
              />
            </th>
            <td data-col="1">
              <input
                type="tel"
                inputmode="decimal"
                v-model="seasons.yr3.homeCity"
                size="4"
                maxlength="4"
                data-col="1"
              />
            </td>
            <td>
              <input
                type="tel"
                inputmode="decimal"
                v-model="seasons.yr3.stats.stat0"
                size="5"
                maxlength="5"
                placeholder="0"
              />
            </td>

            <td>
              <input
                type="tel"
                inputmode="decimal"
                v-model="seasons.yr3.stats.stat1"
                size="5"
                maxlength="5"
                placeholder="0"
              />
            </td>
            <td>
              <input
                type="tel"
                inputmode="decimal"
                v-model="seasons.yr3.stats.stat2"
                size="5"
                maxlength="5"
                placeholder="0"
              />
            </td>
            <td>
              <input
                type="tel"
                inputmode="decimal"
                v-model="seasons.yr3.stats.stat3"
                size="5"
                maxlength="5"
                placeholder="0"
              />
            </td>
            <td>
              <input
                type="tel"
                inputmode="decimal"
                v-model="seasons.yr3.stats.stat4"
                size="5"
                maxlength="5"
                placeholder="0"
              />
            </td>
          </tr>
          <tr>
            <th scope="row" data-col="0">
              <input
                type="tel"
                inputmode="decimal"
                v-model="seasons.yr4.year"
                size="4"
                maxlength="4"
                data-col="0"
              />
            </th>
            <td data-col="1">
              <input
                type="tel"
                inputmode="decimal"
                v-model="seasons.yr4.homeCity"
                size="4"
                maxlength="4"
                data-col="1"
              />
            </td>
            <td>
              <input
                type="tel"
                inputmode="decimal"
                v-model="seasons.yr4.stats.stat0"
                size="5"
                maxlength="5"
                placeholder="0"
              />
            </td>

            <td>
              <input
                type="tel"
                inputmode="decimal"
                v-model="seasons.yr4.stats.stat1"
                size="5"
                maxlength="5"
                placeholder="0"
              />
            </td>
            <td>
              <input
                type="tel"
                inputmode="decimal"
                v-model="seasons.yr4.stats.stat2"
                size="5"
                maxlength="5"
                placeholder="0"
              />
            </td>
            <td>
              <input
                type="tel"
                inputmode="decimal"
                v-model="seasons.yr4.stats.stat3"
                size="5"
                maxlength="5"
                placeholder="0"
              />
            </td>
            <td>
              <input
                type="tel"
                inputmode="decimal"
                v-model="seasons.yr4.stats.stat4"
                size="5"
                maxlength="5"
                placeholder="0"
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
                sumNumericCol("stat0")
              }}</output>
            </td>
            <td scope="col">
              <output class="tfoot__output--totals">{{
                sumNumericCol("stat1")
              }}</output>
            </td>
            <td scope="col">
              <output class="tfoot__output--totals">{{
                sumNumericCol("stat2")
              }}</output>
            </td>
            <td scope="col">
              <output class="tfoot__output--totals">{{
                sumNumericCol("stat3")
              }}</output>
            </td>
            <td scope="col">
              <output class="tfoot__output--totals">{{
                sumNumericCol("stat4")
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

function putCursorAtEnd(event) {
  event.target.setSelectionRange(99, 99);
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
        field0: "Races",
        field1: "Miles",
        field2: "Speed",
        field3: "Falls",
        field4: "Beers",
      },
      seasons: {
        yr0: {
          year: "2015",
          homeCity: "DC",
          stats: {
            stat0: 11,
            stat1: 905,
            stat2: 29,
            stat3: 12,
            stat4: 112,
          },
        },
        yr1: {
          year: "2016",
          homeCity: "NYC",
          stats: {
            stat0: 25,
            stat1: 1005,
            stat2: 28.5,
            stat3: 6,
            stat4: 118,
          },
        },
        yr2: {
          year: "2017",
          homeCity: "SF",
          stats: {
            stat0: 1,
            stat1: 4,
            stat2: 8.5,
            stat3: 1,
            stat4: 398,
          },
        },
        yr3: {
          year: "2018",
          homeCity: "SF",
          stats: {
            stat0: 102,
            stat1: 9876,
            stat2: 42,
            stat3: 11,
            stat4: 77,
          },
        },
        yr4: {
          year: "2019",
          homeCity: "LA",
          stats: {
            stat0: 29,
            stat1: 3201,
            stat2: 101,
            stat3: 0,
            stat4: 27,
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
      for (let i = 0; i < Object.keys(this.seasons).length; i++) {
        let yrString = `yr${i}`;
        colNumsArray.push(+this.seasons[yrString].stats[statCol]);
      }
      return colNumsArray.reduce(rdcrSum);
    },
  },
};
</script>

<style lang="scss">
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

.stats__form {
  width: 100%;
  height: var(--tablewrapheight);
}

.stats__table {
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
      text-transform: uppercase;
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
  input {
    &[type="tel"] {
      &::placeholder {
        color: var(--calcColor);
      }
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
