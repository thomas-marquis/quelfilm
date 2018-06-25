import Button from "./Button";

export default class Card {
    private _title: String;
    private _subtitle: String;
    private _imageUri: String;
    private _buttons: Array<Button>;

    get title(): String {
        return this._title;
    }

    set title(value: String) {
        this._title = value;
    }

    get subtitle(): String {
        return this._subtitle;
    }

    set subtitle(value: String) {
        this._subtitle = value;
    }

    get imageUri(): String {
        return this._imageUri;
    }

    set imageUri(value: String) {
        this._imageUri = value;
    }

    get buttons(): Array<Button> {
        return this._buttons;
    }

    set buttons(value: Array<Button>) {
        this._buttons = value;
    }
}