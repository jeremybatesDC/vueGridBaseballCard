<template>
  <div class="card-back">
    <article>
      <header>
        <label class="fui__wrap">
          <h1 class="fui__mid">
            <input
              type="text"
              class="fui__formElem"
              value="YOUR MOTHER"
              placeholder="Firstname Lastname"
            />
            <TextSlider />
          </h1>
        </label>

        <!-- hard to loop since distinct lists may help... Although... -->
        <ul>
          <li>
            <input type="email" v-model="defaultStats.info.info_0" />
          </li>
          <li>{{ defaultStats.info.info_1 }}</li>
        </ul>
        <ul>
          <!-- loop these-->
          <li>{{ defaultStats.info.info_2 }}</li>
          <li>{{ defaultStats.info.info_3 }}</li>
          <li>{{ defaultStats.info.info_4 }}</li>
          <li>{{ defaultStats.info.info_5 }}</li>
          <li>{{ defaultStats.info.info_6 }}</li>
        </ul>
      </header>
      <section>
        <!-- columns: min 2, max 6? -->
        <!-- tbody rows: min 0 (leaving only tfoot totals), max 10? -->
        <div class="fui__wrap table__wrapper--outer">
          <table class="fui__mid">
            <!--<caption>Career Stats</caption>-->

            <thead>
              <tr>
                <th v-for="field in defaultStats.fields" :key="field" scope="col">
                  <span>
                    <textarea rows="1" spellcheck="false" :value="field"></textarea>
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="year in defaultStats.years" :key="year">
                <!-- i really don't want to do a loop in a loop, do I? Space/time complexity wise, it's better to loop twice -->
                <td v-for="thing in year" :key="thing">
                  <input class="fui__formElem" type="tel" :value="thing" size="5" maxlength="5" />
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td>CAREER</td>
                <td></td>
                <td>SUM</td>
                <td>SUM</td>
                <td>AVG</td>
                <td>SUM</td>
                <td>AVG</td>
              </tr>
            </tfoot>
          </table>
        </div>

        <aside>
          <fieldset>
            <blockquote>
              <h6 class="aside__headline">{{ defaultStats.info.facts[0].headline }}</h6>
              <textarea v-model="defaultStats.info.facts[0].text" :style="cssAsideProps"></textarea>
              <!--<div tabindex="0" data-show-only-on-interaction>
                <div class="row">
                  <label>
                    Font Weight
                    <input v-model="aside.fontWeight" type="range" min="100" max="900" />
                  </label>
                  <label>
                    Font Width
                    <input v-model="aside.fontWidth" type="range" min="35" max="100" />
                  </label>
                </div>
                <div class="row">
                  <label>
                    Font Slant
                    <input v-model="aside.fontSlant" type="range" min="-10" max="0" />
                  </label>
                  <label>
                    Font Grade
                    <input v-model="aside.fontGrade" type="range" min="0" max="48" />
                  </label>
                </div>
              </div>-->
            </blockquote>
          </fieldset>
        </aside>
      </section>

      <footer>
        <h2>{{ defaultStats.info.facts[1].headline }}</h2>
        <fieldset>
          <textarea
            spellcheck="false"
            :style="cssFooterProps"
            v-model="defaultStats.info.facts[1].text"
          ></textarea>
          <!--<div tabindex="0" data-show-only-on-interaction>
            <label>
              Font Weight
              <input
                v-model="footer.fontWeight"
                type="range"
                min="100"
                max="900"
                list="fontweightdatalist"
              />
              <datalist id="fontweightdatalist">
                <option value="100"></option>
                <option value="900"></option>
              </datalist>
            </label>

            <label>
              Font Width
              <input v-model="footer.fontWidth" type="range" min="35" max="100" />
            </label>
            <br />
            <label>
              Font Slant
              <input v-model="footer.fontSlant" type="range" min="-10" max="0" />
            </label>
            <label>
              Font Grade
              <input v-model="footer.fontGrade" type="range" min="0" max="48" />
            </label>
          </div>-->
          <!-- for this to work, will also have to pass-in a css prop/value for the show/hide -->
          <!--<TextSlider footerFontweight="footer.fontWeight" />-->
        </fieldset>
      </footer>
    </article>
  </div>
