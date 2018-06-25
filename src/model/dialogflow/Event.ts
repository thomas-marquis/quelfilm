export default class Event {
    private _name: String;
    private _parameters: any;
    private _languageCode: String;


    get name(): String {
        return this._name;
    }

    set name(value: String) {
        this._name = value;
    }

    get parameters(): any {
        return this._parameters;
    }

    set parameters(value: any) {
        this._parameters = value;
    }

    get languageCode(): String {
        return this._languageCode;
    }

    set languageCode(value: String) {
        this._languageCode = value;
    }
}