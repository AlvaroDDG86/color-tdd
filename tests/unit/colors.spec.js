import { rgb, hex, hsl } from '@/utils/colors'

const currentColor = 'AABBCC'

describe('color', () => {
    test('return RGB code color', () => {
        expect(rgb(currentColor)).toBe('170, 187, 204')
    })
    test('return HEX code color', () => {
        expect(hex(currentColor)).toBe('#AABBCC')
    })
    test('return HSL code color', () => {
        expect(hsl(currentColor)).toBe('210°, 25%, 73%')
    })
})