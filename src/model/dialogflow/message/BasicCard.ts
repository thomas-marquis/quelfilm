import Image from "./Image";
import Button from "./Button";

export default class BasicCard {
    private _title: String;
    private _subtitle: String;
    private _formattedText: String;
    private _image: Image;
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

    get formattedText(): String {
        return this._formattedText;
    }

    set formattedText(value: String) {
        this._formattedText = value;
    }

    get image(): Image {
        return this._image;
    }

    set image(value: Image) {
        this._image = value;
    }

    get buttons(): Array<Button> {
        return this._buttons;
    }

    set buttons(value: Array<Button>) {
        this._buttons = value;
    }
}