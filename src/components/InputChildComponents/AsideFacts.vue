<template>
  <aside class="stats__aside">
    <blockquote>
      {{ defaultFacts.info.facts[0].headline }}
      <!-- <small>{{defaultFacts.info.info_2}}</small> -->
      <!-- <p>{{defaultFacts.info.info_2}}</p> -->
      <textarea
        v-model="defaultFacts.info.facts[0].text"
        :style="cssAsideProps"
      ></textarea>
    </blockquote>
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
  //height: 100%;
  //background: rgba(0, 0, 0, 0.05);

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

.stats__aside__headline {
  text-align: center;
}

blockquote {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  position: relative;
  //max-width: 90%;
  // hmmm
  //flex-grow: 1;
  height: 100%;
  //padding: 0.4rem;
  margin: 0;
  background: rgba(#9c2c1a, 0.25);

  align-items: center;
  justify-content: center;
  overflow: hidden;
}

textarea {
  position: absolute;
  top: 0;
  left: 0;
  //bottom: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  //display: flex;
  //flex-grow: 1;
  // MAKING SMALL NOW BECAUSE I NEED TO FIGURE OUT WHICH RULES/LACK OF RULES ARE MAKING THE TEXT AREA EXPLAND TO WIDTH OF CONTENT
  font-size: 1.6rem;
  line-height: var(--min-touch-target-height);
  font-variation-settings: "wght" 400, "wdth" 25, "opsz" 50, "GRAD" 48, "slnt" 0,
    "YTLC" 200, "YTUC" 200, "YTAS" 700;
  //padding: 0.5rem 1rem;
}
</style>
