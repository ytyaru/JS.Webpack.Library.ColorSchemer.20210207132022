export default class Loader {
    static async load(path) {
        const response = await fetch(path);
        if (response.status !== 200) { throw new Error(`ファイル取得エラー: ${response.status} Loader.load(${path})`); }
        return await response.text();
    }
}
