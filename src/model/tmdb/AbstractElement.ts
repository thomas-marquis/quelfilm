export default class AbstractElement {
    private _id: Number;

    get id(): Number {
        return this._id;
    }

    set id(value: Number) {
        this._id = value;
    }
}