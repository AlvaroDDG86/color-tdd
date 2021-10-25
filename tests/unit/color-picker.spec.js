import { shallowMount } from '@vue/test-utils'
import ColorPicker from '@/components/ColorPicker.vue'
import convert from 'color-convert'

let wrapper = null // The Component
const types =['hex', 'rgb', 'hsl']
const propsData = {
  swatches: ['e3342f', '3490dc', 'f6993f', '38c172', 'fff']
} // The props

beforeEach(() => (
  wrapper = shallowMount(ColorPicker, { 
    data(){
      return {
        types
      }
    },
    propsData 
  })
))
afterEach(() => wrapper.destroy())

describe('ColorPicker.vue', () => {
  describe('Swatches tests', () => {
    test('Display all colors', () => {
      const swatches = wrapper.findAll('.color-picker__swatch') // Searching all elements with swatch class
      propsData.swatches.forEach((swatch, index) => {
        expect(swatches.at(index).attributes().style).toBe(
          `background: rgb(${convert.hex.rgb(swatch).join(', ')});`
        )
      })
    })
  
    test('First element by default is active', () => {
      const swatch = wrapper.find('.color-picker__swatch')
      expect(swatch.classes()).toContain('color-picker__swatch')
    })
  
    test('Switch active swatch onClick', async () => {
      const swatch = wrapper.findAll('.color-picker__swatch').at(2)
      await swatch.trigger('click')
      expect(swatch.classes()).toContain('color-picker__swatch')
    })
  })

  describe('Button tests', () => {
    test('Display a button for each three modes', () => {
      const buttons = wrapper.findAll('.color-picker__btn')
      expect(buttons.length).toBe(3)
      buttons.wrappers.forEach((button, index) => {
        expect(button.element.id).toBe(`btn-${types[index]}`)
      })
    })
  
    test('First button by default is active', () => {
      const button = wrapper.find('.color-picker__btn')
      expect(button.classes()).toContain('color-picker__btn--active')
    })
  
    test('Switch active button type onClick', async () => {
      const button = wrapper.findAll('.color-picker__btn').at(2)
      await button.trigger('click')
      expect(button.classes()).toContain('color-picker__btn--active')
    })
  })
  
  describe('Display tests', () => {
    test('Display by default the first color code', () => {
      const display = wrapper.find('.color-picker__display')
      expect(display.text()).toBe(`#${propsData.swatches[0]}`)
    })

    test('Display color the swatch color selected', async () => {
      const swatch = wrapper.findAll('.color-picker__swatch').at(2)
      await swatch.trigger('click')
      const display = wrapper.find('.color-picker__display')
      expect(display.text()).toBe(`#${propsData.swatches[2]}`)
    })

    test('Display the right code when changing mode', async () => {
      await wrapper.find('#btn-hsl').trigger('click')
      const display = wrapper.find('.color-picker__display')
      expect(display.text()).toBe(`2°, 76%, 54%`)
    })
  })
})
