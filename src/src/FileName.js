export default class FileName {
    // URLからファイル名のみ返す
    static getFileName(url) { return url.split('/').slice(-1)[0]; }
    // URLからファイル名のうち拡張子を省いた部分のみ返す
    static getBaseName(url) {
        const name = FileName.getFileName(url);
        return (name.lastIndexOf('.') != -1) ? name.substring(0, name.lastIndexOf('.')) : name;
    }
}
