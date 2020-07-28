<template>
  <div class="card-back">
    <article>
      <header>
        <label class="fui__wrap">
          <h1 class="fui__mid">
            <input
              type="text"
              class="fui__formElem"
              value="WONDER WOMAN"
              placeholder="Firstname Lastname"
            />
            <TextSlider />
          </h1>
        </label>

        <!-- hard to loop since distinct lists may help... Although... -->
        <ul>
          <li>
            <input type="email" v-model="defaultFacts.info.info_0" />
          </li>
          <li>
            <input type="text" v-model="defaultFacts.info.info_1" />
          </li>
        </ul>
        <ul>
          <!-- loop these-->
          <li>{{ defaultFacts.info.info_2 }}</li>
          <li>{{ defaultFacts.info.info_3 }}</li>
          <li>{{ defaultFacts.info.info_4 }}</li>
          <li>{{ defaultFacts.info.info_5 }}</li>
          <li>{{ defaultFacts.info.info_6 }}</li>
        </ul>
      </header>
      <section>
        <!-- columns: min 2, max 6? -->
        <!-- tbody rows: min 0 (leaving only tfoot totals), max 10? -->

        <TableStats />

        <aside class="stats__aside">
          <fieldset>
            <blockquote>
              <h6 class="stats__aside__headline">
                {{ defaultFacts.info.facts[0].headline }}
              </h6>
              <!--<textarea
                v-model="defaultFacts.info.facts[0].text"
                :style="cssAsideProps"
              ></textarea>-->
            </blockquote>
          </fieldset>
        </aside>
      </section>

      <footer>
        <fieldset>
          <h2>
            <input type="text" v-model="defaultFacts.info.facts[1].headline" />
          </h2>
          <textarea
            spellcheck="false"
            :style="cssFooterProps"
            v-model="defaultFacts.info.facts[1].text"
          ></textarea>
        </fieldset>
      </footer>
    </article>
  </div>
</template>

<script lang="ts">
import defaultFacts from "/json/default-facts.json";
import { set } from "idb-keyval";
import TextSlider from "./InputChildComponents/TextSlider.vue";
import TableStats from "./InputChildComponents/TableStats.vue";

export default {
  // intentionally avoiding arrow functions here
  setup: function () {
    const webWorkerCardBack = new Worker("./workers/web-worker-idb.js", {
      type: "module",
    });

    async function setFunc() {
      // loop here over keys
      webWorkerCardBack.postMessage(this.aside.fontGrade);
      webWorkerCardBack.onmessage = function (event) {
        console.log("received message here is ", event.data);
      };

      set("footerFontWeight", this.footer.fontWeight)
        .then(() => console.log("woohoo!"))
        .catch((err) => console.log("doh!", err));
    }

    return { setFunc };
  },

  // do I nest props to send to child components in here?
  components: {
    TextSlider,
    TableStats,
  },

  data: function () {
    return {
      defaultFacts,
      // would love to be equally declarative with footer and aside stuff too...
      footer: {
        fontWeight: 400,
        fontWidth: 100,
        fontSlant: 5,
        fontGrade: 24,
      },
      aside: {
        fontWeight: 400,
        fontWidth: 100,
        fontSlant: 5,
        fontGrade: 24,
      },
    };
  },
  mounted: function () {
    this.setFunc();
  },
  computed: {
    cssFooterProps() {
      return {
        "--fontweight": this.footer.fontWeight,
        "--fontwidth": this.footer.fontWidth,
        "--fontslant": this.footer.fontSlant,
        "--fontgrade": this.footer.fontGrade,
      };
    },
    cssAsideProps() {
      return {
        "--fontweight": this.aside.fontWeight,
        "--fontwidth": this.aside.fontWidth,
        "--fontslant": this.aside.fontSlant,
        "--fontgrade": this.aside.fontGrade,
      };
    },
  },
};
</script>

<style scoped lang="scss">
// if can keep square stats table, will allow switch between vert and horz

