<template>
  <main>
    <div class="tabs">
      <div role="tablist">
        <fieldset class="radioBtns__fieldset width--100">
          <div class="radioBtns__wrapper--inner row">
            <label
              class="radioBtns__label align-items-stretch"
              role="tab"
              aria-selected
              aria-controls
              id
            >
              <input
                type="radio"
                class="radioBtns__input hidden--visually"
                v-model="frontshowing"
                :value="true"
              />
              <span>Front</span>
            </label>

            <label
              class="radioBtns__label align-items-stretch"
              role="tab"
              aria-selected
              aria-controls
              id
            >
              <input
                type="radio"
                class="radioBtns__input hidden--visually"
                v-model="frontshowing"
                :value="false"
              />
              <span>Back</span>
            </label>
          </div>
        </fieldset>
      </div>
      <div>
        <div role="tabpanel" id aria-labelledby v-show="frontshowing">
          <CardFront />
        </div>
        <div role="tabpanel" id aria-labelledby v-show="!frontshowing">
          <CardBack />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import CardFront from "./components/CardFront.vue";
import CardBack from "./components/CardBack.vue";
import { onMounted } from "vue";

async function registerServiceWorker() {
  console.log("put service worker back");
  //navigator.serviceWorker.register("/sw.js");
}

export default {
  components: {
    CardFront,
    CardBack,
  },
  setup() {
    onMounted(() => {
      registerServiceWorker();
    });
    return { registerServiceWorker };
  },

  data() {
    return {
      frontshowing: true,
    };
  },
};
</script>

<style lang="scss">
body {
  background-color: #eee;
}

h1,
h2,
h3 {
  input {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    color: inherit;
    display: inherit;
    width: 100%;
    background: inherit;
    border: inherit;
    box-shadow: inherit;
  }
}

.controls--l2 {
  height: 7.2rem;
}

//details {
//  padding: 1rem;
//}
//summary {
//  display: flex;
//}

legend {
  font-family: inherit;
  text-align: center;
  font-size: 1.6rem;
}
label {
  font-family: inherit;

  input {
    font-family: inherit;
    font-size: inherit;
  }
  select {
    display: block;
    font-family: inherit;
    font-size: 1.6rem;
  }
}

[role="tablist"] {
  display: flex;
  //margin-bottom: 1.6rem;
  background-color: var(--grey-for-controls);
}

[role="tab"] {
  font-size: 1.6rem;
  display: flex;
  flex-grow: 1;
  align-items: stretch;
  justify-content: center;
  height: var(--min-touch-target);
  padding: 0;
  // in case ever have more than just 2 tabs
  &:not(:first-child) {
    box-shadow: -1px 0 #000;
  }
  [type="radio"] {
    margin-right: 1rem;
  }
}
</style>
