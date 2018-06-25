export default class Parameter {
    private _name: String;
    private _displayName: String;
    private _value: String;
    private _entityTypeDisplayName: String;
    private _isList: Boolean;


    get name(): String {
        return this._name;
    }

    set name(value: String) {
        this._name = value;
    }

    get displayName(): String {
        return this._displayName;
    }

    set displayName(value: String) {
        this._displayName = value;
    }

    get value(): String {
        return this._value;
    }

    set value(value: String) {
        this._value = value;
    }

    get entityTypeDisplayName(): String {
        return this._entityTypeDisplayName;
    }

    set entityTypeDisplayName(value: String) {
        this._entityTypeDisplayName = value;
    }

    get isList(): Boolean {
        return this._isList;
    }

    set isList(value: Boolean) {
        this._isList = value;
    }
}