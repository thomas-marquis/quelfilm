export default class SelectItemInfo {
    private _key: String;
    private _synonyms: Array<String>;

    get key(): String {
        return this._key;
    }

    set key(value: String) {
        this._key = value;
    }

    get synonyms(): Array<String> {
        return this._synonyms;
    }

    set synonyms(value: Array<String>) {
        this._synonyms = value;
    }
}