</template>

<script lang="ts">
import defaultStats from "../json/default-stats.json";
import { set } from "idb-keyval";
import TextSlider from "./InputChildComponents/TextSlider.vue";

export default {
  // intentionally avoiding arrow functions here
  setup: function() {
    const webWorkerCardBack = new Worker("./workers/web-worker-idb.js", {
      type: "module"
    });

    async function setFunc() {
      // loop here over keys
      webWorkerCardBack.postMessage(this.aside.fontGrade);
      webWorkerCardBack.onmessage = function(event) {
        console.log("received message here is ", event.data);
      };

      set("footerFontWeight", this.footer.fontWeight)
        .then(() => console.log("woohoo!"))
        .catch(err => console.log("doh!", err));
    }

    return { setFunc };
  },

  // do I nest props to send to child components in here?
  components: {
    TextSlider
  },

  data: function() {
    return {
      defaultStats,
      // would love to be equally declarative with footer and aside stuff too...
      footer: {
        fontWeight: 400,
        fontWidth: 100,
        fontSlant: 5,
        fontGrade: 24
      },
      aside: {
        fontWeight: 400,
        fontWidth: 100,
        fontSlant: 5,
        fontGrade: 24
      }
    };
  },
  mounted: function() {
    this.setFunc();
  },
  computed: {
    cssFooterProps() {
      return {
        "--fontweight": this.footer.fontWeight,
        "--fontwidth": this.footer.fontWidth,
        "--fontslant": this.footer.fontSlant,
        "--fontgrade": this.footer.fontGrade
      };
    },
    cssAsideProps() {
      return {
        "--fontweight": this.aside.fontWeight,
        "--fontwidth": this.aside.fontWidth,
        "--fontslant": this.aside.fontSlant,
        "--fontgrade": this.aside.fontGrade
      };
    }
  }
};
</script>

<style scoped lang="scss">
// if can keep square stats table, will allow switch between vert and horz

// color contast functions: https://css-tricks.com/switch-font-color-for-different-backgrounds-with-css/

.card-back {
  display: flex;
  //flex-direction: column;

  background-color: #9a8b7c;
  width: 100%;
  max-width: 50.4rem;
  height: 36rem;
  margin-bottom: 2.4rem;
  padding: 1.6rem;
  //overflow: hidden;
}

