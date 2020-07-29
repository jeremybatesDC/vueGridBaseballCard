<template>
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
    <!-- <label>
      <input type="text" v-model="defaultFacts.info.info_3" />
    </label>-->

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
      <input type="text" v-model="defaultFacts.info.info_3" />
      <input type="text" v-model="defaultFacts.info.info_4" />
      <input type="text" v-model="defaultFacts.info.info_5" />
      <input type="text" v-model="defaultFacts.info.info_6" />
    </ul>
  </header>
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
header {
  display: flex;
  flex-direction: column;

  padding: 0 1.5rem;
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
      height: var(--min-touch-target-height);
      // iOS wants min height hmmmm
      min-height: var(--min-touch-target-height);
      background: #000;
      color: #9a8b7c;
      box-shadow: 1.5rem 0 #000, -1.5rem 0 #000;
      li {
        height: var(--min-touch-target-height);
        // iOS wants this explicit
        align-items: center;
        input {
          height: var(--min-touch-target-height);
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
      min-height: var(--min-touch-target-height);
      li {
        min-height: inherit;
        input[type="text"] {
          min-height: inherit;
        }
      }
    }

    &:last-of-type {
      padding-bottom: 0;
    }
    li {
      display: flex;
      font-size: 1.6rem;
      //line-height: var(--min-touch-target-height);
      font-variation-settings: "wght" 400, "wdth" 25, "opsz" 50, "GRAD" 48,
        "slnt" 0, "YTLC" 200, "YTUC" 200, "YTAS" 700;
    }
  }
}

h1 {
  font-size: 2.4rem;
  padding-bottom: 0;
  font-variation-settings: "wght" 700, "wdth" 25, "opsz" 25, "GRAD" 48, "slnt" 0,
    "YTLC" 500, "YTUC" 500;
  input[type="text"] {
    height: var(--min-touch-target-height);
    font-variation-settings: inherit;
    padding: 0;
  }
}
</style>