import Genre from "./Genre";
import AbstractElement from "./AbstractElement";

export default class MovieDetails extends AbstractElement {
    private _title: String;
    private _genres: Array<Genre>;
    private _vote_average: Number;
    private _vote_count: Number;
    private _poster_path: String;

    get title(): String {
        return this._title;
    }

    set title(value: String) {
        this._title = value;
    }

    get genres(): Array<Genre> {
        return this._genres;
    }

    set genres(value: Array<Genre>) {
        this._genres = value;
    }

    get vote_average(): Number {
        return this._vote_average;
    }

    set vote_average(value: Number) {
        this._vote_average = value;
    }

    get vote_count(): Number {
        return this._vote_count;
    }

    set vote_count(value: Number) {
        this._vote_count = value;
    }

    get poster_path(): String {
        return this._poster_path;
    }

    set poster_path(value: String) {
        this._poster_path = value;
    }
}