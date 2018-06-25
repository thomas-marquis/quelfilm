export default class QuickReplies {
    private _title: String;
    private _quickReplies: Array<String>;

    get title(): String {
        return this._title;
    }

    set title(value: String) {
        this._title = value;
    }

    get quickReplies(): Array<String> {
        return this._quickReplies;
    }

    set quickReplies(value: Array<String>) {
        this._quickReplies = value;
    }
}