export default class Text {
    private _text: Array<String>;


    get text(): Array<String> {
        return this._text;
    }

    set text(value: Array<String>) {
        this._text = value;
    }
}