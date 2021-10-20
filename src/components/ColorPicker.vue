<template>
  <div>
    <div
      :key="index"
      v-for="(swatch, index) in swatches"
      class="swatch"
      :style="{ background: `#${swatch}` }"
      :class="{ active : index === swatchActive }"
      @click="swatchActive = index"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      swatchActive: 0
    }
  },
  props: {
    swatches: {
      type: Array,
      default: []
    }
  }
}
</script>

<style>
</style>