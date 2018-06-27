import Genre from "./Genre";
import AbstractElement from "./AbstractElement";
import {SortCriteria} from "./SortCriteria";

export default class SearchCriteria {
    private _year: Number;
    private _withGenres: String;
    private _withoutGenres: String;
    private _withPeople: String;
    private _sortBy: SortCriteria;
    private _withOriginalLanguage: String;

    get year(): Number {
        return this._year;
    }

    set year(value: Number) {
        this._year = value;
    }

    get withGenres(): String {
        return this._withGenres;
    }

    set withGenres(value: String) {
        this._withGenres = value;
    }

    get withoutGenres(): String {
        return this._withoutGenres;
    }

    set withoutGenres(value: String) {
        this._withoutGenres = value;
    }

    get withPeople(): String {
        return this._withPeople;
    }

    set withPeople(value: String) {
        this._withPeople = value;
    }

    get sortBy(): SortCriteria {
        return this._sortBy;
    }

    set sortBy(value: SortCriteria) {
        this._sortBy = value;
    }

    get withOriginalLanguage(): String {
        return this._withOriginalLanguage;
    }

    set withOriginalLanguage(value: String) {
        this._withOriginalLanguage = value;
    }
}