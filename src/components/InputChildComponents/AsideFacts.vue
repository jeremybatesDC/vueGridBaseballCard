<template>
  <aside class='stats__aside'>
    <blockquote>
      <span>
        <!-- this input is preserving the space that the textarea cannot -->
        <!-- refactor flex in here -->
        <h3>
          <input type='text' v-model='defaultFacts.info.facts[0].headline' />
        </h3>
        <!-- no need here it seems to add a 'wrap' attr -->
        <textarea :style='cssAsideProps' v-model='defaultFacts.info.facts[0].text'></textarea>
      </span>
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
  flex-basis: 25%;
  //width: auto;
  //height: 100%;
  //background: rgba(0, 0, 0, 0.05);
  min-height: calc(var(--min-touch-target-height) + 3.2rem);
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
    }
  }
}

blockquote {
  display: block;
  width: 100%;
  height: auto;
  padding: 0.4rem 1.6rem 0 1.6rem;
  margin: 0;
  background-color: rgba(#9c2c1a, 0.25);
}

span {
  display: block;
  position: relative;
  height: 100%;
  min-height: var(--min-touch-target-height);
  width: 100%;
}

h3 {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  //height: var(--min-touch-target-height);
  padding: 0;
}

input[type="text"] {
  display: block;
  font-size: 1.6rem;
  //width: 100%;
  text-align: center;
  font-variation-settings: var(--text-short-wide);
}

// absolute needs to be on the text-area element to keep it from growing I have found
textarea {
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: auto;
  min-height: var(--min-touch-target-height);
  transform: translateY(-50%);
  // padding here based on width helps avoid media queries
  // can i do a min-max CLAMP here somewhere?
  padding: 2.4rem 0 6vw 0;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 1.6rem;
  font-variation-settings: "wght" 100, "wdth" 50, "opsz" 25, "GRAD" 1, "slnt" 0,
    "YTLC" 400, "YTUC" 400, "YTAS" 400;
  line-height: 0.8;
}
</style>
