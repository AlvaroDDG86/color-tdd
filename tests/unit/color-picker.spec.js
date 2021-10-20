import { shallowMount } from '@vue/test-utils'
import ColorPicker from '@/components/ColorPicker.vue'
import convert from 'color-convert'

const propsData = {
  swatches: ['e3342f', '3490dc', 'f6993f', '38c172', 'fff']
}


describe('ColorPicker.vue', () => {

  beforeEach(() => (wrapper = shallowMount(ColorPicker, { propsData })))
  afterEach(() => wrapper.destroy())

  describe('should mount', () => {
    
  })
})
