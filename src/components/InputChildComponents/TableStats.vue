<template>
  <div class="stats__wrapper--outer">
    <form class="stats__form" @focusin="putCursorAtEnd">
      <table class="">
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
                <textarea
                  wrap="hard"
                  rows="2"
                  spellcheck="false"
                  :value="value"
                ></textarea>
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="stats-table__tbody__tr"
            v-for="(season, name, indexOuter) in seasons"
            :key="season"
            :data-row="indexOuter"
          >
            <!-- i really don't want to do a loop in a loop, do I? Space/time complexity wise, it's better to loop twice -->
            <!-- this one doesnT expect index until 3rd argument. Is that because itS nested? Maybe itS the kind of object -->

            <!-- making first col a TH scope row -->
            <th
              scope="row"
              class="stats-table__tbody__th"
              :data-col="0"
              :data-row="indexOuter"
            >
              <input
                class="stats-table__tbody__input"
                type="tel"
                v-model="season.year"
                size="4"
                maxlength="4"
                :data-column-name="name"
                :data-col="0"
                :data-row="indexOuter"
              />
            </th>
            <td
              class="stats-table__tbody__td"
              :data-col="1"
              :data-row="indexOuter"
            >
              <input
                class="stats-table__tbody__input"
                type="tel"
                v-model="season.homeCity"
                size="4"
                maxlength="4"
                :data-column-name="name"
                :data-col="1"
                :data-row="indexOuter"
              />
            </td>

            <td
              class="stats-table__tbody__td"
              v-for="(theStat, indexInner) in season.numericStats"
              :key="theStat.value"
            >
              <!-- type number continues to be annoying AF. Trying to move down a cell with an arrow key shouldn't accidentally alter the stats -->

              <!--     v-model="seasons[index].numericStats[name]" -->
              <!--  :value="theStat" -->

              <input
                class="stats-table__tbody__input"
                type="tel"
                inputmode="decimal"
                v-model="season.numericStats[indexInner]"
                size="5"
                maxlength="5"
              />
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th scope="row" :data-col="0">TOT</th>
            <td :data-col="1"></td>
            <!-- a bit too imperative but it is good that we are not doing a v-if in a v-for-->
            <td
              v-for="x in 5"
              :key="x"
              scope="col"
              :data-total-for-column-index="x + 1"
            >
              <label>
                <output
                  class="tfoot__output--totals"
                  :data-total-for-column-index="x + 1"
                  >{{ sumCol2() }}</output
                >
              </label>
            </td>
          </tr>
        </tfoot>
      </table>
    </form>
  </div>
</template>
<script>
// THIS COMPONENT SHOULD RECEIVE STATS AS PROPS
// SLOTS MAY ALSO HELP HERE
import defaultStats from "/json/default-stats.json";

// can use COMPUTED to "filter" or "mask" out unwanted valuesbundleRenderer.renderToStream https://v3.https://www.vuemastery.com/conferences/vueconf-us-2019/building-fast-and-semantic-input-masks-in-vuejs/

//let inputsCol_2 = [... ];

// data-col="2"

const col2values = [1, 2, 3, 4];

function putCursorAtEnd(event) {
  event.target.setSelectionRange(99, 99);
  console.log(event.target, "place cursor");
}

export default {
  setup: function () {
    return { putCursorAtEnd };
  },
  data: function () {
    return {
      defaultStats,
      seasons: [
        {
          year: "2015",
          homeCity: "DC",
          numericStats: {
            racesCycled: 55,
            milesCycled: 905,
            avgSpeed: 29,
            falls: 12,
            beersTasted: 112,
          },
        },
        {
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
        {
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
        {
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
        {
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
      ],
    };
  },
  methods: {
    sumCol2() {
      const reducer = (accumulator, currentValue) => {
        console.log(this.seasons[0].numericStats.racesCycled);
        return parseFloat(accumulator) + parseFloat(currentValue);
      };

      // THIS REFERENCE RIGHT IS STATIC. NOT GETTING RECOMPUTED
      //let col2numbers = Object.values(this.seasons[0].numericStats);
      let argh = this.seasons[0].numericStats.racesCycled;
      let argh2 = this.seasons[1].numericStats.racesCycled;
      let col2numbers = [argh, argh2];

      console.log(argh, argh2);

      return col2numbers.reduce(reducer);
    },
  },
  computed: {},
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
  padding: 0 1.6rem;
  //padding-right: 1.6rem;
}

form {
  width: 100%;
}

table {
  width: 100%;
  max-width: calc(100vw - 3.2rem);
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
    height: 3.2rem;
    vertical-align: middle;
    span {
      margin-left: 3.2rem;
      //height: 100%;
      position: relative;
    }
  }
}
// some ths are in tbody and tfoot
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
      font-variation-settings: "wght" 300, "wdth" 25, "opsz" 35, "GRAD" 1,
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

      // safari mobile seems to struggle with first-line
    }
  }
  &:first-child,
  &:nth-child(2) {
    span {
      vertical-align: top;
      margin-left: -1.6rem;
      textarea {
        text-indent: -0.4rem;
        padding-left: 2rem;
      }
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
