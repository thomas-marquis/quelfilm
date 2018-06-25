export default class OpenUriAction {
    private _uri: String;

    get uri(): String {
        return this._uri;
    }

    set uri(value: String) {
        this._uri = value;
    }
}