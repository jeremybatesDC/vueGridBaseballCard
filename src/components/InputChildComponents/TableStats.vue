<template>
  <div class="fui__wrap stats__wrapper--outer">
    <table class="fui__mid">
      <!--<caption>Career Stats</caption>-->
      <thead>
        <tr>
          <th v-for="field in defaultStats.fields" :key="field" scope="col">
            <span>
              <textarea
                wrap="hard"
                rows="2"
                spellcheck="false"
                :value="field"
              ></textarea>
            </span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="stats-table__tbody__tr"
          v-for="year in defaultStats.years"
          :key="year"
        >
          <!-- i really don't want to do a loop in a loop, do I? Space/time complexity wise, it's better to loop twice -->
          <td class="stats-table__tbody__td" v-for="thing in year" :key="thing">
            <input
              class="stats-table__tbody__input fui__formElem"
              type="tel"
              :value="thing"
              size="5"
              maxlength="5"
            />
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td>CAREER</td>
          <td></td>
          <td>
            <output class="tfoot__output--totals">SUM</output>
          </td>
          <td><output class="tfoot__output--totals">SUM</output></td>
          <td><output class="tfoot__output--totals">AVG</output></td>
          <td><output class="tfoot__output--totals">SUM</output></td>
          <td><output class="tfoot__output--totals">AVG</output></td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>
<script>
// THIS COMPONENT SHOULD RECEIVE STATS AS PROPS
// SLOTS MAY ALSO HELP HERE
import defaultStats from "/json/default-stats.json";

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
  // this needs to be put in a variable duh
  //width: 30rem;
  min-width: 30rem;
  max-width: 32rem;
  //padding-right: 1.6rem;
}

table {
  width: 100%;
  //max-width: 32rem;
  margin: 0 auto;
  font-size: 1.6rem;
  line-height: 1;
  font-family: inherit;
  font-variant-numeric: lining-nums tabular-nums;
  text-align: right;
  // border: 1px solid #000;
  // border-radius: 1rem;
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
}
th {
  padding-top: 3.2rem;

  text-align: right;

  // &:first-of-type,
  // &:nth-of-type(2) {
  //   vertical-align: top;
  // }

  span {
    display: flex;
    //padding-left: 1rem;
    transform: rotate(-32.5deg);
    //transform-origin: 0 0;
    margin-top: -2.2rem;
    //margin-left: -1rem;
    //margin-right: 1rem;
    textarea {
      font-variation-settings: "wght" 150, "wdth" 25, "opsz" 25, "GRAD" 48,
        "slnt" 0;
      line-height: 0.85;
      display: flex;
      position: absolute;
      top: 0;
      left: 0;
      //width: 100%;
      //min-width: 0.4rem;
      min-width: 4.2rem;
      white-space: pre-wrap;
      word-break: break-word;
      text-align: left;
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
}
tbody {
  //box-shadow: 0 1px #000;
  font-variation-settings: "wght" 100, "wdth" 25, "opsz" 30, "GRAD" 48, "slnt" 0,
    "XTRA" 500, "YTLC" 700, "YTUC" 700, "YTFI" 700;
  background: rgba(255, 255, 255, 0.1);

  td {
    padding: 0.1rem 0 0.1rem 0.1rem;
    box-shadow: 0 1px rgba(0, 0, 0, 0.25);
    //text-align: left;
    &:first-child,
    &:nth-child(2) {
      input {
        text-align: left;
      }
    }
    input {
      display: block;
      padding: 0;
      text-align: right;
    }
  }
}
tfoot {
  font-variation-settings: "wght" 400, "wdth" 0, "opsz" 20, "GRAD" 48, "slnt" 0;
  background: rgba(0, 0, 0, 0.05);
  //box-shadow: 0 1px #000, 1px 0 #000, -1px 0 #000;
  td {
    padding: 0.4rem;
    &:first-child {
      text-align: left;
    }
  }
  //box-shadow: 0 1px #000;
}
</style>
