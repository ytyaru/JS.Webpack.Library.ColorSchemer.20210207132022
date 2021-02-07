import FileName from './FileName.js';
import Loader from './Loader.js';
import Color from './Color.js';
import Style from './Style.js';
export default class ColorSchemer {
    #files
    #css
    constructor() {
        this.#files = [];
        this.#css = [];
    }
    async schemeFromFile(backColor='#FFFFFF', url='./auto-color.css') {
        await this.#createCss(url);
        return this.scheme(backColor);
    }
    async #createCss(url) {
        const files = this.#files.filter(obj=>obj.url === url);
        if (0 < files.length) { return; }
        const template = await Loader.load(url);
        const id = this.#createFiles(url);
        const query = `.${id}`;
        this.#css.push(new Style(id, query, template));
    }
    #createFiles(url) { // id重複ならサフィックス付与する
        const preId = FileName.getBaseName(url);  // 仮ID＝ファイル名（拡張子省く）
        const sameIdFiles = this.#files.filter(obj=>obj.url !== url && obj.preId === preId);
        const id = (0 == sameIdFiles.length) ? preId : preId + '-' + sameIdFiles.length;
        this.#files.push({url:url, preId:preId, id:id});
        return id;
    }
    scheme(backColor='#FFFFFF') {
        const result = [];
        const colors = Color.getColors(backColor);
        for (let css of this.#css) {
            result.push({id: css.replace(colors), colors: colors});
        }
        return result;
    }
}
