import Genre from "./Genre";
import Credit from "./Credit";

export default class Movie {
  private _id: Number;
  private _title: String;
  private _genres: Array<Genre>;
  private _overview: String;
  private _posterPath: String;
  private _originalLanguage: String;
  private _voteAverage: Number;
  private _voteCount: Number;
  private _popularity: Number;
  private _releaseDate: Date;
  private _credit: Credit;

  get id(): Number {
      return this._id;
  }

  set id(value: Number) {
      this._id = value;
  }

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

  get overview(): String {
      return this._overview;
  }

  set overview(value: String) {
      this._overview = value;
  }

  get posterPath(): String {
      return this._posterPath;
  }

  set posterPath(value: String) {
      this._posterPath = value;
  }

  get originalLanguage(): String {
      return this._originalLanguage;
  }

  set originalLanguage(value: String) {
      this._originalLanguage = value;
  }

  get voteAverage(): Number {
      return this._voteAverage;
  }

  set voteAverage(value: Number) {
      this._voteAverage = value;
  }

  get voteCount(): Number {
      return this._voteCount;
  }

  set voteCount(value: Number) {
      this._voteCount = value;
  }

  get popularity(): Number {
      return this._popularity;
  }

  set popularity(value: Number) {
      this._popularity = value;
  }

  get releaseDate(): Date {
      return this._releaseDate;
  }

  set releaseDate(value: Date) {
      this._releaseDate = value;
  }

  get credit(): Credit {
      return this._credit;
  }

  set credit(value: Credit) {
      this._credit = value;
  }
}
