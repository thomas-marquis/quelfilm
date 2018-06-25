export default class Image {
    private _imageUri: String;
    private _accessibilityText: String;


    get imageUri(): String {
        return this._imageUri;
    }

    set imageUri(value: String) {
        this._imageUri = value;
    }

    get accessibilityText(): String {
        return this._accessibilityText;
    }

    set accessibilityText(value: String) {
        this._accessibilityText = value;
    }
}