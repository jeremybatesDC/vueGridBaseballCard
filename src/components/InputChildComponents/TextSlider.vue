<template>
  <div tabindex="0" data-show-only-on-interaction>
    <label>
      Font Weight
      <input v-model="footer.fontWeight" type="range" min="100" max="900" />
    </label>
    <label>
      Font Width
      <input v-model="footer.fontWidth" type="range" min="35" max="100" />
    </label>
    <label>
      Font Slant
      <input v-model="footer.fontSlant" type="range" min="-10" max="0" />
    </label>
    <label>
      Font Grade
      <input v-model="footer.fontGrade" type="range" min="0" max="48" />
    </label>
  </div>
</template>


<script>
export default {};
</script>