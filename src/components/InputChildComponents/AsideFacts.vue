<template>
  <aside class="stats__aside">
    <blockquote>
      <span class="aside__wrapper--outer">
        <h3>
          <input type="text" v-model="defaultFacts.info.facts[0].headline" />
        </h3>
        <span class="aside__wrapper--inner">
          <textarea
            rows="3"
            :style="cssAsideProps"
            v-model="defaultFacts.info.facts[0].text"
          ></textarea>
        </span>
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
.stats__aside {
  --textareaheight: auto;
  --textareapadding: 0;
  --headlineheight: 2.4rem;
  @media (min-width: 400px) {
    --textareaheight: calc(100% - 6.4rem);
    --textareapadding: 0 1rem;
    --headlineheight: 3.6rem;
  }
}

aside {
  display: flex;
  flex-grow: 1;
  flex-basis: 25%;
  //width: auto;
  min-height: 5.4rem;
  //background: rgba(0, 0, 0, 0.2);
  //min-height: calc(var(--min-touch-target-height) + 3.2rem);
}

.aside__wrapper--outer {
  display: block;
  height: 100%;
  //min-height: var(--min-touch-target);
  //width: 100%;
  //background-color: rgba(0, 0, 0, 0.05);
}

.aside__wrapper--inner {
  display: block;
  position: relative;

  height: calc(100% - var(--headlineheight));
}

blockquote {
  display: block;
  width: 100%;
  height: auto;
  padding: 0 1.6rem 0 1.6rem;
  margin: 0;
  background-color: rgba(0, 0, 0, 0.05);
}

span {
}

h3 {
  //position: absolute;
  top: 0;
  left: 0;
  display: block;
  font-size: 1.6rem;
  width: 100%;
  //padding-top: 0.4rem;
  font-variation-settings: var(--text-shortest-wide);

  input {
    min-height: var(--headlineheight);
  }
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
  height: var(--textareaheight);
  //min-height: var(--min-touch-target);
  transform: translateY(-50%);
  // padding here based on width helps avoid media queries
  // can i do a min-max CLAMP here somewhere?
  padding: var(--textareapadding);
  //padding-bottom: 1.6rem;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 1.6rem;
  font-variation-settings: "wght" 100, "wdth" 50, "opsz" 25, "GRAD" 1, "slnt" 0,
    "YTLC" 400, "YTUC" 400, "YTAS" 400;
  line-height: 0.8;
}
</style>
