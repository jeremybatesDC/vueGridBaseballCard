<template>
  <aside class="stats__aside">
    <fieldset>
      <blockquote>
        <h6 class="stats__aside__headline">{{ defaultFacts.info.facts[0].headline }}</h6>
        <small>{{defaultFacts.info.info_2}}</small>
        <!-- <p>{{defaultFacts.info.info_2}}</p> -->
        <!--<textarea
                v-model="defaultFacts.info.facts[0].text"
                :style="cssAsideProps"
        ></textarea>-->
      </blockquote>
    </fieldset>
  </aside>
</template>


<script>
import defaultFacts from "/json/default-facts.json";

export default {
  data: function () {
    return { defaultFacts };
  },
};
</script>

<style scoped lang="scss">
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
}

fieldset {
  display: flex;
  flex-grow: 1;
  border: none;
}
.stats__aside__headline {
  text-align: center;
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
}

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
</style>