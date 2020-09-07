<template>
  <div id="vueCardApp" class="baseballCard__wrapper" :style="cssProps">
    <CardFrontConfigurableV1 />

    <!--<button type="button" @click="saveHandler">Save</button>
    <button type="button" @click="submitHandler">Submit</button>-->
  </div>
</template>

<script lang="ts">
import CardFrontConfigurableV1 from "./InputChildComponents/CardFrontConfigurableV1.vue";

export default {
  components: {
    CardFrontConfigurableV1,
  },
};
</script>


<style scoped lang="scss">
input {
  &[type="text"] {
    min-height: var(--min-touch-target-height);
  }
}

h1 {
  height: 100%;
  input[type="text"] {
    height: 100%;
  }
}
</style>