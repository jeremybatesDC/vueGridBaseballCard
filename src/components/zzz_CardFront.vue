<template>
  <div id="vueCardApp" class="baseballCard__wrapper">
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
