export default class Style { // {{...}}: query, back, fore, selectedBack, selectedFore, shadow
    #regexps = []
    #id = 'style-auto-color'
    #query = '.auto-color'
    #template = '{{query}} { background-color: {{back}}; }';
    constructor(id='style-auto-color', query='.auto-color', template='{{query}} { background-color: {{back}}; }') {
        this.#id = id;
        this.#query = query;
        this.#template = template;
    }
    replace(colors) {
        const style = document.querySelector(`#${this.#id}`) || this.#createStyle();
        console.log('style:', style);
        style.textContent = this.#replaceTemplate(colors);
        return this.#id;
    }
    #createStyle(colors) {
        const style = document.createElement('style');
        style.id = this.#id;
        document.head.appendChild(style);
        return style;
    }
    #replaceTemplate(colors) {
        this.#regexps = [];
        this.#regexps.push({regexp: new RegExp('{{[\s]*query[\s]*}}', 'g'), replace: this.#query});
        for (let key of ['back', 'fore', 'selectedBack', 'selectedFore', 'shadow']) {
            this.#regexps.push({regexp: new RegExp(`{{[\s]*${key}[\s]*}}`, 'g'), replace: colors[`${key}`]});
        }
        console.log(this.#regexps);
        let css = this.#template;
        for (let regexp of this.#regexps) {
            css = css.replace(regexp.regexp, regexp.replace);
        }
        console.log(colors);
        console.log(css);
        return css;
    }
}