article {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: rgba(#9c2c1a, 0.25);
}

header {
  display: flex;
  flex-direction: column;

  padding: 1rem 1.6rem;
  ul {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin: 0;
    padding: 0 0 1rem 0;
    justify-content: space-between;

    &:first-of-type {
      padding: 0.5rem 0;

      // TEMPORARY FAUX-BOLD
      font-weight: bold;

      background: #000;
      color: #9a8b7c;
      box-shadow: 1.6rem 0 #000, -1.6rem 0 #000;
      li {
        &:first-child {
          flex-grow: 1;
        }
      }
      [type="email"] {
        color: inherit;
        width: 100%;
      }
    }
    &:nth-of-type(2) {
      li {
        &:first-of-type {
          width: 100%;
          padding: 0.6rem 0;
        }
      }
    }

    &:last-of-type {
      padding-bottom: 0;
    }
    li {
      display: inline-flex;
      font-size: 1.2rem;
      line-height: 1;
    }
  }
}

h1 {
  font-size: 2.4rem;
  line-height: 1;
  //box-shadow: inset 0 -1px rgba(0, 0, 0, 0.5);
  padding-bottom: 0.4rem;
  //margin-bottom: 1rem;
}

h2 {
  font-size: 1.4rem;
  line-height: 1;
  padding-bottom: 0.5rem;
  font-variation-settings: "slnt" -10;
}

// set EXPLICIT font variation settings for the table
section {
  // if this part is restricted to vert width, then it'll definitely fit on horz
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0 1.6rem 1.6rem 1.6rem;
  //background: rgba(#9c2c1a, 0.1);
}

.table__wrapper--outer {
  display: flex;
  flex-grow: 2;
  // this needs to be put in a variable duh
  max-width: 30rem;
}
table {
  width: 100%;
  //max-width: 32rem;
  margin: 0 auto;
  font-size: 1.2rem;
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
  box-shadow: 0 1px #000;
}
th {
  //vertical-align: top;

  text-align: right;

  vertical-align: middle;
  // &:first-of-type,
  // &:nth-of-type(2) {
  //   vertical-align: top;
  // }

  span {
    display: block;
    //padding-left: 1rem;
    transform: rotate(-45deg);
    transform-origin: 0 0;
    textarea {
      font-variation-settings: "wght" 150, "wdth" 35, "opsz" 0, "GRAD" 48,
        "slnt" 0;
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      min-width: 6.4rem;
      //min-width: 3rem;
      white-space: pre-wrap;
      //text-align: left;
      text-transform: uppercase;
      // safari mobile seems to struggle with first-line
      // &::first-line {
      //   color: red;
      // }
    }
  }
}

tbody {
  box-shadow: 0 1px #000;
  font-variation-settings: "wght" 100, "wdth" 0, "opsz" 20, "GRAD" 48, "slnt" 0;
  background: rgba(255, 255, 255, 0.1);
  tr {
    &:first-child {
      td {
        padding-top: 1rem;
      }
    }
  }
  td {
    padding: 0.2rem 0 0.2rem 0.2rem;
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
  td {
    padding: 0.4rem 0.2rem;
    &:first-child {
      text-align: left;
    }
  }
  //box-shadow: 0 1px #000;
}

// rather imperative here, but having table as child of flex element was kinda odd... ooooh

//
aside {
  display: flex;
  flex-grow: 1;
  //width: auto;
  &:focus-within {
    blockquote {
      font-size: 1.6rem;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: auto;
      // background-color: red;
    }
    // this indeed seems to help prevent iOS zoom
    textarea {
      font-size: 1.6rem;
      background-color: #fff;
      max-height: 12rem;
    }
    &:before {
      content: "";
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.75);
      //z-index: 1;
    }
  }
  fieldset {
    display: flex;
    flex-grow: 1;
  }
  .aside__headline {
    // this is acting weird
    display: flex;
    width: 100%;
    text-align: justify;
  }
}

footer {
  &:focus-within {
    textarea {
      //transform: scale(2);
      background-color: #fff;
    }
    &:before {
      content: "";
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      //z-index: 1;
    }
  }
}

blockquote {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  // hmmm
  //flex-grow: 1;
  height: 100%;
  padding: 0.4rem;
  margin: 0;
  background: rgba(#9c2c1a, 0.25);
  align-items: center;
  justify-content: center;
  p,
  textarea {
    display: flex;
    flex-grow: 1;
    font-size: 1.4rem;
    line-height: 1;
    font-variation-settings: "wght" var(--fontweight), "wdth" var(--fontwidth),
      "opsz" 10, "GRAD" var(--fontgrade), "slnt" var(--fontslant);
    padding: 0.5rem 1rem;
  }
}

footer {
  display: flex;
  flex-direction: column;
  position: relative;
  font-size: 1.2rem;
  line-height: 1;
  padding: 0 1.6rem 1rem 1.6rem;
  textarea {
    font-variation-settings: "wght" var(--fontweight), "wdth" var(--fontwidth),
      "opsz" 0, "GRAD" var(--fontgrade), "slnt" var(--fontslant);
  }
}

p {
  font-size: 1.2rem;
  line-height: 1;
}

fieldset {
  position: relative;
  border: none;
  box-shadow: none;
  padding: 0;
  margin: 0;
}
</style>
