export default class SimpleResponse {
    private _textToSpeech: String;
    private _ssml: String;
    private _displayText: String;

    get textToSpeech(): String {
        return this._textToSpeech;
    }

    set textToSpeech(value: String) {
        this._textToSpeech = value;
    }

    get ssml(): String {
        return this._ssml;
    }

    set ssml(value: String) {
        this._ssml = value;
    }

    get displayText(): String {
        return this._displayText;
    }

    set displayText(value: String) {
        this._displayText = value;
    }
}