// color contast functions: https://css-tricks.com/switch-font-color-for-different-backgrounds-with-css/

.card-back {
  display: flex;
  //flex-direction: column;

  background-color: #9a8b7c;
  flex-basis: 100%;
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

  padding: 0 1.6rem 0 1.6rem;
  ul {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin: 0;
    padding: 0 0 1rem 0;
    justify-content: space-between;

    &:first-of-type {
      padding: 0;
      flex-wrap: nowrap;
      // TEMPORARY FAUX-BOLD
      font-weight: bold;

      background: #000;
      color: #9a8b7c;
      box-shadow: 1.6rem 0 #000, -1.6rem 0 #000;
      li {
        input {
          padding-right: 0;
          padding-left: 0;
        }
        &:first-child {
          flex-grow: 1;
          flex-basis: 50%;
          // why does safari mobile need this input padding to be explicit?
        }
        &:nth-child(2) {
          input {
            text-align: right;
          }
        }
      }
      input {
        color: inherit;
        width: 100%;
        // can prevent iOS zoom with 16px or higher PRE-FOCUS
        font-size: 1.6rem;
        padding: 0;
        // as of july 27, 2020, font-variation settings can be used to achieve desired smaller appearance
        font-variation-settings: "wght" 400, "wdth" 25, "opsz" 50, "GRAD" 48,
          "slnt" 0, "YTLC" 200, "YTUC" 200, "YTAS" 700;
        &:focus {
        }
      }
    }
    &:nth-of-type(2) {
      li {
        line-height: var(--min-touch-target-height-half);
        &:first-of-type {
          width: 100%;
          padding: 0;
        }
      }
    }

    &:last-of-type {
      padding-bottom: 0;
    }
    li {
      display: inline-flex;
      font-size: 1.6rem;
      line-height: var(--min-touch-target-height);
    }
  }
}

h1 {
  font-size: 2.4rem;
  line-height: var(--min-touch-target-height);
  padding-bottom: 0;
  font-variation-settings: "wght" 700, "wdth" 25, "opsz" 25, "GRAD" 48, "slnt" 0,
    "YTLC" 500, "YTUC" 500;
  input[type="text"] {
    font-variation-settings: inherit;
    padding: 0;
  }
}

h2 {
  font-size: 1.6rem;
  line-height: var(--min-touch-target-height);
  padding-bottom: 0;
  font-variation-settings: "slnt" -10;
}

// set EXPLICIT font variation settings for the table
section {
  // if this part is restricted to vert width, then it'll definitely fit on horz
  display: flex;
  flex-grow: 1;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0 1.6rem;
  //background: rgba(#9c2c1a, 0.1);
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
  .stats__aside__headline {
    text-align: center;
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
  //padding: 0.4rem;
  margin: 0;
  background: rgba(#9c2c1a, 0.25);
  align-items: center;
  justify-content: center;
  p,
  textarea {
    //display: flex;
    //flex-grow: 1;
    // MAKING SMALL NOW BECAUSE I NEED TO FIGURE OUT WHICH RULES/LACK OF RULES ARE MAKING THE TEXT AREA EXPLAND TO WIDTH OF CONTENT
    font-size: 1.6rem;
    line-height: var(--min-touch-target-height);
    font-variation-settings: "wght" var(--fontweight), "wdth" var(--fontwidth),
      "opsz" 10, "GRAD" var(--fontgrade), "slnt" var(--fontslant);
    //padding: 0.5rem 1rem;
  }
}

footer {
  display: flex;
  flex-direction: column;
  position: relative;
  font-size: 1.6rem;

  padding: 0 1.6rem;
  fieldset {
    display: flex;
    flex-direction: column;
  }
  input[type="text"] {
    padding: 0;
  }
  textarea {
    font-variation-settings: "wght" var(--fontweight), "wdth" var(--fontwidth),
      "opsz" 0, "GRAD" var(--fontgrade), "slnt" var(--fontslant);
    min-height: var(--min-touch-target-height);
  }
}

p {
  font-size: 1.6rem;
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
