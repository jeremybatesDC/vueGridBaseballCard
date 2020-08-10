<template>
  <div>
    <fieldset>
      <legend>Layout</legend>
      <label>
        <input type="radio" v-model="cardLayout" value="space-between" />
        <span>1-1</span>
      </label>
      <label>
        <input type="radio" v-model="cardLayout" value="flex-end" />
        <span>0-2</span>
      </label>
      <label>
        <input type="radio" v-model="cardLayout" value="flex-start" />
        <span>2-0</span>
      </label>
    </fieldset>

    <div class="card__container--front" :style="cssProps">
      <div class="text__line--primary row">Name Usually</div>
      <div class="text__line--secondary row">Team, Position</div>
    </div>

    <!-- revised grid -->
    <div class="grid__TEST">
      <div v-if="cardLayout != '0-2'">should show top here unless layout is 0-2</div>
      <div v-if="cardLayout != '2-0'">should show bottom here unless layout is 2-0</div>
    </div>

    <!-- end revised grid -->
  </div>
</template>


<style scoped lang="scss">
.card__container--front {
  display: flex;
  flex-direction: column;
  width: 36rem;
  //yes, hard height here because
  height: 50.4rem;
  margin: 0 auto;
  outline: 1.6rem solid rebeccapurple;
  // 2-0
  //justify-content: flex-start;
  // 1-1
  justify-content: var(--cardlayout);
  // 0-2
  //justify-content: flex-end;

  // layout is as easy as justify-content
}
</style>


<script>
import defaultSettings from "/json/default-settings.json";

export default {
  data: function () {
    return {
      cardLayout: defaultSettings.cardLayout,
    };
  },
  computed: {
    cssProps() {
      return {
        "--cardlayout": this.cardLayout,
      };
    },
  },
};
</script>