import Image from "./Image";
import SelectItemInfo from "./SelectItemInfo";

export default class Item {
    private _info: SelectItemInfo;
    private _title: String;
    private _description: String;
    private _image: Image;

    get info(): SelectItemInfo {
        return this._info;
    }

    set info(value: SelectItemInfo) {
        this._info = value;
    }

    get title(): String {
        return this._title;
    }

    set title(value: String) {
        this._title = value;
    }

    get description(): String {
        return this._description;
    }

    set description(value: String) {
        this._description = value;
    }

    get image(): Image {
        return this._image;
    }

    set image(value: Image) {
        this._image = value;
    }
}