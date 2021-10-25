<template>
  <div id="app">
    <h1>Color PICKER</h1>
    <ColorPicker
      :swatches="['e3342f', '3490dc', 'f6993f', '38c172', 'afa']"
    />
  </div>
</template>

<script>
import ColorPicker from '@/components/ColorPicker.vue'
export default {
  name: 'App',
  components: {
    ColorPicker
  }
}
</script>

<style>
#app {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
