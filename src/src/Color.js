import chroma from 'chroma-js';
export default class Color {
    static getColors(back) {
        const fore = Color.#getForeColor(back);
        return {
            'back': back,
            'fore': fore,
            'selectedBack': fore,
            'selectedFore': back,
            'shadow': chroma.mix(back, fore, 0.5, 'rgb').hex(),
        }
    }
    static #getForeColor(back) {
        const fore = (chroma.contrast(back, 'white') <= chroma.contrast(back, 'black')) ? 'black' : 'white';
        return chroma(fore).hex();
    }
}
