<template>
  <div tabindex="0" data-show-only-on-interaction>
    <div class="row">
      <label>
        Font Weight
        <input v-model type="range" min="100" max="900" />
      </label>
      <label>
        Font Width
        <input v-model type="range" min="35" max="100" />
      </label>
    </div>
    <!-- need a better easy grid -->
    <div class="row">
      <label>
        Font Slant
        <input v-model type="range" min="-10" max="0" />
      </label>
      <label>
        Font Grade
        <input v-model type="range" min="0" max="48" />
      </label>
    </div>
  </div>
</template>


<script>
export default {};
</script>