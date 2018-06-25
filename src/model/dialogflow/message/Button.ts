import OpenUriAction from "./OpenUriAction";

export default class Button {
    private _title: String;
    private _openUriAction: OpenUriAction;

    get title(): String {
        return this._title;
    }

    set title(value: String) {
        this._title = value;
    }

    get openUriAction(): OpenUriAction {
        return this._openUriAction;
    }

    set openUriAction(value: OpenUriAction) {
        this._openUriAction = value;
    }
}