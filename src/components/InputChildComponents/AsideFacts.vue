<template>
  <aside class="stats__aside">
    <blockquote>
      <span>
        <!-- this input is preserving the space that the textarea cannot -->
        <!-- refactor flex in here -->
        <label>
          <input type="text" v-model="defaultFacts.info.facts[0].headline" />
        </label>
        <!-- no need here it seems to add a 'wrap' attr -->
        <textarea v-model="defaultFacts.info.facts[0].text" :style="cssAsideProps"></textarea>
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
  display: block;
  width: 100%;
  height: auto;
  padding: 1.6rem 1.6rem 0 1.6rem;
  margin: 0;
  background: rgba(#9c2c1a, 0.25);
}

span {
  display: block;
  position: relative;
  height: 100%;
  min-height: var(--min-touch-target-height);
  width: 100%;
}

label {
  display: block;
  min-height: var(--min-touch-target-height);
  //padding: 1.6rem 0;
}

input[type="text"] {
  width: 100%;

  text-align: center;
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
  line-height: 0.9;
}
</style>
