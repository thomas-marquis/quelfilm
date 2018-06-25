import Suggestion from "./Suggestion";

export default class Suggestions {
    private _suggestions: Array<Suggestion>;

    get suggestions(): Array<Suggestion> {
        return this._suggestions;
    }

    set suggestions(value: Array<Suggestion>) {
        this._suggestions = value;
    }
}