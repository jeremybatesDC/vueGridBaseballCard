<template>
  <footer class="">
    <fieldset class="">
      <!-- <h2>
            <input type="text" v-model="defaultFacts.info.facts[1].headline" />
      </h2>-->
      <textarea
        rows="2"
        class=""
        spellcheck="false"
        :style="cssFooterProps"
        v-model="defaultFacts.info.facts[1].text"
      ></textarea>
    </fieldset>
  </footer>
</template>

<script>
import defaultFacts from "/json/default-facts.json";
//import TextSlider from "../InputChildComponents/TextSlider.vue";
export default {
  components: {
    //TextSlider,
  },

  data: function () {
    return {
      defaultFacts,
      //TextSlider
    };
  },
};
</script>

<style lang="scss" scoped>
footer {
  display: flex;
  flex-direction: column;
  position: relative;
  font-size: 1.6rem;
  padding: 0 1.6rem;
  //background-color: rgba(0, 0, 0, 0.2);

  input[type="text"] {
    padding: 0;
  }
  textarea {
    min-height: var(--min-touch-target-height);
    font-variation-settings: "wght" 333, "wdth" 33, "opsz" 33, "GRAD" 1,
      "slnt" -5, "YTLC" 500, "YTUC" 500, "YTAS" 500;
    line-height: 0.8;
    padding-top: 0.4rem;
  }
  &:focus-within {
    textarea {
      //transform: scale(2);
      //background-color: #fff;
      background-color: var(--backgroundcolorback);
    }
    &:before {
      content: "";
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
    }
  }
}

fieldset {
  display: flex;
  flex-direction: column;
  position: relative;
  border: none;
  box-shadow: none;
  padding: 0.8rem 0 0 0;
  margin: 0;
}
</style>
