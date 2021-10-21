<template>
  <div>
    <div class="swatch__content">
      <div
        :key="`swatch-${index}`"
        v-for="(swatch, index) in swatches"
        class="swatch"
        :style="{ background: `#${swatch}` }"
        :class="{ active : index === swatchActive }"
        @click="swatchActive = index"
      />
    </div>
    <div class="btn__content">
      <button
        :key="`btn-${index}`"
        v-for="(btn, index) in types"
        class="btn"
        :id="`btn-${btn}`"
        :class="{ 'btn--active' : index === buttonActive}"
        @click="buttonActive = index">
      </button>
    </div>
    <div class="display__content">
      <div class="display">
        {{activeColorCode}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      types: ['hex', 'rgb', 'hsl'],
      swatchActive: 0,
      buttonActive: 0
    }
  },
  props: {
    swatches: {
      type: Array,
      default: []
    }
  },
  computed:{
    activeColorCode() {
      return `#${this.swatches[this.swatchActive]}`
    }
  }
}
</script>

<style>
</style>