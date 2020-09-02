<template>
  <div tabindex="0" data-show-only-on-interaction>
    <div class="row row--grow">
      <label class="rangeUI__label">
        <span>Weight: <output :value=""></output></span>

        <input
          class="rangeUI__input"
          v-model=""
          type="range"
          min="150"
          max="800"
        />
      </label>
      <label class="rangeUI__label">
        <span>Width: <output :value=""></output></span>
        <input
          class="rangeUI__input"
          v-model=""
          type="range"
          min="35"
          max="100"
        />
      </label>
    </div>
    <div class="row row--grow">
      <label class="rangeUI__label">
        <span>Slant: <output :value=""></output></span>
        <input
          class="rangeUI__input"
          v-model=""
          type="range"
          min="-10"
          max="0"
        />
      </label>
      <label class="rangeUI__label">
        <span>Grade: <output :value=""></output></span>
        <input
          class="rangeUI__input"
          v-model=""
          type="range"
          min="0"
          max="1"
          step=".1"
        />
      </label>
    </div>
  </div>
</template>


<script>
export default {};
</script>

<style lang="scss" scoped>
.rangeUI__label {
  color: #fff;
}
</style>