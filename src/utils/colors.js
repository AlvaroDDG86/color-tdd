import convert from 'color-convert'

export const rgb = currentColor => convert.hex.rgb(currentColor).join(', ')

export const hex = currentColor => `#${currentColor}`

export const hsl = currentColor => {
    const hslColor = convert.hex.hsl(currentColor)
    return `${hslColor[0]}°, ${hslColor[1]}%, ${hslColor[2]}%`
}