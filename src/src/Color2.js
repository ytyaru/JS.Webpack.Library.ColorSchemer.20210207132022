import chroma from 'chroma-js';
export default class Color2 {
    static getColors(back) {
        const fore = Color2.#getForeColor(back);
        return {
            'back': back,
            'fore': fore,
            'selectedBack': fore,
            'selectedFore': back,
            'shadow': chroma.mix(back, fore, 0.5, 'rgb').hex(),
        }
    }
    static #getForeColor(back) {
        let fore = chroma(back).lch(); // [明度、彩度、色相] [0..100, 0..100, 0..360]
        return chroma(Math.abs(100 - fore[0]), Math.abs(100 - fore[1]), Math.abs(360 - fore[2]), 'lch').hex();
    }
}
