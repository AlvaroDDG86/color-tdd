<template>
  <div class="color-picker">
    <div class="color-picker__swatch-content">
      <div
        :key="`swatch-${index}`"
        v-for="(swatch, index) in swatches"
        class="color-picker__swatch"
        :style="{ background: `#${swatch}` }"
        :class="{ 'color-picker__swatch--active': index === swatchActive }"
        @click="swatchActive = index"
      />
    </div>
    <div class="color-picker__btn-content">
      <button
        :key="`btn-${index}`"
        v-for="(btn, index) in types"
        class="color-picker__btn"
        :id="`btn-${btn}`"
        :class="{ 'color-picker__btn--active': index === buttonActive }"
        @click="buttonActive = index"
      >{{btn}}</button>
    </div>
    <div class="color-picker__display-content">
      <div class="color-picker__display">
        {{ activeColorCode }}
      </div>
    </div>
  </div>
</template>

<script>
import { rgb, hex, hsl } from "@/utils/colors";

export default {
  data() {
    return {
      types: ["hex", "rgb", "hsl"],
      swatchActive: 0,
      buttonActive: 0,
    };
  },
  props: {
    swatches: {
      type: Array,
      default: [],
    },
  },
  computed: {
    activeColorCode() {
      const activeColor = this.swatches[this.swatchActive];
      const activeType = this.types[this.buttonActive];
      switch (activeType) {
        case "rgb":
          return rgb(activeColor);
        case "hex":
          return hex(activeColor);
        case "hsl":
          return hsl(activeColor);
      }
    },
  },
};
</script>

<style>
.color-picker {
  width: 100vh;
  box-shadow: 5px 7px 13px grey, 1px 0px 7px grey;
  background-color: lightgray;
  padding: 1em;
  border-radius: 15px;
}
.color-picker__swatch-content {
  display: flex;
  justify-content: center;
  align-items: center;
}
.color-picker__swatch {
  position: relative;
  width: 80px;
  height: 120px;
  margin: 5px;
  border: solid 2px gray;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.5s;
  box-shadow: 3px 3px 5px grey;
}
.color-picker__swatch--active {
  border-color: rgb(255, 3, 120);
  box-shadow: none;
}
.color-picker__btn-content {
  display: flex;
  justify-content: center;
  align-items: center;
}
.color-picker__btn {
  padding: 10px 20px;
  outline: none;
  color: white;
  background-color: darkblue;
  border: none;
  margin: 5px;
  border-radius: 5px;
  box-shadow: 3px 3px 5px grey;
  text-transform: uppercase;
  border: solid 2px transparent;
  cursor: pointer;
  transition: 0.5s;
}
.color-picker__btn--active {
  border-color:rgb(255, 3, 120);
  box-shadow: none;
}
.color-picker__display-content {
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.color-picker__display {
  width: fit-content;
  text-align: center;
  font-size: 2em;
  padding: 5px 10px;
  border-radius: 10px;
  background-color: white;
}
</style>