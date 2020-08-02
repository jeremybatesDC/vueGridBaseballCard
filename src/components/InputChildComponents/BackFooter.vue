<template>
  <footer class="fui__wrap">
    <fieldset class="fui__mid">
      <!-- <h2>
            <input type="text" v-model="defaultFacts.info.facts[1].headline" />
      </h2>-->
      <textarea
        class="fui__formElem"
        spellcheck="false"
        :style="cssFooterProps"
        v-model="defaultFacts.info.facts[1].text"
      ></textarea>
    </fieldset>
  </footer>
</template>

<script>
import defaultFacts from "/json/default-facts.json";
import TextSlider from "../InputChildComponents/TextSlider.vue";
export default {
  components: {
    TextSlider,
  },

  data: function () {
    return { defaultFacts, TextSlider };
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

fieldset {
  display: flex;
  flex-direction: column;
  position: relative;
  border: none;
  box-shadow: none;
  padding: 1.6rem 0 0 0;
  margin: 0;
}
</style>
