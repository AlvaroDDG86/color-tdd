<template>
  <div class="color-picker">
    <div class="color-picker__swatch-content">
      <div
        :key="`swatch-${index}`"
        v-for="(swatch, index) in swatches"
        class="swatch"
        :style="{ background: `#${swatch}` }"
        :class="{ active : index === swatchActive }"
        @click="swatchActive = index"
      />
    </div>
    <div class="color-picker__btn-content">
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
import { rgb, hex, hsl } from '@/utils/colors'

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
      const activeColor = this.swatches[this.swatchActive]
      const activeType = this.types[this.buttonActive]
      switch(activeType){
        case 'rgb':
          return rgb(activeColor)
        case 'hex':
          return hex(activeColor)
        case 'hsl':
          return hsl(activeColor)
      }
    }
  }
}
</script>

<style>
</style>