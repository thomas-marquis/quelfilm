export default class Suggestion {
    private _title: String;

    get title(): String {
        return this._title;
    }

    set title(value: String) {
        this._title = value;
    }
}