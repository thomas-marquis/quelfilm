import Parameter from "./Parameter";

export default class Intent {
    private _name: String;
    private _displayName: String;
    private _parameters: Array<Parameter>;


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

    get parameters(): Array<Parameter> {
        return this._parameters;
    }

    set parameters(value: Array<Parameter>) {
        this._parameters = value;
    }
}