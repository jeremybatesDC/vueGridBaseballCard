<template>
  <div class="card-back">
    <article>
      <BackHeader />

      <section>
        <!-- columns: min 2, max 6? -->
        <!-- tbody rows: min 0 (leaving only tfoot totals), max 10? -->

        <TableStats />

        <AsideFacts />
      </section>

      <footer>
        <fieldset>
          <!-- <h2>
            <input type="text" v-model="defaultFacts.info.facts[1].headline" />
          </h2>-->
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
//import TextSlider from "./InputChildComponents/TextSlider.vue";
import TableStats from "./InputChildComponents/TableStats.vue";
import BackHeader from "./InputChildComponents/BackHeader.vue";
import AsideFacts from "./InputChildComponents/AsideFacts.vue";

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
    //TextSlider,
    TableStats,
    BackHeader,
    AsideFacts,
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
  padding: 1.5rem;
  //overflow: hidden;
}

article {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: space-between;
  background-color: rgba(#9c2c1a, 0.25);
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
  padding: 0 1.5rem;
  //background: rgba(#9c2c1a, 0.1);
}

// rather imperative here, but having table as child of flex element was kinda odd... ooooh

//

footer {
  display: flex;
  flex-direction: column;
  position: relative;
  font-size: 1.6rem;
  padding: 0 1.5rem;
  fieldset {
    display: flex;
    flex-direction: column;
  }
  input[type="text"] {
    padding: 0;
  }
  textarea {
    font-variation-settings: "wght" 400, "wdth" 25, "opsz" 50, "GRAD" 48,
      "slnt" 0, "YTLC" 200, "YTUC" 200, "YTAS" 700;
  }
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
