<template>
  <header>
    <div class="row row--topmost">
      <!-- i dont think label is necessarily correct here -->
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
      <label class="fui__wrap">
        <span class="fui__mid">
          <input
            type="text"
            class="fui__formElem"
            v-model="defaultFacts.info.info_3"
          />
          <TextSlider />
        </span>
      </label>
    </div>

    <!-- hard to loop since distinct lists may help... Although... -->
    <div class="row stripe--dark">
      <label>
        <input type="email" v-model="defaultFacts.info.info_0" />
      </label>

      <label>
        <input type="text" v-model="defaultFacts.info.info_1" />
      </label>
    </div>
    <div class="row">
      <label>
        <input type="text" v-model="defaultFacts.info.info_4" />
      </label>
      <label>
        <input type="text" v-model="defaultFacts.info.info_5" />
      </label>
      <label>
        <input type="text" v-model="defaultFacts.info.info_6" />
      </label>
    </div>
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
// consider moving this
.stripe--dark {
  padding: 0;
  flex-wrap: nowrap;
  height: var(--min-touch-target-height);
  // iOS wants min height hmmmm
  min-height: var(--min-touch-target-height);
  background: #000;
  color: #9a8b7c;
  box-shadow: 1.5rem 0 #000, -1.5rem 0 #000;

  label {
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
}

header {
  display: flex;
  flex-direction: column;

  padding: 0 1.5rem;
}

.row--topmost {
  label {
    &:first-of-type {
      flex-grow: 1;
      width: 100%;
    }
  }
}

h1 {
  font-size: 2.4rem;
  padding-bottom: 0;
  font-variation-settings: "wght" 700, "wdth" 25, "opsz" 25, "GRAD" 48, "slnt" 0,
    "YTLC" 500, "YTUC" 500;
  width: 100%;
  input[type="text"] {
    height: var(--min-touch-target-height);
    font-variation-settings: inherit;
    padding: 0;
    width: 100%;
  }
}

.row {
  justify-content: space-between;
  label {
    display: flex;
    font-size: 1.6rem;
    font-variation-settings: "wght" 400, "wdth" 25, "opsz" 50, "GRAD" 48,
      "slnt" 0, "YTLC" 200, "YTUC" 200, "YTAS" 700;
    align-items: center;

    &:last-child {
      input[type="text"] {
        text-align: right;
        padding-right: 0;
      }
    }
  }
  &:nth-of-type(2) {
    label {
      &:first-child {
        flex-grow: 1;
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
  &:nth-of-type(3) {
    min-height: var(--min-touch-target-height);
    label {
      min-height: var(--min-touch-target-height);
      display: inline-flex;
      &:nth-child(2) {
        text-align: center;
        input[type="text"] {
          text-align: inherit;
        }
      }
    }
    input[type="text"] {
      width: 100%;
      display: inline-flex;
      min-height: inherit;
    }
  }
}
</style>
